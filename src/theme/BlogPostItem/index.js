import BlogPostItem from '@theme-original/BlogPostItem';
import { useBlogPost } from '@docusaurus/plugin-content-blog/client';
import UntranslatedNotice from '@site/src/components/UntranslatedNotice';

export default function BlogPostItemWrapper(props) {
  const { metadata, isBlogPostPage } = useBlogPost();
  return (
    <>
      {isBlogPostPage && <UntranslatedNotice source={metadata.source} />}
      <BlogPostItem {...props} />
    </>
  );
}
