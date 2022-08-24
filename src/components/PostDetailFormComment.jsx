import React from "react";
import styled from "styled-components";

const PostDetailFormComment = ({ userComment }) => {
    // console.log('comment', comment)
    console.log(userComment)

    return (
        <PostBottom>
            <PostContainer>
                <FirstWrap>
                    <FirstSection>
                        <UserImg />
                    </FirstSection>
                </FirstWrap>
                <SecondWrap>
                    <UserWrap>
                        <UserLabel>{userComment.username}</UserLabel>
                        <PostComment>{userComment.comment}</PostComment>
                    </UserWrap>
                    <ThirdWrap>
                        <ContentTime>6시간 전</ContentTime>
                        <CommitContainer>답글 달기</CommitContainer>
                    </ThirdWrap>
                </SecondWrap>
            </PostContainer>
        </PostBottom>
    )

}

export default PostDetailFormComment;

const PostBottom = styled.div`
    width: 499px;
    /* height: 200px; */
    display: flex;
    flex-direction: row;
    padding: 10px 0;
`

const PostContainer = styled.div`
    display: flex;
    flex-direction: row;
`

const FirstWrap = styled.div`
    display: flex;
`
const FirstSection = styled.div`
    padding: 0 10px;
`

const SecondWrap = styled.div``
const UserWrap = styled.div`
    display: flex;
`

const UserImg = styled.div`
    border: 1px solid #ebedf0;
    border-radius: 50%;
    width: 32px;
    height: 32px;
`

const UserLabel = styled.div`
    padding-left: 12px;
    padding : 0 0 5px 12px;
    /* font-weight: bold; */
    font-size: 15px;
`
const PostComment = styled.div`
    padding : 0 12px;
    font-size: 14px;
`

const ThirdWrap = styled.div`
    display: flex;
    gap: 10px;
`
const ContentTime = styled.div`
    padding: 0 0 17px 12px;
    font-size: 12px;
    font-weight: bold;
    color: #8e8e8e;
`

const CommitContainer = styled.div`
    font-size: 12px;
    font-weight: bold;
    color: #8e8e8e;
`