import React, { Component } from 'react';
import {connect} from 'react-redux';
import {loginSuccess} from '../actions';

class loginPage extends Component {
    state = {
        creds: {
            username: '',
            password: ''
        }
    }
    handleChange = (e) => {
        e.preventDefault();
        this.setState ({
            creds: {
            ...this.state.creds,
            [e.target.name] : e.target.value
            }
            
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.loginSuccess(this.state.creds)
    }
    render() {
        if(this.props.isLoggedIn) {
            this.props.history.push('/friendlist')
        }

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <input onChange = {this.handleChange}
                type = 'text'
                placeholder = 'username'
                name = 'username'
                value = {this.state.username}
                />
                <input onChange = {this.handleChange}
                type = 'password'
                placeholder = 'password'
                name = 'password'
                value = {this.state.password}
                />
                <button value = 'submit'>Submit</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isLoggedIn: state.loggingIn,
    isFetching: state.isFetching
})

export default connect (
    mapStateToProps,
    {loginSuccess}
)(loginPage)