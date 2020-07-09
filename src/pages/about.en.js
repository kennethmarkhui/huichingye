import React from 'react';

import SEO from 'components/Seo';
import Layout from 'components/Layout';
import About from 'containers/About';

const AboutPage = () => {
  return (
    <Layout>
      <SEO title='About' />
      <About />
    </Layout>
  );
};

export default AboutPage;
