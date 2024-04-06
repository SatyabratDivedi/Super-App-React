import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import movies from './movieGenres';

const Dashboard = () => {
  const [selectedMovie, setSelectedMovie] = useState([]);
  const navigate = useNavigate()


  const boxClickHandle = (id) => {
    const recieveData = movies.filter((item) => item.id === id)
    const existDataIndex = selectedMovie.findIndex((item) => item == recieveData[0].name)
    console.log(existDataIndex)
    if (existDataIndex === -1) {
      selectedMovie.length < 6 && setSelectedMovie((prev) => [...prev, recieveData[0].name])
    }
  }

  const removeHandler = (name) => {
    setSelectedMovie(selectedMovie.filter((item) => item !== name))
  }

  return (
    <>
      <div className=' flex p-24'>
        <div className=" flex flex-col gap-5 text-start w-[40vw]">
          <div className='  super-text'>Super App</div>
          <div className=' font-roboto text-[30px] w-52 font-bold '>Choose your entertainment category</div>
          <div className=' grid grid-cols-2 w-[50%]  '>

            {
              selectedMovie.map((item, i) => (
                <div key={i} className=' my-1 flex max-w-[90%] items-center px-2 justify-between bg-[#148A08] rounded-full '>{item}
                  <lord-icon
                    onClick={() => removeHandler(item)}
                    src="https://cdn.lordicon.com/nqtddedc.json"
                    trigger="hover"
                    colors="primary:#ffffff"
                    style={{ 'width': '20px', 'backgroundColor': 'transparent', cursor: 'pointer' }}>
                  </lord-icon>
                </div>
              ))
            }
          </div>
          <div className='  text-red-500'>Min-3 and max-6 category required</div>
          {selectedMovie.length >= 3 && <button  onClick={() => navigate('/user_dashboard')} className=' bg-[#148A08] rounded-lg flex items-center justify-center w-[15%] translate-x-80  '>Next
          <span className=' px-2 bg-transparent translate-y-1'>
          <lord-icon
              src="https://cdn.lordicon.com/vduvxizq.json"
              trigger="hover"
              colors="primary:#ffffff"
              style={{width:'20px', height:'20px', backgroundColor: 'transparent'}}>
                
          </lord-icon>
          </span>
          </button>}
        </div>
        <div className=" flex gap-4 flex-wrap w-[40vw]">
          {
            movies.map((movie) => {
              return (
                <div onClick={() => boxClickHandle(movie.id)} key={movie.id} style={{ backgroundColor: movie.bgCol }} className={`cursor-pointer active:border-2  w-[130px] h-[130px] rounded-xl p-3 flex flex-col`}>
                  <div className=' bg-transparent'>
                    <span className=' bg-transparent font-DM'>{movie.name}</span>
                    <div className=' translate-y-5 rounded-lg '> <img className=' rounded-lg' src={movie.image} alt={movie.name} /></div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>

    </>
  )
}

export default Dashboard;