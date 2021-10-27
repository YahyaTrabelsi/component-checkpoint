import React from 'react'
import MyImage from '../../MyImage.jpg'

const ProfilePhoto = () => {
    return (
        <div>
        <img src={MyImage} className="picture" width="280px" alt="" />
        </div>
    )
}

export default ProfilePhoto;
