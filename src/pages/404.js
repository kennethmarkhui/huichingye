import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';

import SEO from 'components/Seo';
import Layout from 'components/Layout';
import NotFound from 'containers/404';

const NotFoundPage = () => {
  const intl = useIntl();

  return (
    <Layout>
      <SEO
        title={`404: ${intl.formatMessage({ id: 'notfound_page.name' })}`}
        lang={intl.locale}
        description={intl.formatMessage({
          id: 'notfound_page.seo_description',
        })}
      />
      <NotFound intl={intl} />
    </Layout>
  );
};

export default NotFoundPage;
