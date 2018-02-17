import React, {Component, PureComponent} from 'react'
import CommentList from '../CommentList';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {CSSTransitionGroup} from 'react-transition-group'
import { deleteArticle } from '../../AC'
import {articleSelectorFactory} from '../../selectors/index'
import './article.css'
class Article extends PureComponent {
    static propType = {
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string
        }).isRequired,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    };

    state = {
        updateIndex: 0
    }
/*
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.isOpen !== this.props.isOpen
    }
*/
    render() {
        const {article, isOpen, toggleOpen} = this.props;
        console.log(article)
        if(!article) return null
        return (
            <div ref = {this.setContainerRef} >
                <h3>{article.title}</h3>
                <button onClick = {toggleOpen}>
                    {isOpen ? 'close' : 'open'}
                </button>
                <button onClick={this.handleDelete}>delete</button>
                <CSSTransitionGroup
                    transitionName = 'article'
                    transsitionApear
                    transitionEnterTimeout = {300}
                    transitionLeaveTimeout = {500}
                    transitionAppearTimeout = {500}
                    component = 'div'
                >
                     {this.getBody()}
                </CSSTransitionGroup>
            </div>
        )
    }
    handleDelete = () =>{
        const {deleteArticle, article} = this.props
        deleteArticle(article.id)
        console.log('---', 'deleting article')
    }
    setContainerRef = ref =>{
     //   this.container = ref;
     //   console.log('---', ref )
    }

    setCommentsRef = ref => {
        this.container= ref;
      //  console.log('---', ref );
    }
    componentDidMount(){
        console.log('---', 'mounted');
    }

    componentDidUpdate(){
        console.log('---', 'updated');
    }
    getBody() {
        const {article, isOpen} = this.props;
        if (!isOpen) return null;
        return(
            <section>
                {article.text}
                <button onClick={() => this.setState({updateIndex: this.state.updateIndex + 1})}>update</button>
                <CommentList article = {article} ref={this.setCommentsRef} key = {this.state.updateIndex}/>

            </section>

        )
    }


}

export default  connect(null, {deleteArticle})( Article );