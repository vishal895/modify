import React,{useState,useEffect} from 'react'
import { useScreen, useWindowSize } from 'usehooks-ts'
import ImageScroll from './ImagesScroll'

import "./navbar.css"


const Navbar = () => {

  const [scrollY,setScrollY] = useState("0")
  const getScreen = () =>{
    setScrollY(window.pageYOffset)
  }

  const whiteClass = scrollY >10 ?  "bg-white" : "bg-light"

  useEffect(() => {
    window.addEventListener('scroll', getScreen);
    return () => {
      window.removeEventListener('scroll', getScreen);
    };
  });

  return (

    <>
    <div className="lg">
      <nav className={`navbar navbar-expand-lg navbar-light ${whiteClass}`}>
        <div className="container">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="nav">
              <li class="nav-item active">
                <a class="nav-link" href="#">products</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">integrations</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">pricing</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">customer</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">resourse</a>
              </li>

            </ul>
            <div className="login d-flex align-items-center">
              <a href="" className="l">login</a>
              <button type="button" class="btn btn-warning">GET STARTED FOR FREE</button>
            </div>
          </div>
        </div>
      </nav>
      </div>

      {/* banner */}
      <section className="banner">
      <div className="container">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-6">
              <h1 className="tittle">Set up Reliable Data Pipelines in Minutes</h1>
              <p className="desc">Hevo is a no-code and highly intuitive data pipeline. It loads data from any source to your warehouse in real-time for faster analytics.</p>
              <input type="password" className="hhv" placeholder="name@company.com"/>   
              <button type="submit" className="btn btn-primary">GET STARTED FOR FREE</button> 
              <br/>
              <div className="watch-link">
                <div className="badge home-intro-video" data-track-click="watch now video" data-track-category="Top Banner">
                  <button className="hevo-play hevo-web-icon mr-1 btnCss">
                  watch now
                </button>
                <div className="link-text d-inline-block">Fastest and easiest way to bring any data into your data warehouse</div>
              </div>
            </div>     
            </div>
          </div>
        </div>
      </div>
      </section>
    </>



  )
}

export default Navbar