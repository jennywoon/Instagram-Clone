import React, { useState, useRef, useEffect } from "react";
import PostDetailForm from "./PostDetailForm";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components"
import design1 from "../assets/design1.jpg"
import { __getComments } from "../redux/modules/InstaSlice";

const PostDetail = ({ setModalOpen, boardId }) => {

    console.log('boardId', boardId)
    const dispatch = useDispatch();
    const data = useSelector((state) => state.instas.insta.data)

    // console.log('data', data.imgUrl);
    const modalRef = useRef(null);

    const closeModal = (e) => {
        if (!modalRef.current.contains(e.target))
            setModalOpen(false);
    };

    useEffect(() => {
        dispatch(__getComments(boardId));
    }, [dispatch]);

    return (
        <Background onClick={closeModal}>
            <PostDetailContainer ref={modalRef}>
                <PostImg>
                    {data.imgUrl.map((img) => (
                        <img src={img} />
                    ))}
                </PostImg>
                <PostDetailForm
                    commentList={data.commentList}
                    boardContent={data.content}
                    username={data.username}
                />
            </PostDetailContainer>
        </Background>
    )
}

export default PostDetail;

const Background = styled.div`
    position: fixed;
    /* position: absolute; */
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0,0,0,0.50);
    z-index: 0;
`
const PostDetailContainer = styled.div`
    width: 1300px; 
    height: 100vh;
    display: flex;
    margin: auto;
    align-items: center;
    /* position: relative; */
`
const PostImg = styled.div`
    width: 826px;
    height: 870px;
    display: flex;
    overflow-y:hidden;
    overflow-x:scroll;
    background-position: center;
    background-size: 100% 96%;

`