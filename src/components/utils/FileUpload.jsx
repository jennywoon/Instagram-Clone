import React, { useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import { BsImages } from 'react-icons/bs'
import Button from '../elements/Button'
import { useDropzone } from 'react-dropzone'
import Slider from "react-slick";


const FileUpload = ({ files, setFiles }) => {
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


  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    accept: {
      'image/png': ['.png'],
      'image/jpeg': ['.jpeg'],
      'image/jpg': ['.jpg'],
    },
    onDrop: (acceptedFiles) => {
      setFiles([...files, acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      }))]);
    }
  })
  console.log('files', files.length, Boolean(files));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files && files.map((file) => URL.revokeObjectURL(file[0].preview));
  }, []);

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   width: "600px",
  // }

    <section className="container" style={{ width: '100%', height: '700px' }}>
      {files.length === 0 ?
        <>
          <div {...getRootProps({ className: 'dropzone' })}>

            <input {...getInputProps()} />
            <StyledUploadBoxBody width='600px' height='700px'>
              <BsImages style={{ width: '70px', height: '70px' }} />
              <p>사진과 동영상을 여기에 끌어다 놓으세요 </p>
              <Button width='150px' backgroundColor='#0095F6' color='#fff' padding='0.6rem 0'>컴퓨터에서 선택</Button>
            </StyledUploadBoxBody>
          </div>
        </>
        :
        <>
          <StyledImageContainer>
            <Slider {...settings} >
              {files && files.map((file, index) => (

                // 파일 여러장 한꺼번에 보여주기는 crud 끝나고 하기
                <div key={index} style={{ width: '100%' }}>
                  <img
                    src={file[0].preview}
                    style={{ width: '100%', height: '670px', backgroundSize: 'cover' }}
                    onLoad={() => URL.revokeObjectURL(file[0].preview)}
                  />
                </div>
              ))}
            </Slider>
          </StyledImageContainer>
          <div {...getRootProps({ className: 'dropzone' })}>

            <input {...getInputProps()} />
            <StyledUploadBoxBodySmall>
              <BsImages style={{ width: '40px', height: '40px' }} />
              <p style={{ fontSize: '0.7rem', margin: '10px 0 0 0' }}>사진과 동영상을 여기에 끌어다 놓으세요 </p>
              <Button width='100px' backgroundColor='#0095F6' color='#fff' padding='0.6rem 0' >컴퓨터에서 선택</Button>
            </StyledUploadBoxBodySmall>
          </div>
        </>
      }
    </section >
  
}


const StyledUploadBoxBody = styled.div`
  display: flex;
  width:600px;
  height:700px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding:.5rem;
  background:#fff;
  box-sizing:border-box;
  position: relative;
  padding-left:30px;
`

const StyledUploadBoxBodySmall = styled.div`
  display: flex;
  width:180px;
  height:200px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding:.5rem;
  color: #fff;
  background:rgba(0,0,0,.5);
  box-sizing:border-box;
  padding:10px 20px;
  border-radius:20px;
  position: absolute;
  right:10px;
  bottom: 10px;
`


const StyledImageContainer = styled.div`
  width:100%;
  height:700px;
  padding:.5rem 0 0 .5rem;
  box-sizing:border-box;
  /* display: flex; */
  /* overflow-x: scroll; */
  background: #fff;
  scrollbar-width: none;
  border-bottom-left-radius: 20px;
  &::-webkit-scrollbar {
	display:none Chrome , Safari , Opera
}
  /* background-position: 50% 50%;
  background-size: contain;
  background-repeat: no-repeat; */
`

export default FileUpload