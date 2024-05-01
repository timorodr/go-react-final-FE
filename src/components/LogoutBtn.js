// import React from 'react';

// const LogoutButton = () => {
//   const handleLogout = async () => {
//     try {
//       const response = await fetch('/user/logout', { method: 'POST' }); // Adjust URL based on your API

//       if (response.ok) {
//         // Clear user data from React application state (if any)
//         localStorage.removeItem('token'); // Example for removing token from local storage
//         // Redirect to login page or display logout message
//       } else {
//         console.error('Error logging out'); // Handle errors
//       }
//     } catch (error) {
//       console.error(error); // Handle errors
//     }
//   };

//   return <button onClick={handleLogout}>Logout</button>;
// };

// export default LogoutButton;