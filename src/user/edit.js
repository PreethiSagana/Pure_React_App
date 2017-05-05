/* eslint-disable */
import React, { Component } from 'react';
import '../App.css';

class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {user: {}, id: this.props.location.search.split('=')[1] };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
    this.setState({user: event.target.value});
  }

   componentWillMount() {
       fetch('http://localhost:9000/user/'+ this.state.id , {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
            })
            .then(response => response.json())
            .then(json => {
                this.setState({
                user: json.user
                });
            });
   }
    render() {
        if (this.state.user) {
        return (
            <div>
                <h1>Edit User</h1>
                <div>
                    <form>
                        <label>User Name</label> 
                        <input type="text"
                                ref="userName"
                                value={this.state.user.userName} onChange={this.handleChange} /><br/>
                        <label>Display Name</label> 
                        <input type="text"
                                ref="displayName"
                                value={this.state.user.displayName} onChange={this.handleChange} /><br/>
                        <label>Email</label>
                        <input type="email"
                                ref="email" 
                                value={this.state.user.emailId} onChange={this.handleChange} /><br/>
                        <button onClick={ this.submit.bind(this) }>Submit</button>
                    </form>
                </div>
            </div>
        );
        }
    }

    submit(e) {
        e.preventDefault();

        // Get values via this.refs
        var data = {
        userName     : this.refs.userName.value,
        displayName  : this.refs.displayName.value,
        email    : this.refs.email.value,
        }
        fetch('http://localhost:9000/user/'+ this.state.id + '/edit', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({data}),
        }).then(res => alert('user edited successfully'))
    }
}

export default Edit;