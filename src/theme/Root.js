import React, { useEffect } from 'react';
import { useLocation } from '@docusaurus/router';


const APOLLO_URL = 'http://localhost:3001/services/echo'

// Explain some text
async function explain(text) {
  try {
    console.log(' Explaining paragraph')
    console.log(text)
    // lets call apollo's echo endpoint for now

    const payload = {
      text,
      page: window.location.href
    }

    const response = await fetch(APOLLO_URL, {
      method:'POST',
      body: JSON.stringify(payload),
      headers: {
        'content-type': 'application/json',
      },
    })

    const json = await response.text()
    console.log(json)
    return json
  } catch (e) {
      console.error(e)
  }
}

export default function Root({ children }) {
  const location = useLocation();

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const paragraphs = document.querySelectorAll('p');

      paragraphs.forEach(paragraph => {
        if (!paragraph.querySelector('.ai-helper-icon')) {
          const icon = document.createElement('span');

          icon.title = "Explain this with AI"
          icon.className = 'ai-helper-icon';
          icon.innerHTML = '<button class="sparkle-button">✨</button>';
          
          icon.onclick = () => {
            explain(paragraph.textContent)
          }

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
