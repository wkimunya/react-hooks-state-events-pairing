import React from 'react';
import Comment from './Comment';

function CommentList({ comments }) {
  return (
    <div className="comment-list">
      <h2>Comments</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <Comment comment={comment} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CommentList;
