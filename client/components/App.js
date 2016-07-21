// This component handles the App template used on every page.
import React, {PropTypes} from 'react';
import Header from './common/Header';
import {connect} from 'react-redux';
import * as userActions from './../actions/userActions';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onLogout = this.onLogout.bind(this);
  }

  componentDidMount() {
    this._ensureSignIn();
  }
  onLogout(e){
    e.preventDefault();
    this.props.signOut();
  }
 
  _ensureSignIn() {
    if (!sessionStorage.getItem('sessionId') && this.props.location.pathname !== '/login') {
      browserHistory.push('/login');
    }
  }



	render() {
        const showLogout = this.props.location.pathname !== '/login';
		return (
			<div className="container-fluid">
				<Header
                    showLogout={showLogout}
                    onLogout={this.onLogout}
                />
				{this.props.children}
			</div>
		);
	}
}

App.propTypes = {
    user: PropTypes.object.isRequired,
    videos: PropTypes.array.isRequired,
    location: PropTypes.object.isRequired,
    userActions: PropTypes.object.isRequired,
    children: PropTypes.object.isRequired,
    signOut: PropTypes.func

};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    videos: state.videos
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      signOut: function(){
          dispatch(userActions.signOut()).then(function(){
              sessionStorage.setItem('sessionId', '');
              browserHistory.push('/login');
          });
      },
    userActions: bindActionCreators(userActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
