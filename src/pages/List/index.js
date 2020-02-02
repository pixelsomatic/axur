import React, { Component } from "react";
import api from "../../services/api";
import './styles.css';
import {FormattedDate} from 'react-intl';
import orderBy from 'lodash/orderBy';

class List extends Component {
  state = {
    books: [],
    sortAscending: true
  };
  
  componentDidMount() {
    this.loadProducts();
  }
  
  loadProducts = async () => {
    const response = await api.get();
    this.setState({ books: response.data });
    
    console.log(response.data);
  };
  
  render() {
    const { books } = this.state;
    const {teste} = orderBy(this.state.books, o => o.metadata.publishedAt)
    return (
      <div className="book-list">
        {books.sort((a,b) => a.metadata.publishedAt - b.metadata.publishedAt)
        .map((book, index) => (
          <ol className="list" key={book.metadata.publishedAt}>
            <li className="item">
              <p className="number">{index +1}</p>
              <h2 className="headline" key={book.title}>{book.title}</h2>
              <h4><FormattedDate
                value={book.metadata.publishedAt}
                day="numeric"
                month="long"
                year="numeric"
                /></h4>
            </li>
          </ol>
        ))}
        <button onClick={teste}>teste</button>
      </div>
    );
  }
}
export default List;