---
sidebar_label: Descubrimiento y alcance
title: Descubrimiento y alcance de proyectos de OpenFn
translation_source_hash: c971b06c2192e638cce500ea16236908d8832c45
translation_review_status: machine
---

# Descubrimiento y alcance de proyectos de OpenFn {#discovery--scoping-for-openfn-projects}

Este artículo reúne las preguntas clave de descubrimiento y alcance para
confirmar el valor de negocio, los requisitos centrales del workflow, la
viabilidad técnica y la capacidad del cliente al empezar una implementación
nueva. Se basa en el caso de uso de ejemplo presentado en la
[introducción de la serie](/design/design-overview.md#example-use-case).

:::tip

Para exportar o compartir rápidamente estas preguntas, consulta esta
[presentación](https://docs.google.com/presentation/d/1WIc_uNAqapILF7redhTnZXpPRo1jFPSmAjoAplGt42w/edit?usp=sharing).

:::

## Preguntas clave {#key-questions}

### Evaluación del valor de negocio {#business-value-assessment}

El primer paso del descubrimiento es evaluar el valor de negocio: el posible
retorno de la inversión, las mejoras de eficiencia y otros resultados valiosos
que servirán para medir el éxito.

**Preguntas que hacer:**

1. ¿Qué workflows quieres automatizar?
2. ¿Cómo se gestionan actualmente esos workflows?
   - ¿Hay un proceso de negocio manual o semiautomático?
   - Si lo hay, ¿cuánto tiempo del personal se dedica a gestionarlos?
3. ¿Qué problemas resolverá la automatización? ¿Qué eficiencias o beneficios se
   obtendrán? ¿Cuál es el costo de no hacer nada?
   - Si no automatizamos estos workflows, ¿cómo seguirán las cosas?
   - ¿El workflow actual es lento o inseguro, o empeora la calidad de los datos
     o la prestación de servicios?

**Ejemplo:**

1. Quiero automatizar la sincronización de datos de casos de KoboToolbox con
   DHIS2 Tracker.
2. Actualmente nuestro equipo dedica 3 horas a la semana a exportar a mano los
   datos de Kobo e ingresarlos en DHIS2.
3. Esta automatización eliminará el riesgo de error humano al ingresar los datos
   a mano, nos ahorrará dinero y tiempo, y nos permitirá atender a más
   pacientes.

## Recopilación de requisitos del workflow {#workflow-requirements-gathering}

Usa las preguntas de abajo para definir los pasos concretos del workflow. El
resultado debería ser un borrador del workflow o un diagrama del proceso de
negocio (considera hacerlo en [BPMN](https://www.bpmn.org/) para usar una
notación estándar).

**Preguntas que hacer:**

1. ¿Qué dispara el workflow y con qué frecuencia debería ejecutarse? (por
   ejemplo, en tiempo real o programado)
   - ¿Hay una acción de un usuario o un evento del sistema que debería disparar
     el workflow? (por ejemplo, en tiempo real al enviar un formulario, o cuando
     el estado de un registro cambia a "closed")
   - ¿O debería programarse para un día y una hora concretos? (por ejemplo,
     todos los días a las 12:00)
2. ¿El workflow necesita un flujo de datos en un solo sentido o en ambos?
   - Por ejemplo, si el workflow envía un registro del sistema A al sistema B,
     ¿los datos solo tienen que ir en un sentido? ¿O, una vez sincronizados en
     el sistema B, hay que devolver algo al sistema A para tener un flujo de
     datos bidireccional?
3. ¿Qué volúmenes de datos se esperan? (por ejemplo, 100 derivaciones al mes o
   12 000 formularios al año)

**Ejemplo:** el workflow debería sincronizar los datos de pacientes de
KoboToolbox con DHIS2 cada vez que se envía un formulario (es decir,
sincronización en tiempo real). Se registran como máximo 5000 pacientes al mes
en Kobo.

![Workflow](/img/functional_example.webp)

### Evaluación de viabilidad técnica {#technical-feasibility-assessment}

Las respuestas a las preguntas de abajo te ayudarán a hacer un borrador del
diagrama de la solución, que documenta exactamente qué instancias se conectarán
y qué interfaces de integración se usarán.

1. ¿Cuántas instancias hay de los sistemas de destino? (es decir, ¿te conectas a
   1 o a 2 instancias de base de datos?)
2. ¿Los sistemas de destino ya están construidos? ¿Se espera que cambie alguna
   configuración?
   - Si la configuración todavía está en curso, considera retomar este proyecto
     cuando los sistemas estén estables.
3. ¿Hay una API REST disponible?
   - Si la hay, comparte la documentación.
   - Si todavía no la hay, considera retomar este proyecto cuando la API esté
     construida y probada.
   - Si no la hay, ¿qué otros métodos hay para importar y exportar datos?
     - ¿Es posible conseguir una conexión directa a la base de datos?
     - ¿O hay un webhook u otro método para reenviar datos a un sistema externo?
     - ¿O una forma de exportar e importar datos con archivos? ¿Qué formatos de
       datos hay disponibles?
4. ¿Dónde están alojados los sistemas de destino? ¿Hay requisitos de seguridad o
   consideraciones de autenticación conocidas? (por ejemplo, firewalls,
   requisitos de VPN o listas blancas de IP)
5. ¿Hay un entorno de pruebas al que podamos acceder para probar la integración
   con la aplicación? (Si no lo hay, ¿hay una demo pública de la aplicación que
   corra en la misma versión que usas actualmente, para que podamos probar las
   APIs?)

**Ejemplo:** para esta integración solo hay una instancia de PatientCare y una
de DHIS2, y ya están construidas con APIs REST. Las dos están alojadas en
servidores gestionados por PatientCare que exigen una lista blanca de IP para
acceder.

![Workflow](/img/technical_example.webp)

### Evaluación de capacidades {#capacity-assessment}

Las respuestas a las preguntas de abajo te ayudarán a definir los roles del
proyecto para diseñar y entregar la implementación, y a planificar la
capacitación, el despliegue, la administración continua y el soporte.

1. ¿Cada sistema de destino tiene un administrador de sistemas a tiempo
   completo?
   - ¿Los administradores pueden apoyar la configuración y las pruebas de la
     integración?
   - ¿Los administradores podrán ofrecer un entorno de pruebas o de desarrollo?
   - ¿Quién aprenderá a administrar OpenFn?
2. ¿Qué conocimientos técnicos tienen?
   - ¿Qué otros recursos hay para dar soporte continuo?
   - ¿Alguien en la organización tiene experiencia con JavaScript o JSON?
3. ¿Hay interés en aprender a gestionar la implementación de OpenFn de forma
   independiente?
4. ¿Quién en la organización se encargará de la gobernanza continua de la
   solución y de supervisar la gestión de cambios? ¿Hay recursos para reunirse
   con regularidad y revisar las solicitudes de cambio?

**Ejemplo:**

| Nombre | Rol                                                                                                                                                                                                                                                                                                   |
| ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Ian    | Administrador del sistema OpenFn, que se encargará de la gestión y el monitoreo continuos                                                                                                                                                                                                             |
| Melody | Administradora de PatientCare, que capacitará en el workflow a los usuarios de su sistema                                                                                                                                                                                                             |
| Arnis  | Administrador de DHIS2, que capacitará en el workflow a los usuarios de su sistema                                                                                                                                                                                                                    |
| Ramona | Punto focal de programas, que defenderá los intereses de los usuarios, aportará información para definir los requisitos del workflow y se reunirá con regularidad con los usuarios para recoger comentarios, proponer cambios y revisar las solicitudes de cambio con los administradores de sistemas |

### Documentar la arquitectura de la solución {#documenting-the-solution-architecture}

Una vez que hayas reunido los requisitos clave de la solución, considera crear
un diagrama de "arquitectura de la solución" que documente lo siguiente:

1. Los distintos componentes de la solución
2. Los flujos de datos entre esos componentes (destacando el intercambio de
   datos dentro de la organización y con servicios de terceros)
3. Los tipos de datos que se intercambian
4. Los puntos de autenticación y acceso

Estos diagramas aportan transparencia, ayudan a detectar posibles riesgos de
exposición de datos y documentan el cumplimiento de los requisitos de protección
de datos. Mira los diagramas de arquitectura de ejemplo de abajo.

**Ejemplo 1:**

![Workflow](/img/solution_diagram1.webp)

**Ejemplo 2:**

|                                                      ![Workflow](/img/solution_diagram2.webp)                                                      |
| :------------------------------------------------------------------------------------------------------------------------------------------------: |
| _[Fuente](https://lucid.app/lucidchart/1e997197-2d67-4393-8394-a532d83561b2/edit?invitationId=inv_85b809a1-6fbd-4275-abdc-618fbd56e90d&page=0_0#)_ |
