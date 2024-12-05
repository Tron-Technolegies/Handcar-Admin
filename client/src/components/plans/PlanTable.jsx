import React, { useContext, useEffect } from "react";
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
import Loading from "../Loading";

export default function PlanTable() {
  const { loading, plans, refetch } = useGetAllPlans();
  const { setShowDeletePopup, setDeleteId, setDeleteType, refetchTrigger } =
    useContext(AdminContext);

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
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                component="th"
                scope="row"
                sx={{ width: "20%", textAlign: "center" }}
              >
                {row.name}
              </TableCell>
              <TableCell sx={{ width: "20%", textAlign: "center" }}>
                {row.service_type}
              </TableCell>
              <TableCell sx={{ width: "20%", textAlign: "center" }}>
                {row.duration} months
              </TableCell>
              <TableCell sx={{ width: "20%", textAlign: "center" }}>
                {row.price}
              </TableCell>
              <TableCell sx={{ width: "20%", textAlign: "center" }}>
                <div className="flex gap-5 justify-center text-xl text-[#ABABAB]">
                  <Link to={`/plans/${row.id}/edit`}>
                    <FaRegEdit />
                  </Link>
                  <button
                    onClick={() => {
                      setShowDeletePopup(true);
                      setDeleteId(row.id);
                      setDeleteType("plan");
                    }}
                  >
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
