import React from "react";
import styled from "styled-components";
import Design1 from "../assets/Design1.jpg"
import Design2 from "../assets/Design2.jpg"
import Design3 from "../assets/Design3.jpg"
import Design4 from "../assets/Design4.jpg"
import { AiOutlineCopyrightCircle } from "react-icons/ai";

const MainRecommend = () => {
    return (
        <Container>
            <MyContainer>
                <MyConterSection>
                    <UserImg />
                    <UserLabel>user_name</UserLabel>
                </MyConterSection>
                <TransferLabel>전환</TransferLabel>
            </MyContainer>
            <RecommenContainer>
                <RecommendTitle>회원님을 위한 추천</RecommendTitle>
                <RecommentAll>모두보기</RecommentAll>
            </RecommenContainer>
            <RecommentList>
                <RecommentWrap>
                    <RecommendFirstSection>
                        <RecommendFirstImg />
                        <RecommendSecondSection>
                            <RecommendUser>park_minhyeok</RecommendUser>
                            <RecommendDetail>Instagram 신규 가입</RecommendDetail>
                        </RecommendSecondSection>
                    </RecommendFirstSection>
                    <RecommendFollow>팔로우</RecommendFollow>
                </RecommentWrap>
                <RecommentWrap>
                    <RecommendFirstSection>
                        <RecommendSecondImg />
                        <RecommendSecondSection>
                            <RecommendUser>na_cheongwoon</RecommendUser>
                            <RecommendDetail>park_minhyeok님 외 13명이 팔로우합니다</RecommendDetail>
                        </RecommendSecondSection>
                    </RecommendFirstSection>
                    <RecommendFollow>팔로우</RecommendFollow>
                </RecommentWrap>
                <RecommentWrap>
                    <RecommendFirstSection>
                        <RecommendThirdImg />
                        <RecommendSecondSection>
                            <RecommendUser>park_hyeonwook</RecommendUser>
                            <RecommendDetail>na_cheongwoon님 외 2명이 팔로우합니다</RecommendDetail>
                        </RecommendSecondSection>
                    </RecommendFirstSection>
                    <RecommendFollow>팔로우</RecommendFollow>
                </RecommentWrap>
                <RecommentWrap>
                    <RecommendFirstSection>
                        <RecommendFourthImg />
                        <RecommendSecondSection>
                            <RecommendUser>oh_yeongil</RecommendUser>
                            <RecommendDetail>park_hyeonwook님이 팔로우합니다</RecommendDetail>
                        </RecommendSecondSection>
                    </RecommendFirstSection>
                    <RecommendFollow>팔로우</RecommendFollow>
                </RecommentWrap>
                <RecommendFooter>
                    <FooterFirstSection>
                        소개·도움말·홍보 센터·API·채용 정보·개인정보처리방침·약관·위치·언어
                    </FooterFirstSection>
                    <FooterSecondSection>
                        <AiOutlineCopyrightCircle />
                        2022 INSTAGRAM FROM META
                    </FooterSecondSection>
                </RecommendFooter>
            </RecommentList>
        </Container>
    )
}

export default MainRecommend;

const Container = styled.div`
    width: 420px;
    /* height: 811px; */
    /* height: 100vh; */
    display: flex;
    /* justify-content: center; */
    /* align-items: center; */
    flex-direction: column;
    margin-top: 25px;
`
const MyContainer = styled.div`
    width: 350px;
    height: 56px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const MyConterSection = styled.div`
    display: flex;
    align-items: center;
    gap: 15px
`

const UserImg = styled.div`
    border: 1px solid rgb(219,219,219);
    width: 52px;
    height: 52px;
    border-radius: 50px;
`

const UserLabel = styled.div`
    font-size: 16px;
    font-weight: bold;
`

const TransferLabel = styled.div`
    font-size: 14px;
    color: #0095f6;
    /* padding-right: 15px; */
`

const RecommenContainer = styled.div`
    width: 350px;
    height: 19px;
    margin-top: 10px;
    font-size: 16px;
    display: flex;
    justify-content: space-between;
`
const RecommendTitle = styled.div`
    color: #bebebe;
    font-size: 14px;
    font-weight: bold;
`
const RecommentAll = styled.div`
    font-size: 13px;
`

const RecommentList = styled.div`
    width: 350px;
`

const RecommentWrap = styled.div`
    height: 48px;
    font-size: 13px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
`

const RecommendFirstImg = styled.div`
    background-image: url(${Design1});
    border: 1px solid #bebebe;
    width: 32px;
    height: 32px;
    border-radius: 50px;
    background-position: center;
    background-size: 100% 100%;
`
const RecommendSecondImg = styled.div`
    background-image: url(${Design2});
    border: 1px solid #bebebe;
    width: 32px;
    height: 32px;
    border-radius: 50px;
    background-position: center;
    background-size: 100% 100%;
`
const RecommendThirdImg = styled.div`
    background-image: url(${Design3});
    border: 1px solid #bebebe;
    width: 32px;
    height: 32px;
    border-radius: 50px;
    background-position: center;
    background-size: 100% 100%;
`
const RecommendFourthImg = styled.div`
    background-image: url(${Design4});
    border: 1px solid #bebebe;
    width: 32px;
    height: 32px;
    border-radius: 50px;
    background-position: center;
    background-size: 100% 100%;
`

const RecommendUser = styled.div`
    font-weight: bold;
`

const RecommendDetail = styled.div`
    color: #bebebe;
`

const RecommendFirstSection = styled.div`
    display: flex;
    gap: 10px;
`
const RecommendSecondSection = styled.div``

const RecommendFollow = styled.div`
    color: #0095f6;
`
const RecommendFooter = styled.div`
    width: 195px;
    color: #c7c7c7;
    font-size: 12px;
`

const FooterFirstSection = styled.div`
    padding: 25px 0;
`
const FooterSecondSection = styled.div``