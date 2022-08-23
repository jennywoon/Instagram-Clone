import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import MyProfileEditLeft from './MyProfileEditLeft';
import MyProfileEditRight from './MyProfileEditRight';

const MyProfileEdit = () => {
    return (
        <Wrap>
            <Container>
                <MyProfileEditContainer>
                    <MyProfileEditLeft />
                    <MyProfileEditRight />
                </MyProfileEditContainer>
            </Container>
            <Footer />
        </Wrap>
    );
};

export default MyProfileEdit;

const Wrap = styled.div`
    height: 960px;
    position: absolute;
`

const Container = styled.div`
    /* width: 932px; */
    padding-top: 30px;
`

const MyProfileEditContainer = styled.div`
    width: 932px;
    height: 823px;
    border: 1px solid #dbdbdb;
    display: flex;
    /* flex-direction: row; */
`