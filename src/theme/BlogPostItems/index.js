import BlogPostItems from '@theme-original/BlogPostItems';
import UntranslatedNotice, {
  isUntranslated,
} from '@site/src/components/UntranslatedNotice';

// Article lists: one notice at the top if any article on the page is untranslated.
export default function BlogPostItemsWrapper(props) {
  const untranslated = props.items.find(({ content }) =>
    isUntranslated(content.metadata.source)
  );
  return (
    <>
      {untranslated && (
        <UntranslatedNotice source={untranslated.content.metadata.source} />
      )}
      <BlogPostItems {...props} />
    </>
  );
}
