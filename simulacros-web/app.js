/* Los simulacros de Vázquez · lógica de la aplicación (sin dependencias) */
(function () {
  "use strict";

  // ---------- Datos ----------
  const TEMAS = window.TEMAS;
  const ORDEN_TEMAS = Object.keys(TEMAS).filter((k) => k !== "PRO");
  // Reparte la respuesta correcta entre A, B, C y D de forma fija (siempre igual para cada pregunta).
  // Las preguntas con opciones numéricas conservan su orden.
  function equilibrar(q) {
    if (q.o.every((t) => /^\d/.test(t))) return;
    let h = 0; for (const c of q.id) h = (h * 31 + c.charCodeAt(0)) >>> 0;
    const destino = h % 4;
    if (destino === q.a) return;
    const o = q.o.slice(); [o[q.a], o[destino]] = [o[destino], o[q.a]];
    q.o = o; q.a = destino;
  }
  window.BANCO.teoria.forEach(equilibrar);
  window.BANCO.supuestos.forEach((s) => s.preguntas.forEach(equilibrar));

  const PREG = new Map();
  const SUP = new Map();
  window.BANCO.teoria.forEach((q) => PREG.set(q.id, Object.assign({ tipo: "T" }, q)));
  window.BANCO.supuestos.forEach((s) => {
    SUP.set(s.id, s);
    s.preguntas.forEach((q) => PREG.set(q.id, Object.assign({ tipo: "P", sup: s.id }, q)));
  });
  const TEORIA = window.BANCO.teoria;
  const LETRAS = ["A", "B", "C", "D"];
  const MINUTOS = 180;

  // ---------- Estado persistente (en este navegador) ----------
  const CLAVE = "simagro.v1";
  const BASE = { stats: {}, hist: [], run: null, pen: true };
  let E = cargar();
  function cargar() {
    try { return Object.assign({}, BASE, JSON.parse(localStorage.getItem(CLAVE) || "{}")); }
    catch (e) { return JSON.parse(JSON.stringify(BASE)); }
  }
  function guardar() { try { localStorage.setItem(CLAVE, JSON.stringify(E)); } catch (e) { /* almacenamiento no disponible */ } }

  // ---------- Utilidades ----------
  const $ = (s, el) => (el || document).querySelector(s);
  const app = $("#app");
  const esc = (t) => String(t).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const barajar = (arr) => { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const fmt = (n, d = 1) => n.toLocaleString("es-ES", { minimumFractionDigits: d, maximumFractionDigits: d });
  const fechaCorta = (ts) => new Date(ts).toLocaleDateString("es-ES", { day: "numeric", month: "short", year: "numeric" });
  const temaDe = (q) => TEMAS[q.t] || { n: "", nombre: "" };
  function porTema(lista) { const m = {}; lista.forEach((q) => (m[q.t] = m[q.t] || []).push(q)); return m; }

  // ---------- Construcción de simulacros ----------
  const SIMULACROS = [
    { id: "s1", nombre: "Simulacro 1", desc: "Bloque A de teoría y supuesto de la comarca de la Vega del Genil." },
    { id: "s2", nombre: "Simulacro 2", desc: "Bloque B de teoría y supuesto de ayuda a una joven agricultora." },
    { id: "s3", nombre: "Simulacro 3", desc: "Teoría mezclada de ambos bloques y supuesto de ganadería y PAC." },
    { id: "rnd", nombre: "Simulacro aleatorio", desc: "Cada vez distinto: 75 de teoría al azar respetando el peso de cada tema y un supuesto al azar." }
  ];
  function teoriaOrdenada(lista) {
    const m = porTema(lista);
    return ORDEN_TEMAS.flatMap((t) => (m[t] || []).sort((a, b) => a.id.localeCompare(b.id)));
  }
  function idsSimulacro(id) {
    const A = TEORIA.filter((q) => q.bloque === "A");
    const B = TEORIA.filter((q) => q.bloque === "B");
    let teo, sup;
    if (id === "s1") { teo = teoriaOrdenada(A); sup = "S1"; }
    else if (id === "s2") { teo = teoriaOrdenada(B); sup = "S2"; }
    else if (id === "s3") {
      const mA = porTema(teoriaOrdenada(A)), mB = porTema(teoriaOrdenada(B));
      teo = ORDEN_TEMAS.flatMap((t) => (mA[t] || []).map((q, i) => (i % 2 === 0 ? q : (mB[t] || [])[i] || q)));
      sup = "S3";
    } else {
      const mA = porTema(A), mAll = porTema(TEORIA);
      teo = ORDEN_TEMAS.flatMap((t) => barajar(mAll[t] || []).slice(0, (mA[t] || []).length));
      sup = barajar([...SUP.keys()])[0];
    }
    return { ids: teo.map((q) => q.id).concat(SUP.get(sup).preguntas.map((q) => q.id)), sup };
  }

  // ---------- Estadísticas ----------
  function registrar(id, acierto) {
    const s = E.stats[id] || { v: 0, ok: 0, ko: 0, last: "" };
    s.v++; if (acierto) s.ok++; else s.ko++; s.last = acierto ? "ok" : "ko";
    E.stats[id] = s;
  }
  function resumenTema(t) {
    let ok = 0, ko = 0, vistas = 0, total = 0;
    PREG.forEach((q) => { if (q.t !== t) return; total++; const s = E.stats[q.id]; if (s) { vistas++; ok += s.ok; ko += s.ko; } });
    return { ok, ko, vistas, total, pct: ok + ko ? ok / (ok + ko) : null };
  }
  const fallosPendientes = () => [...PREG.values()].filter((q) => (E.stats[q.id] || {}).last === "ko");

  // ---------- Navegación ----------
  let timer = null;
  function pararReloj() { if (timer) { clearInterval(timer); timer = null; } }
  function ir(vista) { if (location.hash.slice(1) !== vista) location.hash = vista; else render(); }
  document.addEventListener("keydown", teclas);

  function cabecera(activa) {
    const enlace = (h, t) => `<a href="#${h}" ${activa === h ? 'aria-current="page"' : ""}>${t}</a>`;
    return `<header class="top"><div class="top-in">
      <a class="marca" href="#inicio">Los simulacros de Vázquez <small>A1.2002</small></a>
      <nav class="nav" aria-label="Secciones">${enlace("inicio", "Inicio")}${enlace("practica", "Práctica por tema")}${enlace("tarjetas", "Tarjetas")}${enlace("guia", "Guía del examen")}</nav>
    </div></header>`;
  }

  function render() {
    pararReloj();
    const v = location.hash.slice(1) || "inicio";
    $("#pie").hidden = v === "examen";
    if (v === "examen" && E.run && !E.run.fin) return vistaExamen();
    if (v === "resultados") return vistaResultados();
    if (v === "practica") return vistaPractica();
    if (v === "tarjetas") return vistaTarjetas();
    if (v === "guia") return vistaGuia();
    return vistaInicio();
  }

  // ---------- Inicio ----------
  function vistaInicio() {
    const curso = E.run && !E.run.fin;
    const fallos = fallosPendientes().length;
    const mejor = (id) => {
      const h = E.hist.filter((x) => x.simId === id);
      if (!h.length) return `<span class="muted">Sin hacer todavía</span>`;
      const m = Math.max(...h.map((x) => x.global));
      return `Mejor nota: <b class="num">${fmt(m)}</b> / 10 · ${h.length} ${h.length === 1 ? "intento" : "intentos"}`;
    };
    let vistasTot = 0; PREG.forEach((q) => { if (E.stats[q.id]) vistasTot++; });

    app.innerHTML = cabecera("inicio") + `<main class="wrap">
      <section class="cabecera">
        <span class="eyebrow">Cuerpo Superior Facultativo · Ingeniería Agronómica · Junta de Andalucía</span>
        <h1>Los simulacros de Vázquez</h1>
        <p>Con el mismo formato que el ejercicio de 2022-2023: 75 preguntas de teoría y un supuesto práctico de 25 preguntas en 180 minutos. Al terminar verás la nota de cada parte, tus fallos tema a tema y la explicación de cada respuesta.</p>
        <p style="font-size:.9rem">Tu progreso se guarda en este navegador. Usa siempre el mismo ordenador y el mismo navegador, y no lo abras en una ventana privada.</p>
        <label class="ajustes" for="pen"><input type="checkbox" id="pen" ${E.pen ? "checked" : ""}> Mostrar también la nota con penalización (cada fallo resta 1/3)</label>
      </section>
      ${curso ? `<div class="aviso-panel" style="border-color:var(--flag);background:var(--flag-soft)"><b>Tienes un ${esc(E.run.nombre.toLowerCase())} a medias.</b><div class="fila"><button class="btn primario" data-acc="continuar">Continuar donde lo dejé</button><button class="btn" data-acc="descartar">Descartarlo</button></div></div>` : ""}
      <section style="display:grid;gap:14px">
        <h2>Simulacros completos</h2>
        <div class="sims">${SIMULACROS.map((s) => `<article class="sim">
          <span class="eyebrow">100 preguntas · 180 min</span><h3>${s.nombre}</h3><p class="meta">${s.desc}</p>
          <p class="mejor">${mejor(s.id)}</p>
          <div><button class="btn primario" data-sim="${s.id}" ${curso ? "disabled" : ""}>Empezar</button></div></article>`).join("")}</div>
      </section>
      <section style="display:grid;gap:14px">
        <h2>Para el día a día</h2>
        <div class="herramientas">
          <div class="herr"><h3>Práctica por tema</h3><p>Elige uno o varios temas y comprueba cada respuesta al momento, con su explicación.</p><div><a class="btn" href="#practica">Practicar</a></div></div>
          <div class="herr"><h3>Repaso de fallos</h3><p>Las preguntas que fallaste la última vez que las viste. Desaparecen cuando las aciertas.</p><div><button class="btn" data-acc="fallos" ${fallos ? "" : "disabled"}>Repasar <span class="num">${fallos}</span> ${fallos === 1 ? "fallo" : "fallos"}</button></div></div>
          <div class="herr"><h3>Tarjetas de memoria</h3><p>Pregunta por delante, respuesta por detrás. Para fijar fechas, normas y cifras en ratos sueltos.</p><div><a class="btn" href="#tarjetas">Abrir tarjetas</a></div></div>
          <div class="herr"><h3>Guía del examen</h3><p>Cómo son las convocatorias anteriores, qué se repite y cómo repartir el tiempo y los meses que quedan.</p><div><a class="btn" href="#guia">Leer la guía</a></div></div>
        </div>
      </section>
      <section style="display:grid;gap:14px">
        <div class="fila" style="justify-content:space-between"><h2>Cómo vas por temas</h2><span class="muted num" style="font-size:.88rem">${vistasTot} de ${PREG.size} preguntas vistas</span></div>
        <div class="temas">${Object.keys(TEMAS).map((t) => {
          const r = resumenTema(t); const p = r.pct;
          const cls = p === null ? "" : p < 0.5 ? "bajo" : p < 0.7 ? "medio" : "";
          return `<div class="tema-fila"><span class="nombre"><span class="muted num">${esc(TEMAS[t].n)}</span> · ${esc(TEMAS[t].nombre)}</span>
            <div class="barra" title="${r.vistas} de ${r.total} vistas"><i class="${cls}" style="width:${p === null ? 0 : Math.round(p * 100)}%"></i></div>
            <span class="pct num">${p === null ? '<span class="muted">—</span>' : Math.round(p * 100) + "%"}</span></div>`;
        }).join("")}</div>
      </section>
      <section style="display:grid;gap:14px">
        <h2>Historial</h2>
        ${E.hist.length ? `<div class="tabla"><table><thead><tr><th>Fecha</th><th>Prueba</th><th class="num">Teoría</th><th class="num">Práctico</th><th class="num">Nota</th><th></th></tr></thead><tbody>
          ${E.hist.slice().reverse().slice(0, 15).map((h) => `<tr><td>${fechaCorta(h.ts)}</td><td>${esc(h.nombre)}</td>
            <td class="num">${h.teo.n ? `${h.teo.ok}/${h.teo.n}` : "—"}</td><td class="num">${h.pra.n ? `${h.pra.ok}/${h.pra.n}` : "—"}</td>
            <td class="num">${fmt(h.global)}</td><td><button class="btn mini" data-ver="${h.ts}">Revisar</button></td></tr>`).join("")}
        </tbody></table></div>` : `<p class="vacio">Aún no has terminado ningún simulacro ni práctica. Aquí aparecerán tus notas para ver cómo evolucionas.</p>`}
        ${E.hist.length || Object.keys(E.stats).length ? `<div><button class="btn mini peligro" data-acc="borrar">Borrar todo mi progreso</button></div><div id="confirma-borrar"></div>` : ""}
      </section>
    </main>`;

    $("#pen").addEventListener("change", (e) => { E.pen = e.target.checked; guardar(); });
    app.querySelectorAll("[data-sim]").forEach((b) => b.addEventListener("click", () => empezarSimulacro(b.dataset.sim)));
    app.querySelectorAll("[data-ver]").forEach((b) => b.addEventListener("click", () => { E.ver = Number(b.dataset.ver); guardar(); ir("resultados"); }));
    app.querySelectorAll("[data-acc]").forEach((b) => b.addEventListener("click", () => {
      const a = b.dataset.acc;
      if (a === "continuar") ir("examen");
      if (a === "descartar") { E.run = null; guardar(); render(); }
      if (a === "fallos") empezarPractica(barajar(fallosPendientes()).map((q) => q.id), "Repaso de fallos");
      if (a === "borrar") {
        $("#confirma-borrar").innerHTML = `<div class="aviso-panel"><b>Se borrarán tu historial y tus estadísticas de este navegador. No se puede deshacer.</b><div class="fila"><button class="btn peligro" id="si-borrar">Borrar</button><button class="btn" id="no-borrar">Cancelar</button></div></div>`;
        $("#si-borrar").onclick = () => { E = JSON.parse(JSON.stringify(BASE)); guardar(); render(); };
        $("#no-borrar").onclick = () => { $("#confirma-borrar").innerHTML = ""; };
      }
    }));
  }

  // ---------- Ejecución (examen y práctica comparten estructura) ----------
  function empezarSimulacro(simId) {
    const s = SIMULACROS.find((x) => x.id === simId);
    const { ids } = idsSimulacro(simId);
    E.run = { modo: "examen", simId, nombre: s.nombre, ids, resp: {}, dudas: {}, i: 0, restante: MINUTOS * 60000, pausado: false, ts: Date.now() };
    guardar(); ir("examen");
  }
  function empezarPractica(ids, nombre) {
    if (!ids.length) return;
    E.run = { modo: "practica", simId: "practica", nombre, ids, resp: {}, dudas: {}, i: 0, ts: Date.now() };
    guardar(); ir("examen");
  }

  function vistaExamen() {
    const R = E.run;
    const examen = R.modo === "examen";
    const q = PREG.get(R.ids[R.i]);
    const nResp = R.ids.filter((id) => R.resp[id] !== undefined).length;
    const elegido = R.resp[q.id];
    const corregida = !examen && elegido !== undefined;
    const sup = q.sup ? SUP.get(q.sup) : null;
    const primeraDelSup = sup && R.ids.indexOf(sup.preguntas[0].id) === R.i;

    if (examen && R.pausado) {
      app.innerHTML = barraExamen(R, nResp) + `<main class="wrap"><div class="pausa"><h2>Simulacro en pausa</h2><p class="muted">El reloj está detenido. En el examen real no podrás parar, así que úsalo solo si de verdad lo necesitas.</p><button class="btn primario" id="reanudar">Reanudar</button></div></main>`;
      $("#reanudar").onclick = () => { R.pausado = false; guardar(); render(); };
      enlazarBarra(R);
      return;
    }

    const opciones = q.o.map((txt, k) => {
      let cls = "";
      if (corregida) { if (k === q.a) cls = "ok"; else if (k === elegido) cls = "ko"; }
      else if (k === elegido) cls = "sel";
      return `<button class="op ${cls}" data-op="${k}" ${corregida ? "disabled" : ""} aria-pressed="${k === elegido}"><span class="letra">${LETRAS[k]}</span><span>${esc(txt)}</span></button>`;
    }).join("");

    const tema = temaDe(q);
    const etiquetaTema = !examen ? ` · ${esc(tema.n)} · ${esc(tema.nombre)}` : "";

    app.innerHTML = barraExamen(R, nResp) + `<main class="wrap"><div class="examen">
      <div style="display:grid;gap:14px;min-width:0">
        ${sup ? `<details class="supuesto" ${primeraDelSup || R.supAbierto ? "open" : ""} id="sup"><summary>Supuesto práctico: ${esc(sup.titulo)}</summary><div class="cuerpo">${sup.intro}</div></details>` : ""}
        <article class="pregunta">
          <span class="eyebrow">Pregunta <span class="num">${R.i + 1}</span> de <span class="num">${R.ids.length}</span>${q.tipo === "P" ? " · Parte práctica" : " · Parte teórica"}${etiquetaTema}</span>
          <p class="enun">${esc(q.q)}</p>
          <div class="opciones">${opciones}</div>
          ${corregida ? `<div class="explica"><b>${elegido === q.a ? "Correcta" : "La respuesta correcta es la " + LETRAS[q.a]}</b>${esc(q.e)}</div>` : ""}
          <div class="pie-preg">
            <button class="btn" id="ant" ${R.i === 0 ? "disabled" : ""}>← Anterior</button>
            <div class="fila">
              ${examen ? `<button class="btn ${R.dudas[q.id] ? "dudosa-on" : ""}" id="duda">${R.dudas[q.id] ? "Marcada como dudosa" : "Marcar como dudosa"}</button>` : ""}
              ${examen && elegido !== undefined ? `<button class="btn" id="blanco">Dejar en blanco</button>` : ""}
            </div>
            ${R.i < R.ids.length - 1 ? `<button class="btn primario" id="sig">Siguiente →</button>` : `<button class="btn primario" id="entregar2">${examen ? "Entregar" : "Ver resultado"}</button>`}
          </div>
        </article>
        <div id="confirma"></div>
      </div>
      <aside class="lateral">
        <div class="bloque-res" style="gap:12px">
          <span class="eyebrow">Navegación</span>
          <div class="rejilla">${rejilla(R)}</div>
          ${examen ? `<div class="leyenda"><span class="l-resp">Respondida</span><span class="l-duda">Dudosa</span></div>` : ""}
        </div>
        <p class="muted" style="font-size:.82rem">Atajos: teclas A, B, C y D (o 1 a 4) para responder; flechas para moverte.</p>
      </aside>
    </div></main>`;

    app.querySelectorAll("[data-op]").forEach((b) => b.addEventListener("click", () => responder(Number(b.dataset.op))));
    app.querySelectorAll("[data-ir]").forEach((b) => b.addEventListener("click", () => mover(Number(b.dataset.ir))));
    const on = (id, fn) => { const el = $("#" + id); if (el) el.addEventListener("click", fn); };
    on("ant", () => mover(R.i - 1));
    on("sig", () => mover(R.i + 1));
    on("duda", () => { R.dudas[q.id] = !R.dudas[q.id]; guardar(); render(); });
    on("blanco", () => { delete R.resp[q.id]; guardar(); render(); });
    on("entregar2", pedirEntrega);
    const supEl = $("#sup"); if (supEl) supEl.addEventListener("toggle", () => { R.supAbierto = supEl.open; guardar(); });
    enlazarBarra(R);
    if (examen) arrancarReloj(R);
  }

  function barraExamen(R, nResp) {
    const examen = R.modo === "examen";
    return `<header class="examen-top"><div class="top-in">
      <span class="marca">${esc(R.nombre)}</span>
      <span class="muted num" style="font-size:.9rem">${nResp}/${R.ids.length} respondidas</span>
      <div class="fila" style="margin-left:auto">
        ${examen ? `<span class="reloj num" id="reloj">${reloj(R.restante)}</span><button class="btn mini" id="pausar">${R.pausado ? "Reanudar" : "Pausar"}</button>` : ""}
        <button class="btn mini" id="salir">Salir</button>
        <button class="btn mini primario" id="entregar">${examen ? "Entregar" : "Terminar"}</button>
      </div></div></header>`;
  }
  function enlazarBarra(R) {
    const p = $("#pausar"); if (p) p.onclick = () => { R.pausado = !R.pausado; guardar(); render(); };
    $("#salir").onclick = () => { guardar(); ir("inicio"); };
    $("#entregar").onclick = pedirEntrega;
  }
  function rejilla(R) {
    let html = "", ultimoTipo = null;
    R.ids.forEach((id, k) => {
      const q = PREG.get(id);
      if (q.tipo !== ultimoTipo && R.modo === "examen") { html += `<span class="sep">${q.tipo === "T" ? "Teoría" : "Supuesto práctico"}</span>`; ultimoTipo = q.tipo; }
      let cls = [];
      if (R.modo === "examen") { if (R.resp[id] !== undefined) cls.push("resp"); if (R.dudas[id]) cls.push("duda"); }
      else if (R.resp[id] !== undefined) cls.push(R.resp[id] === q.a ? "ok" : "ko");
      if (k === R.i) cls.push("actual");
      html += `<button class="${cls.join(" ")}" data-ir="${k}" aria-label="Pregunta ${k + 1}">${k + 1}</button>`;
    });
    return html;
  }
  function reloj(ms) {
    const s = Math.max(0, Math.round(ms / 1000));
    const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), ss = s % 60;
    return `${h}:${String(m).padStart(2, "0")}:${String(ss).padStart(2, "0")}`;
  }
  function arrancarReloj(R) {
    let ultimo = Date.now(), cont = 0;
    timer = setInterval(() => {
      if (R.pausado) return;
      const ahora = Date.now(); R.restante -= ahora - ultimo; ultimo = ahora;
      const el = $("#reloj");
      if (el) { el.textContent = reloj(R.restante); el.classList.toggle("aviso", R.restante < 10 * 60000); }
      if (++cont % 5 === 0) guardar();
      if (R.restante <= 0) { R.restante = 0; entregar(true); }
    }, 1000);
  }
  function responder(k) {
    const R = E.run, id = R.ids[R.i], q = PREG.get(id);
    if (R.modo !== "examen" && R.resp[id] !== undefined) return;
    R.resp[id] = k;
    if (R.modo !== "examen") registrar(id, k === q.a);
    guardar(); render();
  }
  function mover(i) {
    const R = E.run; if (i < 0 || i >= R.ids.length) return;
    R.i = i; guardar(); render(); window.scrollTo({ top: 0 });
  }
  function pedirEntrega() {
    const R = E.run;
    const sinResp = R.ids.filter((id) => R.resp[id] === undefined).length;
    const dudas = Object.values(R.dudas).filter(Boolean).length;
    const c = $("#confirma");
    if (!c) return entregar(false);
    c.innerHTML = `<div class="aviso-panel"><b>${R.modo === "examen" ? "¿Entregar el simulacro?" : "¿Terminar la práctica?"}</b>
      <span>${sinResp ? `Te quedan <b class="num">${sinResp}</b> preguntas sin responder.` : "Has respondido todas las preguntas."}${dudas ? ` Tienes <b class="num">${dudas}</b> marcadas como dudosas.` : ""}</span>
      <div class="fila"><button class="btn primario" id="si">${R.modo === "examen" ? "Entregar y corregir" : "Ver resultado"}</button><button class="btn" id="no">Seguir</button></div></div>`;
    $("#si").onclick = () => entregar(false);
    $("#no").onclick = () => { c.innerHTML = ""; };
    c.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  function corregir(ids, resp) {
    const parte = () => ({ ok: 0, ko: 0, bl: 0, n: 0 });
    const res = { teo: parte(), pra: parte(), temas: {} };
    ids.forEach((id) => {
      const q = PREG.get(id); const p = q.tipo === "T" ? res.teo : res.pra;
      const t = (res.temas[q.t] = res.temas[q.t] || { ok: 0, n: 0 });
      p.n++; t.n++;
      if (resp[id] === undefined) p.bl++;
      else if (resp[id] === q.a) { p.ok++; t.ok++; }
      else p.ko++;
    });
    return res;
  }
  const nota = (p, pen) => (p.n ? Math.max(0, pen ? p.ok - p.ko / 3 : p.ok) / p.n * 10 : 0);

  function entregar(porTiempo) {
    pararReloj();
    const R = E.run; if (!R) return;
    const res = corregir(R.ids, R.resp);
    if (R.modo === "examen") R.ids.forEach((id) => { if (R.resp[id] !== undefined) registrar(id, R.resp[id] === PREG.get(id).a); });
    const total = { ok: res.teo.ok + res.pra.ok, ko: res.teo.ko + res.pra.ko, n: res.teo.n + res.pra.n };
    const h = { ts: Date.now(), simId: R.simId, nombre: R.nombre, modo: R.modo, ids: R.ids, resp: R.resp, dudas: R.dudas,
      teo: res.teo, pra: res.pra, temas: res.temas, global: total.n ? total.ok / total.n * 10 : 0, porTiempo: !!porTiempo,
      minutos: R.modo === "examen" ? Math.round((MINUTOS * 60000 - R.restante) / 60000) : null };
    E.hist.push(h); if (E.hist.length > 60) E.hist.shift();
    E.ver = h.ts; E.run = null; guardar(); ir("resultados");
  }

  // ---------- Resultados ----------
  let filtro = "todas";
  function vistaResultados() {
    const h = E.hist.find((x) => x.ts === E.ver) || E.hist[E.hist.length - 1];
    if (!h) return ir("inicio");
    const bloque = (titulo, p) => p.n ? `<div class="bloque-res"><span class="eyebrow">${titulo} · <span class="num">${p.n}</span> preguntas</span>
      <div class="notas"><div class="nota"><span class="valor num">${fmt(nota(p, false))}</span><span class="etq">nota sobre 10</span></div>
      ${E.pen ? `<div class="nota"><span class="valor num" style="color:var(--muted)">${fmt(nota(p, true))}</span><span class="etq">con penalización (−1/3)</span></div>` : ""}</div>
      <div class="conteo"><span class="c-ok"><b class="num">${p.ok}</b> aciertos</span><span class="c-ko"><b class="num">${p.ko}</b> fallos</span><span class="muted"><b class="num">${p.bl}</b> en blanco</span></div></div>` : "";
    const temas = Object.keys(TEMAS).filter((t) => h.temas[t]);
    const lista = h.ids.map((id, k) => ({ q: PREG.get(id), k, r: h.resp[id] })).filter(({ q, r }) =>
      filtro === "todas" || (filtro === "fallos" && r !== undefined && r !== q.a) || (filtro === "blanco" && r === undefined) || (filtro === "dudas" && h.dudas && h.dudas[q.id]));
    const nF = h.ids.filter((id) => h.resp[id] !== undefined && h.resp[id] !== PREG.get(id).a).length;
    const nB = h.ids.filter((id) => h.resp[id] === undefined).length;
    const nD = h.dudas ? Object.values(h.dudas).filter(Boolean).length : 0;
    const fallosIds = h.ids.filter((id) => h.resp[id] !== undefined && h.resp[id] !== PREG.get(id).a);

    app.innerHTML = cabecera("") + `<main class="wrap">
      <section class="cabecera">
        <span class="eyebrow">${fechaCorta(h.ts)}${h.minutos !== null && h.minutos !== undefined ? ` · <span class="num">${h.minutos}</span> min empleados` : ""}${h.porTiempo ? " · entregado al agotarse el tiempo" : ""}</span>
        <h1>${esc(h.nombre)}: resultado</h1>
        <p>En el examen real las dos partes son eliminatorias y se puntúan por separado. Consulta en las bases de tu convocatoria si los errores penalizan.</p>
      </section>
      <div class="resumen">${bloque("Parte teórica", h.teo)}${bloque("Parte práctica", h.pra)}</div>
      <div class="fila">${fallosIds.length ? `<button class="btn primario" id="rep">Practicar los ${fallosIds.length} fallos</button>` : ""}<a class="btn" href="#inicio">Volver al inicio</a></div>
      <section style="display:grid;gap:12px"><h2>Por temas</h2>
        <div class="temas">${temas.map((t) => { const x = h.temas[t]; const p = x.ok / x.n; const cls = p < 0.5 ? "bajo" : p < 0.7 ? "medio" : "";
          return `<div class="tema-fila"><span class="nombre"><span class="muted num">${esc(TEMAS[t].n)}</span> · ${esc(TEMAS[t].nombre)}</span><div class="barra"><i class="${cls}" style="width:${Math.round(p * 100)}%"></i></div><span class="pct num">${x.ok}/${x.n}</span></div>`; }).join("")}</div>
      </section>
      <section style="display:grid;gap:14px">
        <h2>Revisión pregunta a pregunta</h2>
        <div class="chips" role="group" aria-label="Filtrar">
          ${[["todas", `Todas (${h.ids.length})`], ["fallos", `Fallos (${nF})`], ["blanco", `En blanco (${nB})`], ["dudas", `Dudosas (${nD})`]].map(([k, t]) => `<button class="chip" data-f="${k}" aria-pressed="${filtro === k}">${t}</button>`).join("")}
        </div>
        <div class="revision">${lista.length ? lista.map(({ q, k, r }) => {
          const est = r === undefined ? ["bl", "En blanco"] : r === q.a ? ["ok", "Acierto"] : ["ko", "Fallo"];
          return `<article class="rev"><div class="cab"><span class="num">#${k + 1}</span><span class="estado ${est[0]}">${est[1]}</span><span>${esc(temaDe(q).n)} · ${esc(temaDe(q).nombre)}</span>${q.sup ? `<span>Supuesto: ${esc(SUP.get(q.sup).titulo)}</span>` : ""}</div>
            <b>${esc(q.q)}</b>
            <ol>${q.o.map((t, j) => `<li class="${j === q.a ? "correcta" : j === r ? "marcada" : ""}"><span class="num">${LETRAS[j]})</span> ${esc(t)}</li>`).join("")}</ol>
            <div class="explica">${esc(q.e)}</div></article>`;
        }).join("") : `<p class="vacio">No hay preguntas en este filtro.</p>`}</div>
      </section></main>`;
    app.querySelectorAll("[data-f]").forEach((b) => b.addEventListener("click", () => { filtro = b.dataset.f; render(); }));
    const rep = $("#rep"); if (rep) rep.onclick = () => empezarPractica(fallosIds, "Repaso de fallos");
  }

  // ---------- Práctica por tema ----------
  function vistaPractica() {
    const sel = E.practicaSel || ORDEN_TEMAS.slice(0, 1);
    app.innerHTML = cabecera("practica") + `<main class="wrap"><section class="cabecera">
        <span class="eyebrow">Corrección inmediata</span><h1>Práctica por tema</h1>
        <p>Cada respuesta se corrige al momento y se explica. Lo que falles pasa a tu repaso de fallos.</p></section>
      <form class="config" id="cfg">
        <div class="fila" style="justify-content:space-between"><h3>Temas</h3><div class="fila"><button type="button" class="btn mini" id="todos">Todos</button><button type="button" class="btn mini" id="ninguno">Ninguno</button></div></div>
        <div class="checks">${Object.keys(TEMAS).map((t) => { const r = resumenTema(t);
          return `<label><input type="checkbox" name="t" value="${t}" id="chk-${t}" ${sel.includes(t) ? "checked" : ""}> ${esc(TEMAS[t].n)} · ${esc(TEMAS[t].nombre)} <small>${r.total}</small></label>`; }).join("")}</div>
        <div class="fila">
          <label for="cuantas">Preguntas</label>
          <select id="cuantas"><option value="10">10</option><option value="20" selected>20</option><option value="40">40</option><option value="999">Todas</option></select>
          <label for="cuales">De entre</label>
          <select id="cuales"><option value="todas">Todas</option><option value="nuevas">Las que no he visto</option><option value="falladas">Las que he fallado alguna vez</option></select>
        </div>
        <div class="fila"><button class="btn primario" type="submit">Empezar práctica</button><span class="muted" id="disp" style="font-size:.9rem"></span></div>
      </form></main>`;
    const form = $("#cfg");
    const elegidas = () => {
      const ts = [...form.querySelectorAll('input[name="t"]:checked')].map((i) => i.value);
      const cual = $("#cuales").value;
      return { ts, qs: [...PREG.values()].filter((q) => ts.includes(q.t)).filter((q) => {
        const s = E.stats[q.id]; return cual === "todas" || (cual === "nuevas" && !s) || (cual === "falladas" && s && s.ko > 0); }) };
    };
    const actualizar = () => { const { qs } = elegidas(); $("#disp").textContent = `${qs.length} preguntas disponibles`; };
    form.addEventListener("change", actualizar); actualizar();
    $("#todos").onclick = () => { form.querySelectorAll('input[name="t"]').forEach((i) => (i.checked = true)); actualizar(); };
    $("#ninguno").onclick = () => { form.querySelectorAll('input[name="t"]').forEach((i) => (i.checked = false)); actualizar(); };
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const { ts, qs } = elegidas(); if (!qs.length) { $("#disp").textContent = "No hay preguntas con esa selección. Marca otro tema o cambia el filtro."; return; }
      E.practicaSel = ts;
      const n = Number($("#cuantas").value);
      const nombre = ts.length === 1 ? `Práctica · ${TEMAS[ts[0]].n}` : `Práctica · ${ts.length} temas`;
      empezarPractica(barajar(qs).slice(0, n).map((q) => q.id), nombre);
    });
  }

  // ---------- Tarjetas ----------
  let tarjeta = null, girada = false;
  function vistaTarjetas() {
    const tema = E.tarjetaTema || "todos";
    const pool = [...PREG.values()].filter((q) => !q.sup && (tema === "todos" || q.t === tema));
    if (!tarjeta || !pool.some((q) => q.id === tarjeta)) { tarjeta = pool.length ? barajar(pool)[0].id : null; girada = false; }
    const q = tarjeta ? PREG.get(tarjeta) : null;
    app.innerHTML = cabecera("tarjetas") + `<main class="wrap lectura" style="margin-inline:auto;width:100%"><section class="cabecera">
      <span class="eyebrow">Repaso rápido</span><h1>Tarjetas de memoria</h1>
      <p>Piensa la respuesta antes de darle la vuelta. Si no la sabías, la tarjeta se suma a tu repaso de fallos.</p>
      <div class="fila"><label for="tema-t">Tema</label><select id="tema-t"><option value="todos">Todos los temas</option>${ORDEN_TEMAS.map((t) => `<option value="${t}" ${t === tema ? "selected" : ""}>${esc(TEMAS[t].n)} · ${esc(TEMAS[t].nombre)}</option>`).join("")}</select></div></section>
      ${q ? `<article class="tarjeta"><span class="eyebrow">${esc(temaDe(q).n)} · ${esc(temaDe(q).nombre)}</span>
        <p class="enun" style="font-size:1.12rem;font-weight:600">${esc(q.q)}</p>
        ${girada ? `<p class="resp">${esc(q.o[q.a])}</p><div class="explica">${esc(q.e)}</div>
          <div class="fila"><button class="btn primario" id="sabia">La sabía</button><button class="btn" id="repasar">A repasar</button></div>`
        : `<div><button class="btn primario" id="girar">Ver respuesta</button></div>`}</article>` : `<p class="vacio">No hay tarjetas para este tema.</p>`}
      </main>`;
    $("#tema-t").addEventListener("change", (e) => { E.tarjetaTema = e.target.value; guardar(); tarjeta = null; render(); });
    const on = (id, fn) => { const el = $("#" + id); if (el) el.onclick = fn; };
    on("girar", () => { girada = true; render(); });
    const siguiente = (ok) => { registrar(q.id, ok); guardar(); tarjeta = null; render(); };
    on("sabia", () => siguiente(true));
    on("repasar", () => siguiente(false));
  }

  // ---------- Guía ----------
  function vistaGuia() {
    app.innerHTML = cabecera("guia") + `<main class="wrap"><div class="guia lectura">
      <section class="cabecera"><span class="eyebrow">Cómo es la prueba</span><h1>Guía del examen</h1>
        <p>Resumen elaborado a partir de los cuestionarios de las convocatorias OEP 2019-2021 y OEP 2022-2023 del A1.2002.</p></section>
      <section><h2>Formato de las dos últimas convocatorias</h2>
        <div class="dato">
          <div><span class="eyebrow">OEP 2022-2023</span><b class="num">75 + 25</b>preguntas de teoría y de supuesto práctico, más 4 y 3 de reserva. 180 minutos.</div>
          <div><span class="eyebrow">OEP 2019-2021</span><b class="num">100 + 25</b>preguntas de teoría y de supuesto práctico, más 5 y 3 de reserva. 210 minutos.</div>
          <div><span class="eyebrow">En ambas</span><b>4 opciones</b>una sola correcta. Las dos partes son obligatorias y eliminatorias.</div>
        </div>
        <p>Los simulacros de esta web siguen el formato más reciente: 75 + 25 en 180 minutos, lo que da algo menos de 1 minuto y 50 segundos por pregunta.</p></section>
      <section><h2>Qué se repite en la parte teórica</h2>
        <ul>
          <li><b>Unas 15-20 preguntas de temario común</b> al principio: Constitución, Estatuto de Autonomía, Ley 39/2015, Ley 40/2015, contratos del sector público, Hacienda Pública andaluza, función pública, transparencia e igualdad. No están en los bancos de esta web: conviene repasarlas aparte.</li>
          <li><b>Normativa citada por artículo.</b> El tribunal parte del texto literal y cambia una palabra: «exclusiva» por «compartida», «cuatro» por «cinco», «FEAGA» por «FEADER». Muchas son del tipo «indique la FALSA». Ejemplos: el art. 22 y el art. 36 del Reglamento 2021/2116, el art. 9 del RD 1046/2022 y el art. 81 del RD 1048/2022.</li>
          <li><b>Datos estadísticos del último anuario disponible.</b> En 2022-2023 hubo unas 15 preguntas de cifras: qué provincia lidera un cultivo, el puesto de España en la UE o el récord de exportaciones. Hay que estudiar el Anuario de Estadísticas Agrarias y Pesqueras de Andalucía, el Anuario del MAPA, los informes del ICEX y Eurostat de la edición más reciente.</li>
          <li><b>PAC 2023-2027 en detalle:</b> reglamentos 2021/2115 y 2021/2116, reales decretos 1046, 1048 y 1049 de 2022, códigos de intervención del PEPAC y condicionalidad reforzada.</li>
          <li><b>Calidad agroalimentaria y normas de calidad</b> (aceites, quesos, derivados cárnicos, vinos), sanidad vegetal y animal, producción ecológica y agua.</li>
        </ul></section>
      <section><h2>Qué se repite en el supuesto práctico</h2>
        <p>En las dos convocatorias el práctico gira en torno a una <b>orden de ayudas real</b> cuyo cuadro resumen se entrega con el examen. En 2022-2023 fueron los certámenes agrícolas del olivar (submedida 1.2 del PDR); en 2019-2021, las ayudas COVID a la ganadería de lidia y la solicitud única de la PAC. Siempre aparecen:</p>
        <ul>
          <li>Cómputo de plazos: un mes desde el día siguiente a la publicación, días hábiles excluidos sábados y festivos, y prórroga si el último día es inhábil.</li>
          <li>Cálculo de importes: gasto subvencionable, límites, IVA no subvencionable, reparto FEADER y Junta.</li>
          <li>Órganos: quién instruye, quién resuelve, ante quién se recurre y quién inicia el reintegro.</li>
          <li>Plazos de resolución, sentido del silencio, recursos, prescripción y conservación de documentos.</li>
          <li>Ganadería y PAC: UGM, carga ganadera, agricultor activo e importes de pagos.</li>
        </ul>
        <p>El supuesto 2 de esta web imita ese modelo con unas bases ficticias. Practica también con órdenes reales de la Consejería: leer el cuadro resumen con soltura es media nota del práctico.</p></section>
      <section><h2>Cómo repartir el tiempo en el examen</h2>
        <ol>
          <li>Primera pasada por la teoría respondiendo solo lo que sabes con seguridad, en unos 60 minutos. Marca las dudosas.</li>
          <li>Haz el supuesto práctico entero, en unos 60 minutos. Lee primero el cuadro resumen y subraya cuantías, porcentajes, plazos y órganos.</li>
          <li>Segunda pasada por las dudosas. Si los errores penalizan, contesta solo cuando puedas descartar al menos dos opciones.</li>
          <li>Reserva 10 minutos para pasar respuestas a la hoja y revisar la numeración: las de reserva van de la 151 en adelante.</li>
        </ol></section>
      <section><h2>Plan para los meses que quedan</h2>
        <ul>
          <li><b>Cada día:</b> 20 preguntas de práctica de uno o dos temas y 10 minutos de tarjetas.</li>
          <li><b>Cada semana:</b> repasa todos tus fallos pendientes; el contador del inicio te dice cuántos son.</li>
          <li><b>Cada dos semanas:</b> un simulacro completo cronometrado. Empieza por el 1, el 2 y el 3, y después usa el aleatorio.</li>
          <li><b>Último mes:</b> un simulacro por semana en las mismas condiciones que el examen: a la misma hora, sin pausas y en papel aparte.</li>
          <li><b>Los datos estadísticos</b> cambian cada año. Cuando salga un anuario nuevo, actualiza las cifras: las preguntas de esta web avisan cuando son de este tipo.</li>
        </ul></section>
      <section><h2>Tu progreso</h2>
        <p>Tu historial, tus estadísticas y el simulacro que tengas a medias se guardan solo en este navegador. Si cambias de dispositivo o borras los datos del navegador, empezarás de cero.</p></section>
    </div></main>`;
  }

  // ---------- Teclado ----------
  function teclas(e) {
    if (!E.run || location.hash.slice(1) !== "examen" || E.run.pausado) return;
    if (e.target.matches && e.target.matches("input, select, textarea")) return;
    const k = e.key.toLowerCase();
    const mapa = { a: 0, b: 1, c: 2, d: 3, "1": 0, "2": 1, "3": 2, "4": 3 };
    if (k in mapa && !e.metaKey && !e.ctrlKey) { responder(mapa[k]); e.preventDefault(); }
    else if (e.key === "ArrowRight") mover(E.run.i + 1);
    else if (e.key === "ArrowLeft") mover(E.run.i - 1);
  }

  // ---------- Acceso con contraseña ----------
  // Comprobación en el navegador: impide el acceso casual, no es una protección fuerte.
  const HUELLA = "46cea3f6acb3b14a90ff20a2dfaa2ddcc6e72d67c512d9c70d7d85923e5d4986";
  const CLAVE_ACCESO = "simagro.acceso";
  async function huella(texto) {
    const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(texto));
    return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
  }
  function accesoGuardado() { try { return localStorage.getItem(CLAVE_ACCESO) === HUELLA; } catch (e) { return false; } }
  function arrancar() { window.addEventListener("hashchange", render); render(); }
  function pantallaAcceso() {
    $("#pie").hidden = true;
    app.innerHTML = `<main class="acceso"><form id="acceso">
      <span class="eyebrow">A1.2002 · Ingeniería Agronómica</span>
      <h1 style="font-size:1.6rem">Los simulacros de Vázquez</h1>
      <label for="clave" class="muted" style="font-size:.9rem">Contraseña de acceso</label>
      <input type="password" id="clave" autocomplete="current-password" autofocus>
      <button class="btn primario" type="submit">Entrar</button>
      <p class="error" id="error" hidden>Contraseña incorrecta. Revisa mayúsculas y números.</p>
    </form></main>`;
    $("#acceso").addEventListener("submit", async (e) => {
      e.preventDefault();
      if ((await huella($("#clave").value.trim())) === HUELLA) {
        try { localStorage.setItem(CLAVE_ACCESO, HUELLA); } catch (err) { /* sin almacenamiento: pedirá la clave cada vez */ }
        arrancar();
      } else { $("#error").hidden = false; $("#clave").select(); }
    });
  }

  if (accesoGuardado()) arrancar(); else pantallaAcceso();
})();
