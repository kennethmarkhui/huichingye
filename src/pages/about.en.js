import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';

import SEO from 'components/Seo';
import Layout from 'components/Layout';
import About from 'containers/About';

const AboutPage = () => {
  const intl = useIntl();
  // console.log(intl.messages);
  // {
  //   "p1": "Born in an elite family in China in 1933, he was deeply influenced by his family and started picking up different forms of art like calligraphy, stamp carving and print-making in his childhood. He came to Hong Kong in the 1950s. He is a self-learner, and his interest cover a wide range of art, both east and west.",
  //   "p2": "His exlibris are rustic and folklore-like, often making use of multi-plate skill to achieve his multi-color prints. His works are highly complimented by art critics of Taiwan, China and Hong Kong. His exlibris have been catalogued in various museums, two of his exlibris were used in the historical events in the memorial album of the late Deng Siu Ping, and the return of sovereignty of Hong Kong to China, both in 1997.",
  //   "p3": "He serves as honorary committee member or advisor to many art institutions and organizations, including the Korean Stamp Carving Society and the Hong Kong Exlibris Association."
  // }

  // NEED TO CHANGE THIS BRUTE FORCE APPROACH, FIND A WAY TO EXTRACT DESCRIPTION AS ARRAY
  const content = {
    description: [
      intl.formatMessage({ id: 'description.0' }),
      intl.formatMessage({ id: 'description.1' }),
      intl.formatMessage({ id: 'description.2' }),
    ],
  };
  const { description } = content;

  return (
    <Layout>
      <SEO title={intl.formatMessage({ id: 'about' })} />
      <About description={description} />
    </Layout>
  );
};

export default AboutPage;
