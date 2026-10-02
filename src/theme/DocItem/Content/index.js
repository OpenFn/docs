import Content from '@theme-original/DocItem/Content';
import { useDoc } from '@docusaurus/plugin-content-docs/client';
import UntranslatedNotice from '@site/src/components/UntranslatedNotice';

export default function ContentWrapper(props) {
  const { metadata } = useDoc();
  return (
    <>
      {/* v1 docs are frozen and stay English; they already have their own banner. */}
      {metadata.version !== 'legacy' && (
        <UntranslatedNotice source={metadata.source} />
      )}
      <Content {...props} />
    </>
  );
}
