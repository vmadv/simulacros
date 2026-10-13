// Supuestos prácticos (25 preguntas cada uno). Casos y datos ficticios, redacción original.
(function () {
  const S = (id, titulo, intro, preguntas) => window.BANCO.supuestos.push({
    id, titulo, intro,
    preguntas: preguntas.map((p, i) => ({ id: id + "-" + String(i + 1).padStart(2, "0"), t: p[0], q: p[1], o: p[2], a: p[3], e: p[4] }))
  });

  // =====================================================================
  S("S1", "Comarca de la Vega del Genil y el cortijo El Almendral", `
<p>Usted es ingeniero agrónomo en la Delegación Territorial de Córdoba y recibe el encargo de preparar un informe sobre la comarca ficticia de la <b>Vega del Genil</b> y sobre una explotación que quiere pasarse a ecológico.</p>
<h4>1. Municipios de la comarca</h4>
<div class="tabla"><table>
<thead><tr><th>Municipio</th><th>Población</th><th>Superficie (km²)</th></tr></thead>
<tbody>
<tr><td>Villanueva del Río</td><td>32.000</td><td>64</td></tr>
<tr><td>Fuentecilla</td><td>9.000</td><td>120</td></tr>
<tr><td>Montejaque de la Vega</td><td>6.000</td><td>50</td></tr>
<tr><td>La Alameda</td><td>3.000</td><td>15</td></tr>
</tbody></table></div>
<p>Estructura por edades de la comarca: 7.500 personas menores de 16 años, 31.250 de 16 a 64 años y 11.250 de 65 y más años.</p>
<h4>2. Cuentas económicas de la agricultura comarcal (millones de euros)</h4>
<div class="tabla"><table><tbody>
<tr><td>Producción vegetal</td><td>180</td></tr>
<tr><td>Producción animal</td><td>30</td></tr>
<tr><td>Producción de servicios agrarios</td><td>6</td></tr>
<tr><td>Actividades secundarias no agrarias no separables</td><td>4</td></tr>
<tr><td>Consumos intermedios</td><td>88</td></tr>
<tr><td>Amortizaciones (consumo de capital fijo)</td><td>22</td></tr>
<tr><td>Otras subvenciones a la producción</td><td>28</td></tr>
<tr><td>Otros impuestos a la producción</td><td>3</td></tr>
<tr><td>Remuneración de asalariados</td><td>52</td></tr>
</tbody></table></div>
<p>Las empresas agroalimentarias de la comarca exportaron en 2025 por valor de 450 M€ e importaron por valor de 180 M€.</p>
<h4>3. Cortijo El Almendral</h4>
<p>Explotación de 140 ha de SAU: 60 ha de olivar de secano, 30 ha de trigo duro de secano y 50 ha de pastos permanentes. Cabaña: 40 vacas nodrizas de raza retinta y 300 ovejas. El titular notificó su actividad ecológica y quedó sometido al sistema de control el <b>lunes 2 de marzo de 2026</b>. Quiere convertir toda la unidad de producción. A efectos de cálculo, considere una excreción de 68 kg de N/año por vaca nodriza y 12,8 kg de N/año por oveja.</p>
<p>La explotación está en zona vulnerable a la contaminación por nitratos, percibe la ayuda básica a la renta y tiene dos trabajadores asalariados que aplican los tratamientos fitosanitarios bajo la dirección del titular.</p>`,
  [
    ["T1", "La densidad media de población de la comarca es, aproximadamente:",
      ["201 hab/km²", "224 hab/km²", "179 hab/km²", "249 hab/km²"], 0,
      "50.000 habitantes / 249 km² = 200,8 hab/km²."],
    ["T1", "Aplicando la metodología OCDE, el porcentaje de población que reside en municipios rurales es:",
      ["18%", "30%", "36%", "70%"], 1,
      "Son rurales los municipios con menos de 150 hab/km²: Fuentecilla (75) y Montejaque (120), que suman 15.000 habitantes, el 30% de 50.000. La Alameda tiene 200 hab/km², así que no es rural; contarla da el 36%."],
    ["T1", "Conforme a la metodología OCDE, la comarca se clasificaría como:",
      ["Predominantemente rural.", "Predominantemente urbana.", "Intermedia.", "No es posible clasificarla."], 2,
      "El 30% está entre el 15% y el 50%, por lo que es intermedia."],
    ["T1", "La tasa de dependencia de la comarca es:",
      ["60,0%", "36,0%", "24,0%", "37,5%"], 0,
      "(7.500 + 11.250) / 31.250 × 100 = 60%. El 36% sería la dependencia de mayores; el 24%, la de jóvenes."],
    ["T3", "El valor de la Producción de la Rama Agraria comarcal es:",
      ["210 M€", "216 M€", "220 M€", "186 M€"], 2,
      "PRA = vegetal + animal + servicios + actividades secundarias no separables = 180 + 30 + 6 + 4 = 220 M€."],
    ["T3", "El Valor Añadido Bruto a precios básicos asciende a:",
      ["132 M€", "110 M€", "154 M€", "88 M€"], 0,
      "VAB = PRA − consumos intermedios = 220 − 88 = 132 M€."],
    ["T3", "La Renta Agraria comarcal es:",
      ["157 M€", "110 M€", "138 M€", "135 M€"], 3,
      "VAN = 132 − 22 = 110. Renta Agraria = 110 + 28 − 3 = 135 M€. Partir del VAB sin restar amortizaciones da 157 M€, un error típico."],
    ["T3", "El excedente neto de explotación o renta mixta asciende a:",
      ["83 M€", "58 M€", "105 M€", "135 M€"], 0,
      "Renta Agraria − remuneración de asalariados = 135 − 52 = 83 M€."],
    ["T3", "La producción vegetal representa sobre la Producción de la Rama Agraria comarcal aproximadamente:",
      ["68%", "75%", "82%", "86%"], 2,
      "180 / 220 = 81,8%. Si se divide solo entre vegetal y animal (210) sale el 86%."],
    ["T3", "Los consumos intermedios suponen sobre la Producción de la Rama Agraria:",
      ["25%", "40%", "60%", "67%"], 1,
      "88 / 220 = 40%. El 67% resulta de dividir por el VAB, que es un error."],
    ["T4", "La tasa de cobertura del comercio agroalimentario de la comarca en 2025 fue:",
      ["40%", "150%", "250%", "270%"], 2,
      "450 / 180 × 100 = 250%. El saldo comercial es de +270 M€, que no es lo mismo que la tasa de cobertura."],
    ["T14", "¿A partir de qué campaña podrá comercializar como ecológica la aceituna del olivar?",
      ["2026/2027", "2027/2028", "2028/2029", "2029/2030"], 3,
      "Los perennes requieren 3 años antes de la primera cosecha. Desde el 2 de marzo de 2026, la primera cosecha posterior al 2 de marzo de 2029 es la de otoño-invierno de 2029, campaña 2029/2030."],
    ["T14", "El trigo duro podrá venderse como ecológico por primera vez en la cosecha de:",
      ["2027", "2028", "2029", "2030"], 2,
      "Los cultivos anuales requieren 2 años antes de la siembra. Hasta el 2 de marzo de 2028 no se cumplen; la siembra de otoño de 2028 se cosecha en junio de 2029."],
    ["T14", "Respecto a la aceituna cosechada en noviembre de 2027:",
      ["Puede venderse como ecológica.", "Puede etiquetarse como «producto en conversión», al haber más de 12 meses de conversión antes de la cosecha.", "No puede llevar ninguna referencia al método ecológico.", "Debe destinarse obligatoriamente a destrucción."], 1,
      "El Reglamento 2018/848 permite etiquetar como «en conversión» los productos vegetales de un solo ingrediente agrario cosechados tras al menos 12 meses de conversión."],
    ["T14", "La carga ganadera de la explotación, expresada en kg de nitrógeno por hectárea de SAU y año, es:",
      ["46,9", "72,9", "131,2", "170,0"], 0,
      "(40 × 68) + (300 × 12,8) = 2.720 + 3.840 = 6.560 kg N / 140 ha = 46,9 kg N/ha, muy por debajo del máximo de 170. Dividir solo entre los pastos daría 131,2."],
    ["T14", "El periodo de conversión específico de las vacas nodrizas destinadas a carne es:",
      ["Seis meses.", "Doce meses y, en cualquier caso, al menos tres cuartas partes de su vida.", "Diez semanas.", "Veinticuatro meses."], 1,
      "Bovinos y équidos para carne: 12 meses y al menos 3/4 de su vida."],
    ["T14", "Si convierte de forma simultánea toda la unidad (animales existentes, pastos y tierras de pienso), el periodo de conversión combinado es de:",
      ["6 meses.", "12 meses.", "24 meses.", "36 meses."], 2,
      "Con conversión simultánea, el periodo total combinado para los animales existentes y sus crías, los pastos y las tierras de pienso es de 24 meses."],
    ["T14", "Cuando envase y venda su aceite ecológico en la UE:",
      ["El logotipo ecológico de la UE es voluntario.", "Debe figurar el logotipo de la UE, el número de código de la autoridad u organismo de control y la indicación del lugar de obtención de las materias primas.", "Basta con la mención «natural».", "Solo debe figurar el logotipo autonómico."], 1,
      "En alimentos envasados el logotipo es obligatorio y debe ir acompañado del código del organismo de control y de la indicación «Agricultura UE», «no UE» o «UE/no UE»."],
    ["T13", "Teniendo en cuenta que los tratamientos los aplican dos operarios bajo su dirección, el titular debe tener el carné de aplicador de nivel:",
      ["Básico.", "Cualificado.", "Fumigador.", "Piloto aplicador."], 1,
      "Real Decreto 1311/2012, anexo IV: el nivel cualificado corresponde a los responsables de tratamientos terrestres, incluidos los agricultores que tratan empleando personal auxiliar. El básico es para el personal auxiliar y quien trata en su propia explotación sin auxiliares."],
    ["T13", "Respecto a la gestión integrada de plagas (GIP), una vez certificado en ecológico:",
      ["Deberá adoptar además un programa de GIP distinto.", "Se considerará que cumple los principios de la GIP.", "Queda exento de llevar registro de tratamientos.", "Podrá usar cualquier producto autorizado en convencional."], 1,
      "El Real Decreto 1311/2012 considera que la producción ecológica y la integrada cumplen la GIP. El registro de tratamientos sigue siendo obligatorio."],
    ["T13", "Si quiere integrar sus vacas en una Agrupación de Defensa Sanitaria Ganadera, la norma básica estatal que las regula es el:",
      ["Real Decreto 479/2004.", "Real Decreto 842/2011.", "Real Decreto 1311/2012.", "Real Decreto 1702/2011."], 1,
      "El 479/2004 regula el REGA y el 1702/2011 las inspecciones de equipos de aplicación de fitosanitarios."],
    ["T13", "Si detecta en el olivar síntomas compatibles con Xylella fastidiosa:",
      ["Basta con seguir las recomendaciones técnicas de su asesor.", "Debe comunicarlo de inmediato a la autoridad competente, que adoptará medidas obligatorias de erradicación o contención.", "Tiene derecho a una indemnización automática sin resolución administrativa.", "Se paraliza automáticamente toda actividad agrícola durante cinco años."], 1,
      "Es plaga prioritaria según el Reglamento Delegado 2019/1702. El Reglamento 2016/2031 obliga a notificar e impone medidas obligatorias."],
    ["T10", "En los controles sobre el terreno de la condicionalidad reforzada, la muestra mínima abarca:",
      ["Al menos el 1% de los beneficiarios.", "Al menos el 5% de los beneficiarios.", "Al menos el 10% de los beneficiarios.", "La totalidad de los beneficiarios."], 0,
      "Muestra mínima del 1% de los beneficiarios sujetos a condicionalidad."],
    ["T10", "Por tener trabajadores por cuenta ajena, además de la condicionalidad reforzada deberá cumplir:",
      ["La condicionalidad estratégica.", "La condicionalidad social.", "La condicionalidad simplificada.", "Ninguna obligación adicional."], 1,
      "La condicionalidad social (Reglamento 2021/2115 y RD 1049/2022) exige cumplir normas de empleo, seguridad y salud laboral."],
    ["T9", "El programa de actuación de la zona vulnerable a nitratos en la que se ubica el cortijo se revisará al menos cada:",
      ["Dos años.", "Cuatro años.", "Seis años.", "Diez años."], 1,
      "La Directiva 91/676/CEE y el Real Decreto 47/2022 obligan a revisar los programas de actuación al menos cada cuatro años."]
  ]);

  // =====================================================================
  S("S2", "Ayuda a la instalación de una joven agricultora", `
<p>Se convocan en concurrencia competitiva ayudas para el establecimiento de jóvenes agricultores, en el marco del PEPAC 2023-2027. El extracto de la convocatoria se publica en el BOJA el <b>martes 3 de marzo de 2026</b>. <i>Las bases que se resumen a continuación son ficticias y se han redactado para este simulacro.</i></p>
<h4>Cuadro resumen de las bases</h4>
<div class="tabla"><table><tbody>
<tr><th>Beneficiarios</th><td>Personas físicas de 18 a 40 años (inclusive) en la fecha de solicitud que se instalen por primera vez como titulares de una explotación. Deben tener capacitación profesional suficiente o comprometerse a adquirirla en un plazo máximo de 36 meses desde la resolución de concesión.</td></tr>
<tr><th>Cuantía</th><td>Importe básico de 25.000 €, con estos incrementos: +5.000 € si la solicitante es mujer; +7.500 € si la explotación está en zona de montaña; +5.000 € si la explotación es ecológica; +2.500 € por cada UTA asalariada adicional, con un máximo de 2. Importe máximo por beneficiario: 40.000 €.</td></tr>
<tr><th>Criterios de valoración</th><td>Mujer: 3 puntos. Explotación ecológica: 3 puntos. Zona de montaña: 2 puntos. Titulación universitaria agraria: 2 puntos. Creación de empleo: 1 punto por UTA, máximo 2. Puntuación mínima para ser beneficiaria: 5 puntos.</td></tr>
<tr><th>Financiación</th><td>FEADER 80% y Junta de Andalucía 20%. Partida presupuestaria 1300110000 G/71B/77100/00.</td></tr>
<tr><th>Solicitudes</th><td>Plazo de un mes desde el día siguiente a la publicación del extracto en el BOJA. Presentación electrónica obligatoria.</td></tr>
<tr><th>Instrucción y resolución</th><td>Instruye el Servicio competente de la Dirección General de la Producción Agrícola y Ganadera. Resuelve la persona titular de esa Dirección General, por delegación. Plazo máximo para resolver y notificar: seis meses desde la finalización del plazo de presentación de solicitudes. El vencimiento sin resolución expresa permite entender desestimada la solicitud.</td></tr>
<tr><th>Pago</th><td>60% tras la resolución de concesión y la acreditación del alta como titular. 40% restante tras la correcta ejecución del plan empresarial.</td></tr>
<tr><th>Obligaciones</th><td>Mantener la condición de titular de la explotación durante cinco años desde el pago final. Conservar los documentos justificativos durante cinco años desde el pago final.</td></tr>
</tbody></table></div>
<h4>La solicitante</h4>
<p>Lucía, nacida el 15 de junio de 1996, ingeniera agrónoma, se instala por primera vez en una explotación de 35 ha de olivar ecológico en la Sierra de Segura (zona de montaña). Contratará a un trabajador fijo (1 UTA). Presenta su solicitud el viernes 20 de marzo de 2026. Considere solo los festivos nacionales y los autonómicos de Andalucía.</p>`,
  [
    ["PRO", "En relación con el requisito de edad, Lucía:",
      ["No puede ser beneficiaria, al superar los 25 años.", "Cumple el requisito, ya que tiene 29 años en la fecha de solicitud.", "Solo podría serlo si acreditara 5 años de experiencia.", "No cumple, al haber cumplido 30 años en 2026."], 1,
      "El 20 de marzo de 2026 tiene 29 años, porque cumple 30 el 15 de junio. El límite de 40 años coincide con la definición de joven agricultor del Reglamento 2021/2115."],
    ["PRO", "El plazo de presentación de solicitudes finaliza el:",
      ["Viernes 3 de abril de 2026.", "Sábado 4 de abril de 2026.", "Lunes 6 de abril de 2026.", "Domingo 3 de mayo de 2026."], 2,
      "Plazo en meses (art. 30.4 de la Ley 39/2015): vence el 3 de abril, que en 2026 es Viernes Santo y, por tanto, festivo. Se prorroga al primer día hábil siguiente. Sábado y domingo son inhábiles, así que vence el lunes 6 de abril. El Jueves Santo, 2 de abril, también es festivo en Andalucía, pero no afecta al vencimiento."],
    ["PRO", "La puntuación que obtiene la solicitud de Lucía es:",
      ["8 puntos.", "10 puntos.", "11 puntos.", "12 puntos."], 2,
      "Mujer (3) + ecológica (3) + montaña (2) + titulación universitaria agraria (2) + 1 UTA (1) = 11 puntos, por encima del mínimo de 5."],
    ["PRO", "El importe resultante de sumar el importe básico y los incrementos, antes de aplicar el límite máximo, es:",
      ["37.500 €", "40.000 €", "42.500 €", "45.000 €"], 3,
      "25.000 + 5.000 (mujer) + 7.500 (montaña) + 5.000 (ecológica) + 2.500 (1 UTA) = 45.000 €."],
    ["PRO", "El importe de la ayuda que se le concede es:",
      ["45.000 €", "40.000 €", "37.500 €", "25.000 €"], 1,
      "Los 45.000 € superan el máximo por beneficiario, que es de 40.000 €."],
    ["PRO", "El importe del primer pago será de:",
      ["16.000 €", "20.000 €", "24.000 €", "27.000 €"], 2,
      "60% de 40.000 € = 24.000 €. El 40% restante, 16.000 €, se paga tras ejecutar el plan empresarial."],
    ["PRO", "El importe financiado con cargo al FEADER es:",
      ["8.000 €", "24.000 €", "32.000 €", "36.000 €"], 2,
      "80% de 40.000 € = 32.000 €."],
    ["PRO", "El importe financiado con fondos propios de la Junta de Andalucía es:",
      ["4.000 €", "8.000 €", "9.000 €", "16.000 €"], 1,
      "20% de 40.000 € = 8.000 €."],
    ["PRO", "Según la partida presupuestaria, la ayuda se imputa al capítulo de gasto:",
      ["Capítulo 1.", "Capítulo 4.", "Capítulo 6.", "Capítulo 7."], 3,
      "El económico 77100 empieza por 7: transferencias de capital, en este caso a empresas privadas. El capítulo 4 recoge las transferencias corrientes y el 6 las inversiones reales."],
    ["PRO", "Se le notifica el miércoles 6 de mayo de 2026 un requerimiento para subsanar la solicitud en 10 días. El plazo vence el:",
      ["16 de mayo de 2026.", "18 de mayo de 2026.", "20 de mayo de 2026.", "21 de mayo de 2026."], 2,
      "Plazo en días, que son hábiles (art. 30.2 de la Ley 39/2015): se excluyen sábados, domingos y festivos y se cuenta desde el día siguiente. Del 7 al 20 de mayo hay 10 días hábiles."],
    ["PRO", "Si no subsanara en plazo, se le tendrá por:",
      ["Desistida de su petición, previa resolución.", "Decaída en su derecho sin necesidad de resolución.", "Desestimada por silencio.", "Excluida por caducidad del procedimiento."], 0,
      "Artículo 68.1 de la Ley 39/2015: se la tiene por desistida previa resolución dictada en los términos del artículo 21."],
    ["PRO", "El plazo máximo para resolver y notificar el procedimiento finaliza el:",
      ["3 de septiembre de 2026.", "20 de septiembre de 2026.", "6 de octubre de 2026.", "6 de abril de 2027."], 2,
      "Seis meses desde la finalización del plazo de solicitud, el 6 de abril de 2026, de fecha a fecha. El 6 de octubre de 2026 es martes, día hábil."],
    ["PRO", "Si transcurre el plazo máximo sin resolución expresa:",
      ["La solicitud se entiende estimada por silencio positivo.", "La solicitud puede entenderse desestimada.", "El procedimiento caduca.", "Se prorroga automáticamente tres meses."], 1,
      "Lo prevén las bases, en línea con el artículo 25.5 de la Ley 38/2003, General de Subvenciones. La caducidad es propia de los procedimientos iniciados de oficio."],
    ["PRO", "Si la notificación electrónica se pone a su disposición y no accede a ella, se entenderá rechazada transcurridos:",
      ["5 días hábiles.", "10 días naturales.", "10 días hábiles.", "15 días naturales."], 1,
      "Artículo 43.2 de la Ley 39/2015: diez días naturales desde la puesta a disposición sin acceder a su contenido."],
    ["PRO", "Toda notificación deberá cursarse dentro del plazo de:",
      ["Cinco días desde que se dictó el acto.", "Diez días desde que se dictó el acto.", "Un mes desde que se dictó el acto.", "El mismo día en que se dictó el acto."], 1,
      "Artículo 40.2 de la Ley 39/2015. Esta pregunta cayó en el examen A1.2002 de 2022-2023."],
    ["PRO", "Contra la resolución de concesión, que pone fin a la vía administrativa, puede interponer recurso potestativo de reposición ante:",
      ["La persona titular de la Consejería.", "El mismo órgano que dictó la resolución.", "El Tribunal Superior de Justicia de Andalucía.", "La Viceconsejería."], 1,
      "Artículo 123 de la Ley 39/2015. Si el órgano resuelve por delegación, la resolución se considera dictada por el órgano delegante."],
    ["PRO", "Si la resolución expresa se le notifica el jueves 15 de octubre de 2026, el último día para interponer recurso de reposición es el:",
      ["15 de noviembre de 2026.", "16 de noviembre de 2026.", "14 de noviembre de 2026.", "15 de diciembre de 2026."], 1,
      "Un mes de fecha a fecha vence el 15 de noviembre, que es domingo, así que se prorroga al lunes 16 (art. 30.5 de la Ley 39/2015)."],
    ["PRO", "Si opta por acudir directamente a la vía contencioso-administrativa contra la resolución expresa, dispone de un plazo de:",
      ["Un mes.", "Dos meses.", "Tres meses.", "Seis meses."], 1,
      "Artículo 46.1 de la Ley 29/1998: dos meses desde el día siguiente a la notificación."],
    ["PRO", "Lucía deberá mantener la condición de titular de la explotación durante:",
      ["Tres años desde la resolución.", "Cinco años desde el pago final.", "Cinco años desde la solicitud.", "Diez años desde el pago final."], 1,
      "Lo exigen las bases, en línea con la durabilidad de las operaciones financiadas por el FEADER."],
    ["PRO", "Los documentos justificativos deberán conservarse:",
      ["Cuatro años desde la solicitud.", "Cuatro años desde el pago final.", "Cinco años desde el pago final.", "Cinco años desde la solicitud."], 2,
      "Lo exigen las bases. Una pregunta casi idéntica cayó en el examen de 2022-2023."],
    ["PRO", "Si procediera el reintegro, el interés de demora aplicable será, salvo que la Ley de Presupuestos establezca otro:",
      ["El interés legal del dinero.", "El interés legal del dinero incrementado en un 25%.", "El Euríbor a un año.", "El tipo de interés oficial del BCE."], 1,
      "Artículo 38.2 de la Ley 38/2003, General de Subvenciones."],
    ["PRO", "El derecho de la Administración a reconocer o liquidar el reintegro prescribe a los:",
      ["Dos años.", "Cuatro años.", "Cinco años.", "Diez años."], 1,
      "Artículo 39 de la Ley 38/2003, con carácter general desde el vencimiento del plazo de justificación."],
    ["PRO", "Las infracciones en materia de subvenciones prescriben en el plazo de cuatro años a contar desde:",
      ["El pago de la subvención.", "La propuesta de reintegro.", "El día en que la infracción se hubiera cometido.", "La notificación del inicio del reintegro."], 2,
      "Artículo 65 de la Ley 38/2003. Pregunta de reserva del examen de 2022-2023."],
    ["PRO", "Conforme al Reglamento (UE) 2021/2115, los Estados miembros definen al joven agricultor fijando un límite de edad que no puede superar los:",
      ["35 años.", "40 años.", "41 años.", "45 años."], 1,
      "Artículo 4.6: un máximo de 40 años, además de las condiciones de jefe de explotación y de formación o capacitación."],
    ["PRO", "Si Lucía careciera de capacitación profesional en el momento de solicitar:",
      ["No podría ser beneficiaria en ningún caso.", "Podría serlo si se comprometiera a adquirirla en un máximo de 36 meses desde la resolución de concesión.", "Podría serlo si la adquiriera antes de que acabe el plazo de solicitud.", "La capacitación no es un requisito."], 1,
      "Así lo prevén las bases del supuesto. Lee siempre el cuadro resumen, que es de donde salen muchas preguntas del práctico real."]
  ]);

  // =====================================================================
  S("S3", "Dehesa La Jara: ganadería, sanidad y PAC", `
<p>Manuel es titular de la explotación «Dehesa La Jara», en Pozoblanco (Los Pedroches, Córdoba), inscrita en el registro de explotaciones ganaderas con orientación de reproducción para producción de carne. <i>Caso ficticio.</i></p>
<h4>Censo a 1 de enero</h4>
<div class="tabla"><table>
<thead><tr><th>Animales</th><th>Número</th></tr></thead>
<tbody>
<tr><td>Vacas nodrizas de más de 2 años</td><td>120</td></tr>
<tr><td>Novillas de 6 a 24 meses</td><td>30</td></tr>
<tr><td>Terneros de menos de 6 meses</td><td>90</td></tr>
<tr><td>Ovejas</td><td>600</td></tr>
<tr><td>Cabras</td><td>50</td></tr>
</tbody></table></div>
<h4>Superficie declarada</h4>
<div class="tabla"><table>
<thead><tr><th>Uso SIGPAC</th><th>Hectáreas</th><th>Coeficiente de admisibilidad de pastos</th></tr></thead>
<tbody>
<tr><td>Pasto permanente (PS)</td><td>300</td><td>100%</td></tr>
<tr><td>Pasto arbolado (PA) de encinar adehesado</td><td>80</td><td>60%</td></tr>
</tbody></table></div>
<p>Manuel está afiliado a la Seguridad Social como trabajador agrario por cuenta propia, solicita la ayuda básica a la renta, el ecorrégimen de pastoreo extensivo y la ayuda asociada a las vacas nodrizas. Utilice los coeficientes de conversión a UGM habituales en la normativa de la PAC.</p>`,
  [
    ["T10", "El número total de UGM de la explotación es:",
      ["239,0", "271,5", "290,0", "360,0"], 1,
      "Vacas de más de 2 años: 120 × 1 = 120. Novillas de 6 a 24 meses: 30 × 0,6 = 18. Terneros de menos de 6 meses: 90 × 0,4 = 36. Ovejas: 600 × 0,15 = 90. Cabras: 50 × 0,15 = 7,5. Total: 271,5 UGM."],
    ["T10", "La superficie neta de pastos admisible es:",
      ["300 ha", "332 ha", "348 ha", "380 ha"], 2,
      "300 × 100% + 80 × 60% = 300 + 48 = 348 ha."],
    ["T10", "La carga ganadera de la explotación es aproximadamente:",
      ["0,71 UGM/ha", "0,78 UGM/ha", "0,90 UGM/ha", "1,13 UGM/ha"], 1,
      "271,5 / 348 = 0,78 UGM/ha. Dividir por la superficie bruta (380 ha) daría 0,71, que es un error."],
    ["T10", "La tasa de reposición de la cabaña de vacas nodrizas, entendida como novillas por cada 100 vacas, es:",
      ["20%", "25%", "30%", "75%"], 1,
      "30 / 120 × 100 = 25%."],
    ["T13", "La explotación debe estar inscrita en el Registro General de Explotaciones Ganaderas, regulado por el:",
      ["Real Decreto 842/2011.", "Real Decreto 479/2004.", "Real Decreto 1311/2012.", "Real Decreto 1048/2022."], 1,
      "El Real Decreto 479/2004 regula el REGA."],
    ["T13", "El Sistema Integral de Trazabilidad Animal (SITRAN) se compone de tres módulos principales:",
      ["REGA, REMO y RIIA.", "REGA, REMO y SIGGAN.", "REGA, RIIA y GOSP.", "REAFA, REMO y GOSP."], 0,
      "Registro de explotaciones (REGA), de movimientos (REMO) y de identificación individual de animales (RIIA). Pregunta del examen de 2022-2023."],
    ["T13", "Cuando Manuel envíe los terneros destetados a un cebadero, el movimiento se registrará en el módulo:",
      ["REGA.", "REMO.", "RIIA.", "ROPO."], 1,
      "REMO es el Registro de Movimientos. El ROPO es el registro de productores y operadores de medios de defensa fitosanitaria."],
    ["T13", "En Andalucía, el sistema autonómico de gestión de la información ganadera es:",
      ["SIGPAC.", "SIGGAN.", "SIPEA.", "REGEPA."], 1,
      "SIGGAN, el Sistema Integrado de Gestión Ganadera de Andalucía. El SIGPAC es el sistema de identificación de parcelas."],
    ["T13", "El marco general europeo de sanidad animal aplicable a su ganadería es el:",
      ["Reglamento (UE) 2016/2031.", "Reglamento (UE) 2016/429.", "Reglamento (CE) 1107/2009.", "Reglamento (UE) 2018/848."], 1,
      "El 2016/429 es la «Legislación sobre sanidad animal». El 2016/2031 es el de sanidad vegetal."],
    ["T13", "La tuberculosis bovina, que puede transmitirse de los animales al hombre, es según la Ley 8/2003 una:",
      ["Enzootia.", "Epizootia.", "Zoonosis.", "Panzootia."], 2,
      "Zoonosis: enfermedad que se transmite de los animales al hombre y viceversa, de forma directa o indirecta."],
    ["T13", "La lengua azul se transmite mediante un insecto del género Culicoides. Ese insecto actúa como:",
      ["Reservorio.", "Vector.", "Hospedador definitivo.", "Agente etiológico."], 1,
      "El vector transmite el agente patógeno, en este caso un virus, entre hospedadores."],
    ["T13", "Una enfermedad que afecta de forma habitual o permanente a los animales de una zona determinada se denomina:",
      ["Enzootia.", "Epizootia.", "Zoonosis.", "Pandemia."], 0,
      "La epizootia es un brote que afecta a muchos animales de forma repentina y extendida."],
    ["T13", "Respecto a las Agrupaciones de Defensa Sanitaria Ganadera de rumiantes, su ámbito territorial es:",
      ["Siempre provincial.", "El de una o más comarcas agrarias completas.", "El de la Comunidad Autónoma.", "Libre, a elección de los socios."], 1,
      "Lo establece el Real Decreto 842/2011 para las ADSG de rumiantes."],
    ["T13", "El transporte de sus animales al cebadero debe cumplir las normas de bienestar animal del:",
      ["Reglamento (CE) 1/2005.", "Reglamento (UE) 2017/625.", "Reglamento (CE) 178/2002.", "Reglamento (UE) 2016/429."], 0,
      "El Reglamento 1/2005 regula la protección de los animales durante el transporte."],
    ["T13", "En materia de bienestar animal, Manuel es responsable:",
      ["Solo de los animales de su propiedad.", "De los animales de su propiedad y de los que estén a su cargo, también de forma temporal.", "Solo cuando los animales están en la explotación.", "No tiene responsabilidad, al recaer en el veterinario."], 1,
      "La responsabilidad alcanza a quien tiene los animales a su cargo, aunque sea temporalmente."],
    ["T21", "Según la Ley 7/2010 para la Dehesa, se entiende por formación adehesada la superficie:",
      ["Agrícola con una fracción de cabida cubierta del arbolado entre el 5% y el 75%.", "Forestal con una fracción de cabida cubierta del arbolado entre el 5% y el 75%.", "Forestal con una fracción de cabida cubierta superior al 75%.", "Agrícola con una fracción de cabida cubierta superior al 75%."], 1,
      "Es superficie forestal, con un estrato arbolado (sobre todo encinas, alcornoques, quejigos o acebuches) que permite un estrato herbáceo para el ganado o la caza. Pregunta del examen de 2022-2023."],
    ["T21", "La Ley andaluza para la Dehesa es la:",
      ["Ley 2/1992.", "Ley 43/2003.", "Ley 7/2010.", "Ley 8/2003."], 2,
      "Ley 7/2010, de 14 de julio. La 2/1992 es la Forestal de Andalucía y la 43/2003 la estatal de Montes."],
    ["T21", "Para realizar quemas de restos de poda en la dehesa debe tener en cuenta que en Andalucía la época de peligro alto de incendios forestales abarca:",
      ["Del 1 de mayo al 30 de septiembre.", "Del 1 de junio al 15 de octubre.", "Del 15 de junio al 15 de septiembre.", "Todo el año."], 1,
      "Según la normativa de prevención de incendios forestales de Andalucía. En ese periodo el uso del fuego está muy restringido."],
    ["T10", "Conforme al Real Decreto 1048/2022, se considera agricultor activo de forma automática a quien en el año anterior percibió pagos directos por importe no superior a:",
      ["1.250 €", "2.500 €", "5.000 €", "10.000 €"], 2,
      "Los 1.250 € eran el umbral del antiguo régimen de pequeños agricultores (2015-2022)."],
    ["T10", "Manuel acredita la condición de agricultor activo porque:",
      ["Tiene más de 100 ha.", "Está afiliado a la Seguridad Social como trabajador agrario por cuenta propia.", "Tiene más de 100 UGM.", "Está inscrito en el REGA."], 1,
      "La afiliación a la Seguridad Social agraria es una de las vías de acreditación. La otra es que los ingresos agrarios supongan al menos el 25% de los totales."],
    ["T10", "La obligación de mantener la proporción de pastos permanentes respecto a la superficie agraria corresponde a la:",
      ["BCAM 1.", "BCAM 4.", "BCAM 6.", "RLG 1."], 0,
      "La BCAM 1 es el mantenimiento de los pastos permanentes basado en una proporción de referencia."],
    ["T10", "El ecorrégimen de pastoreo extensivo que solicita es:",
      ["Una medida de desarrollo rural plurianual.", "Un pago directo disociado anual financiado por el FEAGA.", "Una ayuda asociada a la producción.", "Un requisito de la condicionalidad."], 1,
      "Los ecorregímenes son pagos directos disociados (art. 16 del Reglamento 2021/2115), voluntarios para el agricultor."],
    ["T10", "Sobre la ayuda asociada a las vacas nodrizas, señale la FALSA:",
      ["Los animales deben estar identificados y registrados conforme al Reglamento (UE) 2016/429.", "La explotación debe estar inscrita en el REGA (Real Decreto 479/2004).", "El beneficiario queda excluido del requisito de agricultor activo.", "Es un pago directo asociado a la producción."], 2,
      "El requisito de agricultor activo se aplica a todos los pagos directos, incluidos los asociados. Pregunta muy parecida a una del examen de 2022-2023."],
    ["T10", "Los pagos directos que percibe Manuel se financian con cargo al:",
      ["FEADER.", "FEAGA.", "FEDER.", "FEMPA."], 1,
      "Los pagos directos (primer pilar) se financian con el FEAGA. El FEADER financia el desarrollo rural y el FEMPA la pesca."],
    ["T10", "El organismo pagador de las ayudas FEAGA y FEADER en Andalucía depende de la Consejería competente en agricultura. A nivel nacional, el FEGA es:",
      ["Organismo pagador solo de FEAGA.", "Organismo pagador de ámbito nacional para FEAGA y FEADER, respecto de las actuaciones de competencia estatal.", "Organismo de certificación.", "Autoridad de gestión del PEPAC en Andalucía."], 1,
      "Artículo 9 del Real Decreto 1046/2022. Pregunta del examen de 2022-2023."]
  ]);
})();
