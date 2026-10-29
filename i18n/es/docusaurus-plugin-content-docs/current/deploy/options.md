---
title: Planificación
translation_source_hash: e6b67074930fcae2e5084aceaf91e4d951345626
translation_review_status: machine
---

## Introducción {#introduction}

Puedes usar OpenFn como un servicio en la nube seguro, estable y escalable, o
desplegarlo localmente, con opciones administradas y no administradas. Sea cual
sea el camino que elijas, puedes configurar OpenFn para que ningún dato sensible
se guarde fuera de las fronteras de tu país.

:::success Portabilidad

Gracias a la [especificación de portabilidad](/deploy/portability.md) de OpenFn
y a sus herramientas de despliegue de código abierto, puedes pasar de una de
estas opciones a otra en cualquier momento. Nos comprometemos a que no dependas
de ningún proveedor (**no vendor lock-in**).

:::

|   Opción    |                                Nube gratuita                                 |                               OpenFn Cloud                               |                                                                   Dedicada                                                                    |                                                Hazlo tú mismo (DIY)                                                |
| :---------: | :--------------------------------------------------------------------------: | :----------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------: |
| Descripción |  Pasa a producción hoy mismo en OpenFn.org con proyectos de pequeña escala   |         Aumenta o reduce la escala y paga solo lo que necesitas          |          Una instalación de OpenFn dedicada y sin restricciones en cualquier parte del mundo, en nuestros servidores o en los tuyos           |                              Despliega y administra tus propias soluciones con OpenFn                              |
|  Licencia   |                   Gratis para siempre, con límites de uso                    |             Planes SaaS, con SLA personalizados disponibles              | Despliegue en tu infraestructura en niveles definidos (consulta [más abajo](#local-deployment-with-openfn)); contacta a enterprise@openfn.org | Úsalo libremente en cualquier solución, pero todas las obras _derivadas_ tienen que ser de código abierto (LGPLv3) |
|  Ubicación  |                Infraestructura en la nube **global** y segura                |              Infraestructura en la nube **global** y segura              |                                              Infraestructura **local (en el país)** o **global**                                              |                                                   Donde quieras                                                    |
| Despliegue  |   **Haz clic para empezar** en [OpenFn.org](https://www.openfn.org/signup)   | **Haz clic para empezar** en [OpenFn.org](https://www.openfn.org/signup) |                                                     **Contacta a** enterprise@openfn.org                                                      |            Lee esta página de la documentación y visita nuestro [GitHub](https://www.github.com/OpenFn)            |
|   Soporte   | Da y recibe soporte a través de la [comunidad](https://community.openfn.org) |              Varios niveles a través de support@openfn.org               |                                                 Varios niveles a través de support@openfn.org                                                 |                    Da y recibe soporte a través de la [comunidad](https://community.openfn.org)                    |

:::info Opciones para implementar el proyecto

Elijas la opción que elijas, puedes configurarla por tu cuenta, trabajar con un
[implementador certificado](https://www.openfn.org/partners) o con el equipo
principal de OpenFn.

:::

## Despliegue local con OpenFn {#local-deployment-with-openfn}

Si quieres que OpenFn te ayude a desplegar en tu propia infraestructura, en
general te aconsejamos pensar en tres niveles. Funcionan como una escalera:
empieza con un piloto, demuestra que la integración funciona y luego sube de
nivel a medida que tu equipo tenga capacidad.

Todos los niveles dan por hecho un **entorno de ejecución de contenedores que
funcione** (Docker Engine o Kubernetes), que tu equipo proporciona antes de que
empiece el despliegue. Si todavía no puedes aprovisionar y operar hosts de
Docker o un clúster de Kubernetes, empieza por resolver esa carencia, por
ejemplo, con un socio de implementación local.

|                      | Docker Pilot                                                            | Resilient Production                                                   | Integrated Production                                      |
| -------------------- | ----------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------- |
| Propósito            | Demostrar que OpenFn puede mover datos reales entre tus sistemas reales | Una plataforma de producción basada en los patrones estándar de OpenFn | OpenFn conectado a las herramientas operativas que ya usas |
| Entorno de ejecución | Un solo host de Docker que tú proporcionas                              | Docker Engine en 2 o más nodos, o tu clúster de Kubernetes             | Tu stack de producción                                     |
| Alta disponibilidad  | No                                                                      | Sí                                                                     | Sí                                                         |
| Lo opera             | OpenFn, mientras dura el piloto                                         | Tu equipo                                                              | Tu equipo                                                  |
| Alcance              | Fijo                                                                    | Fijo                                                                   | Se define tras una fase de descubrimiento                  |

### Docker Pilot {#docker-pilot}

Un despliegue de nivel de desarrollo y por tiempo limitado, cuyo único objetivo
es confirmar que la integración funciona en tu entorno. Incluye un solo host de
Docker (el tuyo), Postgres en un contenedor, el monitoreo predeterminado de
OpenFn, los secretos en un archivo `.env`, el correo a través de Mailgun o de tu
servidor SMTP actual, un manual de operaciones (runbook) basado en la plantilla
estándar de OpenFn y la capacitación Deployment 101.

El piloto se ejecuta en un solo host sin redundancia: si ese host falla, el
servicio queda caído hasta que se restablece. Eso es aceptable para una prueba
por tiempo limitado, pero no para producción.

### Resilient Production {#resilient-production}

La opción predeterminada para producción. Varias instancias de cada servicio de
OpenFn se ejecutan en dos o más nodos, así que la plataforma sigue disponible si
falla un servidor o un contenedor. Incluye copias de seguridad con
procedimientos de restauración probados, monitoreo y alertas según los patrones
estándar de OpenFn, administración de secretos con una opción estándar
compatible con tu entorno de ejecución, una forma de actualizar y revertir, y un
manual de operaciones completo para producción.

Antes de elegir este nivel, define qué persona o equipo va a operar la
plataforma. Debería tener ya aplicaciones en contenedores en ejecución.

### Integrated Production {#integrated-production}

Todo lo de Resilient Production, más la integración con tus propias herramientas
de monitoreo y alertas (por ejemplo, Prometheus, Grafana, Datadog), tu gestor de
secretos (por ejemplo, HashiCorp Vault, AWS Secrets Manager), tus pipelines de
CI/CD y tus procesos de control de cambios. Como este trabajo depende de tu
entorno, su alcance se define solo después de una fase de descubrimiento.

### Qué recibes {#what-you-receive}

Todos los niveles terminan con un repositorio de GitHub para el despliegue, con
la configuración de OpenFn, la documentación técnica de traspaso, la
capacitación Deployment 101 y un manual de operaciones. Los niveles de
producción agregan un informe de verificación de copias de seguridad y
restauración; Integrated Production agrega documentación de integración a medida
y un informe de descubrimiento y alcance.

Si tu equipo va a necesitar ayuda continua para operar la plataforma después del
traspaso, contacta a enterprise@openfn.org.

## Ejemplo de plan de despliegue local {#sample-local-deployment-plan}

:::info Esto es solo un ejemplo

Tus requisitos serán distintos, pero este es un ejemplo de plan para lograr un
despliegue local a gran escala y con datos muy sensibles.

:::

Si estás considerando una implementación de OpenFn a gran escala o con datos muy
sensibles en servidores locales o administrados por el gobierno, podrías:

1. **Ejecutar una prueba de concepto, un prototipo o una solución en producción
   por tiempo limitado** con el servicio en la nube mientras determinas si se
   ajusta a tus necesidades y qué valor aporta. (Es una forma más segura, más
   barata y más rápida de demostrar el valor y la viabilidad de la solución en
   sí). Si el piloto tiene que ejecutarse en tu propia infraestructura, usa en
   su lugar un [Docker Pilot](#docker-pilot) por tiempo limitado.
2. Mientras se ejecuta la primera fase, **evaluar el valor y empezar los
   preparativos**:
   1. Evalúa el **valor de la solución** en sí: ¿resuelve los problemas que
      esperabas?
   2. Evalúa tus **requisitos de residencia de datos**: ¿necesitas ejecutar esta
      solución en el país?
   3. Evalúa la **capacidad de DevOps** de tu equipo: ¿cómo van otros
      despliegues locales de bienes públicos digitales (DPG)?
   4. Evalúa la infraestructura de cómputo, almacenamiento y redes de tu país:
      ¿qué opciones\* hay disponibles para servidores y conectividad de red?
   5. Determina si lo mejor para tu ministerio es una solución en la nube de
      **"persistencia cero"** o una solución **desplegada localmente**: con los
      datos anteriores, haz un análisis de costo-beneficio de ambas opciones.
3. Trabajar con OpenFn.org o con un socio certificado para **practicar el
   despliegue**, la migración, la reversión, el reinicio, las copias de
   seguridad, etc. Un [Docker Pilot](#docker-pilot) es un buen entorno para
   hacerlo.
4. Con las herramientas de portabilidad de OpenFn, **ejecutar una copia local**
   de tu solución alojada en la nube para evaluar si tu despliegue local está
   listo.
5. Establecer con OpenFn un **protocolo de conmutación por error** para "pasar a
   la nube" en el caso de los sistemas críticos.
   1. ¿Con qué frecuencia se debería respaldar la configuración de la
      implementación (no los datos sensibles) en la nube alojada por OpenFn.org?
   2. ¿A qué credenciales o entornos de prueba debería tener acceso la copia de
      seguridad en la nube?
   3. Establece un plan para cambiar entre la nube y el despliegue local.
6. Establecer un **contrato de soporte** con proveedores locales certificados
   por OpenFn o con el equipo principal de OpenFn para que te ayuden a mantener
   el despliegue local si surgen problemas.
7. **Pasar por completo a tu despliegue local** y mantener la capacidad de dar
   soporte a tu solución o de volver a desplegarla en otros servidores en la
   nube o locales.
8. **Supervisar y ajustar tu estrategia** cuando haga falta, a medida que
   evolucionan los requisitos de uso y de soberanía de datos de tu país.

\*Visita la página [Requisitos](/deploy/requirements.md) para obtener más
información sobre las especificaciones de servidor recomendadas.

## Pasar de la nube a un despliegue local {#moving-from-cloud-to-local}

Si planeas una implementación autoalojada, te recomendamos desarrollar y probar
la solución inicial en el SaaS de OpenFn (quizás en un plan gratuito) y luego
exportarla para usarla en un despliegue local de Lightning.

Así, el implementador puede concentrarse en resolver los requisitos de negocio y
técnicos de la automatización antes de asumir los costos del despliegue.
Concéntrate en la solución, no en el despliegue. Después, cuando hayas hecho el
piloto, hayas demostrado su valor y estés listo para escalarla, puedes migrar tu
solución de OpenFn a un despliegue local de Lightning.

### Recorrido de un usuario de OpenFn desplegado localmente {#a-user-journey-for-locally-deployed-openfn}

1. Crea y prueba tus workflows en [OpenFn.org](https://www.openfn.org).
2. Exporta tu proyecto de OpenFn _como código_ con el botón "export" o con la
   CLI de despliegue.
3. Despliega tu instancia local de OpenFn/Lightning.
4. Importa tu proyecto (del paso 2) a tu instancia local de OpenFn/Lightning con
   la CLI de despliegue.
5. Vuelve a configurar tus credenciales (los secretos de las credenciales _no_
   se incluyen en la exportación).
6. Prueba tu proyecto desplegado localmente.
