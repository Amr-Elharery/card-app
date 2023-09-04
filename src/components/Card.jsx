import Image from '../assets/images/Time_out_fight 1.png';
import Logo from '../assets/images/rglogo22-full-color 1.png';
import Star from '../assets/images/Star 1.png';
import {FaLocationDot} from 'react-icons/fa6';
import {AiOutlineClockCircle} from 'react-icons/ai';

import './Card.css';

function Card() {
  return (
    <div className="card">
        
        {/* Image Div*/}
        <div className="image">
            {/* Logo */}
            <div className="logo">
            <img src={Logo} alt="logo"/>
            </div>
            {/* Image */}
            <img src={Image} alt="AI" />

            {/* Rate */}
            <div className="rate">
                <img src={Star} alt="star" />
                <p>4.2</p>
            </div>
        </div>

        {/* Details */}
        <div className="details">
            <div className="status">
                <p>Online</p>
                <p>Anytime</p>
            </div>

            <div className="time">
                <p>
                    <AiOutlineClockCircle className='clock' />
                    45m
                    </p>
                <p>Coding <span className='date'>7-12</span></p>
            </div>

            <div className="text">
                <h3>Artificial Intelligence (AI) level II</h3>
                <p>
                Recognize the logic of software programs and develop an algorithm to execute functionality.
                </p>
            </div>
        {/* Location */}
        <div className="location">
            <div className="icon">
                <FaLocationDot style={{
                    color:"#60ABD6",
                    fontSize:18,
                }}/>
            </div>

            <div className="price">
                CA$ <span className='bold'>25</span>
            </div>
        </div>
            
        </div>
    </div>
  )
}

export default Card;