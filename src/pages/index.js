import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Particles from 'react-particles';
import styles from './styles.module.css';

const features = [
  {
    title: 'Docs',
    link: 'documentation',
    imageUrl: 'img/undraw_Code_review_re_woeb.svg',
    description: (
      <>
        Documentation on all aspects of OpenFn data integration, whether you're
        using devtools, platform, or microservice.
      </>
    ),
  },
  {
    title: 'Library',
    link: 'library',
    imageUrl: 'img/undraw_pair_programming_njlp.svg',
    description: (
      <>
        Searchable and browseable jobs, triggers, and static data objects shared
        by our community.
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
  return (
    <Layout title={`Home`} description="The OpenFn Documentation Site">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <Particles style={{ position: 'absolute', top: 0 }} />
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
