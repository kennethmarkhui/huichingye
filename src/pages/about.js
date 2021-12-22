import React from 'react';
import { useIntl } from 'gatsby-plugin-react-intl';

import SEO from 'components/Seo';
import Layout from 'components/Layout';
import About from 'containers/About';

const AboutPage = ({ location }) => {
  const intl = useIntl();

  return (
    <Layout>
      <SEO
        title={intl.formatMessage({ id: 'pages.about.seo.title' })}
        lang={intl.locale}
        description={intl.formatMessage({
          id: 'pages.about.seo.description',
        })}
        path={location.pathname}
      />
      <About intl={intl} />
    </Layout>
  );
};

export default AboutPage;
