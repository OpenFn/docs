import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Particles from 'react-particles-js';
import styles from './styles.module.css';

const features = [
  {
    title: 'Documentation',
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
    imageUrl: 'img/undraw_Portfolio_update_re_jqnp.svg',
    description: (
      <>
        How to prepare for data integration? How to structure external IDs? How
        to...
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      <Link
        style={{
          color: 'var(--ifm-font-color-base)',
          textDecoration: 'none',
        }}
        to={useBaseUrl(title.toLowerCase())}
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
    <Layout title={`Docs`} description="The OpenFn Documentation Site">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <Particles style={{ position: 'absolute', top: 0 }} />
        <div className="container" style={{ zIndex: 1000 }}>
          <h1 className="hero__title">{siteConfig.title}</h1>
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
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
