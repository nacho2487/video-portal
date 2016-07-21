import React from 'react';
import {connect} from 'react-redux';
import LoginForm from './LoginForm';
import * as userActions from './../../actions/userActions';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';

export class Login extends React.Component {
  constructor(props) {
    super(props);

    this.signIn = this.signIn.bind(this);
    this.updateUserCredential = this.updateUserCredential.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if(this.props.sessionId !== nextProps.sessionId){
      sessionStorage.setItem('sessionId', nextProps.sessionId);
      browserHistory.push('/');
    }
  }

  signIn() {
    this.props.userActions.signIn({ username: this.props.username, password: this.props.password });
  }


  updateUserCredential(e) {
    let delta = {};
    delta[e.target.name] = e.target.value;
    this.props.userActions.changeCredential(delta);
  }

  render() {
    return (
      <div>
        <LoginForm
          onChange={this.updateUserCredential}
          onSignIn={this.signIn}
          error={this.props.error}
          userName={this.props.username}
          password={this.props.password}
        />
      </div>
    );
  }
}

Login.propTypes = {
  userActions: React.PropTypes.object.isRequired,
  username: React.PropTypes.string.isRequired,
  password: React.PropTypes.string.isRequired,
  sessionId: React.PropTypes.string.isRequired,
  error: React.PropTypes.string.isRequired
};

const mapStateToProps = (state) => {
  return {
    username: state.user.username,
    password: state.user.password,
    sessionId: state.user.sessionId,
    error: state.user.error
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userActions: bindActionCreators(userActions, dispatch)
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Login);
