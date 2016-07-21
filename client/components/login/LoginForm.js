import React from 'react';
class LoginForm extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(e){
        e.preventDefault();
        this.props.onSignIn();
    }
    render(){
        const {onChange, username, password, error} = this.props;
        let errorMessage = '';
        if(error){
            errorMessage = <div className="alert alert-danger">{error}</div>;
        }
        return (
            <div className="login-form">
                {errorMessage}
                <form method="post" onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label className="control-label"  htmlFor="userName">Username: </label>
                        <input className="form-control" type="text" onChange={onChange} name="username" autoComplete="off" value={username}/>
                    </div>
                    <div className="form-group">
                        <label className="control-label" htmlFor="password">Password: </label>
                        <input className="form-control" type="password" name="password" value={password} onChange={onChange} autoComplete="off"/>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary" type="submit" >Sign In</button>
                    </div>
                </form>
            </div>
        );
    }
}

LoginForm.propTypes = {
    onSignIn: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    username: React.PropTypes.string,
    password: React.PropTypes.string,
    error: React.PropTypes.string
};

export default LoginForm;
