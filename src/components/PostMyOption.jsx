import React from 'react'
import styled from 'styled-components'

const PostMyOption = () => {
  return (
    <StyledBackground>
      <StyledUploadBox>
        <StyledUploadBoxHeader>삭제</StyledUploadBoxHeader>
        <StyledUploadBoxHeader>수정</StyledUploadBoxHeader>
        <StyledUploadBoxHeader>좋아요 수 숨기기</StyledUploadBoxHeader>
        <StyledUploadBoxHeader>댓글 기능 해제</StyledUploadBoxHeader>
        <StyledUploadBoxHeader>게시물로 이동</StyledUploadBoxHeader>
        <StyledUploadBoxHeader>공유 대상...</StyledUploadBoxHeader>
        <StyledUploadBoxHeader>링크 복사</StyledUploadBoxHeader>
        <StyledUploadBoxHeader>퍼가기</StyledUploadBoxHeader>
        <StyledUploadBoxHeader style={{ border: 'none' }}>취소</StyledUploadBoxHeader>
      </StyledUploadBox>
    </StyledBackground>
  )
}

const StyledBackground = styled.div`
  width:100vw;
  height: 100vh;
  background: rgba(0,0,0,.5);
  z-index:10;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledUploadBox = styled.div`
  width: 450px;
  height: auto;
  border-radius: 20px;
  background: #fff;
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