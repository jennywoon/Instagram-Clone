import React from 'react'
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { IoBookmarkOutline } from "react-icons/io5";
import { GoGear } from "react-icons/go";
import { BiUserCircle } from "react-icons/bi";
import { TbExchange } from "react-icons/tb";

const ProfileModal = ({
  profileModalShow,
}) => {
  const navigate = useNavigate();

  return (
    <StyledShowBox>

      <StyledUploadBox style={{ display: profileModalShow ? 'block' : 'none' }}>
        <StyledUploadBoxHeader onClick={() => {
          navigate("/mypage")
        }}>
          <StyledTriangleBox></StyledTriangleBox>
          <BiUserCircle size="20" style={{ paddingRight: "10px" }} />
          <p style={{ margin: 0 }}>프로필</p>
        </StyledUploadBoxHeader>
        <StyledUploadBoxHeader>
          <IoBookmarkOutline size="20" style={{ paddingRight: "10px" }} />
          <p style={{ margin: 0 }}>저장됨</p>
        </StyledUploadBoxHeader>
        <StyledUploadBoxHeader>
          <GoGear size="20" style={{ paddingRight: "10px" }} />
          <p style={{ margin: 0 }}>설정</p>
        </StyledUploadBoxHeader>
        <StyledUploadBoxHeader>
          <TbExchange size="20" style={{ paddingRight: "10px" }} />
          <p style={{ margin: 0 }}>계정 전환</p>
        </StyledUploadBoxHeader>
        <StyledUploadBoxHeader>
          <p style={{ margin: 0 }}>로그아웃</p>
        </StyledUploadBoxHeader>
      </StyledUploadBox>
    </StyledShowBox>
  )
}


const StyledUploadBox = styled.div`
  width: 220px;
  height: auto;
  border-radius: 8px;
  background: #fff;
  position: absolute;
  right:-25px;
  top:45px;
  border:1px solid #eee;
  z-index:10;
  -webkit-box-shadow: 0px 0px 8px -3px rgba(0,0,0,0.4); 
box-shadow: 0px 0px 8px -3px rgba(0,0,0,0.2);
  `



const StyledUploadBoxHeader = styled.div`
display: flex;
align-items:center;
padding:.5rem 0.8rem;
font-size: .9rem;


&:first-child:hover {
    background-color: #eee;
    div {
        background-color: #eee;
    }
  }

    &:nth-child(4) {
        border-bottom: 1px solid #eee;
    }

`

const StyledTriangleBox = styled.div`
    width: 15px;
    height: 15px;
    border-left: 1px solid #eee;
    border-top: 1px solid #eee;
    z-index: 11;
    position: absolute;
    right:48px;
    top:-9px;
    transform: rotate(45deg);
    background: #fff;


`

const StyledShowBox = styled.div`

`

export default ProfileModal