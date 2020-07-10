import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { deletePost } from '../../actions/postActions';

// using react-redux
// using react-router-dom
function PostDetails(props) {
  const { userId, title, body, id } = props.location.state.post;
  // const { id } = props.match.params;
  const { deletePost } = props;

  const handleClick = (id) => {
    deletePost(id);
  };

  return (
    <div className="container section post-details">
      <div className="card z-depth-3">
        <div className="card-content">
          <div className="card-title">
            <span className="purple-text">
              {title} - {id}
            </span>
          </div>
          <p>{body}</p>
        </div>

        <div className="card-action gret lighten-4 grey-text row">
          <span className="left">Diposting oleh UserID: {userId}</span>
          <Link to="/post/:id/delete">
            <button
              className="btn purple accent-3 z-depth-0 waves-effect waves-light right"
              onClick={handleClick(id)}
            >
              <i className="material-icons">delete</i>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default connect(null, { deletePost })(PostDetails);
