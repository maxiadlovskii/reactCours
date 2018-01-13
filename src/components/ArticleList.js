import React, {Component} from 'react'
import Article from './Article/index'
import  accordeon from '../decorators/accordeon'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

class ArticleList extends Component{
    static propTypes = {
        //from connect
        articles: PropTypes.array.isRequired,
        //from accordion
        openItemId: PropTypes.string,
        toggleOpenItem: PropTypes.func
    };

    render(){
        const articleElements = this.props.articles.map(article => <li key = {article.id}>

            <Article
                article = {article}
                isOpen = {article.id === this.props.openItemId}
                toggleOpen = {this.props.toggleOpenItem(article.id)}
            />

            </li>)

        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}

export  default connect(state=>({
    articles: state.articles
}))( accordeon(ArticleList) )