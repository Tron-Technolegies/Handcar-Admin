import React, { useContext } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AdminContext } from "../../AdminContext";
import useGetAllPlans from "../../hooks/plans/useGetAllPlans";

export default function PlanTable() {
  const { loading, plans } = useGetAllPlans();
  const { setShowDeletePopup } = useContext(AdminContext);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ backgroundColor: "#F9FAFB" }}>
            <TableCell
              sx={{ width: "20%", textAlign: "center", fontWeight: "bold" }}
            >
              Plan Name
            </TableCell>
            <TableCell
              sx={{ width: "20%", textAlign: "center", fontWeight: "bold" }}
            >
              Service Type
            </TableCell>
            <TableCell
              sx={{ width: "20%", textAlign: "center", fontWeight: "bold" }}
            >
              Duration
            </TableCell>
            <TableCell
              sx={{ width: "20%", textAlign: "center", fontWeight: "bold" }}
            >
              Price
            </TableCell>
            <TableCell
              sx={{ width: "20%", textAlign: "center", fontWeight: "bold" }}
            >
              Action
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {plans.map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                component="th"
                scope="row"
                sx={{ width: "20%", textAlign: "center" }}
              >
                {row.planName}
              </TableCell>
              <TableCell sx={{ width: "20%", textAlign: "center" }}>
                {row.serviceType}
              </TableCell>
              <TableCell sx={{ width: "20%", textAlign: "center" }}>
                {row.Duration}
              </TableCell>
              <TableCell sx={{ width: "20%", textAlign: "center" }}>
                {row.price}
              </TableCell>
              <TableCell sx={{ width: "20%", textAlign: "center" }}>
                <div className="flex gap-5 justify-center text-xl text-[#ABABAB]">
                  <Link to={"/plans/1/edit"}>
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
