/* eslint-disable */
import React, { Component } from 'react';
import '../App.css';

class Add extends Component {
    state = {
        redirect: false
    }

    render() {
        const { redirect } = this.state
        return (
            <div>
                <h1>Add User</h1>
                <div>
                    <form>
                        <label>User Name</label> 
                        <input type="text"
                                ref="userName" /><br/>
                        <label>Display Name</label> 
                        <input type="text"
                                ref="displayName" /><br/>
                        <label>Email</label>
                        <input type="email"
                                ref="email" /><br/>
                        <label>Password</label>
                        <input type="password"
                                ref="password" /><br/>
                        <button onClick={ this.submit.bind(this) }>Submit</button>
                    </form>
                </div>
            </div>
        );

        if (redirect) {
        return (
            <Redirect to='/user/list' />
        )
        }        
    }

    submit(e) {
        e.preventDefault();

        // Get values via this.refs
        var data = {
        userName     : this.refs.userName.value,
        displayName  : this.refs.displayName.value,
        password : this.refs.password.value,
        email    : this.refs.email.value,
        }
        fetch('http://localhost:9000/user/add', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({data}),
        }).then(res => alert('User added successfully'))
    }
}

export default Add;