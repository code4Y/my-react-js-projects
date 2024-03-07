// import React, { useState, useEffect } from 'react';
// import { useParams, useHistory } from 'react-router-dom';
// import axios from 'axios';

// const EditForm = () => {
//   const { id } = useParams();
//   const history = useHistory();
//   const [user, setUser] = useState({});

//   useEffect(() => {
//     // Fetch user data by ID (make an API request)
//     axios.get(`http://localhost:3003/employee/${id}`).then((res) => {
//       setUser(res.data);
//     });
//   }, [id]);

//   const handleUpdate = (updatedUser) => {
//     // Make an API request to update user data
//     axios.put(`http://localhost:3003/employee/${id}`, updatedUser).then(() => {
//       alert('User updated successfully');
//       history.push('/view'); // Redirect back to user list
//     });
//   };

//   return (
//     <div>
//       <h2>Edit User</h2>
//       {/* Render a form with input fields pre-filled with user data */}
//       {/* Handle form submission to call handleUpdate */}
//       {/* Example form fields (adjust as needed) */}
//       <form onSubmit={handleUpdate}>
//         <input
//           type="text"
//           value={user.name || ''}
//           onChange={(e) => setUser({ ...user, name: e.target.value })}
//           placeholder="Name"
//         />
//         <input
//           type="text"
//           value={user.email || ''}
//           onChange={(e) => setUser({ ...user, email: e.target.value })}
//           placeholder="Email"
//         />
//         {/* Add other form fields for address, etc. */}
//         <button type="submit">Save</button>
//       </form>
//     </div>
//   );
// };

// export default EditForm;
