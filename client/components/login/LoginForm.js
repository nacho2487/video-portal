import React from 'react';

const LoginFrom = ({onChange, onSignIn, userName, password}) => {
  return (
    <div className="panel-body login-form">
      <div>
        <label htmlFor="userName">Username: </label><input type="text" onChange={onChange} name="userName"
                                                            autoComplete="off" value={userName}/>
      </div>
      <div><label htmlFor="password">Password: </label><input type="password" name="password" value={password} onChange={onChange}
                                                            autoComplete="off"/></div>
      <div className="p-t-10">
        <button onClick={onSignIn} id="signIn">Sign In</button>
      </div>

    </div>
  );
}

export default LoginFrom;
