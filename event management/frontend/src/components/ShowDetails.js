import React, { useState } from 'react';

function UserDetails() {
  const [userDetails, setUserDetails] = useState({ name: '',  email: '', telephone: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userDetails);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={userDetails.name} onChange={handleChange} />
        </label>
        <br />
        
        <label>
          Email:
          <input type="email" name="email" value={userDetails.email} onChange={handleChange} />
        </label>
        <br />
        <label>
          Telephone:
          <input type="tel" name="telephone" value={userDetails.telephone} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {userDetails.name && <ShowDetails userDetails={userDetails} />}
    </div>
  );
}

function ShowDetails(props) {
  const { name,  email, telephone } = props.userDetails;

  return (
    <div>
      <h2>User Details:</h2>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Telephone: {telephone}</p>
    </div>
  );
}

export default UserDetails;
