import React, {useState} from 'react'
import styled from 'styled-components';
import Footer from './Footer';
import LoginForm from './LoginForm';

const Login = () => {

  return (
    <StyledLoginContainer>
      <LoginForm />
      <Footer />
    </StyledLoginContainer >
  )
}

const StyledLoginContainer = styled.div`
  display: flex;
  justify-content:center;
  align-items: center;
  height: 100vh;
`

export default Login