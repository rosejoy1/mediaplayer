import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='d-flex justify-content-center align-items-center flex-column' style={{width:'100%',height:'300px'}}>
      <div className='footer-content d-flex justify-content-evenly w-100 flex-wrap'>
        <div className='website d-flex flex-column'>
        <h4><i className="fa-solid fa-cloud-arrow-up" style={{color: '#ffffff'}}></i>{' '}Media Player</h4>
<h6>
    Designed and built with all the love in the world by the Media team with the help of our contributors.</h6>
    <h6>Code licensed Media, docs CC BY 3.0.</h6>
<h6>Currently v1.0.0.</h6>
        </div>
        <div className='links d-flex flex-column'>
            <h4>Links</h4>
            <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Landing Page</Link>
            <Link to={'/home'} style={{textDecoration:'none',color:'white'}}>Home</Link>
            <Link to={'/watch-history'} style={{textDecoration:'none',color:'white'}}>Watch History</Link>
        </div>
        <div className='guides d-flex flex-column'>
        <h4>Guides</h4>
            <Link to={'https://react.dev/'} style={{textDecoration:'none',color:'white'}}>React</Link>
            <Link to={'https://react-bootstrap.github.io/'} style={{textDecoration:'none',color:'white'}}>React Bootstrap</Link>
            <Link to={'https://reactrouter.com/en/main'} style={{textDecoration:'none',color:'white'}}>Routing</Link>
        </div>
        <div className='contact d-flex flex-column'>
            <h4>Contact Us</h4>
            <div>

            </div>
            <div>
            <Link to={'/'} className='mx-2' style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-linkedin" style={{color: '#ffffff'}}></i></Link>
            <Link to={'/'} className='mx-3' style={{textDecoration:'none',color:'white'}}>
            <i class="fa-brands fa-twitter" style={{textDecoration:'none',color:'white'}}></i></Link>
            <Link to={'/'} className='mx-3' style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-facebook-f" style={{textDecoration:'none',color:'white'}}></i></Link>
            <Link to={'/'} className='mx-2' style={{textDecoration:'none',color:'white'}}><i class="fa-regular fa-envelope" style={{textDecoration:'none',color:'white'}}></i></Link>
            
            </div>
        </div>

      </div>
      <p className='mt-5'>Copyright © 2023 Media Player. Built with React.</p>
    </div>
  )
}

export default Footer
