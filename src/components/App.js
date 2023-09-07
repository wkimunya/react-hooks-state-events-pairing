import React, { useState } from 'react';
import videoData from "../data/video.js";
import VideoPlayer from "./VideoPlayer";
import CommentList from './CommentList.js';
import ToggleCommentsButton from "./ToggleCommentsButton";

function App() {
  const [upvotes, setUpvotes] = useState(videoData.upvotes);
  const [downvotes, setDownvotes] = useState(videoData.downvotes);
  const [showComments, setShowComments] = useState(true);

  const handleUpvote = () => {
    setUpvotes(upvotes + 1);
  };

  const handleDownvote = () => {
    setDownvotes(downvotes + 1);
  };

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  return (
    <div className="App">
      <VideoPlayer
        videoData={videoData}
        upvotes={upvotes}
        downvotes={downvotes}
        onUpvote={handleUpvote}
        onDownvote={handleDownvote}
      />

      <ToggleCommentsButton
        showComments={showComments}
        toggleComments={toggleComments}
      />

      {showComments && <CommentList comments={videoData.comments} />}
    </div>
  );
}

export default App;

