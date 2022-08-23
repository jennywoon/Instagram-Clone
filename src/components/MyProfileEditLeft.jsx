import React from 'react';
import styled from 'styled-components';
import { TbBrandMeta } from "react-icons/tb";

const MyProfileEditLeft = () => {
    return (
        <LeftContainer>
            <LeftTitle>
                <div style={{ padding: "0 30px", fontWeight: "bold"}}>프로필 편집</div>
            </LeftTitle>
            <LeftTitle>
                <div style={{ padding: "0 30px" }}>비밀번호 변경</div>
            </LeftTitle>
            <LeftTitle>
                <div style={{ padding: "0 30px" }}>앱 및 웹사이트</div>
            </LeftTitle>
            <LeftTitle>
                <div style={{ padding: "0 30px" }}>이메일 알림</div>
            </LeftTitle>
            <LeftTitle>
                <div style={{ padding: "0 30px" }}>푸시 알림</div>
            </LeftTitle>
            <LeftTitle>
                <div style={{ padding: "0 30px" }}>연락처 관리</div>
            </LeftTitle>
            <LeftTitle>
                <div style={{ padding: "0 30px" }}>개인정보 및 보안</div>
            </LeftTitle>
            <LeftTitle>
                <div style={{ padding: "0 30px" }}>Instagram에서 보낸 이메일</div>
            </LeftTitle>
            <LeftTitle>
                <div style={{ padding: "0 30px" }}>도움말</div>
            </LeftTitle>
            <LeftTitle>
                <div style={{ padding: "0 30px", color: "#0095F6", fontSize: "14px" }}>프로페셔널 계정으로 전환</div>
            </LeftTitle>
            <BottomContainer>
                <FirstWrap>
                    <BottomHeader>
                    <TbBrandMeta size="20px" color="#0095f6" style={{paddingRight: "5px"}}/> Meta
                    </BottomHeader>
                    <BottomMedium>
                        계정 센터
                    </BottomMedium>
                    <Bottom>
                        스토리 및 게시물 공유, 로그인 등 Instagram, Facebook 앱, Messenger 간에 연결된 환경에 대한 설정을 관리하세요.
                    </Bottom>
                </FirstWrap>
            </BottomContainer>
        </LeftContainer>
    );
};

export default MyProfileEditLeft;

const LeftContainer = styled.div`
    width: 236px;
    height: 823px;
    /* border: 1px solid green; */
`

const LeftTitle = styled.div`
    font-size: 16px;
    width: 236px;
    height: 52px;
    /* border: 1px solid black; */
    display: flex;
    align-items: center;
`

const BottomContainer = styled.div`
    width: 236px;
    height: 172px;
    margin-top: 110px;
    border-top: 1px solid #dbdbdb;
    display: flex;
    justify-content: center;
    align-items: center;
`

const FirstWrap = styled.div`
    width: 184px;
    height: 120px;
`

const BottomHeader = styled.div`
    font-weight: bold;
    width: 70px;
    display: flex;
    align-items: center;
`

const BottomMedium = styled.div`
    font-weight: bold;
    color: #0095f6;
    width: 184px;
    height: 24px;
    margin: 10px 0;
`

const Bottom = styled.div`
    width: 184px;
    height: 64px;
    font-size: 12px;
    color: #8e8e8e;
`