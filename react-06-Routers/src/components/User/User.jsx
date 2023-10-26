import React from 'react'
import { useParams } from 'react-router-dom'


export const User = () => {
    const {userid} =useParams()
  return (
    <div className=' bg-green-400 text-white text-3xl p-3'>User : {userid}</div>
  )
}
