import React, { useState } from 'react';

const MainSection = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can perform any validation before submitting
    // For simplicity, let's assume the email is valid
    // Now you can send this email to your backend for storage
    // Example:
    // fetch('your-backend-url', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ email }),
    // })
    // .then(response => {
    //     // Handle response as needed
    // })
    // .catch(error => {
    //     // Handle error as needed
    // });
    // You can also reset the email field after submission
    // setEmail('');
  };

  return (
    <section className="main">
      <div className="container">
        <h2>Welcome to Tolerify!</h2>
        <p>- COMING SOON -</p>
      </div>
    </section>
  );
};

export default MainSection;
