import React from 'react'
import { Row, Col,Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function LandingPage() {
  const navigateByUrl=useNavigate()

  const navigate = ()=>{
    navigateByUrl('/home')
  }
  return (

    <>
      <Row className='mt-5 mb-5 align-items-center justify-content-between'>
        <Col></Col>

        <Col lg={4}>
          <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia perspiciatis nesciunt impedit quidem cum magni dignissimos voluptas dolorum fugit ea ratione, ad accusantium atque, corporis, rerum nulla perferendis reiciendis libero?</p>
          <button onClick={navigate} className='btn btn-primary mt-5 fw-bolder'>Get Started  <i class="fa-solid fa-arrow-right fa-beat ms-2 "></i></button>
        </Col>

        <Col></Col>
        <Col lg={6}>
          {/* <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="Landing" /> */}
          <img src="https://c.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="Landing" />


          {/* https://media1.tenor.com/images/52f493bcc74deeded743cf55f25f0636/tenor.gif?itemid=5934248 */}
        </Col>
      </Row>
      <div className='container mt-5 mb-5 d-flex align-items-center justify-content-between flex-column'>
        <h3>Features</h3>
       <div className='cards mt-5 d-flex justify-content-between align-items-center w-100'>
          <Card className='p-3' style={{ width: '22rem' }}>
            <Card.Img height={'300px'} width={'300px'} variant="top" src="https://i.pinimg.com/originals/53/97/7e/53977ec36a46d13a45ceeb5974b3d117.gif" />
            <Card.Body>
              <Card.Title>Managing Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className='p-3' style={{ width: '22rem' }}>
            <Card.Img height={'300px'} width={'300px'} variant="top" src="https://media.tenor.com/SZ0mKr1WKMsAAAAd/music-wave.gif" />
            <Card.Body>
              <Card.Title>Categorise Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className='p-3' style={{ width: '22rem' }}>
            <Card.Img height={'300px'} width={'300px'} variant="top" src="https://gifdb.com/images/high/simple-audio-sound-wave-awolo4ekfaknri0n.gif" />
            <Card.Body>
              <Card.Title>Watch History</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          
       </div>
      </div>

      <div className='container mt-5 mb-5 d-flex justify-content-between w-100 border p-5 border-secondary rounded align-items-center'>
        <div className="content">
          <h3 className='text-warning mb-5'>Simple,Fast and Powerful</h3>
          <h6><span className='fs-5 fw-bolder text-warning'>Play Everthing</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia perspiciatis nesciunt impedit quidem cum magni dignissimos voluptas dolorum fugit ea ratione, ad accusantium atque, corporis, rerum nulla perferendis reiciendis libero. </h6>

          <h6><span className='fs-5 fw-bolder text-warning'>Catagorise Video</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia perspiciatis nesciunt impedit quidem cum magni dignissimos voluptas dolorum fugit ea ratione, ad accusantium atque, corporis, rerum nulla perferendis reiciendis libero. </h6>

          <h6><span className='fs-5 fw-bolder text-warning'>Managing History</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia perspiciatis nesciunt impedit quidem cum magni dignissimos voluptas dolorum fugit ea ratione, ad accusantium atque, corporis, rerum nulla perferendis reiciendis libero. </h6>
          
        </div>

        <div className="video ms-5">
        <iframe width="935" height="526" src="https://www.youtube.com/embed/7YhKkke9ymU" title="Leo Official Trailer | Horald Das as Rolex | Thalapathy Vijay | Lokesh | Anirudh | Lalith Kumar" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
    </>

  )
}

export default LandingPage