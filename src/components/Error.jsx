import React from 'react';

const Error = () => {
  return (
    <div className="container-error position-absolute">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/008/568/878/small/website-page-not-found-error-404-oops-worried-robot-character-peeking-out-of-outer-space-site-crash-on-technical-work-web-design-template-with-chatbot-mascot-cartoon-online-bot-assistance-failure-vector.jpg" // Replace with your own image URL
            alt="404 Page Not Found"
            className="img-fluid"
          />
          <h1 className="mt-4">Oops!</h1>
          <p className="lead">We couldn't find the page you're looking for.</p>
          <a href="/" className="btn btn-primary">
            Go back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default Error;
