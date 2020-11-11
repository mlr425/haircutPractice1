import React from 'react'
import RowItem from './RowItem'
import '../css/rowarea.css'
import OperationTime from './OperationTime'

export default function RowArea() {
    return (
        <div className="cards">
            <h1>Testimonials</h1>
            <div className="cards--container">
                <div className="cards--wrapper">
                    <ul className="cards--items">
                        <RowItem
                            src="images/hair1.jpg"
                            text="I have been going to Josie for almost 20 years, and I'm not an easy girl to please, especially when it comes to hair (pixie perfectionist). Seriously, I think I worked my way up and down Oak Street looking for the right one Josie is extremely talented; I adore her! ... In fact, I moved out of Chicago for a few years but continued to drive more than 3 hours, every four weeks to see her. Diana M. is another super talented gem who I've been seeing for years for color--amazing colorist. Love, love, love Maxine's staff, too! Fabulous place; can't say enough good things."
                            label="Men's Haircut"
                            path='/ContactUs'
                        />
                        <RowItem
                            src="images/hair2.jpg"
                            text="Lauren is a master for color! She has an amazing way of balancing your desired look with keeping the health of your hair in focus. If you are seeking a killer blowout, make sure to see Leigh Hardges! Best styling I have ever had and such a pleasure to talk to."
                            label="Men's Haircut"
                            path='/ContactUs'
                        />  
                    </ul>

                    <ul className="cards--items">
                        <RowItem
                            src="images/hair3.jpg"
                            text="Marshall has been coloring my hair for a couple of years now. I get all-over color with a gloss. He does a great job and is very pleasant. I cheated on him a couple of times to save money, but I regretted it both times. He was very sweet about it when I came back. I'm very picky about my hair and usually go to the most expensive salon in town just to be safe, and Marshall doesn't disappoint."
                            label="Woman's Haircut"
                            path='/ContactUs'
                        /> 
                        <RowItem
                            src="images/hair4.jpg"
                            text="I have to admit, I'm a tough customer. Went and saw a stylist and Stacy and couldn't be happier. Thanks for the best cut and color I've had since getting it done in Manhattan"
                            label="Woman's Haircut"
                            path='/ContactUs'
                        /> 
                        <RowItem
                            src="images/hair5.jpg"
                            text="Receptionists were welcoming as usual. Amy is awesome, she is sweet and pay are thin to what customer says and also holds a good conversation with her customer"
                            label="Woman's Haircut"
                            path='/ContactUs'
                        /> 
                    </ul>
                </div>
            </div>
            <OperationTime></OperationTime>
        </div>
        
    )
}
