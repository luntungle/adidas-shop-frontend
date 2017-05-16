import React from 'react';
import styled from 'styled-components';

const Gallery = styled.div`
  flex: 1;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;

  {''/* display: flex;
  flex-flow: row wrap;
  justify-content: space-between;; */}
`;

const Thumb = styled.img`
  {''/* width: 15%;
  height: auto;
  margin-right: 5px;
  margin-left: 34px; */}
  width: 17%;
  height: auto;
  outline-color: #fff;
  cursor: pointer;
  margin: 0 14px;
  }
  ${p => p.isActive && 'outline: 4px solid #d8d8d8;'}
  }
`;

// const MoreLabel = styled.div`
//   margin: 0 14px;
//   display: flex;
//   flex: 1;
//   flex-flow: column nowrap;
//   justify-content: center;
//   width: 160px;
//   height: 120px;
//   cursor: pointer;
// `;
//
// const MoreItem = styled.span`
//   position: relative;
//   width: 100%;
//   height: 3px;
//   border-radius: 2px;
//   background-color: #e7e7e7;
//   &:before, &:after {
//     content: '';
//     position: relative;
//     display: block;
//     width: 100%;
//     background: #e7e7e7;
//     height: 3px;
//     border-radius: 2px;
//     transition: all .2s ease;
//   }
//   &:before {
//     top: -6px;
//   }
//   &:after {
//     top: 3px;
//   }
// `;
//
// const BtnSeeMore = styled.button`
//   flex: 0 1 40px;
//   width: 64px;
//   text-align: left;
//   font-family: $avenit-next;
//   font-size: 14px;
//   font-weight: bold;
//   color: #c0c0c0;
//   cursor: pointer;
//   border: none;
//   background: transparent;
//   &:hover {
//     color: #6e6e6e;
//   }
// `;

export default () => (
  <Gallery>
    <Thumb src={require('../../../components/img/shoes3_1.jpg')} alt="" />
    <Thumb src={require('../../../components/img/shoes3_2.jpg')} alt="" />
    <Thumb src={require('../../../components/img/shoes3_3.jpg')} alt="" />
    <Thumb src={require('../../../components/img/shoes3.jpg')} alt="" />
    {/* <MoreLabel>
      <MoreItem />
    </MoreLabel>
    <BtnSeeMore>see more photos</BtnSeeMore> */}
  </Gallery>
);
