import React from 'react';

import SEO from 'components/Seo';
import Layout from 'components/Layout';
import Home from 'containers/Home';

const IndexPage = () => {
  return (
    <Layout>
      <SEO title='Home' />
      <Home />
    </Layout>
  );
};

export default IndexPage;
