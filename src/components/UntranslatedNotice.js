import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Translate from '@docusaurus/Translate';

// Translated files live under i18n/; any other source is the English fallback.
export function isUntranslated(source) {
  return !source.startsWith('@site/i18n/');
}

// Shown on a non-English locale when the page has no translation and
// Docusaurus has fallen back to the English source file.
export default function UntranslatedNotice({ source }) {
  const { i18n } = useDocusaurusContext();
  if (i18n.currentLocale === i18n.defaultLocale) return null;
  if (!isUntranslated(source)) return null;
  return (
    <div className="alert alert--info margin-bottom--md">
      <span aria-hidden="true">🌐 </span>
      <Translate
        id="untranslatedNotice.message"
        description="Banner on pages that have no translation and are shown in English"
      >
        This page isn't available in your language, so we're showing it in
        English.
      </Translate>
    </div>
  );
}
