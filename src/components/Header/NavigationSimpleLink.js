import styled from 'styled-components';

const NavigationSimpleLink = styled.a`
  font-size: 30px;
  line-height: 71px;
  padding-top: 5px;
  text-transform: uppercase;
  margin-left: 25px;
  text-decoration: none;
  border-bottom: 3px solid transparent;

  color: rgba(204, 204, 204, 1);
  
  transition: color 0.3s;

  @media (min-width: 850px) {
    &:hover {
      color: rgba(204, 204, 204, 0.5);
    }
  }
  
  @media (max-width: 850px) {
    margin-left: 0;
  }
`;

export default NavigationSimpleLink;
