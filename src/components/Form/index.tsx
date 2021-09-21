import { FormEvent, useState } from "react";
import api from "../../services/api";
import { Select } from "../Select";

import "./styles.scss";

export const Form = () => {
  const [user, setUser] = useState({
    name: "",
    birthDate: Date(),
    gender: "",
    email: "",
    cpf: "",
    startDate: Date(),
    team: "",
  });

  const onChange = (event: any) => {
    setUser((prevUser) => ({
      ...prevUser,
      [event.target.name]: event.target.value,
    }));
  };

  function handleCreateUser(event: FormEvent) {

    api.post("/users", {
      userName: user.name,
      birthdate: user.birthDate,
      gender: user.gender,
      email: user.email,
      cpf: user.cpf,
      startdate: user.startDate,
      team: user.team,
    });
  }

  return (
    <div className="main-content">
      <form onSubmit={handleCreateUser}>
        <input
          name="name"
          type="text"
          placeholder="Name"
          value={user.name}
          onChange={onChange}
        />
        <input
          name="birthDate"
          className="date"
          type="date"
          placeholder="Birth Date"
        />
        <Select
          name="gender"
          label="Gender "
          value={user.gender}
          onChange={onChange}
          options={[
            { value: "Male", label: "Male" },
            { value: "female", label: "female" },
          ]}
        />
        <input
          name="email"
          type="text"
          placeholder="Email"
          value={user.email}
          onChange={onChange}
        />
        <input
          name="cpf"
          type="text"
          placeholder="CPF"
          value={user.cpf}
          onChange={onChange}
        />
        <input
          name="startDate"
          type="month"
          placeholder="Start Date"
          value={user.startDate}
          onChange={onChange}
        />
        <Select
          name="team"
          label="Team"
          value={user.team}
          onChange={onChange}
          options={[
            { value: "Mobile", label: "Mobile" },
            { value: "Frontend", label: "Frontend" },
            { value: "Backend ", label: "Backend " },
          ]}
        />
        <button type="submit">Add new User</button>
      </form>
    </div>
  );
};
