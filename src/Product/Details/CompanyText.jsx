import React from 'react';
import styled from 'styled-components';

const CompanyText = styled.span`
  font-family: 'avenir-next-medium', Arial;
  font-size: 33px;
  color: #d8d8d8;
  ${p => p.isStrong && 'color: #6e6e6e;'}
  line-height: 50px;
`;

export default () => (
  <span>
    <CompanyText isStrong>Adidas</CompanyText>
    {' '}
    <CompanyText>
      is a German multinational corporation,
      headquartered in Herzogenaurach, Germany, that designs and
      manufactures shoes, clothing and accessories.
    </CompanyText>
  </span>
);
