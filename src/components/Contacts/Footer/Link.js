import styled from 'styled-components';
import { Link } from 'gatsby';
import arrow from '../../../assets/svg/Arrow.svg';

export default styled(Link)`
  position: relative;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  text-decoration-line: none;

  color: #cccccc;
  
  transition: opacity 0.3s;
  
  &:after {
    position: absolute;
    content: '';
    right: -35px;
    top: 5px;
    width: 20px;
    height: 25px;
    background: url(${arrow}) no-repeat;
    background-size: contain;
  }

  &:hover {
    opacity: 0.5;
  }
`;
