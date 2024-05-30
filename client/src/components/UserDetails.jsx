import React, {useEffect, useState} from 'react';
import {useLoaderData, useNavigate} from 'react-router-dom';
import img from '../assets/image14.png';
import toast from 'react-hot-toast';

const UserDetails = () => {
  const navigate = useNavigate();
  const data = useLoaderData();

  const deleteHandle = async () => {
    const cnf = confirm('Are you sure you want to delete your account');
    const email = data.email;
    if (cnf) {
      const res = await fetch(`https://super-app-1.onrender.com/api/delete`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email}),
      });
      const data = await res.json();
      if (res.ok) {
        toast.success(data);
        localStorage.removeItem('isLogin');
        navigate('/');
      } else {
        toast.error(data);
      }
    }
  };
  const logoutHandle = () => {
    const cnf = confirm('Are you sure you want to log Out');
    console.log(cnf);
    if (cnf) {
      localStorage.removeItem('isLogin');
      navigate('/');
    }
  };
  return (
    <>
      <div className=' bg-black text-white h-screen p-20'>
        <div className='  bg-[#5746EA] p-10 flex rounded-2xl relative '>
          <button onClick={() => navigate(-1)} className='absolute top-[2%] bg-[#9F94FF] p-1 rounded-2xl duration-200 active:scale-95  right-[89%]'>
            <span className=' text-black px-1 '>
              <lord-icon src='https://cdn.lordicon.com/alinocam.json' trigger='hover' colors='primary:black' style={{width: '20px', height: '20px', backgroundColor: 'transparent', translate: '0px 4px'}}></lord-icon>
              Back
            </span>
          </button>
          <img className='w-[20%] pt-5' src={img} alt='UserImg' />
          <div className=' flex flex-col gap-6 py-4 px-8 '>
            <span className=' text-5xl font-bold super-text'>{data.name}</span>
            <span className=' text-xl font-bold font-DM'>Email: {data.email}</span>
            <span className=' text-xl font-bold font-DM'>Password: {data.password}</span>

            <button onClick={deleteHandle} className=' duration-200 active:scale-95 bg-[#f59090] p-1 text-red-800 rounded-2xl'>
              <span className=' px-1 text-red-600 '>
                <lord-icon src='https://cdn.lordicon.com/wpyrrmcq.json' trigger='hover' colors='primary:red' style={{width: '20px', height: '20px', backgroundColor: 'transparent', translate: '0px 4px'}}></lord-icon>
                Delete Data
              </span>
            </button>
          </div>
          <span onClick={logoutHandle} className='absolute top-[80%] text-black bg-[#9F94FF] cursor-pointer rounded-2xl  right-[8%]'>
            <span className=' px-2 '>
              <lord-icon src='https://cdn.lordicon.com/ysopsmtv.json' trigger='hover' colors='primary:white' style={{width: '30px', height: '30px', backgroundColor: 'transparent', translate: '0px 4px'}}></lord-icon>
            </span>
          </span>
        </div>
      </div>
    </>
  );
};

export default UserDetails;

export const UserDetailsLoader = async () => {
  const res = await fetch(`https://super-app-1.onrender.com/api/getOneUser/${localStorage.getItem('userId')}`);
  const data = await res.json();
  return data.data;
};
