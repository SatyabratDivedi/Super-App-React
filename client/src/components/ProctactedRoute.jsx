import React from 'react'
import { Link } from 'react-router-dom';



const ProctactedRoute = ({ Component }) => {

  return (
    <>
      {localStorage.getItem('isLogin') ? <Component /> :
      
      <>
      <div className=' bbooddyy'>
        <div className='bg-transparent  flex justify-center'>
          <Link to={'/'} className='bg-transparent border-b'>👉 Go to Login Page</Link>
        </div>
        <div className=' w-[98%] bg-transparent hhttmmll'></div>
      </div>
      </>
      
      
      }
    </>
  )
}

export default ProctactedRoute;