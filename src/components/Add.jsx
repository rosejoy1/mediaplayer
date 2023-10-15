import React, { useState } from 'react'
import { Button, Col, Form, Modal } from 'react-bootstrap';
import { addHistory, uploadVideo } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add({setUploadVideoServerResponse}) {

  const [video,setVideo]=useState({

    id:"",caption:"",url:"",embedlink:""
  })

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    
  const extractUrl=(e)=>{
    const {value}=e.target
    if(value){
      const embedData=`https://www.youtube.com/embed/${value.slice(-11)}`
      setVideo({...video,embedlink:embedData})
    }else{
      setVideo({...video,embedlink:""})
    }
    
  }
  console.log(video);
  const handleUpload=async ()=>{
    // get details of video
    const {id,caption,url,embedlink}=video
    // if video is empty or not
    if(!id || !caption || !url || !embedlink){
      toast.warning("Please fill the form completely!!!")
    }else{
      // make api call
      const response=await uploadVideo(video)
      // console.log(response);
      if(response.status>=200 && response.status<300){
        toast.success(`"${response.data.caption}" video uploaded successfully...`)
        // set server response
        setUploadVideoServerResponse(response.data)
        setVideo({

          id:"",caption:"",url:"",embedlink:""
        })
        // hide modal
        handleClose()
      }else{
        toast.error("Uploading Error perform the action after some time")
      }
    }
  }
  return (
    <>
    <div className="d-flex align-items-center">
      <h5>Upload New Video</h5>
      <button onClick={handleShow} className='btn'><i class="fa-solid fa-circle-plus fs-5"></i></button>
    </div>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload a video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <p>Please fill the following details</p>
         <Form/>
         <Form.Group className='mb-3' controlId="formBasicEmail">
          
          <Form.Control
            required
            type="text"
            placeholder="Video ID"
            onChange={(e)=>setVideo({...video,id:e.target.value})}
           
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId="formBasicEmail">
          
          <Form.Control
            required
            type="text"
            placeholder="Caption"
            onChange={(e)=>setVideo({...video,caption:e.target.value})}
           
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId="formBasicEmail">
          
          <Form.Control
            required
            type="text"
            placeholder="Video Image URL"
            onChange={(e)=>setVideo({...video,url:e.target.value})}
           
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId="formBasicEmail">
          
          <Form.Control
            required
            type="text"
            placeholder="Embed link"
            onChange={extractUrl}
           
          />
        </Form.Group>
        <Form/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpload}>Upload</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer
      position='top-center'
      theme='colored'
      autoClose={2000}
      
      />
    
    </>
  )
}

export default Add