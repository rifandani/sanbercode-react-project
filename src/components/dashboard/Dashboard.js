import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import PostList from '../posts/PostList';
import { getPosts } from '../../actions/postActions';
import Loader from '../posts/Loader';
import Footer from '../layout/Footer';

export function Dashboard(props) {
  const { posts, getPosts, loading } = props;

  // lifecycle methods and hooks
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <>
      <main className="dashboard container">
        <div className="row">
          {/* conditional rendering, if LOADING === true, renders Loader Component, if NOT renders PostList Component */}
          {loading ? <Loader /> : <PostList posts={posts} />}
        </div>
      </main>

      <Footer />
    </>
  );
}

const mapStateToProps = (state) => ({
  posts: state.post.posts,
  loading: state.post.loading,
});

export default connect(mapStateToProps, { getPosts })(Dashboard);
