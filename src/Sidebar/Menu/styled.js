import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const MenuLine = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const TopLink = styled(NavLink)`
  font-size: 24px;
  text-transform: uppercase;
  cursor: pointer;
  padding-top: 15px;
  padding-bottom: 20px;
  color: #ffffff;
  text-align: center;
  font-family: "avenir-next";
  font-weight: 700;
  text-decoration: none;
`;

const SubLink = styled(NavLink)`
  font-family: "andale-mono";
  font-size: 24px;
  text-transform: uppercase;
  color: #2f2f2f
  padding-bottom: 25px;
  text-align: center;
  text-decoration: none;
  &:hover { color: #ffffff}
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 15px;
`;

const Icon = styled.img`
  margin-bottom: 4px;
`;

export { MenuLine, TopLink, SubLink, Wrapper, Icon };
