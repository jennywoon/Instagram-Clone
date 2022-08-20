import React from "react";
import styled from "styled-components";
import Design5 from "../assets/design5.jpg"

const ProfilePost = () => {

    return (
        <ProfilePostContainer />

    )
}

export default ProfilePost;

const ProfilePostContainer = styled.div`
    border: 1px solid rgb(219,219,219);
    width: 293px;
    height: 293px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${Design5});
    background-position: center;
    background-size: 100% 100%;
`