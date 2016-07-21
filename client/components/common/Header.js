import React, {PropTypes} from 'react';

const Header = ({showLogout, onLogout}) => {

    let logoutHtml = '';
    if(showLogout){
        logoutHtml = <div className="signout"> <a href="#" onClick={onLogout}>Logout</a></div>;
    }

    return (
        <div className="navbar navbar-default">
          <div className="container">
            <h4 className="text-center">Crossover Video Portal</h4>
              {logoutHtml}
          </div>
        </div>
  );
};

Header.propTypes = {
    showLogout: PropTypes.bool.isRequired,
    onLogout: PropTypes.func.isRequired
};

export default Header;
