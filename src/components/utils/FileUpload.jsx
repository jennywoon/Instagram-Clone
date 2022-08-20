import React, { useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import { BsImages } from 'react-icons/bs'
import Button from '../elements/Button'
import { useDropzone } from 'react-dropzone'



const FileUpload = ({ files, setFiles }) => {
  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 5,
    accept: {
      'image/png': ['.png'],
      'image/jpeg': ['.jpeg'],
      'image/jpg': ['.jpg'],
    },
    onDrop: acceptedFiles => {
      setFiles([...files, acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      }))]);
    }
  })
  console.log(files);

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files && files.forEach(file => URL.revokeObjectURL(file[0].preview));
  }, []);

  return (

    <section className="container" style={{ width: '100%' }}>
      <div {...getRootProps({ className: 'dropzone' })} style={{ width: '100%', height: '450px', display: 'flex', justifyContent: 'center' }}>
        <input {...getInputProps()} />
        <StyledUploadBoxBody>
          <BsImages style={{ width: '70px', height: '70px' }} />
          <p>사진과 동영상을 여기에 끌어다 놓으세요 </p>
          <Button width='150px' backgroundColor='#0095F6' color='#fff' padding='0.6rem 0'>컴퓨터에서 선택</Button>
        </StyledUploadBoxBody>
      </div>
      <StyledImageContainer>
        {files && files.map((file, index) => (
          <div div key={index} >
            <div style={{ width: '200px', height: '200px' }}>
              <img
                src={file[0].preview}
                style={{ width: '100%', height: '100%', backgroundSize: 'cover' }}
                onLoad={() => { URL.revokeObjectURL(file[0].preview) }}
              />
            </div>
          </div>
        ))}
      </StyledImageContainer>
    </section >
  )
}


const StyledUploadBoxBody = styled.div`
  display: flex;
  width:100%:
  height:100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding:.5rem;
  /* border:1px solid #000; */
`

const StyledImageContainer = styled.div`
  /* border:1px solid #000; */
  width:100%;
  height:250px;
  padding:.5rem 0 0 .5rem;
  box-sizing:border-box;
  display: flex;
  overflow-x: scroll;
  background: #eee;
  scrollbar-width: none;
  border-bottom-left-radius: 20px;
  &::-webkit-scrollbar {
	display:none Chrome , Safari , Opera
}
`

export default FileUpload