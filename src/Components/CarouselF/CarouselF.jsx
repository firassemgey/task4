import img1 from '../../assets/1.jpg';
import img2 from '../../assets/2.jpg';
import img3 from '../../assets/3.jpg';
import './CarouselF.css';

export default function CarouselF() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={img1} className="d-block w-100" alt="..."/>
      <div className="carousel-caption-F d-none d-md-block">
        <div className='caption-Fs'>
        <span className="category-F">Toronto, <em>Canada</em></span>
       <h2>Hurry!<br/>Get the Best Villa for you</h2>
        </div>

      </div>
    </div>
    <div className="carousel-item">
      <img src={img2} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={img3} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}
