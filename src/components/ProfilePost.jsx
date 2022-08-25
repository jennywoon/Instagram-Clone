import React from "react";
import styled from "styled-components";
import design5 from "../assets/design5.jpg"

const ProfilePost = ({ img }) => {

    return (
        <ProfilePostContainer >
            <img src={img[0]} alt='img' style={{ width: '100%', height: '100%' }} />
        </ProfilePostContainer>

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
    background-image: ${props => props.url};
    background-position: center;
    background-size: 100% 100%;
`