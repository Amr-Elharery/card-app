import './Profile.css';

function Profile({img, percent, name}) {
  const completed = percent === '100%'? 'completed':null;
  return (
    <div className="profile">
      <div className="details">
        <div className="personal">
          <img src={img} alt="profile" />
          <h4>{name}</h4>
        </div>
        <div className={`percent ${completed}`}>{percent}</div>
    </div>
    <div className="progress">
      <span style={{width: percent}}></span>
    </div>
  </div>
  )
}

export default Profile;