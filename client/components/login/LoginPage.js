import React from 'react';
import {connect} from 'react-redux';
import LoginForm from './LoginForm';
import * as userActions from './../../actions/userActions';
import {bindActionCreators} from 'redux';
import ToastrMessage from '../common/ToastrMessage';

export class Login extends React.Component {
  constructor(props) {
    super(props);

    this.signIn = this.signIn.bind(this);
  }

  signIn() {
    this.props.userActions.signIn({ userName: this.props.userName, password: this.props.password });
  }

  componentWillReceiveProps(newProps) {
    if (newProps.signInFailed && this.props.signInFailed !== newProps.signInFailed) {
      this.refs.notifier.showValidationMessage('Failed to sign in.');
    }
  }

  updateUserCredential(e) {
    let delta = {};
    delta[e.target.name] = e.target.value;
    this.props.userActions.changeCredential(delta);
  }

  changeCulture(e) {
    this.props.userActions.changeCulture(e.target.value);
  }

  render() {
    return (
      <div>
        <LoginForm
          onChange={this.updateUserCredential}
          currentCulture={this.props.currentCulture}
          onCultureChange={this.changeCulture}
          onSignIn={this.signIn }
          goHome={this.props.userActions.goHome}
          userName={this.props.userName}
          password={this.props.password}
        ></LoginForm>
        <ToastrMessage ref="notifier"
                       onClose={this.props.userActions.closeToastr }></ToastrMessage>
      </div>
    );
  }
}

Login.propTypes = {
  userActions: React.PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
  return {
    userName: state.user.userName,
    password: state.user.password,
    signInFailed: state.user.signInFailed
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userActions: bindActionCreators(userActions, dispatch)
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Login);
