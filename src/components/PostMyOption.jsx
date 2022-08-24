import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const PostMyOption = ({ boardId, setMyOptionModal, onClickDeleteHandler, onClickPutModalHandler }) => {



  return (
    <>
      <StyledBackground onClick={() => setMyOptionModal(false)}>
      </StyledBackground>
      <StyledUploadBox>
        <StyledUploadBoxHeader 
        onClick={onClickDeleteHandler}>삭제</StyledUploadBoxHeader>
        <StyledUploadBoxHeader onClick={onClickPutModalHandler}>수정</StyledUploadBoxHeader>
        <StyledUploadBoxHeader>좋아요 수 숨기기</StyledUploadBoxHeader>
        <StyledUploadBoxHeader>댓글 기능 해제</StyledUploadBoxHeader>
        <StyledUploadBoxHeader>게시물로 이동</StyledUploadBoxHeader>
        <StyledUploadBoxHeader>공유 대상...</StyledUploadBoxHeader>
        <StyledUploadBoxHeader>링크 복사</StyledUploadBoxHeader>
        <StyledUploadBoxHeader>퍼가기</StyledUploadBoxHeader>
        <StyledUploadBoxHeader style={{ border: 'none' }}>취소</StyledUploadBoxHeader>
      </StyledUploadBox>
    </>
  )
}

const StyledBackground = styled.div`
      width:100vw;
      height: 100vh;
      background: rgba(0,0,0,0.2);
      position:fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index:99;
      overflow: hidden;
`

const StyledUploadBox = styled.div`
      width: 450px;
      height: 498px;
      border-radius: 20px;
      background: #fff;
      position:fixed;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin:auto;
      z-index:100;
`

const StyledUploadBoxHeader = styled.div`
border-bottom: 1px solid #ccc;
text-align: center;
padding: 1.05rem;

  &:first-child {
    color: red;
  }

  &:first-child:hover {
    background-color: #eee;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }

  &:nth-child(2):hover {
    background-color: #eee;
  }

  &:last-child:hover  {
    background-color: #eee;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }
`

export default PostMyOption