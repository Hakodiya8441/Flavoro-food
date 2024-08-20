import React, { useEffect, useState } from 'react'
import { HashLoader } from 'react-spinners'

const Success = () => {
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
setLoading(false);
    },3000)
  },[])
  return (
    <>
    <div className='flex flex-col items-center justify-center h-screen'>
      {
        loading ? (<HashLoader color='#36d7b7'/>):<div>
          <h2 className='text-3xl font-semibold mb-4 text-center text-green-500'>Order Successfull!</h2>
          <p className='text-xl text-green-500'>Your order has been successfully placed...🥳</p>
          </div>
      }
      
    </div>
    </>
  )
}

export default Success