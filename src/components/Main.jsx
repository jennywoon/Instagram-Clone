import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import styled from "styled-components";
import { __getInstas } from "../redux/modules/InstaSlice";
import MainPost from "./MainPost";
import MainRecommend from "./MainRecommend";

const Main = () => {
    const dispatch = useDispatch();

    const { instas } = useSelector((state) => state.instas)

    useEffect(() => {
        dispatch(__getInstas())
    }, [dispatch])


    return (
        <MainContainer>
            <MainList>
                {instas?.map((insta, index) => (
                    <MainPost
                        key={index}
                        insta={insta} />
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