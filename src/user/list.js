/* eslint-disable */
import React, { Component } from 'react';
import {browserHistory, Link} from 'react-router-dom';
import Moment from 'react-moment';

import '../App.css';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {users: []};
    }

   componentWillMount() {
       fetch('http://localhost:9000/user/list', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
            })
            .then(response => response.json())
            .then(json => {
                console.log(json);
                this.setState({
                users: json.users
                });
            });
   }

   delete(id) {
       fetch('http://localhost:9000/user/'+ id + '/remove', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
        }).then(response => window.location.reload())
   }
   
    render() {
        return (
            <div style={{margin: 10}}>
                <div>
                <Link to='/user/add'>Add User</Link>
                </div>
                <div>
                    <h1>User List</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>User Name</th>
                                <th>Display Name</th>
                                <th>Email ID</th>
                                <th>Created At </th>
                                <th>Modified At</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {this.state.users.map((user, i) =>{
                        return(
                        <tbody>
                            <tr>
                                <td>{i+1}</td>
                                <td>{user.userName}</td>
                                <td>{user.displayName}</td>
                                <td>{user.emailId}</td>
                                <td><Moment format="DD/MM/YYYY">{user.createdDate}</Moment></td>
                                <td><Moment format="DD/MM/YYYY">{user.modifiedDate}</Moment></td>
                                <td><Link to={`/user/edit/?id=${user._id}`}>Edit</Link> | <a onClick={() => this.delete(user._id) } > Delete </a>
                                </td>
                            </tr>
                        </tbody>
                     ) }
                    )
                    }
                    </table>
                </div>
            </div>
        );
    }
}

export default List;