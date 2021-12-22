import React from 'react';
import { useIntl } from 'gatsby-plugin-react-intl';

import SEO from 'components/Seo';
import Layout from 'components/Layout';
import NotFound from 'containers/404';

const NotFoundPage = () => {
  const intl = useIntl();

  return (
    <Layout>
      <SEO
        title={`404: ${intl.formatMessage({ id: 'pages.notfound.seo.title' })}`}
        lang={intl.locale}
        description={intl.formatMessage({
          id: 'pages.notfound.seo.description',
        })}
      />
      <NotFound intl={intl} />
    </Layout>
  );
};

export default NotFoundPage;
