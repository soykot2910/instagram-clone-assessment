import React, { useState } from "react";
import StorySlider from "./StorySlider";
import {stories} from '../utils/stories'

const NewsFeed = () => {
    const [allPost,setAllPost]=useState(stories)
  return (
    <>
      <div className="stories">
        <StorySlider />
      </div>
      <div className='posts'>
          {/* {allPost &&
            allPost.map((post, i) => (
              <h2>hi</h2>
            ))} */}
        </div>
    </>
  );
};

export default NewsFeed;
