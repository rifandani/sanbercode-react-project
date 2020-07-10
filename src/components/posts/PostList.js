import React from 'react';

import PostSummary from './PostSummary';

// Lists
// composing, extracting, Lifting state up
export default function PostList({ posts }) {
  return (
    <div className="section">
      {posts && posts.map((post) => <PostSummary post={post} key={post.id} />)}
    </div>
  );
}
