import React from 'react';
import Media from 'react-media';

import Title from '../../Title';
import Container from './Container';
import Content from './Content';
import Block from './Block';
import Link from './Link';

export default () => (
  <Container>
    <Title>Drop us a line</Title>
    <Content>
      <Media query={{ maxWidth: 850 }}>
        {
          matches => (
            <Block
              style={{
                maxWidth: matches ? '100%' : '33%',
                paddingBottom: matches ? '30px' : '0',
              }}
            >
              Russia, Moscow, 3rd  Monetchikovsky lane, 11/1
            </Block>
          )
        }
      </Media>
      <Block>
        <div>
          <Link href="https://twitter.com/UrbicaDesign" target="_blank">twitter</Link>
        </div>
        <div>
          <Link href="https://medium.com/@urbica.co" target="_blank">medium</Link>
        </div>
      </Block>
      <Block>
        <div>
          <Link href="https://www.facebook.com/urbica.co/" target="_blank">facebook</Link>
        </div>
        <div>
          <Link href="https://www.instagram.com/urbica_design/" target="_blank">instagram</Link>
        </div>
      </Block>
      <Block>
        <div>
          <Link href="mailto:hello@urbica.co">hello@urbica.co</Link>
        </div>
        <div>
          <Link href="tel:+79166271646" disableArrow>
            +7 916 627 16 46
          </Link>
        </div>
      </Block>
    </Content>
  </Container>
);
