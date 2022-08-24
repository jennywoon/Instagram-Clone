import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import styled from "styled-components";
import { __getInstas } from "../redux/modules/InstaSlice";
import MainPost from "./MainPost";
import MainRecommend from "./MainRecommend";
import PostOption from "./PostOption";
import PostMyOption from "./PostMyOption";
import Cookies from "universal-cookie";

const Main = () => {
    const dispatch = useDispatch();

    const { instas } = useSelector((state) => state.instas)
    const data = useSelector((state) => state.instas.instas.result)
    console.log('instas', instas, 'data', data && data.data.BoardInfo)

    const [optionModal, setOptionModal] = useState(false);
    const [myOptionModal, setMyOptionModal] = useState(false);
    // console.log('optionModal', optionModal);


    useEffect(() => {
        dispatch(__getInstas())
    }, [dispatch])


    return (
        <MainContainer fixedHeight={optionModal}>
            <MainList>
                {data && data.data.BoardInfo.map((insta) => (
                    <>
                        <MainPost
                            key={insta.boardId}
                            boardId={insta.boardId}
                            boardContent={insta.content}
                            commentCount={insta.commentCount}
                            img={insta.imgUrl}
                            username={insta.username}
                            optionModal={optionModal}
                            setOptionModal={setOptionModal}
                            myOptionModal={myOptionModal}
                            setMyOptionModal={setMyOptionModal}
                            insta={insta}
                        />
                    </>
                ))}
            </MainList>
            {/* <MainPost/> */}
            <MainRecommend />
        </MainContainer>
    )
}

export default Main;

const MainContainer = styled.div`
    /* align-items: center; */
    /* border: 1px solid rgb(219,219,219); */
    /* width: 45%; */

    width: 850px;
    height:90vh;
    /* height: ${(props) => (props.fixedHeight === true ? '100vh' : '100%')} */
    margin: auto;
    /* position: relative; */
    display: flex;
`

const MainList = styled.div`
    /* position: relative; */
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    /* margin-top: 10px; */
`