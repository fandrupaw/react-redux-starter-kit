import React, { Component } from 'react';
import PropTypes from 'prop-types';
import lamaIcon from 'static/icon.png';
import { bindActions } from 'reduxDir/bindActions';
import { llamaClickAction, resetLlamaClickAction } from 'actions/llama/llama-actions';
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

                <div className="button-container">
                    <button onClick={this._onResetButtonClick}>reset clicks</button>
                </div>
            </div>
        );
    }

    _onLamaImageClick = () => {
        this.props.actions.llamaClickAction();
    };

    _onResetButtonClick = () => {
        this.props.actions.resetLlamaClickAction();
    };
}

const actions = bindActions({
    llamaClickAction,
    resetLlamaClickAction,
});

LandingView.propTypes = {
    actions: PropTypes.shape({
        llamaClickAction: PropTypes.func,
        resetLlamaClickAction: PropTypes.func,
    })
};

export default connect(select, actions)(LandingView);