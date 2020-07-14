import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';

import SEO from 'components/Seo';
import Layout from 'components/Layout';
import Home from 'containers/Home';

const IndexPage = ({ location }) => {
  const intl = useIntl();

  return (
    <Layout>
      <SEO
        title={intl.formatMessage({ id: 'pages.home.seo.title' })}
        lang={intl.locale}
        description={intl.formatMessage({
          id: 'pages.home.seo.description',
        })}
        path={location.pathname}
      />
      <Home intl={intl} />
    </Layout>
  );
};

export default IndexPage;
