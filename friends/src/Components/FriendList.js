import React, {Component} from 'react';
import Friend from './Friend';
import {connect} from 'react-redux';
import {getFriend} from '../actions';

class FriendList extends Component {
    componentDidMount() {
        this.props.getFriend()
    }
    render() {
        return (
            <div>
                {this.props.friend.map((friend, id) =>
                    <Friend key={id}friend = {friend} />)}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        friend: state.friend
    }
}

export default connect (
    mapStateToProps,
    {getFriend}
)(FriendList)

    