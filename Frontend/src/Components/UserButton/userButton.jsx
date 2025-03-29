import React from 'react'
import './userButton.css'
import { useState } from 'react';
import Image from '../Image/image'
import apiRequest from '../../Utility/apiRequest';
import { useNavigate } from 'react-router';
import useAuthStore from '../../Utility/authStore';
import { Link } from 'react-router';

function userButton() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { currentUser, removeCurrentUser } = useAuthStore();

  const handleLogout = async () => {
    try {
      await apiRequest.post("/users/auth/logout",{});
      removeCurrentUser();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  }

  return currentUser ? (
    <div className='userButton'>
      <Image path={currentUser.img || "/general/noAvatar.png"} alt=''/>
      <div onClick={() => setOpen((prev) => !prev)}>
        <Image path='/general/arrow.svg' alt='' className='arrow'/>
      </div>
      {open && (
        <div className="userOptions">
          <Link to={`/${currentUser.userName}`} className="userOption">
            Profile
          </Link>
          <div className="userOption">Setting</div>
          <div className="userOption" onClick={handleLogout}>
            Logout
          </div>
        </div>
      )}
    </div>
  ) : (
    <Link to={'/auth'} className='loginLink'>
      Login/Sign Up
    </Link>
  )

}

export default userButton