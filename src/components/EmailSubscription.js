import React from 'react';

const EmailSubscription = () => {
  return (
    <div className="email-subscription">
      <h2>Subscribe to Our Newsletter</h2>
      <form className="subscription-form">
        <input type="email" placeholder="Enter your email" />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};

export default EmailSubscription;
