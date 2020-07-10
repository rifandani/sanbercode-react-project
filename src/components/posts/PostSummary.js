import React from 'react';
import { Link } from 'react-router-dom';

// composing, extracting, Lifting state up
// using react-router-dom
export default function PostSummary({ post }) {
  return (
    <div className="col s12 m3">
      <div className="card z-depth-2 post-summary">
        <div
          className="card-content grey-text text-darken-3"
          data-test="postSummaryComponent"
        >
          <span
            className="card-title truncate purple-text darken-2"
            data-test="postTitle"
          >
            {post.title}
          </span>
          <p className="truncate" data-test="postBody">
            {post.body}
          </p>
          <p className="grey-text" data-test="postUserId">
            Diposting oleh UserID: {post.userId}
          </p>
        </div>
        <div className="card-action">
          <Link
            to={{
              pathname: `/post/${post.id}`,
              state: { post },
            }}
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}
