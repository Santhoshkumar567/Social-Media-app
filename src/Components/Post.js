import React from 'react'
import { Link } from 'react-router-dom'

const Post = ({post}) => {
 
  return (
    <div className='flex-grow'>
      <Link to={`post/${post.id}`}>
    <div className=' mx-auto card w-96   bg-primary text-primary-content  mb-5 mt-3 md:ms-5 sm:w-72 md:w-11/12 text-left hover:scale-105 duration-200'>
      <div className='card-body'>
        
      <h4 className='uppercase text-center card-title text-black justify-center'>{post.title}</h4>
      
      <p className='text-xs text-center '>{post.datetime}</p>
      
      <p className='text-2xl text-center '>{(post.body).length <=25 ? post.body : `${(post.body).slice(0,25)}...`}</p>
      
      </div>
      
    </div>
    </Link>
    </div>
  )
}

export default Post