import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
padding: 0 15px;
display: flex;
align-items: center;
`;

const Lbl = styled.span`
  font-family: "avenir-next";
  font-weight: bold;
  font-size: 24px;
  text-transform: uppercase;
  margin-left: 36px;
  margin-right: 18px;
  color: #4d42f8;
`;

const Btn = styled.button`
  background: none;
  border: none;
  font-family: "avenir-next";
  font-weight: bold;
  font-size: 24px;
  text-transform: uppercase;
  color: #d6d6d6;
  padding: 0px 5px;
  cursor: pointer;
  &:hover {color: #4d42f8; }
`;

const BtnActive = styled(Btn)`
  color: #4d42f8;
`;

export default () => (
  <Wrapper>
    <Lbl>Size</Lbl>
    <Btn>36</Btn>
    <Btn>37</Btn>
    <Btn>38</Btn>
    <Btn>39</Btn>
    <Btn>40</Btn>
    <BtnActive>41</BtnActive>
    <Btn>42</Btn>
  </Wrapper>
);
