---
title: Planificación
translation_source_hash: 0bf6b304d3c23534195b5a7bdc18065b53aec01c
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

|           Opción            |                                               Nube gratuita                                               |                                                           OpenFn Cloud                                                           |                                                                                   Dedicada                                                                                    |                                                                         Hazlo tú mismo (DIY)                                                                         |
| :-------------------------: | :-------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|         Descripción         |                 Pasa a producción hoy mismo en OpenFn.org con proyectos de pequeña escala                 |                                     Aumenta o reduce la escala y paga solo lo que necesitas                                      |                          Una instalación de OpenFn dedicada y sin restricciones en cualquier parte del mundo, en nuestros servidores o en los tuyos                           |                                                       Despliega y administra tus propias soluciones con OpenFn                                                       |
|          Licencia           |                                  Gratis para siempre, con límites de uso                                  | **SaaS** ([planes](https://www.openfn.org/pricing)); contacta a enterprise@openfn.org para acuerdos personalizados o con factura | **SDaaS** incluye como servicio el despliegue, el mantenimiento, los parches de seguridad, las actualizaciones y la resolución de problemas; contacta a enterprise@openfn.org | La licencia LGPLv3 te permite usarlo libremente en cualquier solución cerrada o de código abierto, pero todas las obras _derivadas_ tienen que ser de código abierto |
|          Ubicación          |                              Infraestructura en la nube **global** y segura                               |                                          Infraestructura en la nube **global** y segura                                          |                                                              Infraestructura **local (en el país)** o **global**                                                              |                                                                            Donde quieras                                                                             |
|         Despliegue          |                 **Haz clic para empezar** en [OpenFn.org](https://www.openfn.org/signup)                  |                             **Haz clic para empezar** en [OpenFn.org](https://www.openfn.org/signup)                             |                                                                     **Contacta a** enterprise@openfn.org                                                                      |                                     Lee esta página de la documentación y visita nuestro [GitHub](https://www.github.com/OpenFn)                                     |
| Instalación y configuración | **Tú eliges**: configurarlo por tu cuenta, con un implementador certificado o con el equipo de OpenFn.org |            **Tú eliges**: configurarlo por tu cuenta, con un implementador certificado o con el equipo de OpenFn.org             |                                   **Tú eliges**: configurarlo por tu cuenta, con un implementador certificado o con el equipo de OpenFn.org                                   |                              **Tú eliges**: configurarlo por tu cuenta, con un implementador certificado o con el equipo de OpenFn.org                               |
|           Soporte           |               Da y recibe soporte a través de la [comunidad](https://community.openfn.org)                |                                          Varios niveles a través de support@openfn.org                                           |                                                                 Varios niveles a través de support@openfn.org                                                                 |                                             Da y recibe soporte a través de la [comunidad](https://community.openfn.org)                                             |

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
   sí).
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
   seguridad, etc.
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

## Pasar de la nube a un despliegue local (v1 o v2) {#moving-from-cloud-to-local-v1-or-v2}

Si planeas una implementación autoalojada, te recomendamos desarrollar y probar
la solución inicial en el SaaS de OpenFn (v1 o v2, quizás en un plan gratuito) y
luego exportarla para usarla en Lightning (v2).

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

## Guías técnicas {#technical-guidelines}

Para ver la documentación detallada sobre el despliegue, visita la
[página de documentación para desarrolladores](https://openfn.github.io/lightning/readme.html)
de Lightning y presta especial atención a estas secciones:

1. [Getting Started](https://openfn.github.io/lightning/readme.html#getting-started)
2. [Deployment Considerations](https://openfn.github.io/lightning/deployment.html)
3. [Benchmarking](https://openfn.github.io/lightning/benchmarking.md.html#run-benchmarking-tests-against-the-demo-webhook)
