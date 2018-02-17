import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {commentSelectorFactory} from '../selectors'

function Comment({comment}){
        return (
            <div>
                <h3>{comment.user}</h3>
                <section>{comment.text}</section>
            </div>
        );
}

Comment.propTypes = {
    id: PropTypes.string.isRequired,
    comment: PropTypes.shape({
        text: PropTypes.string.isRequired,
        user: PropTypes.string.isRequired
    }).isRequired
}
const mapStateToProps = () => (state, ownProps) =>{
    const commentSelector = commentSelectorFactory()
    return{
        comment: commentSelector(state, ownProps)
    }
}
export default connect(mapStateToProps)(Comment)