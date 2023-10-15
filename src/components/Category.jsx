import React, { useEffect, useState } from 'react'
import { Modal, Button, Form, Col, Row } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { deleteCategory, getAVideo, getAllCategory, saveCategory, updateCategory } from '../services/allAPI';
import VideoCard from './VideoCard';

function Category() {
  const [allCategory, setAllcategory] = useState([])
  const [show, setShow] = useState(false);
  const [categoryName, setCategoryName] = useState("")
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleAddCategory = async () => {
    if (categoryName) {
      const body = {
        categoryName,
        allVideos:[]
      }
      // make api call
      const response = await saveCategory(body)
      if (response.status > 200 && response.status < 300) {
        // Hide Modal
        handleClose()
        // reset state
        setCategoryName("")

        handleGetCategory()
      } else {
        toast.warning("Uploading eoor... Perform the operation after sometime!!!")
      }
    } else {
      toast.info("Please provide category name")
    }
  }

  const handleGetCategory = async () => {
    // make api call
    const { data } = await getAllCategory()
    setAllcategory(data);
  }
  console.log(allCategory);

  useEffect(() => {
    handleGetCategory()
  }, [])

  const handleDeleteCategory = async (id) =>{
    // make api call
    await deleteCategory(id)
    // get all category
    handleGetCategory()
  }

  const videoDropped = async (e,categoryId) =>{
    console.log("Inside category",categoryId);
    const videoCardID = e.dataTransfer.getData("cardId")
    // console.log(videoCardID);
    // get details of video to be dropped
    const {data} = await getAVideo(videoCardID)
    console.log(data);
    // get details category
    const selectedCategory = allCategory.find(item=>item?.id===categoryId)
    selectedCategory.allVideos.push(data)
    console.log(selectedCategory);
    await updateCategory(categoryId,selectedCategory)
    handleGetCategory()
  } 

  const dragOver = (e)=>{
    console.log("Dragging Over");
    e.preventDefault()
  }

  return (
    <>
      <div className='d-grid'>
        <button onClick={handleShow} className='btn btn-info'>Add New Category</button>
      </div>
      {
        allCategory.length>0?allCategory?.map(item=>(
          <div className='border p-3 rounded mt-3 mb-3 ' droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDropped(e,item?.id)}>

            <div className='d-flex justify-content-between align-items-center'>
              <h6>{item?.categoryName}</h6>
              <button className='btn' onClick={()=>handleDeleteCategory(item.id)}><i className='fa-solid fa-trash text-danger'></i></button>
            </div>
            {
              item?.allVideos &&
              <Row>
                {item?.allVideos.map(card=>(
                  <Col sm={12}>
                    <VideoCard displayData={card} insideCategory={true}/>
                  </Col>
                ))}
              </Row>
              
            }
          </div>
        )) : <p className='fw-bolder mt-3 fs-5 text-danger'>Nothing to display</p>

      }
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the following details!!! </p>
          <Form className='border border-secondary p-3 rounded'>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Enter Category Name</Form.Label>
              <Form.Control onChange={(e) => setCategoryName(e.target.value)} type="text" placeholder="Enter Category Name" />
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAddCategory}>Add</Button>
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

export default Category