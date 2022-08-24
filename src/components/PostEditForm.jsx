import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { BsImages } from 'react-icons/bs'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import Button from './elements/Button'
import { VscSmiley } from "react-icons/vsc";
import { RiMapPin2Line } from 'react-icons/ri'
import { IoIosArrowDown } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { __getInstas, __postInstas, __getDetailInsta, __putInsta } from '../redux/modules/InstaSlice'
import FileUpload from './utils/FileUpload'
import Cookies from "universal-cookie";

const PostEditForm = ({ setEditInsta }) => {
  const dispatch = useDispatch();
  const [boardContent, setBoardContent] = useState('')

  const cookies = new Cookies();
  console.log(typeof cookies.get('boardId'));
  const data = useSelector((state) => state.instas.insta);

  console.log('boardContent', boardContent, Boolean(boardContent))
  console.log('data', data.result);


  const formdata = new FormData();
  const onSubmitInstaEditHandler = () => {
    // const updataContent = {
    //   boardId: Number(cookies.get('boardId')),
    //   content: boardContent
    // }

    formdata.append('content', new Blob([JSON.stringify(boardContent)], { type: "application/json" }))

    dispatch(__putInsta(formdata));
    setBoardContent('');
  }


  useEffect(() => {
    dispatch(__getDetailInsta(Number(cookies.get('boardId'))))
  }, [dispatch])


  return (
    <>
      <StyledBackground onClick={() => setEditInsta(false)}>
      </StyledBackground>
      <StyledUploadContainer>
        <StyledUploadBox>

          <form onSubmit={(e) => {
            e.preventDefault();
            onSubmitInstaEditHandler();

          }}>
            <StyledUploadBoxHeader>
              <p>취소</p>
              <p style={{ position: 'relative', left: '15px' }}>정보 수정</p>
              <Button
                backgroundColor='none'
                color='#0095F6'
                padding='0.5rem'
                type="submit"
              >완료</Button>
            </StyledUploadBoxHeader>
          </form>

          <StyledBoxBody>
            <StyledUploadBoxBody>
              {data.result && data.result.data.imgUrl.map((img, index) => (
                <img key={index} src={img} alt='img'
                  style={{ width: '100%', height: '100%', backgroundSize: 'cover' }}
                />
              ))}
            </StyledUploadBoxBody>
            <StyledFormBoxBody>
              <FirstHeader>
                <UserImg />
                <UserLabel>{data.result && data.result.data.username}</UserLabel>
              </FirstHeader>
              <StyledTextarea
                // placeholder='문구 입력...'
                maxLength="2200"
                name="content"
                value={boardContent}
                onChange={(e) => {
                  const { value } = e.target;
                  setBoardContent(value);
                }}
              ></StyledTextarea>
              <CommentWrap>
                <CommentFirstSection>
                  <div>
                    <VscSmiley size="26" style={{ padding: "0 15px" }} />
                  </div>
                  <UploadLable>0/2,200</UploadLable>
                </CommentFirstSection>
              </CommentWrap>
              <CommentWrap>
                <CommentFirstSection>
                  <div>
                    위치 추가
                  </div>
                  <RiMapPin2Line />
                </CommentFirstSection>
              </CommentWrap>
              <CommentWrap>
                <CommentFirstSection>
                  <div>
                    접근성
                  </div>
                  <IoIosArrowDown />
                </CommentFirstSection>
              </CommentWrap>
              <CommentWrap>
                <CommentFirstSection>
                  <div>
                    고급 설정
                  </div>
                  <IoIosArrowDown />
                </CommentFirstSection>
              </CommentWrap>
            </StyledFormBoxBody>
          </StyledBoxBody>
        </StyledUploadBox>
      </StyledUploadContainer>
    </>
  )
}

const StyledBackground = styled.div`
  width:100vw;
  height: 100vh;
  background: rgba(0,0,0,.5);
  /* display: flex;
  justify-content: center;
  align-items: center; */
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index:99;

`

const StyledUploadContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width:900px;
  height: 800px;
  position:fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin:auto;
  margin:auto;
  z-index:100;
`



const StyledUploadBox = styled.div`
  width: 900px;
  height: 800px;
  border-radius: 20px;
  background: #fff;
  display:flex;
  flex-direction: column;
`

const StyledUploadBoxHeader = styled.div`
border-bottom: 1px solid #ccc;
display: flex;
align-items:center;
justify-content: space-between;
padding: 0 1rem;
box-sizing:border-box;
`

const StyledBoxBody = styled.div`
  display: flex;
  height:100%;
  justify-content: center;
  align-items: center;
  position: relative;
`


const StyledUploadBoxBody = styled.div`
  display: flex;
  width:600px;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border-bottom-left-radius:20px;
  background-color: #eee;
`

const StyledFormBoxBody = styled.div`
  display: flex;
  width:300px;
  height: 100%;
  flex-direction: column;
  align-items: center;
  position: relative;
  border-bottom-right-radius:20px;
`

const FirstHeader = styled.div`
    display: flex;
    width:100%;
    align-items: center;
    padding: 10px;
    gap: 10px;
    box-sizing:border-box;
`
const UserImg = styled.div`
    border: 1px solid rgb(219,219,219);
    border-radius: 50px;
    width: 32px;
    height: 32px;
`
const UserLabel = styled.div`
    font-weight: bold;
    font-size: 17px;
`
const StyledTextarea = styled.textarea`
  resize: none;
  width:100%;
  height:200px;
  padding:10px;
  box-sizing:border-box;
  border: none;
  outline: none;
`

const StInput = styled.input``

const CommentWrap = styled.div`
  border-bottom: 1px solid rgb(219,219,219);
  width: 100%;
  height: 49px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 .5rem;
  box-sizing: border-box;
`
const CommentFirstSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

`

const UploadLable = styled.div`
    color: rgb(219,219,219);
    padding-right: 15px;
`


export default PostEditForm