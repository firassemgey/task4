import './SectionV.css'
import img1 from '../../assets/V2.png'
import { FaPlay } from "react-icons/fa";

export default function video() {
  return (
    <>
    <div className="video section video-F">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 offset-lg-4">
          <div className="section-heading text-center">
            <h6>| Video View</h6>
            <h2>Get Closer View &amp; Different Feeling</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="video-content">
    <div className="container">
      <div className="row">
        <div className="col-lg-10 offset-lg-1">
          <div className="video-frame">
            <img src={img1} alt=""/>
            <a href="https://youtube.com" target="_blank"><i><FaPlay /></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>
  )
}
