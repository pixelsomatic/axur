import React, { Component } from "react";
import api from "../../services/api";
import "./styles.css";
import { FormattedDate } from "react-intl";
import {Link} from 'react-router-dom';

class List extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async () => {
    const response = await api.get();
    this.setState({ posts: response.data });
  };

  render() {
    const { posts } = this.state;
    return (
      <div className="post-list">
        <header className="contents">
          <h1>Contents</h1>
          <p>Latest Publications</p>
        </header>
        {posts
          .sort((a, b) => b.metadata.publishedAt - a.metadata.publishedAt)
          .map((post, index) => (
            <ol className="list" key={post.metadata.publishedAt}>
              <div className="card-w col-md-4">
                <li className="item card neumorphism">
                  <p> {index + 1} </p>
                  <h2 key={post.title}>
                    {post.title}
                  </h2>
                  <h4>
                    <FormattedDate value={post.metadata.publishedAt}
                      day="numeric" month="long" year="numeric"
                    />
                  </h4>
                </li>
              </div>
            </ol>
          ))}
          <Link to="/publications">
            <button> All Publications </button>
          </Link>
      </div>
    );
  }
}
export default List;
