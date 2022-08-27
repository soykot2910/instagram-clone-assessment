import React, { useState } from "react";
import StorySlider from "./StorySlider";
import { stories } from "../utils/stories";
import Post from "./Post";

const NewsFeed = () => {
  const [allPost, setAllPost] = useState(stories);

  const postAction = (post, type, action) => {
    const allNewPost = allPost.map((p) => {
      if (p.id == post.id) {
        if (type == "save") {
          p.user_has_saved = action;
        } else if (type == "like") {
          p.user_has_liked = action;
        } else {
          p.comments.push(action);
        }
      }
      return p;
    });
    setAllPost(allNewPost);
  };

  return (
    <>
      <div className="stories">
        <StorySlider />
      </div>
      <div className="posts">
        {allPost &&
          allPost.map((post, i) => (
            <Post post={post} key={i} postAction={postAction} />
          ))}
      </div>
    </>
  );
};

export default NewsFeed;
