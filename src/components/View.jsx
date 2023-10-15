import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllVideos } from '../services/allAPI'

function View({uploadVideoServerResponse}) {

  const [allVideos, setAllVIdeos] = useState([])
  const [deleteVideoStatus,setDeleteVideoStatus]=useState(false)
  const getAllUploadedVideos = async () => {
    // make api call
    const { data } = await getAllVideos()
    setAllVIdeos(data)
  }

  useEffect(() => {
    setDeleteVideoStatus(false)
    getAllUploadedVideos()
  }, [uploadVideoServerResponse,deleteVideoStatus])
  // console.log(allVideos);
  return (
    <Row>
      {allVideos.length > 0 ?
        allVideos.map(video => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <VideoCard displayData = {video} setDeleteVideoStatus={setDeleteVideoStatus}/>
            
          </Col>
        ))
        : <p className='fw-bolder mt-3 fs-5 text-danger'>Nothing to display</p>
      }
    </Row>
  )
}
 
export default View