import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';

import SEO from 'components/Seo';
import Layout from 'components/Layout';
import Home from 'containers/Home';

const IndexPage = () => {
  const intl = useIntl();

  return (
    <Layout>
      <SEO
        title={intl.formatMessage({ id: 'home_page.name' })}
        lang={intl.locale}
        description={intl.formatMessage({
          id: 'home_page.seo_description',
        })}
      />
      <Home intl={intl} />
    </Layout>
  );
};

export default IndexPage;
