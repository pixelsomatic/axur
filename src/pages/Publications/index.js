import React, { Component } from "react";
import api from "../../services/api";
import authorApi from "../../services/authorApi";

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
    const { posts } = this.state;
    const { authors } = this.state;

    // mapeia ids dos autores dentro de Posts
    const authorIdPost = posts.map((post) => (
      post.metadata.authorId
    ));
      console.log(authorIdPost);
    
      //mapeia ids de autores dentro de Autores 
    const authorId = authors.map((author) => (
      author.id
    ))  
      console.log(authorId);

      var equals = Object.entries(authorIdPost).toString() === Object.entries(authorId).toString();
      console.log(equals);

    return (
      <div className="all-posts">
        {authors.map((author) => (
          <p key={author.id}>{author.name}</p>
        ))}
        {posts.map(post => (
          <ul key={post.title}>
            <div>
              <li>
                <h2>{post.title}</h2>
								<span>{post.body}</span>
              </li>
            </div>
          </ul>
        ))}
        <p>lol</p>
      </div>

);
}
}
