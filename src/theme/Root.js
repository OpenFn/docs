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
  const outerStyle = {
    position: 'sticky',
    width: '100%',
    minHeight: '200px',
    right: 10,
    bottom: 10,
    padding: '2px',
  };
  const innerStyle = {
    backgroundColor: 'white',
    width: '30vw',
    maxWidth: '1000px',
    border: 'double 4px rgb(158 195 238)',
    padding: '10px 20px',
    borderRadius: '4px',
    float: 'right',
    marginRight: '10px',
    boxShadow: 'rgb(158, 158, 158) -3px 3px 6px -2px'

  }
  return (<div id="ai-help" style={outerStyle}>
    <div style={innerStyle}>
    <div style={{ textAlign: 'center', borderBottom: 'solid 1px #c0c0c0', marginBottom: '6px'}}>
      <b>Super friendly not evil AI Helper</b>
      <div style={{ float: 'right', cursor: 'pointer' }} onClick={() => close()}>X</div>
    </div>
    {children}
    </div>
  </div>)

}

const Help = ({ text, close }) => {
  if (text) {
    if (text === true) {
      return <HelpDialog close={close}>
        Googling Frantically...
        <div style={{ textAlign: 'center'}}>
          <img width="250" src="img/riker2-1.png"></img>
        </div>
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
