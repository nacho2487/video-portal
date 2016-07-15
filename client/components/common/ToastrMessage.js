import React from 'react';
import {ToastContainer, ToastMessage} from 'react-toastr';

const ToastMessageFactory = React.createFactory(ToastMessage.animation);

class ToastrMessage extends React.Component {
  constructor(props) {
    super(props);

    this.defaultOptions = {
      timeOut: 2000,
      closeDuration: 300,
      closeButton: true,
      preventDuplicates: true
    };

    this.closeToastr = this.closeToastr.bind(this);
  }

  closeToastr() {
    this.props.onClose();
    this.refs.container.clear();
  }

  showValidationMessage(message) {
    this.refs.container.error(
      message,
      'Invalid Input',
      this.defaultOptions
    );

    // Reset validation state
    this.props.onClose();
  }

  showCommitNotification(message) {
    this.refs.container.success(
      message,
      null,
      this.defaultOptions
    );
  }

  render() {
    return (
      <ToastContainer ref="container" onClick={this.closeToastr}
                      toastMessageFactory={ToastMessageFactory}
                      className="toast-top-right">
      </ToastContainer>);
  }
}

export default ToastrMessage;
