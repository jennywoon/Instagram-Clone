import React, { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { IoChatbubbleOutline, IoPaperPlaneOutline, IoBookmarkOutline } from "react-icons/io5";
import { VscSmiley } from "react-icons/vsc";
import { __getComments, __getInstas, __deleteInsta, __postComments, __postInstas } from "../redux/modules/InstaSlice";
import PostDetail from "./PostDetail";
import PostOption from "./PostOption";
import PostMyOption from "./PostMyOption";
import Cookies from "universal-cookie";
import PostEditForm from "./PostEditForm";
import Slider from "react-slick";



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
}) => {
    const dispatch = useDispatch();

    const [editInsta, setEditInsta] = useState(false);

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{
                    ...style,
                    display: "block",
                    // background: "red",
                    right: '10px',
                    width: '30px',
                    height: '30px',
                    textAlign: 'center',
                    paddingTop: '10px',
                    zIndex: 10,
                }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{
                    ...style,
                    display: "block",
                    // background: "green",
                    left: '10px',
                    width: '30px',
                    height: '30px',
                    textAlign: 'center',
                    paddingTop: '10px',
                    zIndex: 10,
                }
                }
                onClick={onClick}
            />
        );
    }


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };




    // console.log('insta', insta)

    // 좋아요 구현
    let [like, setLike] = useState(0);

    let likeCount = () => {
        setLike(like + 1);
    }

    // 모달 구현
    const [modalOpen, setModalOpen] = useState(false);

    const showModal = (e) => {
        e.preventDefault();
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
        e.preventDefault();
        const { value, name } = e.target;
        setUserComment({
            ...userComment,
            [name]: value,
        })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        dispatch(__postComments(comment))
    }

    const onClickModalHandler = () => {
        if (cookies.get('username') === username) {
            console.log('boardId!!!!', boardId);
            setMyOptionModal(true);
            cookies.set('boardId', boardId);
        } else {
            setOptionModal(true);
        }
    }

    const onClickDeleteHandler = (e) => {
        e.preventDefault();
        console.log('boardId!!!!@@@@@@', cookies.get('boardId'))
        // window.location.reload();
        const confirm = window.confirm('정말 삭제하시겠습니까?')
        if (confirm) {
            dispatch(__deleteInsta(Number(cookies.get('boardId'))));
        }
        setMyOptionModal(false)
        window.location.reload()
    }

    const onClickPutModalHandler = () => {
        setMyOptionModal(false);
        setEditInsta(true);
    }


    return (
        <>
            {modalOpen && <PostDetail setModalOpen={setModalOpen} boardId={boardId} />}
            <PostContainer
                onSubmit={onSubmitHandler}
            >
                <PostHeader>
                    <FirstHeader>
                        <UserImg />
                        <UserLabel>{username}</UserLabel>
                    </FirstHeader>
                    <BiDotsHorizontalRounded style={{ paddingRight: "15px", cursor: "pointer" }} onClick={onClickModalHandler} />
                </PostHeader>
                <PostImg>
                    <Slider {...settings} >
                        {img.map((img, index) => (
                            <div>
                                <img src={img}
                                    style={{
                                        width: '100%',
                                        height: '500px',
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                    }} />
                            </div>
                        ))}
                    </Slider>
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
            {
                myOptionModal &&
                <PostMyOption
                    boardId={boardId}
                    setMyOptionModal={setMyOptionModal}
                    onClickDeleteHandler={onClickDeleteHandler}
                    onClickPutModalHandler={onClickPutModalHandler}
                />
            }

            {editInsta && <PostEditForm setEditInsta={setEditInsta} />}
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
    background-position: center;
    background-size: 100% 100%;
    z-index:10px;
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