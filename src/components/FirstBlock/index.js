import React from 'react';
import Media from 'react-media';

import Container from './Container';
import Arrow from './Arrow';
import Wrap from '../Wrap';
import Title from '../BigTitle';

export default () => (
  <Container>
    <Wrap disableBorder style={{ paddingTop: 60 }}>
      <Title>
        We design rich data tools and visualisations that help our customers leverage data for business insights and
        decision-making.
      </Title>
      <Media query={{ maxWidth: 850 }}>
        {
          matches => (matches ? (<Arrow offset="190" href="#whatWeDo" />)
            : (<Arrow offset="80" href="#whatWeDo" />))
        }
      </Media>
    </Wrap>
  </Container>
);
