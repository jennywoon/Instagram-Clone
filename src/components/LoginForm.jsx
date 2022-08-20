import React from 'react'
import Input from './elements/Input'
import Button from './elements/Button'
import styled from 'styled-components';
import KakaoLogin from "./KakaoLogin";

const LoginForm = () => {

  const onSubmitHandler = (e) => {
    e.preventDefault();
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <StyledForm onSubmit={(e) => onSubmitHandler(e)}>
        <StyledTitle>
          Instagram
        </StyledTitle>
        <Input width='200px' padding='12px 20px' placeholder='아이디' />
        <Input width='200px' padding='12px 20px' placeholder='비밀번호' />
        <Button
          width='245px'
          padding='10px 0px'
          backgroundColor='#B2DFFC'
          color='#fff'
        >
          로그인
        </Button>
        <div style={{ display: 'flex', alignItems: 'top', margin: '1.5rem 0 0.5rem 0' }}>
          <StyledLine></StyledLine>
          <div style={{ position: 'relative', top: '-3px' }}>또는</div>
          <StyledLine></StyledLine>
        </div>
        {/* <Button
          width='245px'
          padding='10px 0'
          backgroundColor='#FFE500'
          color='#000'
        >카카오톡으로 로그인</Button> */}
        <KakaoLogin/>
      </StyledForm >
      <StyledBox>
        <p>계정이 없으신가요? <span style={{ color: '#0095F6' }}>가입하기</span></p>
      </StyledBox>
    </div>
  )
}

const StyledTitle = styled.p`
  font-size:2rem;
`

const StyledForm = styled.form`
  width: 400px;
  min-height: 500px;
  height: auto;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
`
const StyledLine = styled.div`
  border-top: 1px solid #ccc;
  width: 100px;
  height: 20px;
  margin: 0.5rem 1rem;
`
const StyledBox = styled.div`
  border: 1px solid #ccc;
  width: 400px;
  padding: 0.5rem;
  text-align: center;
  box-sizing: border-box;
`
export default LoginForm