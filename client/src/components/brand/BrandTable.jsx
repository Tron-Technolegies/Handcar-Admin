import React, { useContext } from "react";
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
import { AdminContext } from "../../AdminContext";

function createData(brand) {
  return { brand };
}

const rows = [
  createData("Brand 1"),
  createData("Brand 2"),
  createData("Brand 3"),
  createData("Brand 4"),
];

export default function BrandTable() {
  const { setShowDeletePopup } = useContext(AdminContext);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ backgroundColor: "#F9FAFB" }}>
            <TableCell
              sx={{ width: "50%", textAlign: "center", fontWeight: "bold" }}
            >
              Brand Name
            </TableCell>
            <TableCell
              sx={{ width: "50%", textAlign: "center", fontWeight: "bold" }}
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
                sx={{ width: "50%", textAlign: "center" }}
              >
                {row.brand}
              </TableCell>
              <TableCell sx={{ width: "50%", textAlign: "center" }}>
                <div className="flex gap-5 justify-center text-xl text-[#ABABAB]">
                  <Link to={"/brand/1/edit"}>
                    <FaRegEdit />
                  </Link>
                  <button onClick={() => setShowDeletePopup(true)}>
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
