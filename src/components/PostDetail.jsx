import React, { useState, useRef, useEffect } from "react";
import PostDetailForm from "./PostDetailForm";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components"
import design1 from "../assets/design1.jpg"
import { __getComments, __getInstas } from "../redux/modules/InstaSlice";
import Slider from "react-slick";

const PostDetail = ({ setModalOpen, boardId, }) => {

    // 슬라이드 구현

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

    //

    console.log('boardId', boardId)


    const dispatch = useDispatch();
    const data = useSelector((state) => state.instas.insta.data)

    console.log('data', data);
    const modalRef = useRef(null);

    const closeModal = (e) => {
        if (!modalRef.current.contains(e.target)) {
            setModalOpen(false);
            dispatch(__getInstas())
        }
    };

    useEffect(() => {
        dispatch(__getComments(boardId));
    }, [dispatch]);


    if (data) {

        return (
            <Background onClick={closeModal}>
                <PostDetailContainer ref={modalRef}>
                    <PostImg>
                        <Slider {...settings}>
                            {data.imgUrl.map((img) => (
                                <div>
                                    <img src={img}
                                        style={{
                                            width: "100%",
                                            height: "830px",
                                            backgroundSize: "100% 100%",
                                            backgroundPosition: "center"
                                        }}
                                    />
                                </div>
                            ))}
                        </Slider>
                    </PostImg>
                    <PostDetailForm
                        commentList={data.commentList}
                        boardContent={data.content}
                        username={data.username}
                        boardId={boardId}
                        setModalOpen={setModalOpen}
                    />
                </PostDetailContainer>
            </Background>
        )
    }
}

export default PostDetail;

const Background = styled.div`
    position: fixed;
    /* position: absolute; */
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0,0,0,0.50);
    z-index: 11;
`
const PostDetailContainer = styled.div`
    width: 1300px; 
    height: 100%;
    display: flex;
    margin: auto;
    align-items: center;
    /* position: relative; */
`
const PostImg = styled.div`
    width: 826px;
    height: 870px;
    background-color:#fff;
    /* display: flex; */
    /* overflow-y:hidden; */
    /* overflow-x:scroll; */
    /* overflow: hidden; */
    background-color: #fff;
    background-position: center;
    background-size: 100% 100%;

`