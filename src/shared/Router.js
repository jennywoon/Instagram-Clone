import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostDetail from "../components/PostDetail";
import PostForm from "../components/PostForm";
import PostUpload from "../components/PostUpload";
import LoginPage from "../pages/LoginPage";
import MainPage from "../pages/MainPage"
import Mypage from "../pages/MyPage";
import RegisterPage from "../pages/RegisterPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/mypage" element={<Mypage />} />
        {/* PostUpload router 부분 수정할 수 있음 */}
        <Route path="/upload" element={<PostUpload />} />
        <Route path="/form" element={<PostForm />} />
        {/* PostDetail 부분 수정할 수 있음, 배경 어둡게 */}
        <Route path="/postdetail" element={<PostDetail />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;