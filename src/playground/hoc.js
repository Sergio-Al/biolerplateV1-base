// High Order Component (HOC) - A component (HOC) that render another component.
// Reuse code
// Render hijacking
// Abstract state

import React from "react";
import ReactDOM from "react-dom";

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info please don't share!</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isUserAuth ? (
        <WrappedComponent {...props} />
      ) : (
        <div>
          <p>Please Authenticate</p>
        </div>
      )}
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(AdminInfo);

ReactDOM.render(
  <AuthInfo isUserAuth={false} isAdmin={true} info="There are the details" />,
  document.getElementById("app")
);
