import React, { useCallback } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import styles from './styles.module.css';

const features = [
  {
    title: 'Docs',
    link: 'documentation',
    imageUrl: 'img/undraw_Code_review_re_woeb.svg',
    description: (
      <>
        Documentation on all aspects of OpenFn, the leading digital public good
        for workflow automation.
      </>
    ),
  },
  {
    title: 'Adaptors',
    link: 'adaptors',
    imageUrl: 'img/undraw_pair_programming_njlp.svg',
    description: (
      <>
        Searchable and browseable adaptors docs, examples, changelogs, and
        overviews for connecting the world's most common DPGs.
      </>
    ),
  },
  {
    title: 'Articles',
    link: 'articles',
    imageUrl: 'img/undraw_Portfolio_update_re_jqnp.svg',
    description: (
      <>
        How to prepare for data integration? How to structure external IDs? How
        to...
      </>
    ),
  },
  {
    title: 'Blog',
    link: 'blog',
    imageUrl: 'img/undraw_reading_time_gvg0.svg',
    description: (
      <>
        We help the world's most promising social impact interventions achieve
        scale through automation, data integration, and interoperability. These
        are their stories.
      </>
    ),
  },
  {
    title: 'Enterprise',
    link: 'https://www.openfn.org',
    imageUrl: 'img/undraw_secure_server_s9u8.svg',
    description: (
      <>
        Check out the enterprise-grade OpenFn integration-platform-as-a-service
        (iPaaS), offering free-forever plans and affordable pathways to scale.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description, link }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      <Link
        style={{
          color: 'var(--ifm-font-color-base)',
          textDecoration: 'none',
        }}
        to={link.startsWith('http') ? link : useBaseUrl(link.toLowerCase())}
      >
        {imgUrl && (
          <div className="text--center">
            <img className={styles.featureImage} src={imgUrl} alt={title} />
          </div>
        )}
        <h3>{title}</h3>
        <p>{description}</p>
      </Link>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  const particlesConfig = {
    particles: {
      number: {
        value: 60,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: '#ffffff',
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 0,
          color: '#000000',
        },
        polygon: {
          nb_sides: 5,
        },
        image: {
          src: 'img/github.svg',
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: '#ffffff',
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1.5,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'grab',
        },
        onclick: {
          enable: true,
          mode: 'push',
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 200,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
    },
  };

  return (
    <Layout title={`Home`} description="The OpenFn Documentation Site">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <Particles
          // style={particlesStyle}
          id="tsparticles"
          init={particlesInit}
          options={particlesConfig}
        />
        <div className="container" style={{ zIndex: 1 }}>
          <h1 className="hero__title">OpenFn Documentation</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--secondary button--lg',
                styles.getStarted
              )}
              to={useBaseUrl('documentation/')}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
                <div className={clsx('col col--4', styles.feature)}>
                  <div className="text--center">
                    <img
                      className={styles.featureImage}
                      src="img/undraw_Newsletter_re_wrob.svg"
                      alt="Newsletter"
                    />
                  </div>
                  <h3>Newsletter</h3>
                  <p>
                    Never miss a story from us, subscribe to our newsletter
                    here.
                  </p>
                  <form
                    action="https://openfn.us11.list-manage.com/subscribe/post?u=ad898e5a4d5a9aab0bbd63aee&amp;id=bf982e5409"
                    method="post"
                    name="mc-embedded-subscribe-form"
                    target="_blank"
                    novalidate
                  >
                    <div className={styles.subscribeForm}>
                      <input
                        type="email"
                        placeholder="Email"
                        name="EMAIL"
                        id="mce-EMAIL"
                        autocomplete="on"
                        required
                        className={styles.emailButton}
                      />
                      <button
                        type="submit"
                        name="subscribe"
                        className="button button--secondary button--sm"
                      >
                        Subscribe
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
