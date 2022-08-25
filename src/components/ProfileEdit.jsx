import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import styled from "styled-components";
import { GoGear } from "react-icons/go";
import test2 from "../assets/test2.jpg"

const ProfileEdit = ({ data, cookies }) => {
    const navigate = useNavigate();


    return (
        <ProfileEditContainer>
            <UserFirstContainer>
                <UserImg />
            </UserFirstContainer>
            <UserSecondContainer>
                <FirstWrap>
                    <UserLable>{cookies.get('username')}</UserLable>
                    <StEditButton
                        onClick={() => {
                            navigate("/mypage/edit")
                        }}
                    >프로필 편집</StEditButton>
                    <GoGear size="25" />
                </FirstWrap>
                <SecondWrap>
                    <PostWrap>
                        <PostLabel>게시물</PostLabel>
                        <PostCount>{data.result && data.result.data.BoardInfo.length}</PostCount>
                    </PostWrap>
                    <FollowerWrap>
                        <FollowerLabel>팔로워</FollowerLabel>
                        <FollowerCount>0</FollowerCount>
                    </FollowerWrap>
                    <FollowWrap>
                        <FollowLabel>팔로우</FollowLabel>
                        <FollowCount>0</FollowCount>
                    </FollowWrap>
                </SecondWrap>
                <ThirdWrap>
                    <UserName>이름</UserName>
                </ThirdWrap>
            </UserSecondContainer>
        </ProfileEditContainer>

    )
}

export default ProfileEdit;

const ProfileEditContainer = styled.div`
    width: 100%;
    height: 220px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgb(219,219,219);
`

const UserFirstContainer = styled.div`
    width: 340px;
    display: flex;
    justify-content: center;
`

const UserImg = styled.div`
    border: 1px solid rgb(219,219,219);
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-image: url(${test2});
    background-position: center;
    background-size: 100% 100%;
`

const UserSecondContainer = styled.div`
    width: 619px;
    height: 200px;
    display: flex;
    flex-direction: column;
`

const FirstWrap = styled.div`
    margin: 25px 0;
    display: flex;
    gap: 20px;
    align-items: center;
    text-align: center;
`
const UserLable = styled.div`
    font-size: 28px;
    color: #262626;
`
const StEditButton = styled.button`
    background-color: transparent;
    border: 1px solid rgb(219,219,219);
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 14px;
    cursor: pointer;
`
const SecondWrap = styled.div`
    margin: 0 0 25px 0;
    display: flex;
    align-items: center;
    gap: 20px;
    font-size: 14px;
`
const PostWrap = styled.div`
    display: flex;
    gap: 5px;
`
const PostLabel = styled.div`
`
const PostCount = styled.div``
const FollowerWrap = styled.div`
    display: flex;
    gap: 5px;
`
const FollowerLabel = styled.div``
const FollowerCount = styled.div``
const FollowWrap = styled.div`
    display: flex;
    gap: 5px;
`
const FollowLabel = styled.div``
const FollowCount = styled.div``
const ThirdWrap = styled.div`
    display: flex;
    align-items: center;
`
const UserName = styled.div`
    font-weight: bold;
    font-size: 14px;
`