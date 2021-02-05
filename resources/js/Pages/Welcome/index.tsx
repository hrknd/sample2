import * as React from 'react';

const WelcomePage = () => {
  return (
    <div className="container">
      <h1>Welcome Bookmark app</h1>
      <p>
        <a href="/login">Login here</a>
      </p>
      <p>
        <a href="/register">Registar here</a>
      </p>
    </div>
  );
};

export default WelcomePage;
