import React, { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import test from "../assets/test.jpg"
import { AiOutlineHeart } from "react-icons/ai";
import { IoChatbubbleOutline, IoPaperPlaneOutline, IoBookmarkOutline } from "react-icons/io5";
import { VscSmiley } from "react-icons/vsc";
import { __getComments, __getInstas, __deleteInsta, __postComments, __postInstas } from "../redux/modules/InstaSlice";
import PostDetail from "./PostDetail";
import PostOption from "./PostOption";
import PostMyOption from "./PostMyOption";
import Cookies from "universal-cookie";
import { useParams } from "react-router-dom";

const MainPost = ({
    boardId,
    boardContent,
    commentCount,
    img,
    username,
    optionModal,
    setOptionModal,
    myOptionModal,
    setMyOptionModal,
    // insta
}) => {
    const dispatch = useDispatch();
    // const param = useParams();
    // const {instas} = useSelector((state) => state.instas)
    // const insta = instas.find((insta) => insta.boardId === parseInt(param.id))

    const [selectId, setSelectId] = useState(null);

    // 좋아요 구현
    let [like, setLike] = useState(0);

    let likeCount = () => {
        setLike(like + 1);
    }

    // 모달 구현
    const [modalOpen, setModalOpen] = useState(false);

    const showModal = () => {
        setModalOpen(true);
    }

    const cookies = new Cookies();
    // console.log(cookies.get('username'))
    // console.log('username!!', username, boardId, cookies.get('username') === username)


    // 댓글 POST
    const [userComment, setUserComment] = useState({
        comment: "",
    })

    // comment POST, GET 구현
    useEffect(() => {
        dispatch(__getComments(boardId));
    }, [dispatch]);

    const { comment } = userComment;

    const onChangeHandler = (e) => {
        const { value, name } = e.target;
        setUserComment({
            ...userComment,
            [name]: value,
        })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        dispatch(__postComments(userComment))
    }

    const onClickDeleteHandler = () => {
        console.log('boardId!!!!', boardId);
        dispatch(__deleteInsta(boardId));
    }

    return (
        <>

            <PostContainer 
            onSubmit={onSubmitHandler}
            >
                {modalOpen && <PostDetail setModalOpen={setModalOpen} boardId={boardId} />}
                <PostHeader>
                    <FirstHeader>
                        <UserImg />
                        <UserLabel>{username}</UserLabel>
                    </FirstHeader>
                    <BiDotsHorizontalRounded style={{ paddingRight: "15px" }}
                        onClick={() => {
                            console.log('boardId', boardId)
                            setSelectId(boardId);
                            cookies.get('username') === username
                                ? setMyOptionModal(true)
                                : setOptionModal(true)
                        }} />
                </PostHeader>

                <PostImg>
                    {img.map((img, index) => (
                        <img key={index} src={img} />
                    ))}
                </PostImg>

                <LikeFirstBar>
                    <LikeBarSection>
                        <AiOutlineHeart size="30" style={{ cursor: "pointer" }} onClick={likeCount} />
                        <IoChatbubbleOutline
                            size="28" style={{ cursor: "pointer" }}
                            onClick={showModal}
                        />
                        <IoPaperPlaneOutline size="28" style={{ cursor: "pointer" }} />
                    </LikeBarSection>
                    <IoBookmarkOutline size="27" style={{ paddingRight: "10px", cursor: "pointer" }} />
                </LikeFirstBar>
                <LikeSecondBar>
                    <UserLikeImg />
                    <UserLikeLable
                    >
                        {like} 명이 좋아합니다.
                    </UserLikeLable>
                </LikeSecondBar>
                <ContentWrap>
                    <ContentFirstSection>
                        <UserLabel>{username}</UserLabel>
                        <PostContent>{boardContent}</PostContent>
                    </ContentFirstSection>
                    <CommentCount>
                        댓글 {commentCount}개 보기
                    </CommentCount>
                    <ContentTime>
                        예시: 6시간 전
                    </ContentTime>
                </ContentWrap>
                <CommentWrap>
                    <CommentFirstSection>
                        <VscSmiley size="26" style={{ padding: "0 10px" }} />
                        <CommentInput
                            type="text"
                            name="comment"
                            value={comment}
                            onChange={onChangeHandler}
                        />
                    </CommentFirstSection>
                    {/* <UploadLable>게시</UploadLable> */}
                    <UploadButton>게시</UploadButton>
                </CommentWrap>
            </PostContainer>
            {optionModal && <PostOption optionModal={optionModal} setOptionModal={setOptionModal} />}
            {myOptionModal &&
                <PostMyOption
                    setMyOptionModal={setMyOptionModal}
                    onClickDeleteHandler={onClickDeleteHandler}
                />}
        </>
    )
}

export default MainPost;

const PostContainer = styled.form`
    width: 470px;
    height: 811px;
    border: 1px solid rgb(219,219,219);
    border-radius: 10px;
    margin-top: 25px;
`

const PostHeader = styled.div`
    width: 100%;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const FirstHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 10px;
    /* gap: 10px; */
`
const UserImg = styled.div`
    border: 1px solid rgb(219,219,219);
    border-radius: 50px;
    width: 32px;
    height: 32px;
`
const UserLabel = styled.div`
    padding-left: 12px;
    font-weight: bold;
    font-size: 17px;
`
const PostImg = styled.div`
    width: 100%;
    height: 525px;
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
    background-position: center;
    background-size: 100% 100%;
`

const LikeFirstBar = styled.div`
    width: 100%;
    height: 46px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const LikeBarSection = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
`
const LikeSecondBar = styled.div`
    width: 100%;
    height: 24px;
    display: flex;
    padding: 10px 0;
    
`

const UserLikeImg = styled.div`
    border: 1px solid rgb(219,219,219);
    border-radius: 50px;
    width: 20px;
    height: 20px;
    margin: 0 15px;
`

const UserLikeLable = styled.div`
    font-size: 16px;
`

const ContentWrap = styled.div`
    width: 100%;
    height: 90px;
    /* padding: 0 15px; */
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    gap: 8px;
`

const PostContent = styled.div`
    font-size: 16px;
`
const ContentFirstSection = styled.div`
    display: flex;
    gap: 10px;
`
const CommentCount = styled.div`
    padding-left: 12px;
    font-size: 15px;
    color: #8e8e8e;
`

const ContentTime = styled.div`
    padding-left: 12px;
    font-size: 12px;
    color: #8e8e8e;
`

const CommentWrap = styled.div`
    border-top: 1px solid rgb(219,219,219);
    /* width: 100%; */
    height: 49px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const CommentFirstSection = styled.div`
    display: flex;
    align-items: center;
`

const CommentInput = styled.input`
    border: none;
    outline: none;
    width: 330px;
    height: 16px;
    font-size: 14px;
`

const UploadButton = styled.button`
    background-color: transparent;
    color: #0095f6;
    padding-right: 14px;
    font-size: 14px;
    border: none;
    cursor: pointer;
`