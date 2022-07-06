import React from 'react'
import {Navigate, useNavigate} from 'react-router-dom'
function Post() {
    const status = 40
    const navigate = useNavigate()
    if(status ===404)
    {
        return <Navigate to='notfound'/>
    }
    const onclick = () =>{
        navigate('/')
    }
  return (
    <>
    <div>Post</div>
    <button onClick={onclick}>click</button>
    </>
  )
}

export default Post