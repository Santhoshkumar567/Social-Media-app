import React from "react";
import Feed from "./Feed";
const Home = ({posts}) => {
  return (
    <div className="flex-grow z-0">
      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-24">
        {posts.length?(
          <Feed posts={posts} /> 
        ) : (
          
          <div className=" card bg-white w-11/12 h-36 mx-auto " >
            <div className="card-body">
              <p className="text-center my-5 text-3xl font-semibold text-orange-400"> No posts to display</p> 
            </div>
          
           
          </div>
        )}
      </main>
      </div>
    
  );
};

export default Home;
