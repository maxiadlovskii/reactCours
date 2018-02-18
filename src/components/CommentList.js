import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Loader from './Loader'
import Comment from './Comment';
import CommentForm from './CommentForm'

import  toggleOpen from '../decorators/toggleOpen'
import  {loadArticleComments} from "../AC/index";
import {connect} from 'react-redux'
class CommentList extends Component{

    render(){
        console.log( 'RENDER COMMENT LIST')
        console.log( this.props)
        const {article, isOpen, toggleOpen} = this.props
        const text = isOpen ? 'hide comments' : 'show comments';
        return (
            <div>
                <button onClick={toggleOpen}>{text}</button>
                {this.getBody({article, isOpen})}

            </div>
        );
    }

    getBody({article: {comments = [], id, commentsLoaded, commentsLoading}, isOpen}){
        console.log( comments )
        if (!isOpen) return null;
        if(commentsLoading) return <Loader/>
        if(!commentsLoaded) return null
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

    componentWillReceiveProps({isOpen, article, loadArticleComments}, nextContext) {
        console.log( 'componentWillReciveProps' )
        if(isOpen && !article.commentsLoading && !article.commentsLoaded){
            loadArticleComments(article.id)
        }
    }


}
CommentList.propType = {
        comments: PropTypes.array,
        isOPen: PropTypes.bool,
        toggleOpen: PropTypes.func
    };

export default connect(null, {loadArticleComments})(toggleOpen(CommentList))