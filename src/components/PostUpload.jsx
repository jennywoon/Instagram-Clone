import React from 'react'
import styled from 'styled-components'
import FileUpload from './utils/FileUpload'

const PostUpload = () => {
  return (
    <StyledBackground>
      <StyledUploadBox>
        <StyledUploadBoxHeader>
          <p>새 게시물 만들기</p>
        </StyledUploadBoxHeader>
        <FileUpload />
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
  width: 600px;
  height: 700px;
  border-radius: 20px;
  background: #fff;
`

const StyledUploadBoxHeader = styled.div`
border-bottom: 1px solid #ccc;
text-align: center;
`



export default PostUpload