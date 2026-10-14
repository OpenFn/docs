# Identify gaps: Manage Users & Credentials

**Scope:** the "Manage Users & Credentials" sidebar category:

- `docs/manage-users/user-profile.md`
- `docs/manage-users/user-credentials.md`
- `docs/manage-users/api-tokens.md`

**Checked against:** `OpenFn/lightning` at `origin/main` 2d465f8 (29 Sep 2026).
The CLI and adaptors repos don't touch these pages.

**Date:** 2026-09-30

**Counts:** 2 Must; 11 Should; 8 Could; 2 Questions.

---

## Must change

1. **`docs/manage-users/user-credentials.md:19,28`**: the page says to click `Edit` and
   choose a project under `Project Access`. Each credential row now has an `Actions`
   menu (Transfer; Edit; Delete) (`lib/lightning_web/live/credential_live/credential_index_component.html.heex`).
   The form section is titled "Projects access", and its dropdown reads
   "Grant projects access to this credential"
   (`credential_form_component.ex:1003`, `lib/lightning_web/live/components/credentials.ex:137`).
   **Fix:** rewrite both steps as Actions > Edit > Projects access.

2. **`docs/manage-users/user-profile.md:52-53`**: the page says the grace period is time
   to "change your mind and cancel the deletion". The account is disabled straight
   away and the user can no longer log in. The notification email says to contact
   an admin to stop it (`lib/lightning/accounts/user_notifier.ex:210-218`).
   **Fix:** say you will be logged out, and that you must contact your instance
   administrator to cancel.

---

## Should change

1. **`docs/manage-users/user-credentials.md:7,11`**: the page calls Credentials a page "of
   your profile" and of your "User Settings". There is no "User Settings". Credentials
   is its own item in the user menu, next to User Profile
   (`lib/lightning_web/components/layout_components.ex:159`, `lib/lightning_web/live/components/menu.ex:101`).
   **Fix:** "Open the user menu (top right) and choose **Credentials**."

2. **`docs/manage-users/api-tokens.md:24`**: the page says tokens are managed in your User
   Profile. They are on a separate **API Tokens** menu item, and that page is titled
   "Personal Access Tokens" (`layout_components.ex:166`,
   `lib/lightning_web/live/tokens_live/index.ex:27`).
   **Fix:** correct the navigation step.

3. **`docs/manage-users/api-tokens.md:30-35`**: the page ends at "copy the token". It does
   not say:
   - how to use the token (as a bearer token in the `Authorization` header; as
     `OPENFN_API_KEY` for the CLI);
   - that tokens do not expire (the token has no `exp` claim; `lib/lightning/tokens.ex:18-34`);
   - how to revoke one (trash icon), or what the "Last Used at" column shows
     (`tokens_live/index.html.heex`).

   **Fix:** add "Use your token" and "Revoke a token" sections, linking
   `/build/workflows-api.md` and `/build-for-developers/cli-sync.md`.

4. **`docs/manage-users/user-credentials.md`**: the page never explains deleting a
   credential. What happens:
   - the credential is removed from every project straight away;
   - jobs that used it now run without a credential;
   - its secrets are scrubbed after the grace period, but the record is kept
     until the audit trail expires;
   - until then, the Actions menu shows **Cancel deletion** and **Delete now**.

   Sources: `credential_index_component.ex:459-489`,
   `lib/lightning_web/live/components/credential_deletion_modal.ex`, `user_notifier.ex:223-238`.
   **Fix:** add a "Delete a credential" section.

5. **`docs/manage-users/user-credentials.md`**: transferring credential ownership has
   shipped (CHANGELOG: "Transfer credentials ownership to a project collaborator"), but
   no page on the site mentions it. **Fix:** add a section. See the outline under
   [Missing section](#missing-section-transfer-credential-ownership).

6. **`docs/manage-users/user-credentials.md:19`**: the page says you can update "the name
   and login details", but not that the edit form has environment tabs. You can add,
   rename, and delete an environment there (`credential_form_component.ex:877-993,1211`).
   **Fix:** mention environments and link `/build/sandboxes.md#environments`.

7. **`docs/manage-users/user-credentials.md:9-17`**: the page doesn't say that it also
   lists **OAuth Clients** and **Keychain Credentials** tables. It also doesn't mention
   the **Add new** menu (Credential; OAuth Client [Advanced])
   (`credential_live/index.html.heex`, `credentials.ex:364`).
   **Fix:** add a short orientation paragraph linking `/manage-projects/oauth.md` and
   `/manage-projects/manage-credentials.md`.

8. **`docs/manage-users/user-credentials.md:13,15,21,30`**: the screenshots are out of date.
   `lightning_edit_user_credential.webp` shows a "New Credential" button, a "Production"
   column, and inline Edit | Delete links. The current table has the columns Name; Type;
   Projects with access; External ID; Environments; Actions
   (`lib/lightning_web/live/components/data_tables.ex:36-48`).
   **Fix:** flag for a human to recapture (agents must not retake screenshots).

9. **`docs/manage-users/user-profile.md:36-48`**: the page doesn't warn that deleting your
   account also deletes all your credentials. The modal says "account and credential data
   will be deleted" (`lib/lightning_web/live/components/user_deletion_modal.ex`).
   **Fix:** add a warning to transfer any credentials used in production first.

10. **`docs/manage-users/user-profile.md:19-34`**: the MFA section doesn't mention recovery
    codes (`profile_live/mfa_component.html.heex`, "Recovery codes"; route
    `/profile/auth/backup_codes`). **Fix:** explain how to get and store recovery codes,
    and how to disable MFA or set it up on another device.

11. **`docs/manage-users/user-profile.md`**: the page has no section on the Experimental
    Features toggle, but `/build/channels.md:29,63,235` sends readers here to turn it on
    (`profile_live/experimental_features_component.html.heex`).
    **Fix:** add a short section.

---

## Could change

1. **`docs/manage-users/user-credentials.md:28`**: when you remove a project that a
   workflow in it relies on, the app warns that runs for that workflow will fail
   (`credentials.ex`, the `data-confirm` in `projects_picker`). Mention this before
   readers remove access.

2. **`docs/manage-users/user-profile.md:12-17`**: the heading covers only email and
   password. The profile also lets you change your first and last name and your contact
   preference ("Change basic information"). It also has a **GitHub Access**
   connect/disconnect card (`profile_live/github_component.ex`). Add one line for each,
   linking `/manage-projects/link-to-gh.md`.

3. **`docs/manage-users/api-tokens.md:18-20`**: "if your profile has Admin level access" is
   unclear, because roles are set per project. Say instead that the token acts as you,
   with the role you have in each project.

4. **`docs/manage-users/user-profile.md:44`**: the button is labelled "Delete account",
   not "Delete Account", and the confirmation field is labelled "User email"
   (`user_deletion_modal.ex`).

5. **`docs/manage-users/api-tokens.md:7,12`**: "personal access API token", "Personal Access
   Token" and "API token" are used interchangeably. Pick one name to match the UI
   ("Personal Access Tokens") and define it once.

### House style (grouped)

6. **Alt text names the screen instead of saying what the image shows** (e.g. "API Tokens",
   "User Credential", "Enable MFA"). Affects all 11 images in `api-tokens.md`,
   `user-credentials.md` and `user-profile.md`.

7. **Not Prettier-formatted** (long lines; trailing spaces on lines 11, 13, 31, 40):
   `user-credentials.md`. This is a mechanical fix, so it can go in a Prettier-only PR.

8. **Sections start at `###` with no `##`**: `api-tokens.md`, `user-credentials.md`,
   `user-profile.md`.

No `glossary.yml` variant spellings were found. The one external link
(https://app.openfn.org) returned 200 on both tries.

---

## Questions

1. **`docs/manage-users/user-profile.md:53`**: "Default is 7 days" matches the code
   (`lib/lightning/config/bootstrap.ex:271`, `PURGE_DELETED_AFTER_DAYS`). The value on
   app.openfn.org is a per-deployment setting, though. Confirm with Brandon's team
   (product) whether the page should state the hosted value.

2. **`docs/manage-users/user-profile.md:65-66`**: the claim that you must "cancel any active
   subscriptions before you can delete your account" on app.openfn.org can't be checked
   from the Lightning code, because hosted billing isn't in that repo. Confirm with
   Brandon's team.

---

## Missing section: transfer credential ownership

**Where:** `docs/manage-users/user-credentials.md`, after "Share Credentials".

**Outline:**

- **Where to find it:** Actions > **Transfer** on a credential you own.
- **Steps:** enter the new owner's email address. They must be a member of every project
  that uses the credential (`transfer_credential_modal.ex:133`).
- **Confirming:** you receive a confirmation email, and the transfer stays pending until
  you confirm it.
- **Revoking:** while the transfer is pending, the menu item reads **Revoke Transfer**.
  Revoking keeps the credential yours (`transfer_credential_modal.ex:131,191`).
- **After the transfer:** the new owner can view and edit the secrets; you no longer can.

---

## Related pages outside this scope

Readers of this category land on these pages too:

- `docs/manage-projects/manage-credentials.md:11-12` mentions a "production environment"
  column. That column is now "Environments".
- `docs/manage-projects/manage-credentials.md:26` says the button is "New Credential". It
  is now **Add new**.
- `docs/manage-projects/manage-credentials.md:145` links to `/documentation/user-credentials`.
  That is the page slug; the house style asks for the file path
  (`/manage-users/user-credentials.md`).

## Generated adaptor pages

None involved, so there are no issues for `OpenFn/adaptors`.
