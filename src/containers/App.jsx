import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Video from '../containers/Video';
import PlayerActions from '../actions';

class App extends Component {
  render () {
    const { actions } = this.props;

    return (
      <div className='jarvip'>
        <Video actions={actions} />
      </div>
    );
  }
}

App.propTypes = {
  actions: PropTypes.object.isRequired
};

export default connect(
  function mapStateToProps (state) {
    return {};
  },
  function mapDispatchToProps (dispatch) {
    return {
      actions: bindActionCreators(PlayerActions, dispatch)
    };
  }
)(App);
