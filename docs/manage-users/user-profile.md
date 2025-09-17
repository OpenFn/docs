---
title: Update User Profile
sidebar_label: User Profile
slug: /user-profile
---

This article walks you through how to view and update your user information in
your User Profile.

![User Profile](/img/lightning_select_user_profile.webp)

### Change Email and Password

You can change the email address associated with your Profile, and update your
password.

![Change Email Password](/img/lightning_change_email_pw.webp)

### Enable Multi-Factor Authentication

By enabling Multi-Factor Authentication, you can add an additional layer of
security to your account by requiring more than just a password for logging in.

![Enable MFA](/img/lightning_enable_MFA.webp)

You can link your account to an authenticator app or a browser extension like
1Password or Authy. Once configured, the app will generate a one-time password
for you to provide during sign-in to verify your identity at each login.

To configure multi-factor authentication, use an authenticator app or browser
extension to scan the QR code found on your profile.

Alternatively, you can provide the secret key generated on your profile to the
app to set it up.

### Account Deletion

Your User Profile is also the place where you can delete your OpenFn account.

![Delete Account](/img/lightning_delete_account_cropped.webp)

To delete your account, click on the **"Delete my account"** button. You will be
asked to confirm the deletion by entering your email address and clicking
**"Delete Account"**.

When you confirm your intent to delete your account, your account will be
scheduled for deletion based on the grace period that your instance
administrator has set.

:::info

The grace period is the amount of time you have to change your mind and cancel
the deletion before your account is actually deleted. Default is 7 days.

:::

#### Account Deletion and Auditing

Please note that your account will not be permanently removed from an instance
if it has been used to manually create work orders or runs until that related
activity has been deleted. In such cases, you form part of a given project's
audit trail and the instance administrator may not be allowed to permanently
delete your account.

If you are using https://app.openfn.org you will need to cancel any active
subscriptions before you can delete your account.
