import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";

function createData(vendor, joined, location) {
  return { vendor, joined, location };
}

const rows = [
  createData("Tom Cruise", "10/10/2024", "UAE"),
  createData("Tom Brady", "10/10/2024", "America"),
  createData("Angelina", "10/10/2024", "England"),
  createData("Tom Cruise", "10/10/2024", "Australia"),
];

export default function VendorTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ backgroundColor: "#F9FAFB" }}>
            <TableCell
              sx={{ width: "25%", textAlign: "center", fontWeight: "bold" }}
            >
              Vendor
            </TableCell>
            <TableCell
              sx={{ width: "25%", textAlign: "center", fontWeight: "bold" }}
            >
              Joined At
            </TableCell>
            <TableCell
              sx={{ width: "25%", textAlign: "center", fontWeight: "bold" }}
            >
              Location
            </TableCell>
            <TableCell
              sx={{ width: "25%", textAlign: "center", fontWeight: "bold" }}
            >
              Action
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
                sx={{ width: "25%", textAlign: "center" }}
              >
                {row.vendor}
              </TableCell>
              <TableCell sx={{ width: "25%", textAlign: "center" }}>
                {row.joined}
              </TableCell>
              <TableCell sx={{ width: "25%", textAlign: "center" }}>
                {row.location}
              </TableCell>
              <TableCell sx={{ width: "25%", textAlign: "center" }}>
                <div className="flex gap-5 justify-center text-xl text-[#ABABAB]">
                  <Link to={"/services/1/edit"}>
                    <FaRegEdit />
                  </Link>
                  <button>
                    <RiDeleteBin6Line />
                  </button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
