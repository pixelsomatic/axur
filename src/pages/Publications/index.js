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

    // mapeia ids dos autores dentro de Posts
    const authorIdPost = posts.map(post => (
      post.metadata.authorId
    ));
    
      //mapeia ids de autores dentro de Autores 
    const authorId = authors.map(author => (
      author.id
    ));  
    
    const mapItem =[];
    authors.forEach(author => {
      posts.forEach(post => {
        if (author.id === post.metadata.authorId) {
          mapItem.push(author);
        }
      });
    });
    console.log(mapItem);

    return (
      
      <div className="wrapper">
        <div className="main-back">
          <h1> All Publications </h1>
          <Link to="/">
            <button className="btn-back"> Back </button>
          </Link>
        </div>
      <div className="all-posts">
        {posts.map(post => (
          <ul key={post.title}>
            <div className="card-details neumorphism">
              <li>
                <p>{mapItem.name}</p>
                <h2>{post.title}</h2>
								<span>{post.body}</span>
                <p>Published at: <FormattedDate value={post.metadata.publishedAt}
                  day="numeric" month="long" year="numeric" />
                </p>
              </li>
            </div>
          </ul>
        ))}
      </div>
    </div>

);
}
}
