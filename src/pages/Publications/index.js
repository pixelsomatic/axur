import React, { Component } from "react";
import api from "../../services/api";
import authorApi from "../../services/authorApi";
import "./styles.css";
import { FormattedDate } from "react-intl";
import { Link } from "react-router-dom";
import arrowBack from "../../assets/back.svg";
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

  	sortAscending = e => {
   	const { posts } = this.state;
   	this.setState({ posts: posts });
   	posts.sort((a, b) => a.metadata.publishedAt - b.metadata.publishedAt);
   	e.preventDefault();
  	};

  	sortDescending = e => {
		const { posts } = this.state;
		this.setState({ posts: posts });
		posts.sort((a, b) => b.metadata.publishedAt - a.metadata.publishedAt);
		e.preventDefault();
  	};

  	getAuthorName(post) {
		if (this.state.authors.length === 0) return "";
		return this.state.authors.filter(a => a.id === post.metadata.authorId)[0]
      .name;
	}

  	render() {
		const { posts } = this.state;

		return (
			<div className="wrapper">
				<div className="main-back">
					<h1> All Publications </h1>
					<Link to="/">
						<button className="btn-back">
							<img src={arrowBack} alt="arrow-back" />
						</button>
					</Link>
				</div>
				<div className="hover">
					<span>Sort Posts</span>
					<button className="sort-button" onClick={this.sortAscending}>
						Older Posts
					</button>
					<button className="sort-button" onClick={this.sortDescending}>
						Recent Posts
					</button>
				</div>
				<div className="all-posts">
					{posts.map(p => (
						<div className="card-details neumorphism" key={p.title}>
							<span className="author-name">
								Author: {this.getAuthorName(p)}
							</span>
							<ul>
								<h2> {p.title} </h2>
								<span>{p.body}</span>
								<h5>
									Published at:
									<FormattedDate
										value={p.metadata.publishedAt}
										day="numeric"
										month="long"
										year="numeric"
									/>
								</h5>
							</ul>
						</div>
					))}
				</div>
			</div>
		);
  	}
}
