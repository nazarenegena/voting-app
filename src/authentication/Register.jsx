import React from "react";
import Form from "../components/Form";

const Register = ({ users, setUsers }) => {
  return (
    <div className="grid grid-cols-2">
      <div className="">image</div>
      <div>
        <Form users={users} setUsers={setUsers} />
      </div>
    </div>
  );
};

export default Register;
