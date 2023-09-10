import React from 'react'
import HomeQuestion from "../HomeQuestion/HomeQuestion"
import '../../App.css'
import LeftSidebar from "../LeftSidebar/LeftSidebar"

const Questions = () => {
  return (
    <div className='home-container-1'>
      <LeftSidebar />
        <div className='home-container-2'>
        <HomeQuestion />
      </div>
    </div>
  )
}

export default Questions