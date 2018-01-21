import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Comment from './Comment';
import  toggleOpen from '../decorators/toggleOpen'
import CommentForm from './CommentForm'

class CommentList extends Component{
    static defaultProps = {
        comments : []
    }
    static propType = {
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string
        })
    };
    render(){
        const text = this.props.isOpen ? 'hide comments' : 'show comments'
       return(
            <div>
                <button onClick = {this.props.toggleOpen}>{text}</button>
                {this.getBody()}
                <CommentForm />
            </div>
        );
    }

    getBody(){
            const {comments, isOpen} = this.props;
             if (!isOpen) return null;
             if(!comments.length) return (
            <div>
                <p>No comments yet</p>
                <CommentForm />
            </div>
        )

        return(
            <ul>
                {comments.map(id => <li key = {id}><Comment id = {id}/></li>)}
                <CommentForm />
            </ul>
        )

    }

}

export default toggleOpen(CommentList)