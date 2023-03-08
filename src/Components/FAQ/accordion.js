import React from 'react';
import "../../Styles/Programs/accordion.scss";

const Accordion = () => {
    return (
        <ul className="accordion">
            <li>
                <input type="radio" name="accordion" id="first"/>
                <label for="first">What's the payment structure?</label>
                <div className="content">
                    <p>It can be paid in full and also in two installments.It can be paid in full and also in two installments.</p>
                </div>
            </li>
            <li>
                <input type="radio" name="accordion" id="second"/>
                <label for="second">Are the courses virtual or physical?</label>
                <div className="content">
                    <p>We have physical classes’ arrangement for now.</p>
                </div>
            </li>
            <li>
                <input type="radio" name="accordion" id="third"/>
                <label for="third">What is the duration of their courses?</label>
                <div className="content">
                    <p>Standard of four weeks, extension to six weeks.</p>
                </div>
            </li>
            <li>
                <input type="radio" name="accordion" id="fourth"/>
                <label for="fourth">Is there refund policy?</label>
                <div className="content">
                    <p>No, we do not execute refund of payment made, however, you can unsubscribe anytime.</p>
                </div>
            </li>
            <li>
                <input type="radio" name="accordion" id="fifth"/>
                <label for="fifth">What are the holidays observed?</label>
                <div className="content">
                    <p>No holidays. Classes are held three times weekly, Mondays, Thursdays and Fridays.</p>
                </div>
            </li>
        </ul>
    )
};

export default Accordion;