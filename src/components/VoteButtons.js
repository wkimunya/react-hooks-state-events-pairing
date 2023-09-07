import React from 'react';

function VoteButtons({ upvotes, downvotes, onUpvote, onDownvote }) {
  return (
    <div className="vote-buttons">
      <button className="upvote-button" onClick={onUpvote}>
        👍 Upvote ({upvotes})
      </button>
      <button className="downvote-button" onClick={onDownvote}>
        👎 Downvote ({downvotes})
      </button>
    </div>
  );
}

export default VoteButtons;
