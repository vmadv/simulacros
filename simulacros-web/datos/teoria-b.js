// Banco de teoría, bloque B (75 preguntas). Redacción original.
(function () {
  const P = (id, t, q, o, a, e) => window.BANCO.teoria.push({ id, t, q, o, a, e, bloque: "B" });

  // ---------- TEMA 1 ----------
  P("B01", "T1", "Tras Sevilla, la segunda provincia andaluza más poblada es:",
    ["Cádiz.", "Málaga.", "Granada.", "Córdoba."], 1,
    "Orden aproximado: Sevilla, Málaga, Cádiz, Granada, Córdoba, Almería, Jaén y Huelva, que es la menos poblada.");
  P("B02", "T1", "La provincia andaluza que más ha aumentado proporcionalmente su población en el siglo XXI es:",
    ["Almería.", "Cádiz.", "Granada.", "Sevilla."], 0,
    "Almería crece con fuerza por la agricultura intensiva y la inmigración. Es también la provincia con menor edad media.");
  P("B03", "T1", "En relación con la edad media de la población andaluza, señale la correcta:",
    ["Es superior a la media de España.", "La provincia con mayor edad media es Almería.", "La edad media de las mujeres es superior a la de los hombres.", "Supera los 50 años."], 2,
    "La mayor esperanza de vida femenina eleva su edad media. Andalucía es algo más joven que la media nacional, y Almería es la provincia más joven.");
  P("B04", "T1", "El crecimiento real de una población es igual a:",
    ["Natalidad menos mortalidad.", "Saldo vegetativo más saldo migratorio.", "Mortalidad menos natalidad.", "Tasa de natalidad menos tasa de mortalidad."], 1,
    "El saldo vegetativo o natural (nacimientos − defunciones) más el saldo migratorio (inmigrantes − emigrantes) da el crecimiento real.");
  P("B05", "T1", "La formación, mantenimiento, revisión y custodia del Padrón municipal de habitantes corresponde a:",
    ["El Instituto Nacional de Estadística.", "El Instituto de Estadística y Cartografía de Andalucía.", "El Ayuntamiento.", "La Diputación Provincial."], 2,
    "Artículo 17 de la Ley 7/1985 de Bases del Régimen Local. El INE coordina y obtiene las cifras oficiales. El Padrón es un registro administrativo de actualización continua; el Censo es una operación estadística.");

  // ---------- TEMA 2 ----------
  P("B06", "T2", "Conforme a la CNAE-2025, la industria del tabaco es una industria:",
    ["Agraria (Sección A).", "Extractiva (Sección B).", "Manufacturera (Sección C).", "De servicios (Sección G)."], 2,
    "La elaboración de productos de tabaco es una división de la Sección C, igual que la alimentación y las bebidas.");
  P("B07", "T2", "En la CNAE-2025, la construcción corresponde a la Sección:",
    ["D", "E", "F", "H"], 2,
    "D = energía, E = agua y residuos, F = construcción, H = transporte y almacenamiento.");
  P("B08", "T2", "El Producto Interior Bruto de Andalucía a precios corrientes se sitúa en la actualidad en torno a (millones de euros):",
    ["95.000", "150.000", "215.000", "400.000"], 2,
    "Ronda los 210.000-220.000 M€, aproximadamente el 13% del PIB español. Dato estadístico: contrástalo con la Contabilidad Regional más reciente.");
  P("B09", "T2", "Por el valor de su Producción de la Rama Agraria, dentro de la UE-27 España ocupa el:",
    ["Primer lugar.", "Segundo lugar.", "Tercer lugar.", "Cuarto lugar."], 3,
    "Por detrás de Francia, Alemania e Italia. En producción vegetal España tiene un peso relativo mayor que en la animal.");
  P("B10", "T2", "Andalucía destaca por su aportación a los efectivos ganaderos de la UE-27 principalmente en la especie:",
    ["Porcina.", "Ovina.", "Caprina.", "Bovina."], 2,
    "Andalucía es una de las principales regiones caprinas de Europa. Es también la primera comunidad española en censo y en leche de cabra.");
  P("B11", "T2", "¿Cuál de los siguientes NO es una división de la Sección A de la CNAE-2025?",
    ["Agricultura, ganadería, caza y servicios relacionados con las mismas.", "Silvicultura y explotación forestal.", "Pesca y acuicultura.", "Industria de la alimentación."], 3,
    "La Sección A tiene tres divisiones: 01, 02 y 03. La industria de la alimentación es una división de la Sección C.");

  // ---------- TEMA 3 ----------
  P("B12", "T3", "El sistema de cuentas actualmente vigente en la UE para la elaboración de las cuentas económicas es el:",
    ["SEC-95", "SEC-2000", "SEC-2010", "SEC-2014"], 2,
    "El SEC-2010 está regulado por el Reglamento (UE) 549/2013 y se aplica desde 2014, lo que explica el distractor «SEC-2014».");
  P("B13", "T3", "En Andalucía, la Producción Animal supone aproximadamente qué porcentaje del valor de la Producción de la Rama Agraria:",
    ["5%", "15%", "30%", "50%"], 1,
    "En torno al 15%, frente a más del 35% en España y cerca del 40% en la UE. Sevilla es la provincia con mayor valor de producción animal.");
  P("B14", "T3", "La producción andaluza de aceite de oliva respecto de la española se sitúa aproximadamente en:",
    ["45-55%", "55-65%", "65-75%", "80-85%"], 3,
    "Andalucía aporta en torno a cuatro de cada cinco toneladas de aceite producidas en España.");
  P("B15", "T3", "La Renta Agraria de Andalucía representa, respecto de la Renta Agraria de España, aproximadamente:",
    ["La mitad.", "Un tercio.", "Un cuarto.", "Una décima parte."], 1,
    "Andalucía aporta en torno a un tercio de la renta agraria nacional, lo que la convierte en la primera comunidad.");
  P("B16", "T3", "Conforme al Reglamento (CE) 138/2004, ¿qué concepto NO forma parte de la producción de las unidades de actividad económica agrarias?",
    ["El reempleo de productos vegetales para la alimentación animal en la propia unidad.", "El autoconsumo.", "Los bienes de capital fijo producidos por cuenta propia.", "Los consumos intermedios."], 3,
    "Los consumos intermedios son insumos que se restan de la producción para obtener el VAB, así que no forman parte de ella.");
  P("B17", "T3", "La importancia del sector lácteo en el valor de la Producción de la Rama Agraria es mayor en:",
    ["La Unión Europea.", "España.", "Andalucía.", "Es igual en los tres ámbitos."], 0,
    "En la UE la leche es una de las primeras producciones. En España y, sobre todo, en Andalucía pesa mucho menos frente a frutas, hortalizas y aceite.");

  // ---------- TEMA 4 ----------
  P("B18", "T4", "En relación con la Balanza de Pagos y la Posición de Inversión Internacional (PII), señale la FALSA:",
    ["Ambas resumen las relaciones económicas entre residentes y no residentes.", "La PII muestra el valor de los activos y pasivos financieros frente al exterior durante un periodo.", "Por construcción contable, el saldo global de la Balanza de Pagos es nulo.", "Al hablar de déficit o superávit de la Balanza de Pagos se alude a alguna de sus sub-balanzas."], 1,
    "La PII es un stock referido a una fecha concreta. La Balanza de Pagos, en cambio, recoge flujos de un periodo.");
  P("B19", "T4", "Las transferencias personales (remesas de emigrantes) se registran en la:",
    ["Balanza de bienes.", "Balanza de renta primaria.", "Balanza de renta secundaria.", "Cuenta financiera."], 2,
    "Renta secundaria: transferencias corrientes sin contrapartida, como las remesas o la cooperación internacional.");
  P("B20", "T4", "En 2024, las exportaciones agroalimentarias y pesqueras de España alcanzaron un valor próximo a:",
    ["45.000 M€", "55.000 M€", "65.000 M€", "75.000 M€"], 3,
    "Fueron unas cifras récord, con un amplio superávit comercial. Dato estadístico: contrástalo con el informe anual del MAPA.");
  P("B21", "T4", "Las exportaciones agroalimentarias de Andalucía alcanzaron en 2024 un valor aproximado de:",
    ["10.000 M€", "16.000 M€", "22.000 M€", "30.000 M€"], 1,
    "Andalucía es la primera comunidad exportadora agroalimentaria. Sevilla, Almería y Huelva lideran por provincias. Dato estadístico: contrástalo con el ICEX.");
  P("B22", "T4", "La Comunicación de la Comisión «Revisión de la política comercial» (2021) fija tres objetivos esenciales. ¿Cuál NO es uno de ellos?",
    ["Respaldar la recuperación y transformación de la economía en línea con los objetivos ecológicos y digitales.", "Perfilar normas mundiales para una globalización más sostenible y justa.", "Incrementar la capacidad de la UE para defender sus intereses y hacer valer sus derechos.", "Incrementar el volumen de exportaciones de los sectores de mayor valor añadido."], 3,
    "La política comercial «abierta, sostenible y firme» se centra en esos tres ejes. No fija objetivos cuantitativos de exportación.");

  // ---------- TEMA 5 ----------
  P("B23", "T5", "La cuantía del subsidio por desempleo para trabajadores eventuales agrarios de Andalucía y Extremadura equivale al:",
    ["50% del IPREM.", "80% del IPREM.", "100% del SMI.", "75% del SMI."], 1,
    "El subsidio agrario se fija en el 80% del IPREM. La prestación contributiva tiene una cuantía mínima y una máxima vinculadas al IPREM.");
  P("B24", "T5", "El llamado «precio del dinero» en la zona euro es:",
    ["La tasa de inflación anual.", "El Euríbor, fijado directamente por el BCE.", "El tipo de interés oficial al que el banco central presta a las entidades de crédito, fijado por el BCE.", "El coeficiente de caja del sistema bancario."], 2,
    "El BCE fija los tipos oficiales. El Euríbor es un índice de mercado interbancario que el BCE no fija, aunque sí influye en él.");
  P("B25", "T5", "La Estrategia para la Transformación Económica de Andalucía (ETEA), documento de planificación económica general, tiene como horizonte:",
    ["2020", "2025", "2027", "2030"], 2,
    "La ETEA abarca 2021-2027, en coherencia con el marco financiero plurianual de la UE. Los planes sectoriales deben ser coherentes con ella.");
  P("B26", "T5", "Sobre la protección por desempleo, señale la FALSA:",
    ["El Salario Mínimo Interprofesional es un instrumento de la política de rentas.", "La prestación contributiva no tiene tope máximo y depende solo de lo cotizado.", "El subsidio agrario equivale al 80% del IPREM.", "Las prestaciones por desempleo las gestiona el SEPE."], 1,
    "La prestación contributiva tiene una cuantía máxima y una mínima, ambas referidas al IPREM.");
  P("B27", "T5", "¿Qué prestaciones asistenciales pueden cubrir a un desempleado que ha agotado la prestación contributiva en Andalucía?",
    ["Solo la prestación contributiva prorrogada.", "Solo el Ingreso Mínimo Vital, incompatible con cualquier ayuda autonómica.", "El subsidio por desempleo, el Ingreso Mínimo Vital o la Renta Mínima de Inserción Social de Andalucía.", "Ninguna, al haber agotado la prestación."], 2,
    "Existen tres niveles asistenciales: el subsidio estatal, el IMV estatal y la renta mínima autonómica, compatibles en los términos que fija su normativa.");

  // ---------- TEMA 6 ----------
  P("B28", "T6", "La ley de Engel afirma que:",
    ["Al aumentar la renta per cápita, disminuye la proporción de la renta gastada en alimentos.", "Al aumentar la oferta, los precios caen más que proporcionalmente.", "La oferta agraria se ajusta al precio con un año de retraso.", "Los costes agrarios crecen más que los precios percibidos."], 0,
    "La caída más que proporcional de precios ante aumentos de oferta es la ley de King, y el ajuste de la oferta con retraso describe el modelo de la telaraña.");
  P("B29", "T6", "Dentro de la industria manufacturera española, la industria agroalimentaria:",
    ["Tiene una balanza comercial negativa.", "Es el primer sector industrial.", "Es superada por la industria pesada en empleo.", "Representa menos del 5% de la cifra de negocios industrial."], 1,
    "La agroalimentaria es el primer sector industrial por cifra de negocios y empleo, con balanza comercial positiva.");
  P("B30", "T6", "La superficie de España dedicada a actividades agrícolas o ganaderas (SAU) supone aproximadamente:",
    ["Un tercio del territorio.", "Casi la mitad del territorio.", "Dos tercios del territorio.", "Tres cuartas partes del territorio."], 1,
    "Unos 24 millones de hectáreas de SAU sobre 50,6 millones de superficie geográfica, en torno al 47%.");
  P("B31", "T6", "Según el artículo 130.2 de la Constitución, se dispensará un tratamiento especial a:",
    ["Las zonas regables.", "Las zonas de montaña.", "Las comarcas de reforma agraria.", "Las zonas desfavorecidas por despoblación."], 1,
    "El 130.2 CE prevé un tratamiento especial a las zonas de montaña para equiparar el nivel de vida.");
  P("B32", "T6", "La fijación de precios de intervención y la compra pública de excedentes son instrumentos de política agraria de tipo:",
    ["Estructural.", "De mercado y precios.", "De desarrollo rural.", "Agroambiental."], 1,
    "Actúan directamente sobre el mercado y la formación de precios. Las medidas estructurales actúan sobre explotaciones, tierra e infraestructuras.");

  // ---------- TEMA 7 ----------
  P("B33", "T7", "El Estatuto del Vino de 1932:",
    ["Fue aprobado durante la Dictadura de Primo de Rivera.", "Reconoció por primera vez las denominaciones de origen y estuvo vigente hasta 1970.", "Permitía y fomentaba el riego del viñedo.", "Fue derogado al ingresar España en la CEE."], 1,
    "Aprobado durante la Segunda República, prohibía el riego del viñedo y lo sustituyó la Ley 25/1970, Estatuto de la Viña, del Vino y de los Alcoholes.");
  P("B34", "T7", "El Instituto Nacional de Colonización se creó en:",
    ["1932", "1939", "1949", "1971"], 1,
    "Se creó en 1939. En 1971 se fusionó con el Servicio de Concentración Parcelaria para formar el IRYDA.");
  P("B35", "T7", "Respecto a la agricultura española en la década de los 50, señale la FALSA:",
    ["El racionamiento de alimentos se mantuvo durante toda la década.", "Al final de la década se introducen medidas liberalizadoras con el Plan de Estabilización de 1959.", "El Instituto Nacional de Colonización desarrolla sus principales actuaciones.", "La abundante mano de obra y el autoconsumo marcan la última etapa de la agricultura tradicional."], 0,
    "Las cartillas de racionamiento se suprimieron en 1952.");
  P("B36", "T7", "En el apartado agrario de los Pactos de la Moncloa (1977) NO se contemplaron actuaciones en materia de:",
    ["Arrendamientos rústicos.", "Reforma y desarrollo agrario.", "Seguros agrarios.", "Productos fitosanitarios."], 3,
    "De aquellos compromisos salieron la Ley de Seguros Agrarios Combinados (1978), la de Fincas Manifiestamente Mejorables (1979) y la de Arrendamientos Rústicos (1980).");
  P("B37", "T7", "La Ley sobre Fincas Manifiestamente Mejorables de 1979:",
    ["Derogó la Ley de Reforma y Desarrollo Agrario de 1973.", "Se promulgó en cumplimiento de los Pactos de la Moncloa.", "Creó el Instituto Andaluz de Reforma Agraria.", "Incorporó por primera vez el concepto de función social de la propiedad."], 1,
    "Fue uno de los desarrollos de los Pactos de la Moncloa. La función social de la propiedad ya figuraba en la legislación anterior.");

  // ---------- TEMA 8 ----------
  P("B38", "T8", "En relación con la adhesión de España a las Comunidades Europeas, señale la FALSA:",
    ["El Tratado se firmó en junio de 1985.", "La adhesión fue efectiva el 1 de enero de 1986.", "La Comunidad pasó de 10 a 12 miembros con la entrada simultánea de España y Grecia.", "En febrero de 1986 se firmó el Acta Única Europea."], 2,
    "España entró junto con Portugal. Grecia lo había hecho en 1981.");
  P("B39", "T8", "El Mecanismo Complementario de los Intercambios (MCI) aplicado durante el periodo transitorio:",
    ["Compensaba las diferencias de precios entre España y la Comunidad.", "Se aplicaba a productos sensibles para evitar perturbaciones por importaciones excesivas.", "Suprimía de inmediato todos los aranceles.", "Solo afectaba a las exportaciones a terceros países."], 1,
    "Fijaba techos indicativos de intercambio para productos sensibles, en ambos sentidos. La compensación de precios era función de los MCA.");
  P("B40", "T8", "La revisión intermedia de la PAC de 2003 introdujo un nuevo modelo de apoyo basado en:",
    ["El pago único, la condicionalidad y la modulación.", "El pago básico, el pago verde y la modulación.", "Los precios de intervención y las cuotas.", "Los ecorregímenes y la condicionalidad reforzada."], 0,
    "La reforma de 2003 desacopló las ayudas (pago único) y las vinculó a la condicionalidad, con modulación obligatoria hacia el desarrollo rural.");
  P("B41", "T8", "El «chequeo médico» de la PAC fue aprobado por el Consejo en el año:",
    ["1992", "2000", "2003", "2008"], 3,
    "1992: reforma MacSharry. 1999-2000: Agenda 2000. 2003: revisión intermedia. 2008: chequeo médico. 2013: reforma de 2014-2020.");
  P("B42", "T8", "El régimen de pago básico se aplicó en España hasta 2022 y fue sustituido en 2023 por:",
    ["El régimen de pago único.", "La ayuda básica a la renta para la sostenibilidad.", "El pago redistributivo.", "Los ecorregímenes."], 1,
    "La ABRS mantiene derechos de ayuda y regiones, con convergencia progresiva de sus valores.");

  // ---------- TEMA 9 ----------
  P("B43", "T9", "La Agenda 2030 se aprobó como continuación de:",
    ["La Declaración del Milenio y sus Objetivos de Desarrollo del Milenio (2000).", "La Cumbre de Río sobre Medio Ambiente y Desarrollo de 1992.", "El Protocolo de Kioto de 1997.", "El Acuerdo de París de 2015."], 0,
    "Los ODS sustituyen a los 8 Objetivos de Desarrollo del Milenio, que vencían en 2015.");
  P("B44", "T9", "Dentro del Pacto Verde Europeo, la estrategia relativa a la protección de la naturaleza es:",
    ["La Estrategia «De la granja a la mesa».", "La Estrategia de la UE sobre Biodiversidad para 2030.", "La Estrategia forestal de la UE para 2030.", "La Estrategia «Una única salud»."], 1,
    "Biodiversidad 2030 fija, entre otras metas, proteger al menos el 30% de la superficie terrestre y marina de la UE.");
  P("B45", "T9", "La Estrategia «De la granja a la mesa» fija como objetivo que en 2030 la superficie agraria ecológica de la UE alcance al menos el:",
    ["10%", "25%", "30%", "50%"], 1,
    "25% de la superficie agraria en ecológico en 2030.");
  P("B46", "T9", "El marco de responsabilidad medioambiental basado en el principio «quien contamina paga» lo establece en España:",
    ["La Ley 21/2013, de evaluación ambiental.", "La Ley 26/2007, de Responsabilidad Medioambiental.", "La Ley 42/2007, del Patrimonio Natural y de la Biodiversidad.", "La Ley 7/2007, GICA."], 1,
    "La Ley 26/2007 transpone la Directiva 2004/35/CE sobre responsabilidad medioambiental.");
  P("B47", "T9", "Según la Convención de Naciones Unidas de Lucha contra la Desertificación, la desertificación es:",
    ["La degradación de las tierras de zonas áridas, semiáridas y subhúmedas secas resultante de factores como las variaciones climáticas y las actividades humanas.", "La desaparición progresiva de las masas forestales.", "La despoblación de las zonas rurales.", "El avance físico de las dunas sobre suelos fértiles."], 0,
    "La definición incluye tanto causas climáticas como humanas y se limita a las zonas secas.");
  P("B48", "T9", "Sobre la Ley 21/2013, de evaluación ambiental, señale la FALSA:",
    ["Unificó en una sola norma la evaluación de planes y programas y la de proyectos.", "Se asienta en la competencia estatal sobre legislación básica de medio ambiente.", "Define el informe ambiental estratégico como un informe facultativo del órgano ambiental.", "Su anexo I recoge los proyectos sometidos a evaluación ambiental ordinaria."], 2,
    "El informe ambiental estratégico es preceptivo y determinante.");

  // ---------- TEMA 10 ----------
  P("B49", "T10", "El Reglamento (UE) 2021/2115 establece un número de objetivos específicos, de los cuales tienen carácter medioambiental y climático:",
    ["Seis objetivos, de los que dos son ambientales.", "Nueve objetivos, de los que tres son ambientales y climáticos.", "Diez objetivos, de los que cinco son ambientales.", "Doce objetivos, de los que cuatro son ambientales."], 1,
    "Nueve objetivos específicos más el objetivo transversal de modernización. Los tres ambientales: clima, recursos naturales (agua, suelo, aire) y biodiversidad y paisajes.");
  P("B50", "T10", "En España, la condicionalidad reforzada se compone de un total de:",
    ["10 BCAM y 11 RLG.", "5 BCAM y 10 RLG.", "5 BCAM y 11 RLG.", "2 BCAM y 1 RLG."], 0,
    "Es la respuesta dada como correcta en el examen A1.2002 de 2022-2023. Ojo: la simplificación de 2024 (Reglamento 2024/1468) modificó algunas BCAM.");
  P("B51", "T10", "La norma española que regula la condicionalidad reforzada y la condicionalidad social es el:",
    ["Real Decreto 1048/2022.", "Real Decreto 1049/2022.", "Real Decreto 1046/2022.", "Real Decreto 1075/2014."], 1,
    "El 1048/2022 regula los pagos directos, el 1046/2022 la gobernanza del PEPAC y el 1075/2014 los antiguos pagos directos de 2015-2022.");
  P("B52", "T10", "Sobre los compromisos medioambientales, climáticos y otros compromisos de gestión (art. 70 del Reglamento 2021/2115), señale la correcta:",
    ["Los pagos no pueden incluir costes de transacción.", "Los compromisos se suscriben de cinco a siete años, sin excepción alguna.", "Pueden pagarse compromisos que contribuyan a cumplir nuevos requisitos nacionales que vayan más allá de los mínimos de la Unión.", "Solo pueden pagarse compromisos que se limiten a cumplir las BCAM."], 2,
    "Lo permite el propio artículo 70. Los pagos compensan costes adicionales y lucro cesante y pueden incluir costes de transacción. La duración admite excepciones.");
  P("B53", "T10", "Entre las Buenas Condiciones Agrarias y Medioambientales (BCAM) se encuentra:",
    ["Evitar las franjas de protección en las márgenes de los ríos.", "La protección de humedales y turberas.", "La agricultura ecológica obligatoria en zonas de montaña.", "El laboreo intensivo para mantener el suelo desnudo en periodos sensibles."], 1,
    "La protección de humedales y turberas es la BCAM 2. Las demás opciones son contrarias a las BCAM: se exigen franjas de protección y cobertura del suelo.");
  P("B54", "T10", "Los ecorregímenes de la PAC 2023-2027 son:",
    ["Pagos plurianuales de desarrollo rural financiados por el FEADER.", "Pagos directos disociados anuales financiados por el FEAGA.", "Ayudas sectoriales de la OCM.", "Requisitos obligatorios de la condicionalidad."], 1,
    "Son voluntarios para el agricultor, obligatorios para el Estado miembro y forman parte de los pagos directos disociados del artículo 16.");

  // ---------- TEMA 12 ----------
  P("B55", "T12", "Según el TFUE, el programa marco plurianual de investigación y desarrollo de la Unión lo aprueban:",
    ["La Comisión mediante reglamento delegado.", "El Parlamento Europeo y el Consejo, con arreglo al procedimiento legislativo ordinario.", "El Consejo por unanimidad.", "El Consejo Europeo."], 1,
    "Artículo 182.1 TFUE. Los programas específicos que lo ejecutan los adopta el Consejo.");
  P("B56", "T12", "Horizonte Europa contribuye al objetivo de que la inversión total (pública y privada) en I+D en la Unión alcance al menos el:",
    ["1% del PIB.", "2% del PIB.", "3% del PIB.", "5% del PIB."], 2,
    "El objetivo del 3% del PIB procede de la Estrategia de Lisboa y se mantiene en el Espacio Europeo de Investigación.");
  P("B57", "T12", "Las siglas CSIC corresponden a:",
    ["Centro Superior de Innovación Científica.", "Consejo Superior de Investigaciones Científicas.", "Centro Supremo de Investigaciones Científicas.", "Consejo Superior de Innovación y Conocimiento."], 1,
    "El CSIC es una Agencia Estatal y el mayor organismo público de investigación de España. Integra desde 2021 el INIA.");
  P("B58", "T12", "El Instituto de la Grasa, centro del CSIC, se ubica en:",
    ["Jaén.", "Córdoba.", "Sevilla.", "Granada."], 2,
    "Está en Sevilla. En Córdoba se encuentra, entre otros, el Instituto de Agricultura Sostenible (IAS-CSIC).");
  P("B59", "T12", "El IFAPA organiza su actividad investigadora en un número de áreas temáticas igual a:",
    ["Tres.", "Cinco.", "Ocho.", "Diez."], 2,
    "Ocho áreas temáticas, entre ellas Economía de la Cadena Alimentaria, Protección Vegetal Sostenible, Ingeniería y Tecnología Agroalimentaria, y Acuicultura, Pesca y Medio Marino.");
  P("B60", "T12", "La ley estatal que regula la ciencia, la tecnología y la innovación es la:",
    ["Ley 16/2007.", "Ley 14/2011.", "Ley 1/2003.", "Ley 13/1986."], 1,
    "La Ley 14/2011 (modificada en 2022) sustituyó a la Ley de la Ciencia de 1986. La 16/2007 es la andaluza.");

  // ---------- TEMA 13 ----------
  P("B61", "T13", "La aplicación de los principios de gestión integrada de plagas es obligatoria para los usuarios profesionales desde:",
    ["El 1 de enero de 2012.", "El 1 de enero de 2014.", "El 1 de enero de 2020.", "Es voluntaria."], 1,
    "Lo establece la Directiva 2009/128/CE y lo recoge el Real Decreto 1311/2012.");
  P("B62", "T13", "La norma autonómica básica de sanidad vegetal en Andalucía, que regula la prevención y lucha contra plagas y crea el censo de equipos de aplicación, es el:",
    ["Decreto 96/2016.", "Decreto 245/2003.", "Decreto 166/2003.", "Decreto 178/2021."], 0,
    "El 245/2003 regula la producción integrada, el 166/2003 la agricultura ecológica y el 178/2021 los indicadores de sequía.");
  P("B63", "T13", "Respecto al Reglamento (UE) 2016/429 («Legislación sobre sanidad animal»), señale la correcta:",
    ["Se ocupa en exclusiva de las enfermedades transmisibles entre animales, sin incluir las zoonosis.", "Abarca las enfermedades transmisibles de los animales, incluidas las transmisibles a las personas.", "No es de aplicación directa en España.", "Sustituye a la Ley 8/2003 de sanidad animal, que queda derogada."], 1,
    "El reglamento incluye las zoonosis. La Ley 8/2003 sigue vigente en lo que no se oponga.");
  P("B64", "T13", "La Organización Mundial de Sanidad Animal (antigua OIE) se creó en:",
    ["1924", "1945", "1962", "1992"], 0,
    "Se creó por el Acuerdo internacional de 25 de enero de 1924. Desde 2022 se denomina OMSA.");
  P("B65", "T13", "Según el Reglamento Delegado (UE) 2019/1702, ¿cuál de las siguientes es una plaga prioritaria?",
    ["Drosophila suzukii.", "Erwinia amylovora.", "Verticillium dahliae.", "Xylella fastidiosa."], 3,
    "Xylella fastidiosa es plaga cuarentenaria prioritaria, con medidas obligatorias de erradicación y vigilancia reforzada.");

  // ---------- TEMA 14 ----------
  P("B66", "T14", "El periodo de conversión de los cultivos anuales es de:",
    ["Un año antes de la cosecha.", "Dos años antes de la siembra.", "Tres años antes de la primera cosecha.", "Seis meses desde la notificación."], 1,
    "Los anuales necesitan dos años antes de la siembra, y los perennes tres antes de la primera cosecha.");
  P("B67", "T14", "Los pastos y forrajes perennes tienen un periodo de conversión de:",
    ["Seis meses antes de su uso como pienso.", "Un año antes de su uso como pienso.", "Dos años antes de su uso como pienso.", "Tres años antes de su uso como pienso."], 2,
    "Dos años antes de su utilización como pienso ecológico.");
  P("B68", "T14", "Los periodos de conversión específicos de las aves de corral para producción de carne y de las ponedoras son, respectivamente:",
    ["10 semanas y 6 semanas.", "6 meses y 6 semanas.", "6 semanas y 10 semanas.", "12 meses y 6 meses."], 0,
    "Aves de carne: 10 semanas (introducidas antes de los 3 días de vida). Ponedoras: 6 semanas.");
  P("B69", "T14", "El logotipo de producción ecológica de la Unión Europea es obligatorio en:",
    ["Todos los productos ecológicos, envasados o no.", "Los alimentos envasados que cumplan el Reglamento.", "Los productos en conversión.", "Solo los productos importados de terceros países."], 1,
    "Es obligatorio en alimentos envasados y facultativo en importados y no envasados. No puede usarse en productos en conversión.");
  P("B70", "T14", "El Reglamento (UE) 2018/848 sobre producción ecológica es aplicable desde el:",
    ["1 de enero de 2009.", "30 de mayo de 2018.", "1 de enero de 2021.", "1 de enero de 2022."], 3,
    "Sustituyó al Reglamento (CE) 834/2007. Su aplicación se retrasó un año por la pandemia, hasta el 1 de enero de 2022.");

  // ---------- TEMA 21 ----------
  P("B71", "T21", "Respecto a los bosques de la Unión Europea, señale la correcta:",
    ["Son mayoritariamente de titularidad pública.", "Son en su mayoría de propiedad privada.", "Se gestionan desde una política forestal común.", "Su financiación procede sobre todo del FEAGA."], 1,
    "En torno al 60% de los bosques de la UE es de propiedad privada. Alrededor del 90% de los fondos de la Unión destinados a bosques procede del FEADER.");
  P("B72", "T21", "Aproximadamente, ¿qué porcentaje de los fondos de la Unión destinados a los bosques procede del FEADER?",
    ["40%", "60%", "90%", "100%"], 2,
    "El FEADER es el principal instrumento de financiación forestal de la UE, con alrededor del 90%.");
  P("B73", "T21", "La Ley Forestal de Andalucía es la:",
    ["Ley 43/2003.", "Ley 2/1992, de 15 de junio.", "Ley 7/2010.", "Ley 8/2003."], 1,
    "La Ley 43/2003 es la estatal de Montes, la 7/2010 la de la Dehesa y la 8/2003 la de flora y fauna silvestres de Andalucía.");
  P("B74", "T21", "Sobre la Política Pesquera Común, señale la correcta:",
    ["Nunca estuvo vinculada a la PAC.", "Su reglamento básico vigente es el Reglamento (UE) 1380/2013.", "Carece de Organización Común de Mercados.", "Solo regula la pesca de altura."], 1,
    "La PPC se rige por el Reglamento 1380/2013 y cuenta con una OCM de los productos de la pesca y la acuicultura (Reglamento 1379/2013). Su origen estuvo ligado a la PAC.");
  P("B75", "T21", "Según la Ley 1/2002 de Andalucía, de ordenación, fomento y control de la pesca marítima, el marisqueo y la acuicultura marina, en relación con las almadrabas la Consejería:",
    ["Promoverá su desmantelamiento progresivo.", "Promoverá la consolidación de su actividad.", "Carece de competencias.", "Las prohíbe en aguas interiores."], 1,
    "La ley apuesta por consolidar esta pesquería tradicional de la costa gaditana.");
})();
