import React, {Component} from 'react'
import Article from './Article/index'
import  accordeon from '../decorators/accordeon'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {filtratedArticlesSelector} from "../selectors/index";
import {loadAllArticles} from "../AC/index";

class ArticleList extends Component{
    static propTypes = {
        //from connect
        articles: PropTypes.array.isRequired,
        //from accordion
        openItemId: PropTypes.string,
        toggleOpenItem: PropTypes.func
    };

    componentDidMount(){
        this.props.loadAllArticles()
    }

    render(){
        const {articles, openItemId, toggleOpenItem} = this.props
        const articleElements = articles.map(article => <li key={article.id}>

            <Article
                article = {article}
                isOpen = {article.id === openItemId}
                toggleOpen = {toggleOpenItem(article.id)}
            />
            </li>)

        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}

export  default connect((state)=>{
    return {
        articles: filtratedArticlesSelector(state)
    }
}, {loadAllArticles})( accordeon(ArticleList) )