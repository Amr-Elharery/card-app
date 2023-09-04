import Image from '../assets/images/Time_out_fight 2.png';
import Logo from '../assets/images/rglogo22-full-color 1.png';

import Profile1 from '../assets/images/profile-1.png';
import Profile2 from '../assets/images/profile-2.png';
import Profile3 from '../assets/images/profile-3.png';

import Profile from './Profile';
import './Card2.css';

function Card2() {
  return (
    <div className='card2'>
      <div className="image">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <img src={Image} alt="card2" />
      </div>

      <div className="box">
        <div className="head">
          <p>Dash Mission (Im)possible!</p>
          <div>
          <p>Coding <span>8-16</span></p>
          <p><span>Virtual</span></p>
          </div>
        </div>

        <div className="body">
          <Profile img={Profile1} name={"Sophia"} percent={"25%"} />
          <Profile img={Profile2} name={"Jacob"} percent={"35%"} />
          <Profile img={Profile3} name={"Noah"} percent={"100%"} />
        </div>
      </div>
    </div>
  )
}

export default Card2;