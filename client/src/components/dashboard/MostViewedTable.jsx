import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(no, product, price) {
  return { no, product, price };
}

const rows = [
  createData(
    1,
    <div className="flex gap-2 items-center w-fit">
      <img
        src="/dashboard/product.png"
        className="w-[50px] h-[50px] rounded-md"
      ></img>
      <div className="flex items-start flex-col gap-1">
        <p className="font-medium">Dash Cam</p>
        <p className="text-sm text-[#7D7D7D]">A800S</p>
      </div>
    </div>,
    "$35"
  ),
  createData(
    2,
    <div className="flex gap-2 items-center w-fit">
      <img
        src="/dashboard/product.png"
        className="w-[50px] h-[50px] rounded-md"
      ></img>
      <div className="flex items-start flex-col gap-1">
        <p className="font-medium">Dash Cam</p>
        <p className="text-sm text-[#7D7D7D]">A800S</p>
      </div>
    </div>,
    "$35"
  ),
  createData(
    3,
    <div className="flex gap-2 items-center max-w-fit">
      <img
        src="/dashboard/product.png"
        className="w-[50px] h-[50px] rounded-md"
      ></img>
      <div className="flex items-start flex-col gap-1">
        <p className="font-medium">Dash Cam</p>
        <p className="text-sm text-[#7D7D7D]">A800S</p>
      </div>
    </div>,
    "$35"
  ),
];

export default function MostViewedTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ backgroundColor: "#F9FAFB" }}>
            <TableCell
              sx={{ width: "30%", textAlign: "center", fontWeight: "bold" }}
            >
              No.
            </TableCell>
            <TableCell
              sx={{ width: "40%", textAlign: "left", fontWeight: "bold" }}
            >
              Product
            </TableCell>
            <TableCell
              sx={{ width: "30%", textAlign: "center", fontWeight: "bold" }}
            >
              Price
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                component="th"
                scope="row"
                sx={{ width: "30%", textAlign: "center" }}
              >
                {row.no}
              </TableCell>
              <TableCell sx={{ width: "40%", textAlign: "center" }}>
                {row.product}
              </TableCell>
              <TableCell sx={{ width: "30%", textAlign: "center" }}>
                {row.price}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
