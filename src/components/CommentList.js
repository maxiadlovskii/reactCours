import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Comment from './Comment';
import  toggleOpen from '../decorators/toggleOpen'
/*
export default class CommentList extends Component{

      constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        }
    }
    static defaultProps = {
        comments : []
    }
    render(){
        const {comments = []} = this.props;
        const {isOpen} = this.state;

        const commentElements = comments.map((comment,index) =>

                                <li data = {index} key = {comment.id}>
                                      <Comment comment = {comment} />
                                </li>);
        return(
            <ul>
                {this.showComments(commentElements)}
            </ul>
        );
    }

     showComments(commentElements){
        return(
            <div>
                {commentElements.length > 0 && 
                <button onClick = {this.toggleOpen}>
                    {this.state.isOpen ? 'hide comments' : 'show comments' }
                </button>
                }
                {this.state.isOpen ? commentElements : null}
            </div>
        );
    }

    toggleOpen = (ev) =>{
        ev.preventDefault();
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

}
*/

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
            </div>
        );
    }

    getBody(){
            const {comments, isOpen} = this.props;
             if (!isOpen) return null;
             if(!comments.length) return <p>No comments yet</p>

        return(
            <ul>
                {comments.map(comment => <li key = {comment.id}><Comment comment = {comment}/></li>)}
            </ul>
        )

    }

}

export default toggleOpen(CommentList)