import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(username, email, phone) {
  return { username, email, phone };
}

const rows = [
  createData("Tom Cruise", "tomcruise@gmail.com", "7034601783"),
  createData("Tom Brady", "tomBrady@gmail.com", "7034601783"),
  createData("Angelina", "angelina@gmail.com", "7034601783"),
  createData("Tom Cruise", "tomcruise@gmail.com", "7034601783"),
];

export default function UserPageTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ backgroundColor: "#F9FAFB" }}>
            <TableCell
              sx={{ width: "33%", textAlign: "center", fontWeight: "bold" }}
            >
              Username
            </TableCell>
            <TableCell
              sx={{ width: "34%", textAlign: "center", fontWeight: "bold" }}
            >
              Email
            </TableCell>
            <TableCell
              sx={{ width: "33%", textAlign: "center", fontWeight: "bold" }}
            >
              Phone
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                component="th"
                scope="row"
                sx={{ width: "33%", textAlign: "center" }}
              >
                {row.username}
              </TableCell>
              <TableCell sx={{ width: "34%", textAlign: "center" }}>
                {row.email}
              </TableCell>
              <TableCell sx={{ width: "33%", textAlign: "center" }}>
                {row.phone}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
