import React from 'react'

const ProctactedRoute = ({ Component }) => {

  return (
    <>
    <br />
      {localStorage.getItem('isLogin') ? <Component /> : 'For access this Dashboard you have to Login First'}
    </>
  )
}

export default ProctactedRoute;