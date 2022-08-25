import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { IoChatbubbleOutline, IoPaperPlaneOutline, IoBookmarkOutline } from "react-icons/io5";
import { VscSmiley } from "react-icons/vsc";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __getComments, __getInstas, __postComments } from "../redux/modules/InstaSlice";
import PostDetailFormComment from "./PostDetailFormComment";
import Cookies from "universal-cookie";

const PostDetailForm = ({ username, boardContent, commentList, commentId, boardId, setModalOpen }) => {
    const dispatch = useDispatch();
    const cookies = new Cookies();

    const [userComment, setUserComment] = useState({
        comment: "",
    })


    const { comment } = userComment;

    console.log('boardId', boardId, 'commentUser', cookies.get('username'), 'comment', comment);

    const onChangeHandler = (e) => {
        if (cookies.get("username") === username) {
            console.log(commentId)
            cookies.set("commentId", commentId)
        }
        const { value, name } = e.target;
        setUserComment({
            ...userComment,
            // commentId,
            [name]: value,
        })
    }

        ;

    const postComment = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        // e.stopPropagation();
        // dispatch(__postComments({ boardId: param.id, content }));
        console.log(commentId)
        const newComment = {
            boardId: boardId,
            content: comment
        }

        await dispatch(__postComments(newComment));
        await dispatch(__getComments(boardId));
        setUserComment({
            comment: "",
        })
    }


    return (
        <PostDetailContainer
        // onSubmit={postComment}
        >
            <PostHeader>
                <FirstHeader>
                    <UserImg />
                    <UserLabel>{username}</UserLabel>
                </FirstHeader>
                <BiDotsHorizontalRounded style={{ paddingRight: "15px" }} />
            </PostHeader>
            <PostScroll>
                <PostContentContainer>
                    <FirstSection>
                        <UserImg />
                    </FirstSection>
                    <SecondSection>
                        <UserLabel>{username}</UserLabel>
                        <PostContent>{boardContent}</PostContent>
                    </SecondSection>
                </PostContentContainer>
                <PostBottom>
                    {/* <FirstSection>
                    <UserImg />
                </FirstSection>
                <UserLabel>user_name</UserLabel>
                <PostComment>댓글 내용</PostComment> */}
                    {commentList && commentList.map((userComment) => (
                        <div key={userComment.id}>
                            <PostDetailFormComment userComment={userComment} />
                        </div>
                    ))}
                </PostBottom>
            </PostScroll>
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
                        <CommentInput
                            type="text"
                            name="comment"
                            value={comment}
                            onChange={onChangeHandler}
                        />
                    </CommentFirstSection>
                    <UploadButton
                        onClick={postComment}
                    >게시</UploadButton>
                </CommentWrap>
            </LikeSecondBar>

        </PostDetailContainer>
    )
}

export default PostDetailForm;

const PostDetailContainer = styled.form`
    border: 1px solid #ebedf0;
    width: 499px;
    height: 870px;
    border-radius: 5px;
    background-color: white;
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

const PostScroll = styled.div`
    overflow-y: scroll;
    overflow-x: hidden;
    height: 650px;
    border: 1px solid #ebedf0;
`

const PostContentContainer = styled.div`
    width: 100%;
    /* border: 1px solid #ebedf0; */
    min-height: 100px;
    height: auto;
    display: flex;
    flex-direction: row;
    padding: 10px 0;
    
`

const FirstSection = styled.div`
    padding: 0 10px;
`
const PostBottom = styled.div`
    width: 499px;
    height: 250px;
    /* border: 1px solid #ebedf0; */
    display: flex;
    flex-direction: column;
    padding: 10px 0;
    /* overflow-y: scroll;
    overflow-x: hidden; */
`

const SecondSection = styled.div`
    width: 439px;
    text-align: justify;
    display: flex;
    flex-direction: column;
    /* height: 368px; */
    /* flex-wrap: wrap; */
`
const PostContent = styled.div`
    padding: 10px 12px;
    font-size: 14px;
    /* overflow-y: scroll; */
`

const PostComment = styled.div`
    padding : 0 12px;
    font-size: 14px;
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

const UploadButton = styled.button`
    background-color: transparent;
    color: #0095f6;
    padding-right: 14px;
    font-size: 14px;
    border: none;
    cursor: pointer;
`