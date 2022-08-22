import React, { useState, useRef, useEffect } from "react";
import PostDetailForm from "./PostDetailForm";
import styled from "styled-components"
import Design1 from "../assets/Design1.jpg"

const PostDetail = ({ setModalOpen }) => {

    const modalRef = useRef(null);

    const closeModal = (e) => {
        if(!modalRef.current.contains(e.target))
        setModalOpen(false);
    };

    return (
        <Background onClick={closeModal}>
            <PostDetailContainer ref={modalRef}>
                <PostImg />
                <PostDetailForm />
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
    background-image: url(${Design1});
    background-position: center;
    background-size: 100% 96%;
`