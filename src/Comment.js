//your code here
import React, { Component } from 'react';

export default class Comment extends Component{
    render(){
        return (
            <div className="comment">
                <li>{this.props.commentText}</li>
            </div>
        )
    }
}