import React from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const EditPost = ({posts,handleEdit,editBody,setEditBody,editTitle,setEditTitle}) => {
  const {id} =useParams();
  
  const post =posts.find(post => (post.id).toString() === id);
 
  useEffect(() =>{
    if(post){
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  },[post,setEditTitle,setEditBody])
  return (
    <main className='flex-grow'>
    
       <div className="card-body text-center" >
        <h2 className="card-title justify-center text-2xl font-bold">Edit POST</h2>
        <form className="form" onSubmit={(e)=>e.preventDefault()}>
          <div>
          <input
            id="postTitle"
            type="text"
            className="input input-bordered input-primary my-4 w-6/12"
            value={editTitle}
            onChange={(e)=>setEditTitle(e.target.value)}
            placeholder="Enter the title"
            required
          />
          </div>
          <div>
          <textarea
           className="textarea textarea-info w-6/12"
           id="postBody"
           value={editBody}
           onChange={(e)=>setEditBody(e.target.value)}
           required
           placeholder="enter the caption"></textarea>
            </div>
            <div className="card-actions justify-center">
           <button className="btn btn-accent w-6/12 mt-2" type="submit" onClick={()=>handleEdit(post.id)}>
              submit
           </button>
           </div>
        </form>
      </div>
      
      {

      }
    </main>
    
  )
}

export default EditPost