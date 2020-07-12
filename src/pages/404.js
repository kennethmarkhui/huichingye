import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';

import SEO from 'components/Seo';
import Layout from 'components/Layout';
import NotFound from 'containers/404';

const NotFoundPage = () => {
  const intl = useIntl();
  const content = {
    message: intl.formatMessage({ id: 'notfoundPage.message' }),
  };
  const { message } = content;

  return (
    <Layout>
      <SEO
        title={`404: ${intl.formatMessage({ id: 'notfoundPage.name' })}`}
        lang={intl.locale}
      />
      <NotFound message={message} />
    </Layout>
  );
};

export default NotFoundPage;
