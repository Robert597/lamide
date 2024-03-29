import React from 'react';
import {data} from '../../Utils/courses';
import { useParams } from 'react-router-dom';
import {BsFillPatchCheckFill} from "react-icons/bs";
import {IoMdPricetags} from "react-icons/io";
import {RxClock} from "react-icons/rx";
import { FaShare } from 'react-icons/fa';
import "../../Styles/Detail/detail.scss";
import { useNavigate } from 'react-router-dom';

const Detail = () => {
    const navigate = useNavigate();
    let { id } = useParams();
    const [current, setCurrent] = React.useState({});
    const [loading, setLoading] = React.useState(true);

React.useEffect(() => {
    data.map((course) => {
    if(course?.id === parseInt(id)){
        setCurrent(course);
    }
    setLoading(false);
 })


}, [id])


  return (
    <div className="programDetail">
        {loading ? <div>Loading...</div> :

        <div className="programDetailContent">
        <h1>{current?.title}</h1>

        <div className="detailImg">
            <img src={current?.image} alt="course graphic"/>
        </div>

    <div className="detailbody">
        <div className="detailContent">
            <h4>Course Overview</h4>

            <p>{current?.detail}</p>

            {
             current?.body &&   current?.body.map((info) => (
                    <p>{info}</p>
                ))
            }
            {
                current?.bodyCont && (
                    <>
                <p><b>{current?.bodyCont?.head}</b></p>
            {
                current?.bodyCont?.outline?.map((info) => (
                    <p>{info}</p>
                ))
            }
            </>
                )
        }
     <h3 className='subtitle'>{current?.career?.title}</h3>
     <p>{current?.career?.detail}</p>
            

            <ul>
                {current?.career && current?.career?.list?.map((list) => (
                    <li>{list}</li>
                ))}
            </ul>

            

            <h3><b>{current?.sub?.title}</b></h3>
            <ul>
                {current?.sub && current?.sub?.benefit.map((list) => (
                    <li>{list}</li>
                ))}
            </ul>
            
            <h3>{current?.sub?.footerHeader}</h3>
            <p>{current?.sub?.footer}</p>
            <p>{current?.prerequisites}</p>
            <h2>Take the bold step and enroll now</h2>
            <h2>Click the link below or fill the form to register.</h2>
            <button onClick={() => {
                navigate(`/register`)
            }}>Register Now</button>
        </div>

        <div className="detailPrice">
                    <ul>
                        <li> <span><BsFillPatchCheckFill/> NHCPS approved</span></li>
                        <li> <span><RxClock/>  Duration</span> <span className='end'>4 - 12 weeks</span></li>
                        <li>Application Fee <span className='end'>N10,000</span></li>
                        <li>CV support<span className='end'>N7,000</span></li>
                        <li>Testimonial<span className='end'>N10,000</span></li>
                        <li><IoMdPricetags/> <span className='end'>{current?.price}</span></li>
                    </ul>
                    <button>ENROLL NOW</button>
                    <p>Share this Course <FaShare className="shareIcon"/></p>
        </div>
    </div>

        </div>
  }
    </div>
  )
}

export default Detail