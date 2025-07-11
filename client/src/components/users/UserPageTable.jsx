import React, { useContext, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import useGetAllUsers from "../../hooks/users/useGetAllUsers";
import Loading from "../Loading";
import { AdminContext } from "../../AdminContext";

export default function UserPageTable({ search }) {
  const { loading, users, refetch } = useGetAllUsers({ search });
  const { refetchTrigger } = useContext(AdminContext);

  useEffect(() => {
    refetch();
  }, [refetchTrigger]);
  return loading ? (
    <Loading />
  ) : (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ backgroundColor: "#F9FAFB" }}>
            <TableCell
              sx={{ width: "25%", textAlign: "center", fontWeight: "bold" }}
            >
              Phone
            </TableCell>
            <TableCell
              sx={{ width: "25%", textAlign: "center", fontWeight: "bold" }}
            >
              Name
            </TableCell>
            <TableCell
              sx={{ width: "25%", textAlign: "center", fontWeight: "bold" }}
            >
              Email
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                component="th"
                scope="row"
                sx={{ width: "25%", textAlign: "center" }}
              >
                {row.username}
              </TableCell>
              <TableCell sx={{ width: "25%", textAlign: "center" }}>
                {row.first_name}
              </TableCell>
              <TableCell sx={{ width: "25%", textAlign: "center" }}>
                {row.email}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
