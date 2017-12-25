import React, {Component as ReactComponent} from 'react'
import PropTypes from 'prop-types';

export default  (OriginalComponent) => class accordeon extends ReactComponent {
    state = {
        openItemId: null
    }
    render(){
        return <OriginalComponent {...this.props} openItemId = {this.state.openItemId} toggleOpenItem = {this.toggleOpenItem}/>
    }

    toggleOpenItem = (openItemId) => ev => {
        this.setState({openItemId : (this.state.openItemId === openItemId) ? null : openItemId})
    }
}
