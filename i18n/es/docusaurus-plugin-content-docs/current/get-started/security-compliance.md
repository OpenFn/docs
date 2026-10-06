---
sidebar_label: Seguridad y cumplimiento
title: Seguridad y cumplimiento
translation_source_hash: e7615c14f8ea9167b2580775204ed61653b87ce7
translation_review_status: machine
---

# Todo sobre S³ {#all-about-s}

En OpenFn damos prioridad a soluciones **seguras**, **estables** y
**escalables** (**"S³"**, por sus iniciales en inglés, es nuestro lema), en ese
orden. Protegemos tus datos, mantenemos las integraciones en funcionamiento y
crecemos junto a tu organización. Gobiernos y ONG de todo el mundo confían en
nosotros.

✓ Configuración segura por defecto en la plataforma para proteger tus datos y
reducir al mínimo las brechas de seguridad

✓ Ajustes de seguridad sólidos y configurables para garantizar el cumplimiento
de tus políticas

✓ Crea canalizaciones de datos de "persistencia cero" para controlar por
completo dónde se almacenan los datos

✓ Capacitación y orientación sobre la implementación de la seguridad para los
equipos de tus proyectos ([más información](/get-started/security.md))

Consulta nuestro sitio web principal para saber más sobre
[seguridad y confianza](https://www.openfn.org/trust) y
[cumplimiento](https://www.openfn.org/compliance) en OpenFn.

## Cumplimiento {#compliance}

Las implementaciones de OpenFn son muy configurables y pueden desplegarse en
cualquier lugar, lo que ayuda a garantizar el cumplimiento de las políticas de
privacidad y seguridad de datos de tu país o de tu organización.

**Para saber más sobre cómo entendemos el cumplimiento, sobre todo de normas
como el GDPR o la HIPAA, consulta nuestra página web de
[cumplimiento](https://www.openfn.org/compliance).** Contacta a
[nuestro equipo principal](mailto:support@openfn.org) si te interesa recibir
consultoría y asesoramiento sobre cómo desplegar y configurar tu implementación
de OpenFn para cumplir al 100 % con las normas.

## OpenFn y el almacenamiento de datos {#openfn-and-data-storage}

En tu ecosistema digital, **OpenFn suele funcionar como una solución de
procesamiento y transferencia de datos, no como un servicio de almacenamiento de
datos.**

Como bien público digital de código abierto, OpenFn puede desplegarse en
cualquier lugar ([ver documentación](/deploy/options.md)), y los workflows
pueden configurarse para respetar los acuerdos de intercambio de datos y las
políticas de seguridad de tu organización.

Consulta las páginas de documentación de
[gestión de proyectos](/manage-projects/platform-mgmt.md) para saber más sobre
los ajustes de proyecto y de
[almacenamiento de datos](/manage-projects/io-data-storage.md).

El siguiente diagrama muestra una arquitectura de ejemplo en la que incluso
OpenFn Cloud puede configurarse como una **canalización de datos de
"persistencia cero"** para cumplir los requisitos de seguridad y residencia de
datos. Así, los socios pueden configurar y poner a prueba proyectos rápidamente
con la plataforma de OpenFn alojada en la nube, lista para usar, y migrar a un
despliegue local cuando estén preparados para escalar.

![Arquitectura de ejemplo](/img/zero-persistence.webp)

Para borrar los datos de tu proyecto en cualquier momento, puedes
[borrar tu proyecto](/manage-projects/platform-mgmt.md) o
[borrar tu cuenta](/manage-users/user-profile.md).

## Cifrado {#encryption}

OpenFn Cloud almacena los datos en un producto Cloud SQL orientado a la
seguridad, que garantiza cifrado de 256 bits en reposo, y solo permitimos
conexiones con TLS/SSL.

Cifrado de la plataforma:

- Advanced Encryption Standard de 256 bits
- Cifrado SSL/TLS en tránsito
- Credenciales y secretos cifrados en disco

Más información en [openfn.org/trust](https://www.openfn.org/trust#encryption).

## Credenciales {#credentials}

Las [credenciales](/manage-projects/manage-credentials.md), que dan a OpenFn
acceso a las API de tus distintas tecnologías, están cifradas en reposo. Así, en
el improbable caso de una brecha en la base de datos, un atacante no podría leer
tu información de autenticación sin acceder a varios servidores protegidos de
forma independiente.

Las conexiones con tus aplicaciones de destino solo se hacen por HTTPS, con SSL
y, en la mayoría de los casos, autenticación básica. Las especificaciones
técnicas de la conexión dependen del endpoint REST de la aplicación a la que te
conectas. Encontrarás la documentación técnica de cada adaptor en la
[documentación de adaptors](/adaptors) o en su repositorio en Github, en
[github.com/OpenFn/adaptors](https://github.com/OpenFn/adaptors).

Solo tú (quien las creó) puedes ver las credenciales, que se cargan en tu
entorno de ejecución privado para ejecutar los jobs. Puedes borrarlas en
cualquier momento y se eliminarán del sistema.
[Consulta la documentación](/manage-users/user-credentials.md) para saber más
sobre la gestión y el uso compartido de credenciales en OpenFn.

## Gestión del acceso de usuarios y RBAC {#user-access-management-and-rbac}

OpenFn permite gestionar el acceso de los usuarios mediante **control de acceso
basado en roles (RBAC)**, con el que los administradores asignan permisos
detallados tanto a nivel de entorno como de proyecto. Los roles (por ejemplo,
Admin, Editor y Viewer) controlan quién puede ver, editar, ejecutar o gestionar
workflows y credenciales. El acceso puede limitarse a proyectos o
configuraciones de entorno concretos, con registros de auditoría y tokens de API
de alcance limitado para garantizar la seguridad y el cumplimiento.

Cuando invitas a nuevos usuarios a trabajar en tu proyecto como colaboradores,
se les asigna un rol que determina sus permisos. Consulta la documentación sobre
[colaboración](/manage-projects/collaboration.md) y
[roles de usuario](/manage-projects/user-roles-permissions.md) para más
información.

Cuando los usuarios se registran en la plataforma, se les pide que creen una
contraseña segura. Los superadministradores de OpenFn también pueden activar la
[autenticación multifactor](/manage-users/user-profile.md), la caducidad de las
contraseñas y el bloqueo de cuentas inactivas.

:::info ¿Más preguntas sobre la seguridad de OpenFn?

Primero, consulta las páginas de [confianza](https://www.openfn.org/trust) y
[cumplimiento](https://www.openfn.org/compliance) de nuestro sitio web, así como
la [guía de implementación segura](/get-started/security.md).

Haz tus preguntas en la [comunidad](https://community.openfn.org/) o
[contacta a nuestro equipo principal](mailto:security@openfn.org) para consultas
privadas.

:::
