import React, {Component, PureComponent} from 'react'
import CommentList from './CommentList';
import  toggleOpen from '../decorators/toggleOpen'
import PropTypes from 'prop-types'
import {CSSTransitionGroup} from 'react-transition-group'
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
        return (
            <div ref = {this.setContainerRef} >
                <h3>{article.title}</h3>
                <button onClick = {toggleOpen}>
                    {isOpen ? 'close' : 'open'}
                </button>
                <CSSTransitionGroup
                    transitionName = 'article'
                    transitionEnterTimeout = {300}
                    transitionLeaveTimeout = {300}
                >
                     {this.getBody()}
                </CSSTransitionGroup>
            </div>
        )
    }

    setContainerRef = ref =>{
     //   this.container = ref;
     //   console.log('---', ref )
    }

    setCommentsRef = ref => {

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
                <CommentList comments = {article.comments} ref={this.setCommentsRef} key = {this.state.updateIndex}/>

            </section>

        )
    }
}

export default  Article;