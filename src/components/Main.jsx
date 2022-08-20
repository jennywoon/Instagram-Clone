import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import styled from "styled-components";
import { __getInstas } from "../redux/modules/InstaSlice";
import MainPost from "./MainPost";
import MainRecommend from "./MainRecommend";
import { __getInstas } from "../redux/modules/InstaSlice";

const Main = () => {
    const dispatch = useDispatch();

    const { instas } = useSelector((state) => state.instas)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(__getInstas())
    }, [dispatch])


    useEffect(() => {
        dispatch(__getInstas());
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
    /* position: absolute; */
    display: flex;
`

const MainList = styled.div`
    /* position: relative; */
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* margin-top: 10px; */
`