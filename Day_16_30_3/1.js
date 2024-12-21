import React, { useState, createContext, useContext } from "react";

const UserContext = createContext();

function UserProvider({ children }) {
  const [name, setName] = useState("John Doe");

  const value = {
    name,
    changeName: () => setName("Jane Doe"),
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

function ChildComponent() {
  const { name, changeName } = useContext(UserContext);

  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={changeName}>Change Name</button>
    </div>
  );
}

function App() {
  return (
    <UserProvider>
      <ChildComponent />
    </UserProvider>
  );
}

export default App;
