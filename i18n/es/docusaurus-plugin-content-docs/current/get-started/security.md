---
sidebar_label: Seguridad en las implementaciones
title: Consideraciones de seguridad para proyectos de integración de datos
translation_source_hash: 366084aa20c5ce7de23ca63331268d1b40fca41a
translation_review_status: machine
---

# Directrices de seguridad para implementaciones de integración de datos {#security-guidelines-for-data-integration-implementations}

Aunque las tecnologías que usa tu solución de integración puedan considerarse
seguras, la integración de datos sigue teniendo muchos riesgos de seguridad,
sobre todo durante la implementación. Por eso, con el apoyo de Digital Square,
hemos elaborado una **Guía de seguridad para implementaciones de integración de
datos**.

Desde 2014, en Open Function Group (los principales responsables de OpenFn)
hemos ayudado a implementar casi 100 soluciones de integración de datos para más
de 45 socios de ONG y gobiernos de todo el mundo. Gracias a nuestro trabajo con
los equipos de seguridad de distintos socios, a nuestra propia investigación y
desarrollo, a las consultas con expertos en seguridad internos y externos, y a
las alianzas con otras comunidades de práctica, hemos adquirido un sólido
conocimiento de las buenas prácticas y las consideraciones de seguridad para
proyectos de integración de datos, que queremos compartir con la comunidad más
amplia del desarrollo digital.

**Esta guía pretende ayudar a quienes implementan soluciones digitales en las
comunidades de Bienes Públicos Digitales y de Global Goods a entender mejor los
riesgos de seguridad, y presenta 23 buenas prácticas para las distintas fases de
implementación de los proyectos de integración de datos.** También enlaza a
algunos recursos de OFG de código abierto que nuestro equipo usa en su propio
proceso de implementación de proyectos de OpenFn.

Más abajo en esta página encontrarás la lista completa de las 23 buenas
prácticas.

**Para acceder a la guía, consulta las diapositivas de abajo o haz clic en el
enlace para compartirla y descargarla:**
[https://bit.ly/security_guidebook](https://bit.ly/security_guidebook)

<p><iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSflwoTK6G7JnilqTqh7ntlzXARU2ITREXDV6hJCVpvN5gwVRn97sLVrG7pYV54UP2GhX7YPO_JSHn5/embed?start=false&loop=false&delayms=30000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe></p>

<h3>Integración de datos segura: 23 buenas prácticas de implementación</h3>
<h4>Principios básicos</h4>
<ol> 
 <li>Conoce las políticas pertinentes sobre el intercambio, el almacenamiento y la protección de datos</li>
 <li>Extrae y transfiere solo los datos imprescindibles</li>
 <li>Documenta, documenta, documenta</li> 
</ol>
<h4>Analizar y planificar</h4>
<ol start="4"> 
 <li>No des por sentada la seguridad de las API</li>  
 <li>Reserva tiempo para las pruebas de seguridad</li>    
</ol>

<h4>Diseñar</h4>
<ol start="6"> 
<li>Recurso: plantilla de especificación de mapeo</li>
<li>Recurso: diagrama de flujo de datos de la arquitectura</li>
<li>Recurso: Project Security Configuration & Go-Live Checklist (lista de comprobación de configuración de seguridad y puesta en marcha del proyecto)</li>
<li>Ten en cuenta la idempotencia, los identificadores únicos y las operaciones de tipo “upsert” para garantizar la integridad de los datos</li>
<li>Diseña pensando en los fallos y en el reprocesamiento de transacciones</li>
<li>Ten en cuenta la validación de datos</li>
</ol>
<h4>Crear</h4>
<ol start="12"> 
<li>Usa el seguimiento de cambios y el control de versiones</li>
<li>Cifra siempre que puedas</li>
<li>Usa una autenticación sólida;  no hables con desconocidos</li>
<li>Usa ámbitos de autorización para limitar el acceso</li>
<li>Registra las transacciones para supervisar la actividad y controla qué información se registra</li>
</ol>
<h4>Desplegar</h4>
<ol start="17"> 
<li>Vuelve a probar, sobre todo las credenciales, antes del despliegue</li>
<li>Forma a los usuarios y a los administradores de sistemas en la seguridad de la integración</li>
<li>Revisa de nuevo tus requisitos de seguridad antes de la puesta en marcha</li>
<li>Define los puntos de contacto para informar de problemas de seguridad</li> 
</ol>
<h4>Supervisión y gestión continuas</h4>
<ol start="21"> 
<li>Plantéate modelos de gobernanza para la gestión continua y los cambios de requisitos</li>
<li>Forma a los socios en la gestión del cambio</li>
<li>Ten una estrategia de gestión del acceso</li>
</ol>

Sigue leyendo para conocer otros recursos y comunidades de implementadores que
te pueden interesar.

### Recursos citados en la guía {#resources-referenced-in-the-guidebook}

- [Principles of Digital Development Privacy and Security Guide](https://digitalprinciples.org/wp-content/uploads/PDD_Principle-AddressPrivacySecurity_v2.pdf)
- [UNICEF policy on personal data protection](https://www.unicef.org/supply/media/5356/file/Policy-on-personal-data-protection-July2020.pdf.pdf)
- [International Committee of the Red Cross Handbook on data protection in humanitarian action](https://www.icrc.org/en/data-protection-humanitarian-action-handbook)
- [GDPR Quick Guide](https://gdpr.eu/what-is-gdpr/)
- [Sanity.io A Rough Guide to Running a GDPR Compliant SaaS Business](https://www.sanity.io/blog/a-rough-guide-to-running-a-gdpr-compliant-saas-business)
- [OWASP API Security Project](https://owasp.org/www-project-api-security/)
- [GovStack Security & API Standards](https://www.govstack.global/wp-content/uploads/2021/08/Security_Building_Block_Definition_1.0.1.pdf)
- [Health Data Governance Principles](https://www.healthdataprinciples.org/)
- [CDC Health Data Privacy, Confidentiality, and Security Guidelines](https://gicsandbox.org/sandbox-cms/health-data-privacy-confidentiality-and-security-guidelines-development-toolkit#dd01fcf80d4d46f08a099b282bc23f16)

### Recursos de OpenFn {#openfn-resources}

Encontrarás más orientación sobre implementación en todo este sitio de
documentación. Si usas OpenFn, puedes saber más sobre la seguridad y el
cumplimiento en OpenFn en [openfn.org/trust](http://openfn.org/trust) y
[openfn.org/compliance](http://openfn.org/compliance).

Estas son las principales plantillas y recursos de OpenFn citados en la guía:

- [Plantilla de especificación de mapeo](https://docs.google.com/spreadsheets/d/1IqTIgOzyOztEevXbgY_4uE8Y8tiHXufZXx-IyJZase0/edit#gid=1822444315)
- [Diagrama de arquitectura de la solución](https://lucid.app/lucidchart/1e997197-2d67-4393-8394-a532d83561b2/edit#?templateid=fb96ae05-e288-4d1f-b3fc-2cbf7641a7cc)
- [Recursos de diagramas BPMN](/documentation/design/design-workflow#diagram-using-global-standards)
- [Project Security Configuration & Go-Live Checklist](https://docs.google.com/document/d/1CbQkN7SqNmXeqt3nMTYP4ioQlTuwF2LbDkkFqhp0zsU/edit?usp=sharing)

### Comunidades de práctica y otros expertos {#communities-of-practice--other-experts}

Estas son otras comunidades que puedes seguir para obtener más orientación sobre
seguridad.

1. [OpenHIE Privacy & Security Working Group](https://wiki.ohie.org/display/resources/Privacy+and+Security+Working+Group+Call)
2. [GovStack](https://www.govstack.global/)
3. [DHIS2 Security Team & Community of Practice](https://dhis2.org/security/)
4. [Asia eHealth Information Network (AeHIN) Communities of Practice](https://www.asiaehealthinformationnetwork.org/communities-of-practice/)
