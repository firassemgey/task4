import './FScontact.css'
import img1 from '../../assets/FS1.png'
import img2 from '../../assets/FS2.png'

export default function FScontact() {
  return (
    <div className="contact-content">
    <div className="container">
      <div className="row">
        <div className="col-lg-7">
          <div id="map">
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="item phone">
                <img src={img1} alt="" />
                <h6>010-020-0340<br/><span>Phone Number</span></h6>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="item email">
                <img src={img2} alt="" />
                <h6>info@villa.co<br/><span>Business Email</span></h6>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <form id="contact-form" action="" method="post">
            <div className="row">
              <div className="col-lg-12">
                <fieldset>
                  <label htmlFor="name">Full Name</label>
                  <input type="name" name="name" id="name" placeholder="Your Name..." autoComplete="on" required=""/>
                </fieldset>
              </div>
              <div className="col-lg-12">
                <fieldset>
                  <label htmlFor="email">Email Address</label>
                  <input type="text" name="email" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your E-mail..." required=""/>
                </fieldset>
              </div>
              <div className="col-lg-12">
                <fieldset>
                  <label htmlFor="subject">Subject</label>
                  <input type="subject" name="subject" id="subject" placeholder="Subject..." autoComplete="on"/>
                </fieldset>
              </div>
              <div className="col-lg-12">
                <fieldset>
                  <label htmlFor="message">Message</label>
                  <textarea name="message" id="message" placeholder="Your Message"></textarea>
                </fieldset>
              </div>
              <div className="col-lg-12">
                <fieldset>
                  <button type="submit" id="form-submit" className="orange-button">Send Message</button>
                </fieldset>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}
