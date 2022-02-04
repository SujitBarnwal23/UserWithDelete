import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  const deleteItemHandler = (id) => {
    const updatedUsersList = usersList.filter((List) => List.id !== id);
    setUsersList(updatedUsersList);
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} onDelete={deleteItemHandler} />
    </div>
  );
}

export default App;
