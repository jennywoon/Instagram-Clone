import React from "react";
import styled from "styled-components";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { IoChatbubbleOutline, IoPaperPlaneOutline, IoBookmarkOutline } from "react-icons/io5";
import { VscSmiley } from "react-icons/vsc";

const PostDetailForm = () => {

    return (
        <PostDetailContainer>
            <PostHeader>
                <FirstHeader>
                    <UserImg />
                    <UserLabel>user_name</UserLabel>
                </FirstHeader>
                <BiDotsHorizontalRounded style={{ paddingRight: "15px" }} />
            </PostHeader>
            <PostContentContainer>
                <FirstSection>
                    <UserImg />
                </FirstSection>
                <SecondSection>
                    <UserLabel>user_name</UserLabel>
                    <PostContent>내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.내용이 들어갈 자리입니다.</PostContent>
                </SecondSection>
            </PostContentContainer>
            <LikeFirstBar>
                <LikeBarSection>
                    <AiOutlineHeart size="28" style={{ cursor: "pointer" }} />
                    <IoChatbubbleOutline size="26" style={{ cursor: "pointer" }} />
                    <IoPaperPlaneOutline size="26" style={{ cursor: "pointer" }} />
                </LikeBarSection>
                <IoBookmarkOutline size="26" style={{ paddingRight: "10px", cursor: "pointer" }} />
            </LikeFirstBar>
            <LikeSecondBar>
                <UserLikeLable>
                    좋아요 00개
                </UserLikeLable>
                <ContentTime>
                    예시: 6시간 전
                </ContentTime>
                <CommentWrap>
                    <CommentFirstSection>
                        <VscSmiley size="26" style={{ padding: "0 10px" }} />
                        <CommentInput />
                    </CommentFirstSection>
                    <UploadLable>게시</UploadLable>
                </CommentWrap>
            </LikeSecondBar>
        </PostDetailContainer>
    )
}

export default PostDetailForm;

const PostDetailContainer = styled.div`
    border: 1px solid #ebedf0;
    width: 499px;
    height: 870px;
    border-radius: 5px;
`

const PostHeader = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const FirstHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 10px;
    /* gap: 10px; */
`

const UserImg = styled.div`
    border: 1px solid #ebedf0;
    border-radius: 50%;
    width: 32px;
    height: 32px;
`
const UserLabel = styled.div`
    padding-left: 12px;
    /* font-weight: bold; */
    font-size: 15px;
`

const PostContentContainer = styled.div`
    width: 100%;
    border: 1px solid #ebedf0;
    height: 630px;
    display: flex;
    flex-direction: row;
    padding: 10px 0;
`

const FirstSection = styled.div`
    padding: 0 10px;
`
const SecondSection = styled.div`
    width: 439px;
    text-align: justify;
    display: flex;
    flex-direction: column;
    /* flex-wrap: wrap; */
`

const PostContent = styled.div`
    padding: 10px 12px;
    font-size: 14px;
    overflow-y: scroll;
`

const LikeFirstBar = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const LikeBarSection = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;

`
const LikeSecondBar = styled.div`
    width: 100%;
    /* height: 24px; */
    display: flex;    
    flex-direction: column;
`
const UserLikeLable = styled.div`
    font-size: 14px;
    font-weight: bold;
    padding: 0 0 5px 10px;
`
const ContentTime = styled.div`
    padding: 0 0 17px 12px;
    font-size: 12px;
    color: #8e8e8e;
`
const CommentWrap = styled.div`
    border-top: 1px solid #ebedf0;
    /* width: 100%; */
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const CommentFirstSection = styled.div`
    display: flex;
    align-items: center;
`

const CommentInput = styled.input`
    border: none;
    outline: none;
    width: 330px;
    height: 16px;
    font-size: 14px;
`

const UploadLable = styled.div`
    color: #0095f6;
    padding-right: 14px;
`