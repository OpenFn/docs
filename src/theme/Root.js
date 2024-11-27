import React, { useEffect } from 'react';
import { useLocation } from '@docusaurus/router';

export default function Root({ children }) {
  const location = useLocation();

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const paragraphs = document.querySelectorAll('p');

      paragraphs.forEach(paragraph => {
        if (!paragraph.querySelector('.ai-helper-icon')) {
          const icon = document.createElement('span');

          const content = paragraph.innerHTML;
          console.log(content);

          const search = paragraph.textContent.split(' ').join('+');
          const url = `https://letmegooglethat.com/?q=${search}`;
          icon.className = 'ai-helper-icon';
          icon.innerHTML = '<button class="sparkle-button">✨</button>';

          paragraph.append(icon);
        }
      });
    });

    // Observe changes in the main content area
    const targetNode = document.querySelector('#__docusaurus');
    if (targetNode) {
      observer.observe(targetNode, { childList: true, subtree: true });
    }

    return () => observer.disconnect(); // Cleanup the observer on unmount
  }, [location]);

  return <>{children}</>;
}
