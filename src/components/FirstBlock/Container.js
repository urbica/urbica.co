import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 80px 30px 0;
  width: 100%;
  
  box-sizing: border-box;
  
  @media (max-width: 850px) {
    padding-top: 170px;
  }
`;

export default Container;
