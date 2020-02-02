import React, {Component} from 'react';
import api from '../../services/api';

export default class Details extends Component {
    state = {
        details: {},
    };

    async componentDidMount() {
        const { title } = this.props.match.params;  

        const response = await api.get(`/details/${title}`);

        this.setState({ details: response.data });
        console.log(response.data);
    }
    
    render(){
        const { details } = this.state;
        return(
            <div className="book-details">
                <h1>{details.title}</h1>
                <p>{details.body}</p>
                <p>shiiit</p>
            </div>
        );
    }
}