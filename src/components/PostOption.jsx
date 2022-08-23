import React from 'react'
import styled from 'styled-components'

const PostOption = ({ boardId, optionModal, setOptionModal, username }) => {
  // console.log('username', username, 'boardId', boardId)

  return (
    <>
      <StyledBackground onClick={() => setOptionModal(false)}>
      </StyledBackground>
      <StyledUploadBox>
        <StyledUploadBoxHeader>신고</StyledUploadBoxHeader>
        <StyledUploadBoxHeader>팔로우 취소</StyledUploadBoxHeader>
        <StyledUploadBoxHeader>즐겨찾기에 추가</StyledUploadBoxHeader>
        <StyledUploadBoxHeader>게시물로 이동</StyledUploadBoxHeader>
        <StyledUploadBoxHeader>공유 대상...</StyledUploadBoxHeader>
        <StyledUploadBoxHeader>링크 복사</StyledUploadBoxHeader>
        <StyledUploadBoxHeader>퍼가기</StyledUploadBoxHeader>
        <StyledUploadBoxHeader
          style={{ border: 'none' }}
          onClick={() => setOptionModal(false)}
        >취소</StyledUploadBoxHeader>
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
      height: 445px;
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



      &:last-child:hover  {
      background-color: #eee;
      cursor:pointer;
      border-bottom-left-radius: 20px;
      border-bottom-right-radius: 20px;
  }
      `

export default PostOption