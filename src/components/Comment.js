import React from 'react';

function Comment({ comment }) {
  return (
    <div className="comment">
      <p className="comment-text">{comment.text}</p>
      <p className="comment-user">User: {comment.user}</p>
    </div>
  );
}

export default Comment;
