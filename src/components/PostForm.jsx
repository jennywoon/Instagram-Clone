import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { BsImages } from 'react-icons/bs'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import Button from './elements/Button'
import { VscSmiley } from "react-icons/vsc";
import { RiMapPin2Line } from 'react-icons/ri'
import { IoIosArrowDown } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { __getInstas, __postInstas } from '../redux/modules/InstaSlice'
import FileUpload from './utils/FileUpload'
import Cookies from "universal-cookie";


const PostForm = ({
  uploadModalShow,
  setUploadModalShow,
}) => {

  const dispatch = useDispatch();

  const [files, setFiles] = useState([]);

  const [insta, setInsta] = useState({
    content: "",
  })

  useEffect(() => {
    dispatch(__getInstas());
  }, [dispatch]);

  const { content } = insta;

  const onChangeHandler = (e) => {
    // console.log(uploadModalShow);
    const { value } = e.target;
    setInsta(value);
    // setInsta({
    //   ...insta,
    //   [name]: value,
    // });
  };

  console.log('files', files, 'insta', insta);

  const cookies = new Cookies();
  console.log("user", cookies.get("username"))

  const formdata = new FormData();

  const onSubmitHandler = (e) => {
    const newInsta = {
      content: insta
    }

    e.preventDefault();
    e.stopPropagation();

    files.map((img) => {
      console.log('img', img[0]);
      formdata.append('imgUrl', img[0])
    }
    )

    formdata.append('content', new Blob([JSON.stringify(newInsta)], { type: "application/json" }))
    dispatch(__postInstas(formdata));
  }


  return (
    <>
      <StyledBackground onClick={(e) => {
        setUploadModalShow(false);
      }}>
      </StyledBackground>
      <StyledUploadContainer>
        <StyledUploadBox>

          <form onSubmit={onSubmitHandler}>
            <StyledUploadBoxHeader>
              <AiOutlineArrowLeft onClick={() => setUploadModalShow(false)} />
              <p style={{ position: 'relative', left: '15px' }}>새 게시물 만들기</p>
              <Button backgroundColor='none' color='#0095F6' padding='0.5rem' type="submit">공유하기</Button>
            </StyledUploadBoxHeader>
          </form>

          <StyledBoxBody>
            <StyledUploadBoxBody>
              <FileUpload files={files} setFiles={setFiles} />
            </StyledUploadBoxBody>
            <StyledFormBoxBody>
              <FirstHeader>
                <UserImg />
                <UserLabel>{cookies.get("username")}</UserLabel>
              </FirstHeader>
              <StyledTextarea
                placeholder='문구 입력...'
                maxLength="2200"
                name="content"
                value={content}
                onChange={onChangeHandler}
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
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top:0;
  left:0;
  z-index:99;

`

const StyledUploadContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width:900px;
  height: 800px;
  top:0;
  left:0;
  right:0;
  bottom:0;
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

export default PostForm;