import React, { useEffect } from "react";
import styled from "styled-components";
import ProfileEdit from "./ProfileEdit";
import ProfilePostList from "./ProfilePostList";
import { useSelector, useDispatch } from "react-redux"
import { __getInstas } from "../redux/modules/InstaSlice";
import Cookies from "universal-cookie";


const Profile = () => {
    const dispatch = useDispatch();
    const cookies = new Cookies();

    const data = useSelector((state) => state.instas.instas)

    useEffect(() => {
        dispatch(__getInstas())
    }, [])


    return (
        < ProfileContainer >
            <ProfileEdit data={data} cookies={cookies} />
            <ProfilePostList data={data} cookies={cookies} />
        </ProfileContainer >
    )
}

export default Profile;

const ProfileContainer = styled.div`
    align-items: center;
    /* border: 1px solid rgb(219,219,219); */
    /* width: 45%; */
    width: 970px;
    height: 100%;
    margin: auto;
    /* position: absolute; */
    display: flex;
    flex-direction: column;
`