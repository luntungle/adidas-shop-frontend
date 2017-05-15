import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
width: 94px;
height: 94px;
object-fit: contain;
margin-top: 31px;
`;

export default () => <Img src={require('./adidaslogo.png')} alt="logo" />;
