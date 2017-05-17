import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 0 15px;
  display: flex;
  align-items: center;
`;

const Tag = styled.span`
  font-family: "avenir-next";
  font-weight: bold;
  font-size: 24px;
  text-transform: uppercase;
  margin-left: 36px;
  margin-right: 18px;
  color: #4d42f8;
`;

const Button = styled.button`
  background: none;
  border: none;
  outline: none;
  font-family: "avenir-next";
  font-weight: bold;
  font-size: 24px;
  text-transform: uppercase;
  color: ${props => (props.isActive ? '#4d42f8' : '#d6d6d6')};
  padding: 0px 5px;
  cursor: pointer;
  &:hover {color: #4d42f8; }
`;

export default () => (
  <Wrapper>
    <Tag>Size</Tag>
    <Button>36</Button>
    <Button>37</Button>
    <Button>38</Button>
    <Button>39</Button>
    <Button>40</Button>
    <Button isActive>41</Button>
    <Button>42</Button>
  </Wrapper>
);
