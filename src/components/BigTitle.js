import styled from 'styled-components';

export default styled.div`
  max-width: ${props => (props.locale === 'ru' ? '55%' : '50%')};
  line-height: calc(100vw / 23);
  font-size: calc(100vw / 30);
  text-transform: uppercase;

  color: #cccccc;

  mix-blend-mode: normal;
  margin-bottom: 30px;
  
  @media (max-width: 850px) {
    max-width: 100%;
    line-height: 33px;
    font-size: 30px;
  }
`;
