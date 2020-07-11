import React from 'react';
import { useTranslation } from 'react-i18next';

import SEO from 'components/Seo';
import Layout from 'components/Layout';
import About from 'containers/About';

const AboutPage = () => {
  const { i18n, t } = useTranslation();
  return (
    <Layout>
      <SEO title={t('about')} lang={i18n.language} />
      <About />
    </Layout>
  );
};

export default AboutPage;
