import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { PostList } from "../store/post-list-store";

const Post = ({ post }) => {
  
  const contextValue = useContext(PostList);
  if (!contextValue) {

    return null;
  }

  const { deletePost } = contextValue;

  const randomimg = `https://picsum.photos/150/170?random=${post.id *100}`;

  return (
    <>
      <div className="card post-card">
        <img src={randomimg} className="card-img-top img-fluid img-thumbnail border" alt="Random_images" />
        <div className="card-body">
          <h5 className="card-title">
            {post.title}
            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              onClick={() => deletePost(post.id)}
              title="Delete Post"
              role="button"
            >
              <AiFillDelete />
            </span>
          </h5>
          <p className="card-text">{post.body}</p>

          {post.tags.map((tag) => (
            <span className="badge text-bg-primary me-2 p-2 mt-2" key={tag}>
              {tag}
            </span>
          ))}
          <div className="alert alert-success reactions" role="alert">
            Liked By {post.reactions.likes} Peoples.
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
