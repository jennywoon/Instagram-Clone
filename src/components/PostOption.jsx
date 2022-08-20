import React from 'react'
import styled from 'styled-components'

const PostOption = () => {
  return (
    <StyledBackground>
      <StyledUploadBox>
        <StyledUploadBoxHeader>신고</StyledUploadBoxHeader>
        <StyledUploadBoxHeader>팔로우 취소</StyledUploadBoxHeader>
        <StyledUploadBoxHeader>즐겨찾기에 추가</StyledUploadBoxHeader>
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



  &:last-child:hover  {
    background-color: #eee;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }
`

export default PostOption