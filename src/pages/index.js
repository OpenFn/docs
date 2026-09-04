import React, { useCallback } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Translate, { translate } from '@docusaurus/Translate';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import styles from './styles.module.css';

const highlights = [
  {
    title: translate({
      id: 'homepage.highlights.jobWritingGuide.title',
      message: 'Job Writing Guide',
    }),
    link: 'documentation/jobs/job-writing-guide',
    description: translate({
      id: 'homepage.highlights.jobWritingGuide.description',
      message: 'Writing a job for OpenFn? Start here',
    }),
  },
  {
    title: translate({
      id: 'homepage.highlights.cliUsage.title',
      message: 'CLI Usage Examples',
    }),
    link: 'documentation/cli-usage',
    description: translate({
      id: 'homepage.highlights.cliUsage.description',
      message: 'See what the CLI can do at a glance',
    }),
  },
  {
    title: translate({
      id: 'homepage.highlights.javascriptTips.title',
      message: 'JavaScript Tips & Tricks',
    }),
    link: 'documentation/cli-usage',
    description: translate({
      id: 'homepage.highlights.javascriptTips.description',
      message: 'Level up your code',
    }),
  },
];

const features = [
  {
    title: translate({ id: 'homepage.features.docs.title', message: 'Docs' }),
    link: 'documentation',
    imageUrl: 'img/undraw_Code_review_re_woeb.svg',
    description: (
      <Translate id="homepage.features.docs.description">
        Documentation on all aspects of OpenFn, the leading digital public good
        for workflow automation.
      </Translate>
    ),
  },
  {
    title: translate({
      id: 'homepage.features.adaptors.title',
      message: 'Adaptors',
    }),
    link: 'adaptors',
    imageUrl: 'img/undraw_pair_programming_njlp.svg',
    description: (
      <Translate id="homepage.features.adaptors.description">
        Searchable and browseable adaptors docs, examples, changelogs, and
        overviews for connecting the world's most common DPGs.
      </Translate>
    ),
  },
  {
    title: translate({
      id: 'homepage.features.articles.title',
      message: 'Articles',
    }),
    link: 'articles',
    imageUrl: 'img/undraw_Portfolio_update_re_jqnp.svg',
    description: (
      <Translate id="homepage.features.articles.description">
        How to prepare for data integration? How to structure external IDs? How
        to...
      </Translate>
    ),
  },
  {
    title: translate({ id: 'homepage.features.blog.title', message: 'Blog' }),
    link: 'https://openfn.org/blog',
    imageUrl: 'img/undraw_reading_time_gvg0.svg',
    description: (
      <Translate id="homepage.features.blog.description">
        We help the world's most promising social impact interventions achieve
        scale through automation, data integration, and interoperability. These
        are their stories.
      </Translate>
    ),
  },
  {
    title: translate({
      id: 'homepage.features.enterprise.title',
      message: 'Enterprise',
    }),
    link: 'https://www.openfn.org',
    imageUrl: 'img/undraw_secure_server_s9u8.svg',
    description: (
      <Translate id="homepage.features.enterprise.description">
        Check out the enterprise-grade OpenFn integration-platform-as-a-service
        (iPaaS), offering free-forever plans and affordable pathways to scale.
      </Translate>
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
    <Layout
      title={translate({ id: 'homepage.meta.title', message: 'Home' })}
      description={translate({
        id: 'homepage.meta.description',
        message: 'The OpenFn Documentation Site',
      })}
    >
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={particlesConfig}
        />
        <div className="container" style={{ zIndex: 1 }}>
          <h1 className="hero__title">
            <Translate id="homepage.hero.title">OpenFn Documentation</Translate>
          </h1>
          {/* The English copy here mirrors `tagline` in docusaurus.config.js.
              Site-level config values are not extracted for translation, so the
              hero subtitle is declared as a translatable string instead. */}
          <p className="hero__subtitle">
            <Translate id="homepage.hero.subtitle">
              The leading digital public good for workflow automation, OpenFn
              makes ICT4D more efficient.
            </Translate>
          </p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--secondary button--lg',
                styles.getStarted
              )}
              to={'/documentation'}
            >
              <Translate id="homepage.hero.cta">Get Started</Translate>
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
                      alt={translate({
                        id: 'homepage.newsletter.imageAlt',
                        message: 'Newsletter',
                      })}
                    />
                  </div>
                  <h3>
                    <Translate id="homepage.newsletter.title">
                      Newsletter
                    </Translate>
                  </h3>
                  <p>
                    <Translate id="homepage.newsletter.description">
                      Never miss a story from us, subscribe to our newsletter
                      here.
                    </Translate>
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
                        placeholder={translate({
                          id: 'homepage.newsletter.emailPlaceholder',
                          message: 'Email',
                        })}
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
                        <Translate id="homepage.newsletter.subscribe">
                          Subscribe
                        </Translate>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
      <div className="container" style={{ marginTop: '30px' }}>
        <h1 style={{ textAlign: 'center' }}>
          <Translate id="homepage.highlights.heading">
            ✨Documentation Highlights✨
          </Translate>
        </h1>
        <div className="highlights-wrapper">
          {highlights.map(h => (
            <div className="highlight-card">
              <h3>
                <a href={h.link}>{h.title}</a>
              </h3>
              <p>{h.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Home;
