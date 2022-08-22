import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import styled from "styled-components";
import { __getInstas } from "../redux/modules/InstaSlice";
import MainPost from "./MainPost";
import MainRecommend from "./MainRecommend";

const Main = () => {
    const dispatch = useDispatch();

    const { instas } = useSelector((state) => state.instas)
    const data = useSelector((state) => state.instas.instas.result)
    console.log('instas', instas, 'data', data && data.data.BoardInfo)

    useEffect(() => {
        dispatch(__getInstas())
    }, [dispatch])


    return (
        <MainContainer>
            <MainList>
                {data && data.data.BoardInfo.map((insta) => (
                    <MainPost
                        key={insta.boardId}
                        boardId={insta.boardId}
                        boardContent={insta.content}
                        commentCount={insta.commentCount}
                        img={insta.imgUrl}
                        username={insta.username}
                    />
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
    height: 100%;
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