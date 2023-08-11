import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const PostLayout = () => {
  return (
    <>
    <li><Link to="/postpage/1">Post1</Link></li>
    <li><Link to="/postpage/2">Post2</Link></li>
    <li><Link to="/postpage/3">Post3</Link></li>
    <li><Link to="/postpage/newpost">New Post</Link></li>
    <Outlet />
    </>
  )
}

export default PostLayout