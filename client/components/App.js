// This component handles the App template used on every page.
import React, {PropTypes} from 'react';
import Header from './common/Header';
import {connect} from 'react-redux';
import * as userActions from './../actions/userActions';
import {bindActionCreators} from 'redux';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  _ensureSignIn() {
    if (!(this.props.user && this.props.user.isSignedIn) && this.props.location.pathname !== 'login') {
      this.props.userActions.redirectToSignIn();
    }
  }

  componentDidMount() {
    this._ensureSignIn();
  }

  componentDidUpdate(preProps, preState) {
    this._ensureSignIn();
  }

	render() {
		return (
			<div className="container-fluid">
				<Header />
				{this.props.children}
			</div>
		);
	}
}

App.propTypes = {
	children: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userActions: bindActionCreators(userActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
