import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import PostForm from './PostForm';

const Layout = ({
  children,
}) => {
  const [profileModalShow, setProfileModalShow] = useState(false);
  const [uploadModalShow, setUploadModalShow] = useState(false);
  console.log(uploadModalShow);
  return (
    <StLayoutContainer onClick={(e) => {
      setProfileModalShow(false);
    }}>
      <Header
        profileModalShow={profileModalShow}
        setProfileModalShow={setProfileModalShow}
        uploadModalShow={uploadModalShow}
        setUploadModalShow={setUploadModalShow}
      />
      <StLayoutContents>{children}</StLayoutContents>
      {uploadModalShow
        ? <PostForm
          uploadModalShow={uploadModalShow}
          setUploadModalShow={setUploadModalShow}
        />
        : null}
    </StLayoutContainer>
  );
};
export default Layout;

const StLayoutContainer = styled.div`
  width:100%;
  height:auto;
  overflow-x: hidden;
`;

const StLayoutContents = styled.div`
    display: flex;
    justify-content: center;
`;
