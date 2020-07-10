import React, { Component } from 'react';

// footer class based component
export default class Footer extends Component {
  render() {
    return (
      <footer className="page-footer purple accent-4">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="cyan-text">About</h5>
              <p className="grey-text text-lighten-4">
                This is a fake blog posts using JSONPlaceholder API. Built using
                ReactJS, Redux, and React-Router-Dom. Redux DevTools supported.
              </p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="cyan-text">Links</h5>
              <ul>
                <li>
                  <a
                    className="grey-text text-lighten-3"
                    href="https://jsonplaceholder.typicode.com/"
                  >
                    JSONPlaceholder
                  </a>
                </li>
                <li>
                  <a
                    className="grey-text text-lighten-3"
                    href="https://reactjs.org/"
                  >
                    React
                  </a>
                </li>
                <li>
                  <a
                    className="grey-text text-lighten-3"
                    href="https://redux.js.org/"
                  >
                    Redux
                  </a>
                </li>
                <li>
                  <a
                    className="grey-text text-lighten-3"
                    href="https://reactrouter.com/web/guides/quick-start"
                  >
                    React-Router-Dom
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright purple darken-2">
          <div className="container">
            © 2020 Tri Rizeki Rifandani
            <a
              className="grey-text text-lighten-4 right"
              href="https://codesandbox.io/s/my-blog-posts-ckhi2"
            >
              Codesandbox
            </a>
          </div>
        </div>
      </footer>
    );
  }
}
