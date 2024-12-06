import {  useContext, useRef } from "react";
import  { PostList } from "../store/post-list-store";

const CreatePost = () => {

  const {addPost} = useContext(PostList);

  const userIdElement = useRef();
  const titleElement = useRef();
  const bodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

 const handleSubmit = (e) => {
  e.preventDefault();
  const userId = userIdElement.current.value;
  const title = titleElement.current.value;
  const body = bodyElement.current.value;
  const reactions = reactionsElement.current.value;
  const tags = tagsElement.current.value.split(' ');

  addPost(userId,title,body,reactions,tags);

  userIdElement.current.value = '';
  titleElement.current.value = '';
  bodyElement.current.value = '';
  reactionsElement.current.value = '';
  tagsElement.current.value = '';

 }

  return (
    <>
      <form className="create-post" onSubmit={handleSubmit}>

        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            Enter your user id.
          </label>
          <input
            type="text"
            ref={userIdElement}
            className="form-control"
            id="userIdE"
           placeholder="Your User ID."
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Title
          </label>
          <input
            type="text"
            ref={titleElement}
            className="form-control"
            id="title"
           placeholder="How are you felling today.."
          />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Post Content
          </label>
          <textarea
           rows={5}
            type="text"
            ref={bodyElement}
            className="form-control"
            id="body"
           placeholder="Tell us more about it.. "
          />
        </div>
        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">
            Desire Likes
          </label>
          <input
            type="text"
            ref={reactionsElement}
            className="form-control"
            id="reactions"
           placeholder="How many likes do you want?"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            HashTags
          </label>
          <input
            type="text"
            ref={tagsElement}
            className="form-control"
            id="tags"
           placeholder="Enter 3 or 4 tages separated by space."
          />
        </div>


        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </>
  );
};

export default CreatePost;
