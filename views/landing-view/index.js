import React, { Component } from 'react';
import lamaIcon from 'static/icon.png';
import { bindActions } from 'reduxDir/bindActions';
import { llamaClickAction } from 'actions/llama/llama-actions';
import { select } from 'views/landing-view/landing-view-selector';
import { connect } from 'react-redux';

import './landing-view.scss';

class LandingView extends Component {
    render() {
        return (
            <div className="landing-view">
                <h1>React redux starter kit</h1>

                <img
                    src={lamaIcon}
                    className="lama-img"
                    onClick={this._onLamaImageClick}
                />
            </div>
        );
    }

    _onLamaImageClick = () => {
        this.props.actions.llamaClickAction();
    }
}

const actions = bindActions({
    llamaClickAction,
});

export default connect(select, actions)(LandingView);