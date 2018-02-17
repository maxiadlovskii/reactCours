import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Comment from './Comment';
import  toggleOpen from '../decorators/toggleOpen'
import CommentForm from './CommentForm'

function CommentList({article, isOpen, toggleOpen}) {
    const text = isOpen ? 'hide comments' : 'show comments';
    return (
        <div>
            <button onClick={toggleOpen}>{text}</button>
            {getBody({article, isOpen})}

        </div>
    );
}
CommentList.propType = {
        comments: PropTypes.array,
        isOPen: PropTypes.bool,
        toggleOpen: PropTypes.func
    };

function getBody({article: {comments = [], id}, isOpen}){
             if (!isOpen) return null;
             if(!comments.length) return (
            <div>
                <p>No comments yet</p>
                <CommentForm articleId = {id}/>
            </div>
        )

        return(
            <div>
            <ul>
                {comments.map(id => <li key = {id}><Comment id = {id}/></li>)}
                <CommentForm articleId = {id}/>
            </ul>
            </div>
        )
}


export default toggleOpen(CommentList)