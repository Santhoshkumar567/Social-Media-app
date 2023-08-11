import React from "react";

const NewPost = ({
  handleSubmit,
  postTitle,
  setPostTitle,
  postBody,
  setPostBody,
}) => {
  return (
    <div className="flex-grow">
    <div className="card bg-black  w-full md:w-8/12 md:mx-auto mt-24 ">
      <div className="card-body text-center">
        <h2 className="card-title justify-center text-2xl font-bold">NEW POST</h2>
        <form className="form" onSubmit={handleSubmit}>
          <div className="mx-auto">
          <input
            id="postTitle"
            type="text"
            className="input input-bordered  input-primary my-4  w-6/12"
            value={postTitle}
            onChange={(e)=>setPostTitle(e.target.value)}
            placeholder="Enter the title"
            required
          />
          </div>
          <div >
          <textarea
           className="textarea textarea-info w-6/12 "
           id="postBody"
           value={postBody}
           onChange={(e)=>setPostBody(e.target.value)}
           required
           placeholder="enter the caption"></textarea>
            </div>
            <div className="card-actions justify-center">
           <button className="btn btn-accent w-6/12 mt-2" type="submit">
              submit
           </button>
           </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default NewPost;
