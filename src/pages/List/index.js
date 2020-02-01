import React, { Component } from "react";
import api from "../../services/api";
import './styles.css';

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
  
  onClick(e) {
    e.preventDefault();
    this.setState({
      books: this.state.books.reverse()
    });
 }
  
  render() {
    return (
      <div className="book-list">
        {this.state.books.map((book, index) => (
          <ol className="list">
            <li className="item">
              <p className="number">{index +1}</p>
              <h2 className="headline" key={book.title}>{book.title}</h2>
            </li>
          </ol>
        ))}
        <button onClick={this.onClick.bind(this)}>Reverse</button>
      </div>
    );
  }
}
export default List;
// this.state.fruits.map((fruit, index) => <li key={fruit} >{index + 1}. {fruit}</li>)