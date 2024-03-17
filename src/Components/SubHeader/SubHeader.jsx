import './SubHeader.css'
import { GrMail } from "react-icons/gr";
import { FaMap } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


export default function SubHeader() {
  return (
    
    <div className='fs-container'>
        <div className='Header'>
        <div className="first">
            <ul>
            <GrMail />
            <li> info@company.com</li>
            <FaMap />
            <li>Sunny Isles Beach, FL 33160</li>
            </ul>
        </div>
        <div className="second">
            <ul>
                <li><a href='#'><FaFacebook /></a></li>
                <li><a href='#'><FaTwitterSquare /></a></li>
                <li><a href='#'><FaLinkedin /></a></li>
                <li><a href='#'><FaInstagram /></a></li>
            </ul>
            </div>
        </div>

    </div>
  )
}
