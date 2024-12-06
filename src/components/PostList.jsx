import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state



  

 useEffect(() => {
  setIsLoading(true);
  const controller = new AbortController();
  const signal = controller.signal;

  fetch('https://dummyjson.com/posts', {signal})
  .then((res) => res.json())
  .then((data) => {
    addInitialPosts(data.posts);
    
  })
  .finally(() => {
    setIsLoading(false);
  });

  return () => {
    console.log('Cleaning Up.....!')
    controller.abort();
    
  }

 },[]);
  
   



















  return (
    <>
    {isLoading && <LoadingSpinner />}
      {!isLoading && postList.length === 0 && (
        <>
          {error && <div className="alert alert-danger">{error}</div>}
          <WelcomeMessage  />
          {isLoading && <div>Loading posts please wait...</div>}
        </>
      )}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;
