import React from 'react';
import styled from 'styled-components';
import Input from './elements/Input';

const MyProfileEditRight = () => {
    return (
        <RightContainer>
            <FirstContainer>
                <FirstWrap>
                    <div style={{ paddingRight: "30px" }}><UserImg /></div>
                </FirstWrap>
                <SecondWrap>
                    <UserName>cjaeks0394</UserName>
                    <UserNameChange>프로필 사진 바꾸기</UserNameChange>
                </SecondWrap>
            </FirstContainer>
            <SecondContainer>
                <FirstNameWrap>
                    <div style={{ marginTop: "5px", paddingRight: "30px", fontWeight: "bold" }}>이름</div>
                </FirstNameWrap>
                <SecondNameWrap>
                    <StInput />
                    <SecondFirstBottom>사람들의 이름, 별명 또는 비즈니스 이름 등 회원님의 알려진 이름을 사용하여 회원님의 계정을 찾을 수 있도록 도와주세요.</SecondFirstBottom>
                    <SecondSecondBottom>이름은 14일 안에 두 번만 변경할 수 있습니다.</SecondSecondBottom>
                </SecondNameWrap>
            </SecondContainer>
            <ThirdContainer>
                <FirstNameWrap>
                    <div style={{ marginTop: "5px", paddingRight: "30px", fontWeight: "bold" }}>사용자 이름</div>
                </FirstNameWrap>
                <SecondNameWrap>
                    <StInput />
                    <SecondFirstBottom>대부분의 경우 이후 14일 동안 사용자 이름을 다시 000(으)로 변경할 수 있습니다. 더 알아보기</SecondFirstBottom>
                </SecondNameWrap>
            </ThirdContainer>
            <WebsiteContainer>
                <FirstNameWrap>
                    <div style={{ marginTop: "5px", paddingRight: "30px", fontWeight: "bold" }}>웹사이트</div>
                </FirstNameWrap>
                <SecondNameWrap>
                    <StInput placeholder="웹사이트" />
                </SecondNameWrap>
            </WebsiteContainer>
            <IntroduceContainer>
                <FirstNameWrap>
                    <div style={{ marginTop: "5px", paddingRight: "30px", fontWeight: "bold" }}>소개</div>
                </FirstNameWrap>
                <SecondNameWrap>
                    <StTextArea />
                </SecondNameWrap>
            </IntroduceContainer>
            <Information>
                <FirstNameWrap />
                <SecondNameWrap>
                    <InformationHeader>개인정보</InformationHeader>
                    <InformationBottom>비즈니스나 반려동물 등에 사용된 계정인 경우에도 회원님의 개인정보를 입력하세요. 공개 프로필에는 포함되지 않습니다.</InformationBottom>
                </SecondNameWrap>
            </Information>
            <WebsiteContainer>
                <FirstNameWrap>
                    <div style={{ marginTop: "5px", paddingRight: "30px", fontWeight: "bold" }}>이메일</div>
                </FirstNameWrap>
                <SecondNameWrap>
                    <StInput />
                </SecondNameWrap>
            </WebsiteContainer>
            <WebsiteContainer>
                <FirstNameWrap>
                    <div style={{ marginTop: "5px", paddingRight: "30px", fontWeight: "bold" }}>전화번호</div>
                </FirstNameWrap>
                <SecondNameWrap>
                    <StInput />
                </SecondNameWrap>
            </WebsiteContainer>
            <WebsiteContainer>
                <FirstNameWrap>
                    <div style={{ marginTop: "5px", paddingRight: "30px", fontWeight: "bold" }}>성별</div>
                </FirstNameWrap>
                <SecondNameWrap>
                    <StInput />
                </SecondNameWrap>
            </WebsiteContainer>
            <RecommendContainer>
                <FirstNameWrap>
                    <div style={{ marginTop: "5px", paddingRight: "30px", fontWeight: "bold" }}>비슷한 계정 추천</div>
                </FirstNameWrap>
                <CheckboxContainer>
                    {/* <input type="checkbox"/> */}
                    <StCheckBox type="checkbox"/>
                    <Include>팔로우할 만한 비슷한 계정을 추천할 때 회원님의 계정을 포함합니다.</Include>
                </CheckboxContainer>
            </RecommendContainer>
            <Information>
                <FirstNameWrap />
                <FinalWrap>
                    <StSubmitButton>제출</StSubmitButton>
                    <StTime>일시적으로 내 계정을 비활성화하기</StTime>
                </FinalWrap>
            </Information>
        </RightContainer>
    );
};

export default MyProfileEditRight;

const RightContainer = styled.div`
    width: 696px;
    height: 823px;
    border-left: 1px solid #dbdbdb;
    display: flex;
    flex-direction: column;
`

const FirstContainer = styled.div`
    width: 696px;
    height: 42px;
    margin: 32px 0 10px 0;
    display: flex;
`
const FirstWrap = styled.div`
    width: 194px;
    height: 42px;
    display: flex;
    justify-content: right;
`

const UserImg = styled.div`
    border: 1px solid rgb(219,219,219);
    width: 38px;
    height: 38px;
    border-radius: 50%;
`
const SecondWrap = styled.div`
    width: 500px;
    height: 42px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const UserName = styled.div`
    font-size: 20px;
`
const UserNameChange = styled.div`
    color: #0095f6;
    font-size: 14px;
    font-weight: bold;
`

const SecondContainer = styled.div`
    width: 696px;
    height: 104px;
    display: flex;
    margin-top: 15px;
`

const FirstNameWrap = styled.div`
    width: 194px;
    height: 104px;
    display: flex;
    justify-content: right;
`

const SecondNameWrap = styled.div`
    width: 500px;
    height: 104px;
    display: flex;
    flex-direction: column;
`

const StInput = styled.input`
    width: 320px;
    height: 28px;
    border-radius: 5px;
    border: 1px solid #8e8e8e;
    padding-left: 15px;
    font-size: 15px;
`

const SecondFirstBottom = styled.div`
    width: 355px;
    font-size: 12px;
    color: #8e8e8e;
    margin-top: 10px;
`

const SecondSecondBottom = styled.div`
    width: 355px;
    font-size: 12px;
    color: #8e8e8e;
    margin-top: 10px;
`

const ThirdContainer = styled.div`
    width: 696px;
    height: 88px;
    display: flex;
    margin-top: 10px;
`

const WebsiteContainer = styled.div`
    width: 696px;
    height: 32px;
    display: flex;
    margin-top: 10px;
`

const IntroduceContainer = styled.div`
    width: 696px;
    height: 60px;
    display: flex;
    margin-top: 10px;
`

const StTextArea = styled.textarea`
    width: 320px;
    height: 54px;
    border-radius: 5px;
    border: 1px solid #dbdbdb;
    padding-left: 15px;
    font-size: 15px;
`

const Information = styled.div`
    width: 696px;
    height: 65px;
    display: flex;
    margin-top: 30px;
    color: #8e8e8e;
`

const InformationHeader = styled.div`
    font-size: 14px;
    font-weight: bold;
    margin-top: 10px;
    width: 320px;
`

const InformationBottom = styled.div`
    font-size: 12px;
    width: 330px;
`

const RecommendContainer = styled.div`
    width: 696px;
    height: 54px;
    display: flex;
    margin-top: 15px;
`

const Include = styled.div`
    font-size: 14px;
    font-weight: bold;
    width: 190px;
`

const StCheckBox = styled.input`
    width: 16px;
    height: 16px;
`
const CheckboxContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
`

const FinalWrap = styled.div`
    display: flex;
    align-items: center;
    gap: 100px;
`
const StSubmitButton = styled.button`
    width: 48px;
    height: 30px;
    border: none;
    background-color: #7dc7f8;
    color: white;
    border-radius: 5px;
`

const StTime = styled.div`
    color: #0095f6;
    font-size: 14px;
`