import React, { useState } from "react";
import styled from "styled-components";
import { MdHome } from "react-icons/md";
import { IoPaperPlaneOutline, IoCompassOutline } from "react-icons/io5";
import { TbSquarePlus } from "react-icons/tb";
import { AiOutlineHeart, AiOutlineHome } from "react-icons/ai";
import instagram from "../assets/instagram.png"
import { useNavigate } from "react-router-dom";
import test2 from "../assets/test2.jpg"
// import { GoGear } from "react-icons/go";
// import { BiUserCircle } from "react-icons/bi";
// import { TbExchange } from "react-icons/tb";
import ProfileModal from "./ProfileModal";
import { BsPlusSquareFill } from 'react-icons/bs';

const API_BASE = process.env.REACT_APP_INSTAS_API_URL;

const Header = ({
    profileModalShow,
    setProfileModalShow,
    setUploadModalShow,
}) => {

    const navigate = useNavigate();

    const onClickModalClose = () => {
        setUploadModalShow(false);
        setProfileModalShow(false)
    }

    return (
        <Navbar onClick={onClickModalClose}>
            <NavbarContainer>
                <Logo
                    onClick={() => {
                        navigate("/")
                    }}
                />
                <StInput
                    placeholder="검색"

                ></StInput>
                <NavbarIcons>
                    <MdHome size="30" style={{ cursor: "pointer" }} onClick={(e) => {
                        e.stopPropagation();
                        console.log('111')
                        navigate("/")
                    }}
                    />

                    <IoPaperPlaneOutline size="28" />
                    <TbSquarePlus
                        onClick={(e) => {
                            e.stopPropagation();
                            setUploadModalShow(true);
                        }}
                        style={{
                            cursor: "pointer",
                        }}
                        size="31" />

                    <IoCompassOutline size="30" />
                    <AiOutlineHeart size="30" />
                    <UserImage
                        onClick={(e) => {
                            // navigate("/mypage")
                            e.stopPropagation();
                            setProfileModalShow((prev) => !prev)
                        }}
                        style={{ cursor: "pointer" }}
                    //src={props.user_profile}
                    />

                    <ProfileModal
                        profileModalShow={profileModalShow}
                    />

                </NavbarIcons>
            </NavbarContainer>
        </Navbar>
    )
}

export default Header;

const Navbar = styled.div`
    border: 1px solid #dbdbdb;
    width: 100vw;
    height: 60px;
    /* position: fixed; */
    /* z-index: 3; */
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
`
const NavbarContainer = styled.div`
    width: 100%;
    max-width: 950px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    /* z-index: 10; */
    
`
const Logo = styled.div`
    background-image: Url(${instagram});
    min-width: 150px;
    min-height: 60px;
    background-size: contain;
    background-repeat: no-repeat;
    cursor: pointer;
`
const StInput = styled.input`
    background-color: rgb(239,239,239);
    display: flex;
    flex-direction: column;
    font-size: 16px;
    padding: 0 10px 0 16px;
    border-radius: 8px;
    border: none;
    outline: none;
    height: 36px;
    width: 268px;
`
const NavbarIcons = styled.div`
    display: flex;
    /* flex-direction: row;
    align-items: center;
    justify-content: space-between; */
    gap: 20px;
    /* cursor: pointer; */
    position: relative;
`

const UserImage = styled.image`
    width: 26px;
    height: 26px;
    border-radius: 50px;
    background-image: url(${test2});
    background-position: center;
    background-size: 100% 100%;
`


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