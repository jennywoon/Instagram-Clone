import React, {useEffect} from 'react'
import Input from './elements/Input'
import Button from './elements/Button'
import styled from 'styled-components';
import KakaoLogin from "./KakaoLogin";
import { setTokenToCookie, cookieCkeck } from '../actions/Cookie';
import { useNavigate } from "react-router-dom"
import useInputs from "../hooks/useInput"
import axios from "axios"
import { useDispatch } from 'react-redux';

const API_BASE = process.env.REACT_APP_INSTAS_API_URL;

const LoginForm = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userInfo, onChangeUserInfo, reset] = useInputs({
    username: "",
    password: "",
  });

  useEffect(() => {
    if (cookieCkeck()) {
      alert("이미 로그인 하셨습니다.");
      navigate("/");
    } else {
      return;
    }
  }, []);

  const { username, password } = userInfo;

  const __postLogin = async () => {
    try {
      console.log(userInfo);
      const data = await axios.post(`${API_BASE}/login`, userInfo);
      setTokenToCookie(data.headers.authorization);
      navigate("/");
    } catch (error) {
      if (username.trim() === "") {
        return alert("로그인 정보를 입력해 주세요.");
      } else if (password.trim() === "") {
        return alert("비밀번호를 입력해 주세요.");
      }
      return alert("로그인에 실패하였습니다.");
    }
  };

  const onCreate = (e) => {
    e.preventDefault();
    __postLogin(userInfo);
    reset();
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <StyledForm onSubmit={onCreate}>
        <StyledTitle>
          Instagram
        </StyledTitle>
        <Input 
        width='200px' padding='12px 20px' placeholder='아이디' 
        name="username" value={username} onChange={onChangeUserInfo} type="text"
        />
        <Input 
        width='200px' padding='12px 20px' placeholder='비밀번호' 
        name="password"  value={password} onChange={onChangeUserInfo} type="password"
        />
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