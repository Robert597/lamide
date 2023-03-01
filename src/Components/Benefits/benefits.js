import React from 'react';
import eclipse1 from "../../Assets/Group 16.svg"
import eclipse2 from "../../Assets/Group 17.svg"
import eclipse3 from "../../Assets/Group 18.svg"
import eclipse4 from "../../Assets/Group 19.svg"
import "../../Styles/benefit.scss";

const Benefits = () => {
  return (
    <div className='Benefits'>
        <hr/>
        <h1>Benefits of learning at SFI CARE</h1>

        <div className='benefits'>

            <div className='benefit'>
                <img src={eclipse1} alt="icon"/>
                <h1>Learn From Medical Experts</h1>
                <p>Learn in-demand medical skills from industry experts through physical classes, pre-recorded videos and mentorship.</p>
            </div>

            <div className='benefit'>
                <img src={eclipse2} alt="icon"/>
                <h1>Earn international certificates</h1>
                <p>Valid certificates are awarded on every course completion.</p>
            </div>

            <div className='benefit'>
                <img src={eclipse3} alt="icon"/>
                <h1>Self-paced learning</h1>
                <p>Self-paced courses allow you to complete assignments at your own pace, making it easier to balance coursework with your other personal and professional duties.</p>
            </div>

            <div className='benefit'>
                <img src={eclipse4} alt="icon"/>
                <h1>One-on-One mentorship</h1>
                <p>You can grow your career with a one-on-one mentorship session with our medical experts and professionals</p>
            </div>
        </div>
    </div>
  )
}

export default Benefits