import React, { Component } from "react";
import api from "../services/api";

class List extends Component {
   state = {
		books: []
  	};

  	componentDidMount() {
   	this.loadProducts();
  	}

  	loadProducts = async () => {
   	const response = await api.get();

    	this.setState({ books: response.data });
  	};

  	render() {
   	return(
			<div className="book-list">
				{this.state.books.map(book => (
					<h2 key={book.title}>{book.title}</h2>
				))}
			</div>
		);
  	}
}
export default List;
