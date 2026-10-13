// Banco de teoría, bloque A (75 preguntas). Redacción original.
// a = índice de la respuesta correcta (0=A, 1=B, 2=C, 3=D)
(function () {
  const P = (id, t, q, o, a, e) => window.BANCO.teoria.push({ id, t, q, o, a, e, bloque: "A" });

  // ---------- TEMA 1 ----------
  P("A01", "T1", "Según la clasificación territorial de la OCDE (1994), un municipio se considera rural cuando su densidad de población es inferior a:",
    ["100 habitantes/km²", "150 habitantes/km²", "200 habitantes/km²", "300 habitantes/km²"], 1,
    "La OCDE fija el umbral de ruralidad municipal en 150 hab/km². El de 100 hab/km² corresponde a otras metodologías y es un distractor habitual.");
  P("A02", "T1", "Conforme a la metodología OCDE, una región en la que entre el 15% y el 50% de su población reside en municipios rurales se clasifica como:",
    ["Predominantemente rural.", "Predominantemente urbana.", "Región intermedia.", "Región periurbana."], 2,
    "OCDE: más del 50% en municipios rurales = predominantemente rural; entre 15% y 50% = intermedia; menos del 15% = predominantemente urbana. Se aplica a regiones NUTS 3 (provincias), no NUTS 2.");
  P("A03", "T1", "De las siguientes provincias andaluzas, ¿cuál ha perdido población en lo que va de siglo XXI según el Padrón?",
    ["Almería.", "Málaga.", "Jaén.", "Sevilla."], 2,
    "Jaén es la provincia que pierde población en el siglo XXI. Almería es justo lo contrario: la que más crece en términos relativos.");
  P("A04", "T1", "La tasa de dependencia se calcula como:",
    ["(Población menor de 16 años + población de 65 y más años) / población de 16 a 64 años × 100.", "Población menor de 16 años / población de 16 a 64 años × 100.", "Población de 65 y más años / población menor de 16 años × 100.", "Población de 16 a 64 años / población total × 100."], 0,
    "Expresa cuántas personas potencialmente dependientes (jóvenes y mayores) hay por cada 100 en edad de trabajar. El cociente entre mayores de 65 y menores de 16 es el índice de envejecimiento.");
  P("A05", "T1", "Señale la afirmación FALSA sobre el territorio de Andalucía:",
    ["Su superficie es de unos 87.600 km².", "Ocupa en torno al 17% del territorio nacional.", "Es la Comunidad Autónoma más extensa de España.", "Es la Comunidad Autónoma más poblada de España."], 2,
    "Andalucía es la segunda comunidad en extensión, por detrás de Castilla y León, y la primera en población.");

  // ---------- TEMA 2 ----------
  P("A06", "T2", "Conforme a la CNAE-2025, la industria de la alimentación, las bebidas y el tabaco se encuadra en la Sección:",
    ["A", "B", "C", "D"], 2,
    "Sección C: Industria manufacturera, que incluye la industria agroalimentaria y la del tabaco. La Sección A es la agraria (agricultura, ganadería, silvicultura y pesca).");
  P("A07", "T2", "En la CNAE-2025, la Sección B corresponde a:",
    ["Industria manufacturera.", "Industrias extractivas.", "Suministro de energía eléctrica, gas y vapor.", "Construcción."], 1,
    "B = Industrias extractivas. C = Manufacturera. D = Energía. F = Construcción.");
  P("A08", "T2", "En la CNAE-2025, la actividad de la caza se incluye en la Sección A, División:",
    ["01", "02", "03", "No se incluye en la Sección A."], 0,
    "La División 01 es «Agricultura, ganadería, caza y servicios relacionados con las mismas». La 02 es silvicultura y la 03 pesca y acuicultura.");
  P("A09", "T2", "Los niveles de la CNAE-2025, ordenados de mayor a menor agregación, son:",
    ["Sección, grupo, división y clase.", "División, sección, clase y grupo.", "Sector, rama, grupo y clase.", "Sección, división, grupo y clase."], 3,
    "La CNAE se estructura en secciones (letra), divisiones (2 dígitos), grupos (3) y clases (4).");
  P("A10", "T2", "La contribución de los sectores primario, industria, construcción y servicios al VAB de Andalucía se aproxima a:",
    ["3%, 15%, 10% y 72%.", "7%, 10%, 6,5% y 76,5%.", "12%, 18%, 10% y 60%.", "7%, 20%, 13% y 60%."], 1,
    "El primario pesa en Andalucía en torno al 7% del VAB, más del doble que en España (≈3%). Los servicios superan las tres cuartas partes.");
  P("A11", "T2", "El PIB por habitante de Andalucía se sitúa, respecto de la media nacional, en torno al:",
    ["105%", "95%", "75%", "50%"], 2,
    "Andalucía está entre las comunidades con menor PIB per cápita, alrededor del 75% de la media de España.");

  // ---------- TEMA 3 ----------
  P("A12", "T3", "Según el Reglamento (CE) nº 138/2004 sobre las cuentas económicas de la agricultura, la Producción de la Rama Agraria se valora a:",
    ["Precios de mercado.", "Precios básicos.", "Coste de los factores.", "Precios constantes."], 1,
    "La PRA representa los bienes y servicios producidos en el periodo contable valorados a precios básicos: precio de productor más subvenciones a los productos y menos impuestos a los productos.");
  P("A13", "T3", "En las cuentas económicas de la agricultura, la Renta Agraria equivale a:",
    ["Valor Añadido Bruto a precios básicos.", "Valor Añadido Bruto menos consumos intermedios.", "Valor Añadido Neto al coste de los factores.", "Valor Añadido Neto a precios básicos menos otras subvenciones."], 2,
    "Renta Agraria = VANcf = VAN a precios básicos + otras subvenciones a la producción − otros impuestos a la producción. Remunera los factores tierra, capital y trabajo.");
  P("A14", "T3", "Indique la afirmación FALSA sobre las macromagnitudes agrarias:",
    ["La PRA menos los consumos intermedios es el VAB a precios básicos.", "El VAB a precios básicos menos las amortizaciones es el VAN a precios básicos.", "La Renta Agraria se obtiene sumando al VAB a precios básicos las otras subvenciones y restando los otros impuestos a la producción.", "Si a la Renta Agraria se le descuenta la remuneración de los asalariados se obtiene el excedente neto de explotación."], 2,
    "La Renta Agraria parte del VAN, no del VAB: antes hay que descontar las amortizaciones (consumo de capital fijo).");
  P("A15", "T3", "¿Qué provincia andaluza registra la mayor Renta Agraria en valor absoluto?",
    ["Sevilla.", "Córdoba.", "Almería.", "Jaén."], 2,
    "Almería lidera la renta agraria andaluza gracias a la horticultura intensiva, seguida de Sevilla. Cádiz ocupa el último lugar. Dato estadístico: contrástalo con el último Anuario.");
  P("A16", "T3", "En Andalucía, la Producción Vegetal supone aproximadamente qué porcentaje del valor de la Producción de la Rama Agraria:",
    ["40-45%", "55-60%", "65-70%", "80-85%"], 3,
    "La producción vegetal ronda el 80-85% y la animal en torno al 15%. En la UE el reparto está mucho más equilibrado.");
  P("A17", "T3", "El grupo de producciones con mayor aportación al valor de la Producción Vegetal andaluza es:",
    ["Hortalizas, plantones, flores y plantaciones.", "Aceite de oliva.", "Frutas.", "Cereales."], 0,
    "Las hortalizas y plantas (incluye flores y plantones) suponen cerca de un tercio de la producción agraria andaluza, por delante del aceite de oliva y las frutas.");

  // ---------- TEMA 4 ----------
  P("A18", "T4", "Señale qué rúbrica forma parte de la balanza de renta primaria:",
    ["Turismo y viajes.", "Rentas de la inversión.", "Transferencias personales (remesas).", "Exportaciones de bienes."], 1,
    "La renta primaria recoge la remuneración de asalariados y las rentas de la inversión. Las remesas son renta secundaria; turismo y bienes van en la balanza de bienes y servicios.");
  P("A19", "T4", "La tasa de cobertura del comercio exterior se calcula como:",
    ["Exportaciones − importaciones.", "Importaciones / exportaciones × 100.", "(Exportaciones + importaciones) / PIB × 100.", "Exportaciones / importaciones × 100."], 3,
    "Una tasa de cobertura superior al 100% indica superávit comercial. El cociente (exportaciones + importaciones) / PIB es el grado de apertura.");
  P("A20", "T4", "Según el ICEX, el principal país de destino de las exportaciones agroalimentarias andaluzas en 2024 fue:",
    ["Francia.", "Alemania.", "Reino Unido.", "Estados Unidos."], 1,
    "Alemania encabeza el ranking, seguida de Francia, Italia y Portugal. Dato estadístico: contrástalo con el último informe del ICEX.");
  P("A21", "T4", "El capítulo arancelario de mayor valor en las exportaciones agroalimentarias andaluzas de 2024 fue:",
    ["Grasas y aceites animales o vegetales.", "Frutas y frutos sin conservar.", "Legumbres y hortalizas sin conservar.", "Bebidas de todo tipo."], 0,
    "El aceite de oliva sitúa al capítulo 15 (grasas y aceites) en cabeza, por delante de hortalizas y frutas.");
  P("A22", "T4", "La Estrategia de Internacionalización de la Economía Española 2017-2027 se desarrolla mediante planes de acción de duración:",
    ["Cuatrienal.", "Anual.", "Bienal.", "Sexenal."], 2,
    "La Estrategia se ejecuta a través de planes de acción bienales. Su objetivo general es impulsar la internacionalización de la economía española.");

  // ---------- TEMA 5 ----------
  P("A23", "T5", "¿Cuál de los siguientes NO es un objetivo clásico de la política económica?",
    ["El pleno empleo.", "La estabilidad de precios.", "El equilibrio exterior.", "El aumento de la presión fiscal."], 3,
    "Los objetivos clásicos son crecimiento, pleno empleo, estabilidad de precios, equilibrio exterior y distribución de la renta. Los tributos son un instrumento, no un fin.");
  P("A24", "T5", "¿De qué instrumento de política económica carece un Estado miembro de la zona euro?",
    ["De la política fiscal.", "De la política de rentas.", "De la modificación del tipo de cambio de su moneda.", "De la política de empleo."], 2,
    "Con el euro, la política monetaria y cambiaria pasa al Eurosistema (BCE). El Estado conserva la política fiscal, de rentas y de empleo.");
  P("A25", "T5", "Según la Ley General Tributaria, los tributos se clasifican en:",
    ["Impuestos, tasas y contribuciones especiales.", "Impuestos directos, indirectos y especiales.", "Impuestos sobre la renta y sobre el valor añadido.", "Impuestos, tasas y cuotas fiscales."], 0,
    "Artículo 2.2 de la Ley 58/2003: los tributos se clasifican en tasas, contribuciones especiales e impuestos.");
  P("A26", "T5", "En Andalucía, la gestión de las políticas activas de empleo corresponde a:",
    ["El Servicio Público de Empleo Estatal (SEPE).", "El Servicio Andaluz de Empleo (SAE).", "El Ministerio de Trabajo, directamente.", "Las Diputaciones Provinciales."], 1,
    "Las políticas activas se transfirieron a la Comunidad Autónoma y las gestiona el SAE. El SEPE mantiene la gestión de las prestaciones y subsidios por desempleo.");
  P("A27", "T5", "El antiguo Plan de Empleo Rural (PER) se denomina actualmente:",
    ["Plan de Empleo Rural Andaluz.", "Subsidio Agrario Especial.", "Renta Agraria.", "Programa de Fomento de Empleo Agrario (PFEA)."], 3,
    "El PFEA financia obras de interés general en municipios con alta proporción de trabajadores eventuales agrarios. No es el subsidio ni la renta agraria, que son prestaciones distintas.");

  // ---------- TEMA 6 ----------
  P("A28", "T6", "Según el artículo 130.1 de la Constitución, los poderes públicos atenderán a la modernización y desarrollo de todos los sectores económicos y, en particular:",
    ["De la agricultura, la ganadería, la pesca y la artesanía, a fin de equiparar el nivel de vida de todos los españoles.", "De la industria y la energía, a fin de garantizar la competitividad.", "De la agricultura y el turismo, a fin de fijar población en el medio rural.", "Del medio rural y de las zonas de montaña, a fin de corregir desequilibrios territoriales."], 0,
    "Literal del artículo 130.1 CE. Las zonas de montaña aparecen en el 130.2, que les concede un tratamiento especial.");
  P("A29", "T6", "¿Cuál de las siguientes NO es una característica diferenciadora del sector agrario que justifique la intervención pública?",
    ["La incertidumbre en el comportamiento de la oferta.", "La elevada elasticidad-precio de la demanda de alimentos.", "La pérdida de peso del gasto en alimentación al crecer la renta (ley de Engel).", "La caída desproporcionada de precios ante aumentos de oferta (ley de King)."], 1,
    "La demanda de alimentos es rígida, es decir, inelástica. Esa rigidez, junto con la oferta incierta, explica la volatilidad de precios y rentas.");
  P("A30", "T6", "La ley de King establece que:",
    ["La proporción de renta destinada a alimentos disminuye al aumentar la renta.", "La oferta agraria es perfectamente elástica a corto plazo.", "Pequeños aumentos de la oferta agraria provocan caídas más que proporcionales de los precios.", "Los precios agrarios crecen siempre más que los industriales."], 2,
    "La caída del peso del gasto en alimentos al crecer la renta es la ley de Engel. King explica por qué una buena cosecha puede reducir los ingresos del agricultor.");
  P("A31", "T6", "Una ley de arrendamientos rústicos, desde el punto de vista de la política agraria de rentas y precios, se considera:",
    ["Una medida de mercado de efecto directo.", "Una ayuda directa a la renta.", "Una medida técnica de efecto inmediato.", "Una medida jurídica de efecto mediato."], 3,
    "Las normas sobre la tenencia de la tierra actúan sobre la estructura y la renta de forma indirecta y a medio plazo.");
  P("A32", "T6", "Según el Estatuto de Autonomía, la competencia de Andalucía en materia de agricultura y ganadería es:",
    ["Exclusiva, de acuerdo con las bases y la ordenación de la actuación económica general.", "Compartida, limitada al desarrollo de la legislación básica estatal.", "Ejecutiva, sin capacidad normativa.", "Exclusiva y sin sujeción a ninguna norma estatal."], 0,
    "Artículo 48 del Estatuto. Por eso la Junta no puede dictar normativa básica sobre la ordenación general de la economía agraria, que corresponde al Estado (art. 149.1.13ª CE).");

  // ---------- TEMA 7 ----------
  P("A33", "T7", "Señale el hecho que NO corresponde al periodo de la Segunda República:",
    ["La aprobación del Estatuto del Vino, que reconoció las denominaciones de origen.", "La Ley de Bases de la Reforma Agraria de 1932.", "La creación de las Confederaciones Hidrográficas.", "La creación del Instituto de Reforma Agraria."], 2,
    "Las Confederaciones Hidrográficas nacen en 1926, durante la Dictadura de Primo de Rivera (la primera fue la del Ebro).");
  P("A34", "T7", "La Ley de Colonización y Distribución de la Propiedad de las Zonas Regables se aprobó en:",
    ["1932", "1939", "1959", "1949"], 3,
    "La ley de 1949 fue el gran instrumento del Instituto Nacional de Colonización (creado en 1939) para transformar zonas en regadío.");
  P("A35", "T7", "¿Cuál de los siguientes hechos corresponde a la década de los 70?",
    ["La creación del Instituto Nacional de Colonización.", "La Ley de Seguros Agrarios Combinados.", "La construcción de la Red Nacional de Silos y Graneros.", "El Plan Nacional de Estabilización."], 1,
    "La Ley 87/1978 de Seguros Agrarios Combinados es de 1978. El INC es de 1939, la Red de Silos de los años 40-50 y el Plan de Estabilización de 1959.");
  P("A36", "T7", "Señale la afirmación FALSA sobre la Ley 8/1984 de Reforma Agraria de Andalucía:",
    ["Creó el Instituto Andaluz de Reforma Agraria (IARA).", "Estableció un impuesto sobre tierras infrautilizadas.", "La actuación de la Administración autonómica se efectuaría por comarcas.", "Incluye en un anexo la declaración de diez comarcas de reforma agraria."], 3,
    "La ley no contiene esa relación de comarcas: las comarcas de reforma agraria se declaraban mediante decreto posterior.");
  P("A37", "T7", "En 1950, el peso del sector primario en el PIB andaluz y en la población activa era aproximadamente de:",
    ["60% del PIB y 55% de los activos.", "25% del PIB y 55% de los activos.", "6,5% del PIB y 11% de los activos.", "40% del PIB y 70% de los activos."], 1,
    "La serie orientativa: 1900, ≈40% del PIB y 70% de los activos; 1950, ≈25% y 55%; 2000, ≈6,5% y 11%.");

  // ---------- TEMA 8 ----------
  P("A38", "T8", "El Tratado de Adhesión de España a las Comunidades Europeas se firmó el:",
    ["12 de junio de 1985.", "1 de enero de 1986.", "17 de febrero de 1986.", "28 de julio de 1977."], 0,
    "Se firmó en Madrid el 12 de junio de 1985 y la adhesión fue efectiva el 1 de enero de 1986. La solicitud formal es de julio de 1977.");
  P("A39", "T8", "Con carácter general, la duración del periodo transitorio de adaptación de la agricultura española a la PAC fue de:",
    ["5 años.", "7 años.", "10 años.", "12 años."], 1,
    "Siete años con carácter general. Algunos sectores, como las frutas y hortalizas, tuvieron un periodo de diez años.");
  P("A40", "T8", "Los Montantes Compensatorios de Adhesión (MCA) aplicados en el periodo transitorio:",
    ["Aumentaban progresivamente hasta el final del periodo.", "Solo se aplicaban a las importaciones de terceros países.", "Compensaban la diferencia de precios entre España y la Comunidad y se reducían progresivamente.", "Cubrían las diferencias arancelarias con terceros países."], 2,
    "Los MCA corregían la diferencia entre los precios institucionales españoles y comunitarios y se reducían conforme los precios se aproximaban.");
  P("A41", "T8", "Antes de la reforma de la Agenda 2000, el sector que más fondos del FEOGA-Garantía recibía en Andalucía era:",
    ["Cultivos herbáceos extensivos.", "Algodón.", "Ovino y caprino.", "Aceite de oliva."], 3,
    "La ayuda a la producción de aceite de oliva era la principal partida del FEOGA-Garantía en Andalucía.");
  P("A42", "T8", "¿Qué intervención de la PAC tuvo mayor presupuesto en Andalucía en el ejercicio FEAGA 2025?",
    ["Ecorregímenes.", "Ayuda básica a la renta para la sostenibilidad (ABRS).", "Ayuda complementaria a la renta para jóvenes agricultores.", "Intervención sectorial de frutas y hortalizas."], 1,
    "La ABRS, heredera del pago básico, es con diferencia la intervención con mayor dotación.");

  // ---------- TEMA 9 ----------
  P("A43", "T9", "La Agenda 2030 para el Desarrollo Sostenible contiene 17 objetivos y un total de:",
    ["8 metas.", "17 metas.", "169 metas.", "232 metas."], 2,
    "17 ODS y 169 metas, aprobados por la Asamblea General de Naciones Unidas en septiembre de 2015. 232 es el número aproximado de indicadores.");
  P("A44", "T9", "La Estrategia «De la granja a la mesa» fija para 2030 reducir el uso y el riesgo de los plaguicidas químicos en un:",
    ["20%", "25%", "30%", "50%"], 3,
    "Objetivos 2030: −50% plaguicidas químicos, −50% pérdidas de nutrientes, −20% fertilizantes, −50% antimicrobianos en ganadería y 25% de superficie ecológica.");
  P("A45", "T9", "Según el artículo 192 del TFUE, las acciones de la Unión para alcanzar sus objetivos medioambientales las deciden:",
    ["La Comisión, por unanimidad.", "El Parlamento Europeo y el Consejo, con arreglo al procedimiento legislativo ordinario, previa consulta al Comité Económico y Social y al Comité de las Regiones.", "El Consejo Europeo, por mayoría cualificada.", "El Parlamento Europeo, mediante procedimiento legislativo especial."], 1,
    "La regla general es el procedimiento legislativo ordinario, con consulta al CESE y al CdR.");
  P("A46", "T9", "Según el artículo 42 de la Ley 42/2007, la Red Natura 2000 en España está compuesta por:",
    ["Solo Zonas de Especial Protección para las Aves (ZEPA).", "Lugares de Importancia Comunitaria (LIC) y Espacios Naturales Protegidos.", "LIC, hasta su transformación en Zonas Especiales de Conservación (ZEC), las ZEC y las ZEPA.", "ZEC y Reservas de la Biosfera."], 2,
    "La red la forman los LIC (hasta que se declaran ZEC), las ZEC y las ZEPA.");
  P("A47", "T9", "Según la Ley 7/2007 de Gestión Integrada de la Calidad Ambiental, el informe preceptivo y determinante del órgano ambiental con el que concluye la evaluación ambiental estratégica simplificada es:",
    ["El informe ambiental estratégico.", "La declaración ambiental estratégica.", "El estudio ambiental estratégico.", "El documento de alcance."], 0,
    "El informe ambiental estratégico cierra la evaluación simplificada; la declaración ambiental estratégica, la ordinaria. El estudio ambiental estratégico lo elabora el promotor.");
  P("A48", "T9", "El objetivo principal del Pacto Verde Europeo (COM(2019) 640) es alcanzar la neutralidad climática en:",
    ["2030", "2040", "2050", "2060"], 2,
    "Neutralidad climática en 2050. Para 2030 la Ley Europea del Clima fija reducir las emisiones netas al menos un 55% respecto a 1990.");

  // ---------- TEMA 10 ----------
  P("A49", "T10", "La condicionalidad reforzada de la PAC 2023-2027 se regula en el:",
    ["Reglamento (UE) 2021/2115.", "Reglamento (UE) 2021/2116.", "Reglamento (UE) 2021/2117.", "Reglamento (UE) 1308/2013."], 0,
    "El 2021/2115 (planes estratégicos) regula la condicionalidad y su anexo III recoge RLG y BCAM. El 2021/2116 regula financiación, gestión y seguimiento, y el 2021/2117 modifica la OCM.");
  P("A50", "T10", "¿Qué novedad introduce por primera vez el Reglamento (UE) 2021/2115?",
    ["La condicionalidad estratégica.", "La condicionalidad simplificada.", "La condicionalidad social.", "El pago verde o greening."], 2,
    "La condicionalidad social liga las ayudas al cumplimiento de normas laborales. En España la regula, junto con la reforzada, el Real Decreto 1049/2022.");
  P("A51", "T10", "¿Cuál de los siguientes elementos NO forma parte de la arquitectura verde de la PAC 2023-2027?",
    ["La condicionalidad reforzada.", "Los ecorregímenes.", "Los compromisos medioambientales, climáticos y otros compromisos de gestión.", "El pago para prácticas beneficiosas para el clima y el medio ambiente (greening)."], 3,
    "El greening existió entre 2015 y 2022. En la nueva PAC sus prácticas se integran en la condicionalidad reforzada y los ecorregímenes.");
  P("A52", "T10", "Sobre la política de desarrollo rural en la reforma de la Agenda 2000, señale la FALSA:",
    ["El desarrollo rural pasa a constituir el segundo pilar de la PAC.", "Pasa a financiarse con el fondo FEADER.", "Se prevé la modulación de las ayudas directas, voluntaria para los Estados miembros.", "Su presupuesto sigue muy por debajo del primer pilar."], 1,
    "El FEADER se crea con el Reglamento (CE) 1290/2005 y se aplica desde 2007. Con la Agenda 2000 el desarrollo rural se financiaba con el FEOGA (Garantía y Orientación).");
  P("A53", "T10", "¿Cuál de los siguientes es un objetivo específico de la PAC según el Reglamento (UE) 2021/2115?",
    ["Promover el desarrollo sostenible y la gestión eficiente de recursos naturales tales como el agua, el suelo y el aire.", "Contribuir a la mitigación del cambio climático, priorizando la reducción de emisiones frente a la adaptación.", "Garantizar precios mínimos de intervención para los productos agrarios.", "Aumentar un 20% la superficie de regadío de la Unión."], 0,
    "Es el objetivo específico e). El objetivo climático d) abarca mitigación y adaptación sin priorizar una sobre otra.");
  P("A54", "T10", "Según el artículo 32 del Reglamento (UE) 1305/2013, NO es una categoría de zona con limitaciones naturales u otras limitaciones específicas:",
    ["Zonas de montaña.", "Zonas distintas de las de montaña con limitaciones naturales significativas.", "Otras zonas afectadas por limitaciones específicas.", "Zonas con desventajas derivadas de requisitos obligatorios."], 3,
    "Las desventajas por requisitos obligatorios (Natura 2000, Directiva Marco del Agua) se compensan por otra vía, la del artículo 30.");

  // ---------- TEMA 12 ----------
  P("A55", "T12", "El Programa Marco de Investigación e Innovación «Horizonte Europa» se estableció mediante:",
    ["El Reglamento (UE) 2021/695.", "El Reglamento (UE) 1291/2013.", "La Decisión (UE) 2021/764.", "El Reglamento (UE) 2021/2115."], 0,
    "El 2021/695 crea el programa marco. La Decisión 2021/764 aprueba el programa específico. El 1291/2013 creó Horizonte 2020.");
  P("A56", "T12", "El Pilar II de Horizonte Europa se denomina:",
    ["Ciencia excelente.", "Europa innovadora.", "Desafíos mundiales y competitividad industrial europea.", "Ampliar la participación y reforzar el Espacio Europeo de Investigación."], 2,
    "Pilar I: Ciencia excelente. Pilar II: Desafíos mundiales y competitividad industrial europea, que recibe más de la mitad del presupuesto. Pilar III: Europa innovadora. Además hay una parte horizontal sobre ampliar la participación y reforzar el EEI.");
  P("A57", "T12", "El INIA es en la actualidad:",
    ["Un organismo autónomo adscrito al Ministerio de Agricultura, Pesca y Alimentación.", "Una agencia de la Junta de Andalucía.", "Un organismo dependiente del Ministerio de Universidades.", "El Instituto Nacional de Investigación y Tecnología Agraria y Alimentaria, centro nacional integrado en el CSIC."], 3,
    "Desde 2021 el INIA está integrado en la Agencia Estatal CSIC como centro nacional (INIA-CSIC).");
  P("A58", "T12", "La ley andaluza de la Ciencia y el Conocimiento es la:",
    ["Ley 14/2011.", "Ley 16/2007.", "Ley 1/2003.", "Ley 2/2011."], 1,
    "La Ley 16/2007 es la andaluza. La Ley 14/2011 es la estatal de la Ciencia, la Tecnología y la Innovación. La 1/2003 crea el IFAPA.");
  P("A59", "T12", "El IFAPA fue creado mediante:",
    ["El Decreto 359/2003, que aprueba sus Estatutos.", "El Decreto 157/2022, de estructura de la Consejería.", "La Ley 1/2003, de 10 de abril.", "La Ley 2/2011, de la Calidad Agroalimentaria y Pesquera de Andalucía."], 2,
    "Lo creó la Ley 1/2003. El Decreto 359/2003 aprobó posteriormente sus Estatutos.");
  P("A60", "T12", "Los Grupos Operativos de la Asociación Europea para la Innovación (AEI-AGRI) se financian con cargo al:",
    ["FEAGA.", "FEADER.", "Fondo Social Europeo Plus.", "Fondo de Cohesión."], 1,
    "La cooperación para la innovación se financia con el FEADER. La AEI-AGRI persigue una agricultura que produzca más con menos recursos y menor impacto ambiental.");

  // ---------- TEMA 13 ----------
  P("A61", "T13", "Según la Ley 43/2002 de sanidad vegetal, se entiende por plaga:",
    ["Cualquier especie, raza o biotipo vegetal o animal o agente patógeno dañino para los vegetales o productos vegetales.", "Únicamente los insectos dañinos para los cultivos.", "Los organismos nocivos animales dañinos para productos destinados al consumo humano.", "Los agentes patógenos de origen vírico o bacteriano."], 0,
    "La definición legal es amplia: abarca cualquier organismo vegetal o animal y los agentes patógenos.");
  P("A62", "T13", "Respecto al Reglamento (CE) 1107/2009 sobre comercialización de productos fitosanitarios, señale la FALSA:",
    ["Las sustancias activas se aprueban a nivel de la Unión.", "Los productos fitosanitarios los autorizan los Estados miembros.", "La autorización de productos fitosanitarios corresponde exclusivamente a la Comisión Europea.", "Prevé un sistema de autorización por zonas y de reconocimiento mutuo."], 2,
    "La UE aprueba las sustancias activas y los Estados miembros autorizan los productos formulados, con un sistema zonal (España está en la zona sur).");
  P("A63", "T13", "Según el Real Decreto 1311/2012, de uso sostenible de productos fitosanitarios, señale la correcta:",
    ["La gestión de plagas en agricultura ecológica no cumple la gestión integrada de plagas.", "La gestión integrada de plagas prioriza los métodos químicos.", "Los asesores no necesitan inscribirse en el ROPO.", "Se considera que la producción integrada cumple la gestión integrada de plagas."], 3,
    "Tanto la producción integrada como la ecológica se consideran conformes con la GIP. La GIP prioriza métodos no químicos, y los asesores sí se inscriben en el ROPO.");
  P("A64", "T13", "El carné de usuario profesional de productos fitosanitarios:",
    ["Tiene 3 niveles y una validez de 5 años.", "Tiene 4 niveles (básico, cualificado, fumigador y piloto aplicador) y una validez de 10 años.", "Tiene 5 niveles y una validez de 10 años.", "Tiene 2 niveles y una validez indefinida."], 1,
    "Real Decreto 1311/2012: cuatro niveles de capacitación y validez de 10 años, renovable.");
  P("A65", "T13", "Según el artículo 107 del Reglamento (UE) 2016/2031, de medidas de protección contra las plagas de los vegetales, la Comisión estará asistida por:",
    ["El Comité de las Regiones.", "El Comité de Agricultura de la FAO.", "El Comité Permanente de Vegetales, Animales, Alimentos y Piensos.", "Grupos de expertos de cada Estado miembro."], 2,
    "El Comité Permanente (conocido como PAFF Committee) asiste a la Comisión en sanidad vegetal, animal y seguridad alimentaria.");

  // ---------- TEMA 14 ----------
  P("A66", "T14", "En producción vegetal ecológica, la cantidad total de estiércol animal aplicada no podrá exceder de:",
    ["150 kg de nitrógeno por hectárea y año.", "210 kg de nitrógeno por hectárea y año.", "170 kg de nitrógeno por hectárea y año.", "250 kg de nitrógeno por hectárea y año."], 2,
    "Límite de 170 kg N/ha/año, el mismo que la Directiva de nitratos en zonas vulnerables y que el que define la carga ganadera máxima.");
  P("A67", "T14", "Según el Reglamento (UE) 2018/848, el periodo de conversión de los cultivos perennes distintos de los forrajes, como el olivar, es de:",
    ["Dos años antes de la siembra.", "Tres años antes de la primera cosecha de productos ecológicos.", "Doce meses desde la notificación.", "Cinco años en todo caso."], 1,
    "Perennes: 3 años antes de la primera cosecha. Anuales: 2 años antes de la siembra. Pastos y forrajes perennes: 2 años antes de su uso como pienso.");
  P("A68", "T14", "El periodo de conversión específico de los animales ovinos y caprinos es de:",
    ["6 semanas.", "10 semanas.", "6 meses.", "12 meses."], 2,
    "Ovinos, caprinos, porcinos y animales lecheros: 6 meses. Bovinos y équidos para carne: 12 meses y al menos tres cuartas partes de su vida. Aves de carne: 10 semanas. Ponedoras: 6 semanas.");
  P("A69", "T14", "Sobre las normas de producción vegetal del anexo II, parte I, del Reglamento (UE) 2018/848, señale la FALSA:",
    ["Cuando las necesidades nutricionales no puedan satisfacerse con las medidas ecológicas, se utilizarán fertilizantes nitrogenados minerales.", "Queda prohibida la producción hidropónica.", "Se recurrirá a prácticas que mantengan o incrementen la materia orgánica del suelo.", "Para la producción de plantas solo se usarán, con excepciones, materiales de reproducción ecológicos."], 0,
    "Los fertilizantes nitrogenados minerales están prohibidos en ecológico. Solo se admiten los insumos autorizados de la lista positiva.");
  P("A70", "T14", "El Registro General de Operadores Ecológicos (REGOE) fue creado por:",
    ["El Real Decreto 759/1988.", "El Decreto 166/2003.", "El Reglamento (UE) 2018/848.", "El Real Decreto 833/2014."], 3,
    "El Real Decreto 833/2014 crea el REGOE, que integra los registros de operadores de las comunidades autónomas.");

  // ---------- TEMA 21 ----------
  P("A71", "T21", "Según el Tratado de Funcionamiento de la UE, en el ámbito forestal:",
    ["La Unión tiene competencia exclusiva.", "La Unión no dispone de una política forestal común.", "Existe una Organización Común de Mercados de productos forestales.", "La competencia es exclusiva de las regiones."], 1,
    "No hay política forestal común. La UE actúa a través de otras políticas (desarrollo rural, medio ambiente, clima) y de la Estrategia forestal de la UE para 2030.");
  P("A72", "T21", "La comercialización de los materiales forestales de reproducción se regula a escala europea mediante:",
    ["La Directiva 1999/105/CE.", "La Directiva 92/43/CEE.", "La Directiva 2009/147/CE.", "La Directiva 2000/60/CE."], 0,
    "La 92/43/CEE es la de Hábitats, la 2009/147/CE la de Aves y la 2000/60/CE la Directiva Marco del Agua.");
  P("A73", "T21", "La Ley 43/2003, de 21 de noviembre, de Montes:",
    ["No tiene carácter de legislación básica.", "Atribuye al Estado la gestión de todos los montes públicos.", "Crea el Consejo Forestal Nacional.", "Regula únicamente los montes de propiedad privada."], 2,
    "La Ley de Montes es mayoritariamente básica y crea el Consejo Forestal Nacional como órgano consultivo.");
  P("A74", "T21", "El Plan Forestal Andaluz fue aprobado:",
    ["Por la Ley 2/1992, Forestal de Andalucía.", "Por Acuerdo del Consejo de Gobierno de 7 de febrero de 1989.", "Por Decreto 208/1997, que aprueba el Reglamento Forestal.", "Por Acuerdo del Parlamento de Andalucía de 2003."], 1,
    "El Plan (1989) es anterior a la Ley Forestal de Andalucía (1992). Supuso un cambio de orientación respecto a la política repobladora de décadas anteriores.");
  P("A75", "T21", "Según la Ley 5/2023, de pesca sostenible e investigación pesquera, son aguas interiores:",
    ["Las aguas lacustres y fluviales situadas por dentro de las líneas de costa.", "Las aguas no salobres situadas dentro de las 12 millas náuticas.", "Las aguas comprendidas entre las 12 y las 200 millas.", "Las aguas marítimas comprendidas entre las líneas de base, como límite externo, y la costa y la desembocadura de los ríos, como límite interno."], 3,
    "Las aguas interiores son marítimas: quedan por dentro de las líneas de base. En ellas la Comunidad Autónoma tiene competencia sobre la pesca marítima.");
})();
