import React, { Component } from 'react'
import styled from "styled-components";
import ReactHtmlParser from 'react-html-parser';

class List extends Component {
	constructor(props) {
		super(props);
		this.state = {
			posts: [],
			data: false
		};
		this.receiveData = this.receiveData.bind(this);
	}

	componentDidMount(){
		fetch('http://www.mocky.io/v2/5be5e3fa2f000082000fc3f8')
		.then(response => {
			return response.json(); 
		})
		.then(jsonResponse => {
			const books = jsonResponse[0].title;
			this.receiveData(books);
		});
	}
	receiveData(data) {
		this.setState({data});
	}
	render(){
		const {hits} = this.state;
		return(
			<>
			<p>teste</p>
			<div> {ReactHtmlParser (this.state.data)} </div>
			</>
		);
	}
}
export default List;