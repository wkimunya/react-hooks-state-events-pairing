import React from 'react';
import VoteButtons from './VoteButtons';

function VideoPlayer({ videoData, upvotes, downvotes, onUpvote, onDownvote }) {
  return (
    <div className="video-player">
      <iframe
        width="919"
        height="525"
        src={videoData.videoUrl}
        frameBorder="0"
        allowFullScreen
        title={videoData.title}
      />
      <h2>{videoData.title}</h2>
      <p>{videoData.views} views</p>
      <VoteButtons
        upvotes={upvotes}
        downvotes={downvotes}
        onUpvote={onUpvote}
        onDownvote={onDownvote}
      />
    </div>
  );
}

export default VideoPlayer;
