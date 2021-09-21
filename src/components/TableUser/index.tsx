import { useEffect, useState } from "react";
import MaterialTable from "material-table";
import { tableIcons } from "../../components/TableIcons";

import api from "../../services/api";

import "./styles.scss";

export const TableUser = (isVisible: any) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const loadOpportunities = async () => {
      const { data } = await api.get("/users");
      setUsers(data);
    };
    loadOpportunities();
  }, []);

  const [state] = useState({
    columns: [
      { title: "Name", field: "userName" },
      { title: "Birth Date ", field: "birthdate", type: "date" },
      { title: "Gender", field: "gender" },
      { title: "Email", field: "email" },
      { title: "CPF ", field: "cpf" },
      { title: "Start Date  ", field: "startdate" },
      { title: "Team", field: "team" },
    ],
    data: [
      { title: "Name", field: "userName" },
      { title: "Birth Date ", field: "birthdate", type: "date" as const },
      { title: "Gender", field: "gender" },
      { title: "Email", field: "email" },
      { title: "CPF ", field: "cpf" },
      { title: "Start Date  ", field: "startdate", type: "date" as const },
      { title: "Team", field: "team" },
    ],
  });

  console.log(state.columns);

  return (
    <div id="table-users">
      <button>ok</button>

      <MaterialTable
        icons={tableIcons}
        title="Usuarios"
        columns={state.data}
        data={users}
        editable={{
          onRowAdd: (newData: any) =>
            new Promise((resolve) => {
              api.post("/api/recruiters", newData);
              setTimeout(() => {
                const loadRecruiters = async () => {
                  const { data } = await api.get("/api/recruiters");
                  setUsers(data.recruiters);
                };
                resolve(loadRecruiters());
              }, 600);
            }),
          onRowUpdate: (newData: any, oldData: any) =>
            new Promise((resolve) => {
              if (oldData) {
                console.log(newData);
                api.put(`/users/${newData.id}`, newData);
              }
              setTimeout(() => {
                const loadRecruiters = async () => {
                  const { data } = await api.get("/users");
                  console.log(data);
                  setUsers(data);
                };
                resolve(loadRecruiters());
              }, 600);
            }),
          onRowDelete: (oldData: { id: any }) =>
            new Promise((resolve) => {
              api.delete(`/users/${oldData.id}`);
              setTimeout(() => {
                const loadRecruiters = async () => {
                  const { data } = await api.get("/users");
                  setUsers(data);
                };
                resolve(loadRecruiters());
              }, 600);
            }),
        }}
      />
    </div>
  );
};
