import styled from 'styled-components';

const PinkSale = styled.span`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 14px;
  font-family: 'avenir-next-bold', Arial;
  color: #ffffff;
  box-sizing: border-box;
  width: 76px;
  height: 32px;
  line-height: 32px;
  text-align: center;
  background: #ff5c5c;
  position: ${props => (props.isList ? 'absolute' : 'static')};
  top: ${props => (props.isList ? '8px' : '0')};
  right: ${props => (props.isList ? '8px' : '0')};
`;
export default PinkSale;
