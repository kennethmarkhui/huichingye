import React from 'react';

import SEO from 'components/Seo';
import Layout from 'components/Layout';
import NotFound from 'containers/404';

const NotFoundPage = () => (
  <Layout>
    <SEO title='404 - Page Not Found' />
    <NotFound />
  </Layout>
);

export default NotFoundPage;
