import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';

import SEO from 'components/Seo';
import Layout from 'components/Layout';
import About from 'containers/About';

const AboutPage = () => {
  const intl = useIntl();

  const content = {
    description: intl.formatMessage({ id: 'about_page.description' }),
  };
  const { description } = content;

  return (
    <Layout>
      <SEO
        title={intl.formatMessage({ id: 'about_page.name' })}
        lang={intl.locale}
      />
      <About description={description} />
    </Layout>
  );
};

export default AboutPage;
