import React, { useEffect, useState, useCallback } from 'react'
import Input from './elements/Input'
import Button from './elements/Button'
import styled from 'styled-components';
import axios from "axios";
import { __postRegister } from '../redux/modules/RegisterSlice';
import { cookieCkeck } from "../actions/Cookie"
import { useNavigate } from 'react-router-dom';
import instagram from "../assets/instagram.png"

const API_BASE = process.env.REACT_APP_INSTAS_API_URL;

const RegisterForm = () => {

  const navigate = useNavigate()

  useEffect(() => {
    if (cookieCkeck()) {
      alert("로그아웃을 해주세요.");
      navigate("/");
    } else {
      return;
    }
  }, []);


  const [username, setusername] = useState("");
  const [nickname, setnickname] = useState("");
  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState("");

  //오류메시지 상태저장
  const [usernameMessage, setusernameMessage] = useState("");
  const [nicknameMessage, setnicknameMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [validPasswordMessage, setValidPasswordMessage] = useState("");

  // 유효성 검사
  const [isUsername, setIsUsername] = useState(false);
  const [isNickname, setIsNickname] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [nicknameValid, setNicknameVaild] = useState(false);
  const [usernameVaild, setUsernameVaild] = useState(false);

  const postSignUp = async () => {

    try {
      console.log(username, password);
      await axios.post(
        `${API_BASE}/signup`
        , {
          username: username,
          nickname: nickname,
          password: password,
          validPassword: validPassword,
        });
      alert("회원가입이 완료되었습니다. 로그인을 해주세요.");
        navigate("/login")
    } catch (error) {
      alert("회원가입이 실패하였습니다");
      return;
    }
  };

  const onCreate = (e) => {
    e.preventDefault();
    postSignUp({
      username: username,
      nickname: nickname,
      password: password,
      validPassword: validPassword,
    });
    // navigate("/login");
    setusername("");
    setnickname("");
    setPassword("");
    setValidPassword("");
  };

  //  아이디(username) 중복확인
  const usernameCheck = async () => {
    const data = await axios.post(`${API_BASE}/validateId`, { username: username });
    if (username.trim() === "") {
      alert("아이디를 입력해주세요.");
    } else if (!isUsername) {
      alert("아이디를 조건에 맞게 입력해주세요.");
    } else if (!data.data) {
      alert("이미 가입한 아이디입니다.");
    } else {
      alert("가입 가능합니다");
      setUsernameVaild(true);
    }
  };

  const onClickusernameCheck = () => {
    usernameCheck({ username: username });
  };

  // 닉네임 중복확인
  const nicknameCheck = async () => {
    const data = await axios.post(`${API_BASE}/validateNickname`, { nickname: nickname });
    if (nickname.trim() === "") {
      alert("닉네임을 입력해주세요.");
    } else if (!isNickname) {
      alert("닉네임을 조건에 맞게 입력해주세요.");
    } else if (!data.data) {
      alert("이미 가입한 닉네임입니다.");
    } else {
      alert("가입 가능합니다");
      setNicknameVaild(true);
    }
  };

  const onClickunicknameCheck = () => {
    nicknameCheck({ nickname: nickname });
  };


  //아이디
  const onChangeusername = useCallback((e) => {
    const emailCurrent = e.target.value;
    setusername(emailCurrent);
    const emailRegex = /^[a-zA-Z](?=.{0,15}[0-9])[0-9a-zA-Z]{4,15}$/;
    //6자리 이상, 영문 대소문자 가능
    if (!emailRegex.test(emailCurrent)) {
      setusernameMessage("5~15자의 영문 대 소문자+숫자 조합으로 입력해주세요.");
      setIsUsername(false);
    } else {
      setusernameMessage("올바른 아이디 형식입니다 :)");
      setIsUsername(true);
    }
  }, []);

  // 닉네임
  const onChangenickname = useCallback((e) => {
    const emailCurrent = e.target.value;
    setnickname(emailCurrent);
    const emailRegex = /^([a-zA-Z0-9가-힣]){3,10}$/;
    if (!emailRegex.test(emailCurrent)) {
      setnicknameMessage("3~10자의 영문 대 소문자, 숫자, 한글을 입력해주세요.");
      setIsNickname(false);
    } else {
      setnicknameMessage("올바른 닉네임 형식입니다 : )");
      setIsNickname(true);
    }
  }, []);

  // 비밀번호
  const onChangePassword = useCallback((e) => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    const passwordCurrent = e.target.value;
    setPassword(e.target.value);
    if (validPassword === passwordCurrent) {
      setValidPasswordMessage("비밀번호를 똑같이 입력했어요.");
    } else {
      setValidPasswordMessage("비밀번호가 불일치합니다. 다시 입력해주세요.");
    }
    if (!passwordRegex.test(passwordCurrent)) {
      setPasswordMessage("숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!");
      setIsPassword(false);
    } else {
      setPasswordMessage("안전한 비밀번호입니다.");
      setIsValidPassword(false);
      setIsPassword(true);
    }
  },
    [validPassword, password]
  );

  // 비밀번호 확인
  const onChangeValidPassword = useCallback(
    (e) => {
      setValidPassword(e.target.value);
      const ValidPasswordCurrent = e.target.value;
      if (password === ValidPasswordCurrent) {
        setValidPasswordMessage("비밀번호를 똑같이 입력했어요.");
        setIsValidPassword(true);
      } else {
        setValidPasswordMessage("비밀번호가 불일치합니다. 다시 입력해주세요.");
        setIsValidPassword(false);
      }
    },
    [validPassword, password]
  );


  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <StyledForm onSubmit={onCreate}>
        <StyledTitle>

        </StyledTitle>
        <StyledDesc>친구들의 사진과 동영상을 보려면 가입하세요.</StyledDesc>
        <Button
          width='245px'
          padding='10px 0'
          backgroundColor='#FFE500'
          color='#000'
        >카카오톡으로 로그인</Button>
        <div style={{ display: 'flex', alignItems: 'top', margin: '1.5rem 0 0.5rem 0' }}>
          <StyledLine></StyledLine>
          <div style={{ position: 'relative', top: '-3px' }}>또는</div>
          <StyledLine></StyledLine>
        </div>
        <Input width='200px' padding='12px 20px' placeholder='아이디'
          name="username" value={username} onChange={onChangeusername} type="text"
        />
        <Input width='200px' padding='12px 20px' placeholder='닉네임'
          name="nickname" value={nickname} onChange={onChangenickname} type="text"
        />
        <Input width='200px' padding='12px 20px' placeholder='비밀번호'
          name="password" value={password} onChange={onChangePassword} type="password"
        />
        <Input width='200px' padding='12px 20px' placeholder='비밀번호 확인'
          name="validPassword" value={validPassword} onChange={onChangeValidPassword} type="password"
        />
        <Button
          width='245px'
          padding='10px 0px'
          backgroundColor='#B2DFFC'
          color='#fff'
        >
          가입
        </Button>
      </StyledForm >
      <StyledBox>
        <p>계정이 있으신가요?
          {/* <span style={{ color: '#0095F6' }}>로그인</span> */}
          <StLogin
          onClick={() => {
            navigate("/login")
          }}
          >
            로그인
          </StLogin>
        </p>
      </StyledBox>
    </div >
  )
}




const StyledForm = styled.form`
  width: 400px;
  min-height: 500px;
  height: auto;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding-bottom: 3rem;
  border-radius: 3px;
`

const StyledTitle = styled.p`
  /* font-size:2rem;
  margin-bottom: 0.5rem; */
  background-image: Url(${instagram});
  min-width: 180px;
  min-height: 100px;
  /* background-size: contain; */
  background-size: 100% 100%;
  background-repeat: no-repeat;
  cursor: pointer;
`
const StyledDesc = styled.p`
  font-size: 15px;
  margin: 0 0 0.5rem 0;
  padding: 0 1.5rem;
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
  margin: 1rem 0;
  box-sizing: border-box;
  border-radius: 3px;
`
const StLogin = styled.span`
  color: #0095F6;
  padding-left: 10px;
  cursor: pointer;
`

export default RegisterForm;