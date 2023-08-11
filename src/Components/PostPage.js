import React from 'react'
import {useParams, Link}  from 'react-router-dom';

const PostPage = ({posts, handleDelete}) => {
  const {id} =useParams();
  const post =posts.find(post =>(post.id).toString() === id);
  return (
    <main className='flex-grow'>
      <article className="mt-24">
        {post &&
        <div className='card bg-gray-100 w-10/12 mx-auto p-3'>
          <div className='card-body text-center'>
          <h2 className='card-title justify-center text-gray-950 uppercase'>{post.title}</h2>
          <p className="">{post.datetime}</p>
          <p className="">{post.body}</p>
          <div className=' card-actions justify-center'>
          <Link to={`/edit/${post.id}`}>
          <button className="btn btn-secondary mt-2 ">
          Edit Post
          </button></Link>
          <button className="btn btn-secondary mt-2 " onClick={()=>handleDelete(post.id)}>Delete</button>
          </div>
          </div>
        </div>
        }
        {
          ! post &&
          <>
            <h2>Post Not Found</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, natus nesciunt? Iure reiciendis natus fugit repudiandae, exercitationem adipisci laboriosam eius necessitatibus incidunt illum nostrum eos officia inventore soluta pariatur molestiae. Ab vero itaque, consequatur autem reprehenderit sit ad corporis illo incidunt, provident numquam maxime, expedita magni assumenda in dolorum commodi?</p>
            <p>
              <Link to="/" >Vist our Home Page</Link>
            </p>
          </>
        }
      </article>

    </main>
  )
}

export default PostPage