import React, { useContext, useEffect } from "react";
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
import useGetAllVendors from "../../hooks/vendors/useGetAllVendors";
import Loading from "../Loading";

export default function VendorTable({ search }) {
  const { setShowDeletePopup, setDeleteId, setDeleteType, refetchTrigger } =
    useContext(AdminContext);
  const { loading, vendors, refetch } = useGetAllVendors({ search });

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
          {vendors.map((row, index) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                component="th"
                scope="row"
                sx={{ width: "25%", textAlign: "center" }}
              >
                {row.name}
              </TableCell>
              <TableCell sx={{ width: "25%", textAlign: "center" }}>
                {row.price}
              </TableCell>
              <TableCell sx={{ width: "25%", textAlign: "center" }}>
                {row.location ? row.location : "N/A"}
              </TableCell>
              <TableCell sx={{ width: "25%", textAlign: "center" }}>
                <div className="flex gap-5 justify-center text-xl text-[#ABABAB]">
                  <Link to={`/services/${row.id}/edit`}>
                    <FaRegEdit />
                  </Link>
                  <button
                    onClick={() => {
                      setShowDeletePopup(true);
                      setDeleteId(row.id);
                      setDeleteType("vendor");
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
