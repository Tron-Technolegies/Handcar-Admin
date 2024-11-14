import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { GoDotFill } from "react-icons/go";

function createData(name, service, plan, duration, start, end, status) {
  return { name, service, plan, duration, start, end, status };
}

const rows = [
  createData(
    "Tom Cruise",
    "Car wash",
    "Premium",
    "6 months",
    "01/10/2024",
    "01/10/2024",
    "active"
  ),
  createData(
    "Tom Cruise",
    "Car wash",
    "Premium",
    "6 months",
    "01/10/2024",
    "01/10/2024",
    "inactive"
  ),
  createData(
    "Tom Cruise",
    "Car wash",
    "Premium",
    "6 months",
    "01/10/2024",
    "01/10/2024",
    "active"
  ),
  createData(
    "Tom Cruise",
    "Car wash",
    "Premium",
    "6 months",
    "01/10/2024",
    "01/10/2024",
    "inactive"
  ),
];

export default function SubscriptionTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ backgroundColor: "#F9FAFB" }}>
            <TableCell
              sx={{ width: "16%", textAlign: "center", fontWeight: "bold" }}
            >
              Name
            </TableCell>
            <TableCell
              sx={{ width: "14%", textAlign: "center", fontWeight: "bold" }}
            >
              Service
            </TableCell>
            <TableCell
              sx={{ width: "14%", textAlign: "center", fontWeight: "bold" }}
            >
              Plan
            </TableCell>
            <TableCell
              sx={{ width: "14%", textAlign: "center", fontWeight: "bold" }}
            >
              Duration
            </TableCell>
            <TableCell
              sx={{ width: "14%", textAlign: "center", fontWeight: "bold" }}
            >
              Start
            </TableCell>
            <TableCell
              sx={{ width: "14%", textAlign: "center", fontWeight: "bold" }}
            >
              End
            </TableCell>
            <TableCell
              sx={{ width: "14%", textAlign: "center", fontWeight: "bold" }}
            >
              Status
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
                sx={{ width: "16%", textAlign: "center" }}
              >
                {row.name}
              </TableCell>
              <TableCell sx={{ width: "14%", textAlign: "center" }}>
                {row.service}
              </TableCell>
              <TableCell sx={{ width: "14%", textAlign: "center" }}>
                {row.plan}
              </TableCell>
              <TableCell sx={{ width: "14%", textAlign: "center" }}>
                {row.duration}
              </TableCell>
              <TableCell sx={{ width: "14%", textAlign: "center" }}>
                {row.start}
              </TableCell>
              <TableCell sx={{ width: "14%", textAlign: "center" }}>
                {row.end}
              </TableCell>
              <TableCell sx={{ width: "14%", textAlign: "center" }}>
                <div>
                  {row.status === "active" ? (
                    <p className="bg-[#A5FF9647] rounded-s-full rounded-e-full py-1 flex gap-2 items-center justify-center text-[#1E9609]">
                      <span className="text-xl">
                        <GoDotFill />
                      </span>
                      Active
                    </p>
                  ) : (
                    <p className="bg-[#FBF3F3] rounded-s-full rounded-e-full py-1 flex gap-2 items-center justify-center text-[#A70909]">
                      <span className="text-xl">
                        <GoDotFill />
                      </span>
                      Inactive
                    </p>
                  )}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
