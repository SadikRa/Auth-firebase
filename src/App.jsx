import { useEffect, useState } from "react";

function App() {


  const [users , setUsers] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  } ,[])
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-5">
      {users.map((user) => {
        const { id, name, email, phone, address } = user; // Destructuring the user object

        return (
          <div key={id} className="card bg-base-100 shadow-xl p-4">
            <div className="card-body">
              <h2 className="card-title text-lg font-bold">{name}</h2>
              <p className="text-sm text-gray-500">Email: {email}</p>
              <p className="text-sm text-gray-500">Phone: {phone}</p>
              <p className="text-sm text-gray-500">
                Address: {address.street}, {address.city}, {address.state}, {address.zip}
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Contact</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default App;
