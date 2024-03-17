import './NavBar.css'
import { FaCalendar } from "react-icons/fa";
import { RiMenu2Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

export default function Navbar() {
  function myFunction() {
    var x = document.getElementById("myTopnav");

    if (x.className === "navLinks") {
      x.className += " responsive";
    } else {
      x.className = "navLinks";
    }
    var y = document.getElementById("M-btn").innerText='x';
    console.log(y);
  }
  return (
    <div  id="navbar" className='fs-NavBar'>
        <div className="FN_container">
            <a className='Logo' href='#'><h1 className='Title'>Villa</h1></a>
            <ul className='navLinks' id='myTopnav'>
                <li><a href="#">Home</a></li>
                <li><a href="">Properties</a></li>
                <li><a href="">Property Details</a></li>
                <li><a href="">Contact Us</a></li>
                <li><a href=""><i><FaCalendar /></i>Schedule a visit</a></li>
            </ul>
            <a href='#'id='M-btn' className='M-btn' onClick={myFunction}><RiMenu2Line /></a>
            
 
        </div>
     
        
        
        
    </div>
  )
}
