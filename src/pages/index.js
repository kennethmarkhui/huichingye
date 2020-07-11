import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';
import { FaRegImages } from 'react-icons/fa';

import SEO from 'components/Seo';
import Layout from 'components/Layout';
import Home from 'containers/Home';

const IndexPage = () => {
  const intl = useIntl();

  const content = {
    title: intl.formatMessage({ id: 'homePage.title' }),
    links: [
      {
        to:
          'https://drive.google.com/drive/folders/1B4ouIFUFbO90thXUCphrC50twoMb81Mi?usp=sharing',
        text: intl.formatMessage({ id: 'homePage.links' }),
        Icon: FaRegImages,
        newTab: true,
      },
    ],
  };
  const { title, links } = content;

  return (
    <Layout>
      <SEO
        title={intl.formatMessage({ id: 'homePage.name' })}
        lang={intl.locale}
      />
      <Home title={title} links={links} />
    </Layout>
  );
};

export default IndexPage;
