import React from 'react';
import Title from '../../Title';
import Container from './Container';
import Content from './Content';
import Block from './Block';
import Link from './Link';


export default () => (
  <Container>
    <Title>Drop us a line</Title>
    <Content>
      <Block style={{ maxWidth: '33%' }}>
        Russia, Moscow, 3rd  Monetchikovsky lane, 11/1
      </Block>
      <Block>
        <div>
          <Link href="/">twitter</Link>
        </div>
        <div>
          <Link href="/">medium</Link>
        </div>
      </Block>
      <Block>
        <div>
          <Link href="/">face</Link>
        </div>
        <div>
          <Link href="/">medium</Link>
        </div>
      </Block>
      <Block>
        <div>
          <Link href="/">hello@urbica.co</Link>
        </div>
        +7 916 627 16 46
      </Block>
    </Content>
  </Container>
);
