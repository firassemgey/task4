import './Items.css'
import img1 from '../../assets/VP1.png'
import img2 from '../../assets/VP2.png'
import img3 from '../../assets/VP3.png'
import img4 from '../../assets/VP4.png'
import img5 from '../../assets/VP6.png'
import img6 from '../../assets/VP5.png'

export default function Items() {

  const Villa=[
    {
      title:"Luxury Villa",
      img:img1,
      price:"$1.180.000",
      location:"18 New Street Miami, OR 97219",
      Bedrooms: 8,
      Bathrooms:8,
      Area:"545m2",
      Floor: 3,
      Parking: "6 spots",
    },
  {
    title:"Luxury Villa",
    img:img2,
    price:"$1.180.000",
    location:"54 Mid Street Florida, OR 27001",
    Bedrooms: 6,
    Bathrooms:5,
    Area:"450m2",
    Floor: 3,
    Parking: "8 spots",
  },
  {
    title:"Luxury Villa",
    img:img3,
    price:"$1.460.000",
    location:"26 Old Street Miami, OR 38540",
    Bedrooms: 5,
    Bathrooms:4,
    Area:"225m2",
    Floor: 3,
    Parking: "10 spots",
  },
  {
    title:"Apartment",
    img:img4,
    price:"$584.500",
    location:"12 New Street Miami, OR 12650",
    Bedrooms: 4,
    Bathrooms:3,
    Area:"125m2",
    Floor: "25th",
    Parking: "2 car",
  },
  {
    title:"Penthouse",
    img:img5,
    price:"$925.600",
    location:"12 New Street Miami, OR 12650",
    Bedrooms: 4,
    Bathrooms:3,
    Area:"125m2",
    Floor: "25th",
    Parking: "2 car",
  },
  {
    title:"Modern Condo",
    img:img6,
    price:"$450.000",
    location:"22 New Street Portland, OR 16540",
    Bedrooms: 3,
    Bathrooms:2,
    Area:"165m2",
    Floor: "26th",
    Parking: "3 car",
  }
  ];

  return (
    <>
  
    {Villa.map((element =>{
      return(
        <div className="col-lg-4 col-md-6">
          <div className="item">
            <a href="property-details.html"><img src={element.img} alt="" /></a>
            <span className="category">{element.title}</span>
            <h6>{element.price}</h6>
            <h4><a href="property-details.html">{element.location}</a></h4>
            <ul>
              <li>Bedrooms: <span>{element.Bedrooms}</span></li>
              <li>Bathrooms: <span>{element.Bathrooms}</span></li>
              <li>Area: <span>{element.Area}</span></li>
              <li>Floor: <span>{element.Floor}</span></li>
              <li>Parking: <span>{element.Parking}</span></li>
            </ul>
            <div className="main-button">
              <a href="property-details.html">Schedule a visit</a>
            </div>
          </div>
        </div>
      )
    }))}
      </>

  )
}
