import React from "react";
import styled from "styled-components";
import { AiOutlineTable } from "react-icons/ai";
import { IoBookmarkOutline } from "react-icons/io5";
import { TbBuildingCottage } from "react-icons/tb";
import ProfilePost from "./ProfilePost";

const ProfilePostList = () => {

    return (
        <Container>
            <Header>
                <FirstWrap>
                    <AiOutlineTable />
                    <HeaderLable>게시물</HeaderLable>
                </FirstWrap>
                <SecondWrap>
                    <IoBookmarkOutline/>
                    <HeaderLable>저장됨</HeaderLable>
                </SecondWrap>
                <ThirdWrap>
                    <TbBuildingCottage/>
                    <HeaderLable>태그됨</HeaderLable>
                </ThirdWrap>
            </Header>
            <ProfileBottom>
                {/* map돌려서 넣기 */}
                <ProfilePost/>
                <ProfilePost/>
                <ProfilePost/>
                <ProfilePost/>
                <ProfilePost/>
            </ProfileBottom>
        </Container>
    )
}

export default ProfilePostList;

const Container = styled.div`
    width: 100%;
`

const Header = styled.div`
    height: 53px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
    font-size: 14px;
`
const FirstWrap = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`
const HeaderLable = styled.div``
const SecondWrap = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`
const ThirdWrap = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`
const ProfileBottom = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 41px;
`