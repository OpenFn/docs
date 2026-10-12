import Content from '@theme-original/DocItem/Content';
import { useDoc } from '@docusaurus/plugin-content-docs/client';
import UntranslatedNotice from '@site/src/components/UntranslatedNotice';

export default function ContentWrapper(props) {
  const { metadata } = useDoc();
  return (
    <>
      <UntranslatedNotice source={metadata.source} />
      <Content {...props} />
    </>
  );
}
