import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import design5 from "../assets/design5.jpg"
import PostDetail from "./PostDetail"
import Cookies from "universal-cookie";
import { __getComments } from "../redux/modules/InstaSlice";

const ProfilePost = ({ img, boardId, myBoardId }) => {
    const cookies = new Cookies();
    const dispatch = useDispatch();
    // const data = useSelector((state) => state.instas.insta);
    // console.log(data)
    // console.log(cookies.get("username"))

    const [modalOpen, setModalOpen] = useState(false);

    const showModal = async () => {
        setModalOpen(true);
        await dispatch(__getComments(boardId));
    }

    return (
        <>
            {modalOpen && <PostDetail setModalOpen={setModalOpen} boardId={boardId} />}
            <ProfilePostContainer onClick={() => {
                // cookies.set("myBoardId", boardId);
                // console.log(cookies.get("myBoardId"))
                showModal()
            }}>
                <img src={img[0]} alt='img' style={{ width: '100%', height: '100%' }} boardId={boardId} />
            </ProfilePostContainer>
        </>

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