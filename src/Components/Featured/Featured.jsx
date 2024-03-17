import './Featured.css'
import img1 from '../../assets/F1.png'
import img2 from '../../assets/F2.png'
import img3 from '../../assets/F3.png'
import img4 from '../../assets/F4.png'
import img5 from '../../assets/F5.png'
import img6 from '../../assets/F6.png'

export default function Featured() {
  return (
    <div className='Featured'> 
    <div className='FF-container'>
        <div className='row1'>
            <div className='img-s'>
                <img className='F1' src={img1} alt="" />
                <a ><img src={img6} alt="" /></a>
                </div>
        </div>
        <div className='row2'>
        <div className="section-heading">
            <h6>| Featured</h6>
            <h2>Best Appartment &amp; Sea view</h2>
          </div>
          <div className="accordion accordion-F" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Best useful links ?
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                Get <strong>the best villa</strong> website template in HTML CSS and Bootstrap for your business. TemplateMo provides you the <a href="https://www.google.com/search?q=best+free+css+templates" target="_blank">best free CSS templates</a> in the world. Please tell your friends about it.</div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  How does this work ?
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  Dolor <strong>almesit amet</strong>, consectetur adipiscing elit, sed doesn't eiusmod tempor incididunt ut labore consectetur <code>adipiscing</code> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Why is Villa Agency the best ?
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  Dolor <strong>almesit amet</strong>, consectetur adipiscing elit, sed doesn't eiusmod tempor incididunt ut labore consectetur <code>adipiscing</code> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row3'>
            <div className="info-table">
            <ul>
              <li>
                <img src={img2} alt=""/>
                <h4>250 m2<br/><span>Total Flat Space</span></h4>
              </li>
              <li>
                <img src={img3} alt=""/>
                <h4>Contract<br/><span>Contract Ready</span></h4>
              </li>
              <li>
                <img src={img4} alt=""/>
                <h4>Payment<br/><span>Payment Process</span></h4>
              </li>
              <li>
                <img src={img5} alt=""/>
                <h4>Safety<br/><span>24/7 Under Control</span></h4>
              </li>
            </ul>
            </div>

        </div>
    </div>
    </div>
  )
}
