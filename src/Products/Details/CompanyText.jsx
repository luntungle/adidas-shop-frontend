import React from 'react';
import styled from 'styled-components';

const CompanyText = styled.div`
  font-family: 'avenir-next-medium', Arial;
  font-size: 33px;
  line-height: 50px;
  color: #d8d8d8;
`;

export default () => (
  <CompanyText>
    Adidas is a German multinational corporation,
    headquartered in Herzogenaurach, Germany, that designs and
    manufactures shoes, clothing and accessories.
  </CompanyText>
);
