import React, { Component } from 'react'

export default class filterForm extends Component {
   constructor(props) {
      super(props)
      this.state = {
         authorFilter: ""
      }
   }
  
   handleChange = (e) => {
      this.setState({
         authorFilter: e.target.value
      })
      this.props.onChange(e.target.value)
   }
  
   render() {
      return (
         <div>
            <label htmlFor="filter">Filter by Author: </label>
            <input type="text" id="filter" 
               value={this.state.authorFilter} 
               onChange={this.handleChange}
            />
         </div>
      )
   }
}
