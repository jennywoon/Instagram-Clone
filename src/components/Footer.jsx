import React from 'react'
import styled from 'styled-components';

const Footer = () => {
  return (
    <StyledFooter>
      <StyledUl>
        <StyledLi>Meta</StyledLi>
        <StyledLi>소개</StyledLi>
        <StyledLi>블로그</StyledLi>
        <StyledLi>채용 정보</StyledLi>
        <StyledLi>도움말</StyledLi>
        <StyledLi>API</StyledLi>
        <StyledLi>개인정보처리방침</StyledLi>
        <StyledLi>약관</StyledLi>
        <StyledLi>인기 계정</StyledLi>
        <StyledLi>해시태그</StyledLi>
        <StyledLi>위치</StyledLi>
        <StyledLi>Instagram StyledLite</StyledLi>
        <StyledLi>연락처 업로드 & 비사용자</StyledLi>
        <StyledLi>댄스</StyledLi>
        <StyledLi>식음료</StyledLi>
        <StyledLi>집 및 정원</StyledLi>
        <StyledLi>음악</StyledLi>
        <StyledLi>시각 예술</StyledLi>
      </StyledUl>
      <StyledUl>
        <StyledLi>한국어</StyledLi>
        <StyledLi>2022 Instagram from Meta</StyledLi>
      </StyledUl>
    </StyledFooter>
  )
}

const StyledFooter = styled.div`
  position: absolute;
  bottom: 0;
  left:0;
  right: 0;
  margin: 0px auto 10px auto;
  color: #9C9C9C;
  font-size: 0.8rem;
`


const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
const StyledLi = styled.li`
  padding: 0 0.5rem;
`


export default Footer