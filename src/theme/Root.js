import React, { useEffect, useState, useCallback } from 'react';
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

    const json = await response.json()
    console.log(json)
    return json.text
  } catch (e) {
      console.error(e)
  }
}

const HelpDialog = ({ children, close }) => {
  const style = {
    position: 'absolute',
    width: '400px',
    height: '200px',
    border: 'solid 1px black',
    right: 40,
    bottom: 40,
    backgroundColor: 'white',
  }
  return (<div id="ai-help" style={style}>
    <div style={{ textAlign: 'center'}}>
      <b>Super friendly not evil AI Helper</b>
      <div style={{ float: 'right', cursor: 'pointer' }} onClick={() => close()}>X</div>
    </div>
    {children}
  </div>)

}

const Help = ({ text, close }) => {
  if (text) {
    if (text === true) {
      return <HelpDialog close={close}>
        Googling Frantically...
      </HelpDialog>
    }
    return <HelpDialog  close={close}>
        {text}
      </HelpDialog>
  }
  
  return <></>
}

export default function Root({ children }) {
  const location = useLocation();

  const [help, setHelp] = useState()

  const handleClose = useCallback(() => {
    setHelp(undefined)
  }, []);

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
            setHelp(true);
            explain(paragraph.textContent).then(x => {
              console.log({ x })
              setHelp(x);
            })
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

  return <>
    {children}
    <Help text={help} close={handleClose} />
  </>;
}
