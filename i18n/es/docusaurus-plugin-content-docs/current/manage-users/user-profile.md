---
title: Actualizar el perfil de usuario
sidebar_label: Perfil de usuario
slug: /user-profile
translation_source_hash: 599daf8fdede00b97cdb29723b9c6c392d68afea
translation_review_status: machine
---

Este artículo te explica cómo ver y actualizar tu información de usuario en tu
perfil de usuario.

![User Profile](/img/lightning_select_user_profile.webp)

### Cambiar el correo electrónico y la contraseña {#change-email-and-password}

Puedes cambiar la dirección de correo electrónico asociada a tu perfil y
actualizar tu contraseña.

![Change Email Password](/img/lightning_change_email_pw.webp)

### Habilitar la autenticación multifactor {#enable-multi-factor-authentication}

Al habilitar la autenticación multifactor, agregas una capa extra de seguridad a
tu cuenta, porque para iniciar sesión se necesita algo más que una contraseña.

![Enable MFA](/img/lightning_enable_MFA.webp)

Puedes vincular tu cuenta a una app de autenticación o a una extensión del
navegador, como 1Password o Authy. Una vez configurada, la app genera una
contraseña de un solo uso que tienes que ingresar al iniciar sesión para
verificar tu identidad cada vez.

Para configurar la autenticación multifactor, usa una app de autenticación o una
extensión del navegador para escanear el código QR que aparece en tu perfil.

También puedes configurarla ingresando en la app la clave secreta que se genera
en tu perfil.

### Eliminar la cuenta {#account-deletion}

En tu perfil de usuario también puedes eliminar tu cuenta de OpenFn.

![Delete Account](/img/lightning_delete_account_cropped.webp)

Para eliminar tu cuenta, haz clic en el botón **"Delete my account"**. Se te
pedirá que confirmes la eliminación ingresando tu dirección de correo
electrónico y haciendo clic en **"Delete Account"**.

Cuando confirmas que quieres eliminar tu cuenta, se programa su eliminación
según el período de gracia que haya definido el administrador de tu instancia.

:::info

El período de gracia es el tiempo que tienes para cambiar de opinión y cancelar
la eliminación antes de que tu cuenta se elimine definitivamente. El valor
predeterminado es de 7 días.

:::

#### Eliminación de la cuenta y auditoría {#account-deletion-and-auditing}

Ten en cuenta que, si usaste tu cuenta para crear work orders o runs
manualmente, no se eliminará de forma permanente de la instancia hasta que se
elimine esa actividad relacionada. En esos casos, formas parte del registro de
auditoría de un proyecto, y es posible que el administrador de la instancia no
pueda eliminar tu cuenta de forma permanente.

Si usas https://app.openfn.org, tienes que cancelar cualquier suscripción activa
antes de poder eliminar tu cuenta.
