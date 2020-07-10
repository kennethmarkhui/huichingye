import React from 'react';
import { useTranslation } from 'react-i18next';

import SEO from 'components/Seo';
import Layout from 'components/Layout';
import Home from 'containers/Home';

const IndexPage = () => {
  const { i18n, t } = useTranslation('translation');
  return (
    <Layout>
      <SEO title={t('home')} lang={i18n.language} />
      <Home />
    </Layout>
  );
};

export default IndexPage;
