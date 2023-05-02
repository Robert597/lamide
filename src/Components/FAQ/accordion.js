import React from 'react';
import "../../Styles/Programs/accordion.scss";

const Accordion = () => {
    return (
        <ul className="accordion">
            <li>
                <input type="radio" name="accordion" id="firstnew"/>
                <label for="firstnew">What's the purpose of the training?</label>
                <div className="content">
                    <p>Our healthcare training is a certification program introduced for a work abroad package.the training is to help you become internationally certified to work as a healthcare operative in foreign countries like the United States of America, Europe, Canada, Australia, etc. Hence, the purpose to help you work abroad.</p>
                </div>
            </li>
            <li>
                <input type="radio" name="accordion" id="secondnew"/>
                <label for="secondnew">How Long Is The Training?</label>
                <div className="content">
                    <p>The training is scheduled to last between 4-6 weeks.</p>
                </div>
            </li>
            <li>
                <input type="radio" name="accordion" id="thirdnew"/>
                <label for="thirdnew">Time for the training?</label>
                <div className="content">
                    <p>The training takes place every Monday, thursday and friday from 10am - 2pm.</p>
                </div>
            </li>
            <li>
                <input type="radio" name="accordion" id="fourthnew"/>
                <label for="fourthnew">Can i use the certificate to get a job abroad?</label>
                <div className="content">
                    <p>Yes, you sure can.It is the whole essence of the training to make you qualified and internationally certified health worker that can work with any health centre, clinic or hospital in different countries.</p>
                </div>
            </li>
            <li>
                <input type="radio" name="accordion" id="fifthnew"/>
                <label for="fifthnew">Do you help with travelling?</label>
                <div className="content">
                    <p>Yes, we do help with travelling.We have a standby travel consultant who would be attending to all your needs.</p>
                </div>
            </li>
            <li>
                <input type="radio" name="accordion" id="sixhnew"/>
                <label for="sixhnew">Is the Certificate valid in other Countries?</label>
                <div className="content">
                    <p>Our certificates are valid and internationally recognized by 98% of worldwide healthcare organizations including major companies and hospitals. It is issued by an international healthcare provider in the United States; Nation Health Care Provider Solutions(NHCPS)</p>
                </div>
            </li>
            <li>
                <input type="radio" name="accordion" id="seventhnew"/>
                <label for="seventhnew">How long does the entire process take?</label>
                <div className="content">
                    <p>It is envisioned to take about three to six months if all requirements are met.</p>
                </div>
            </li>
            <li>
                <input type="radio" name="accordion" id="lastnew"/>
                <label for="lastnew">How can i reach you?</label>
                <div className="content">
                    <p>You can reach via call or Whatsapp at these numbers; 08112320218, 08135430382</p>
                </div>
            </li>
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