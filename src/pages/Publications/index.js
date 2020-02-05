import React, { Component } from "react";
import api from "../../services/api";
import authorApi from "../../services/authorApi";
import "./styles.css";
import { FormattedDate } from "react-intl";
import {Link} from 'react-router-dom';
export default class Publications extends Component {
  state = {
    posts: [],
    authors: []
  };

	componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async () => {
    const response = await api.get();
    this.setState({ posts: response.data });
    
    const responses = await authorApi.get();
    this.setState({ authors: responses.data });
  };

  render() {
    const { posts, authors } = this.state;

    return (
      <div className="wrapper">
        <div className="main-back">
          <h1> All Publications </h1>
          <Link to="/">
            <button className="btn-back"> Back </button>
          </Link>
        </div>
      <div className="all-posts">
        {authors.map((author) => 
          <div className="card-details neumorphism">
            <span className="author-name"> Author: {author.name} </span>
              <ul>
                {posts.filter(p => p.metadata.authorId === author.id).map(post =>
                  <li>
                    <h2>{post.title}</h2>
                    <span>{post.body}</span>
                    <h5>
                      Published at:   
                      <FormattedDate 
                        value={post.metadata.publishedAt}
                        day="numeric" month="long" year="numeric"
                      />
                    </h5>
                  </li>
                )}
              </ul>
            </div>
          )}
      </div>
    </div>
    );
  }
}
