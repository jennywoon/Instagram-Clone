import React from "react";
import PostDetailForm from "./PostDetailForm";
import styled from "styled-components"
import design1 from "../assets/design1.jpg"

const PostDetail = () => {

    return (
        <PostDetailContainer>
            <PostImg/>
            <PostDetailForm />
        </PostDetailContainer>
    )
}

export default PostDetail;

const PostDetailContainer = styled.div`
    width: 1350px;
    height: 100vh;
    display: flex;
    margin: auto;
    align-items: center;
`
const PostImg = styled.div`
    width: 826px;
    height: 870px;
    background-image: url(${design1});
    background-position: center;
    background-size: 100% 96%;
`