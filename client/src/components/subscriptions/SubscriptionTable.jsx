import React, { useContext, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { GoDotFill } from "react-icons/go";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import useGetAllSubscriptions from "../../hooks/subscriptions/useGetAllSubscriptions";
import Loading from "../Loading";
import { AdminContext } from "../../AdminContext";

export default function SubscriptionTable({ search }) {
  const { loading, subs, refetch } = useGetAllSubscriptions({ search: search || "" });
  const { refetchTrigger, setShowDeletePopup, setDeleteId, setDeleteType } = useContext(AdminContext);

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
            <TableCell sx={{ textAlign: "center", fontWeight: "bold" }}>Email</TableCell>
            <TableCell sx={{ textAlign: "center", fontWeight: "bold" }}>Service</TableCell>
            <TableCell sx={{ textAlign: "center", fontWeight: "bold" }}>Plan</TableCell>
            <TableCell sx={{ textAlign: "center", fontWeight: "bold" }}>Assigned Vendors</TableCell>
            <TableCell sx={{ textAlign: "center", fontWeight: "bold" }}>Duration</TableCell>
            <TableCell sx={{ textAlign: "center", fontWeight: "bold" }}>Start</TableCell>
            <TableCell sx={{ textAlign: "center", fontWeight: "bold" }}>End</TableCell>
            <TableCell sx={{ textAlign: "center", fontWeight: "bold" }}>Status</TableCell>
            <TableCell sx={{ textAlign: "center", fontWeight: "bold" }}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {subs.map((row, index) => (
            <TableRow key={index} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell sx={{ textAlign: "center" }}>{row.email}</TableCell>
              <TableCell sx={{ textAlign: "center" }}>{row.service_type}</TableCell>
              <TableCell sx={{ textAlign: "center" }}>{row.plan}</TableCell>
              <TableCell sx={{ textAlign: "center" }}>
                {row.assigned_vendors?.length > 0 ? row.assigned_vendors.join(", ") : "Not Assigned"}
              </TableCell>
              <TableCell sx={{ textAlign: "center" }}>{row.duration}</TableCell>
              <TableCell sx={{ textAlign: "center" }}>{row.start_date}</TableCell>
              <TableCell sx={{ textAlign: "center" }}>{row.end_date}</TableCell>
              <TableCell sx={{ textAlign: "center" }}>
                <div>
                  {new Date(row.end_date) >= new Date() ? (
                    <p className="bg-[#A5FF9647] rounded-s-full rounded-e-full py-1 flex gap-2 items-center justify-center text-[#1E9609]">
                      <span className="text-xl"><GoDotFill /></span> Active
                    </p>
                  ) : (
                    <p className="bg-[#FBF3F3] rounded-s-full rounded-e-full py-1 flex gap-2 items-center justify-center text-[#A70909]">
                      <span className="text-xl"><GoDotFill /></span> Inactive
                    </p>
                  )}
                </div>
              </TableCell>
              <TableCell sx={{ textAlign: "center" }}>
                <div className="flex gap-5 justify-center text-xl text-[#ABABAB]">
                  <Link to={`/subscribers/${row.id}/edit`}>
                    <FaRegEdit />
                  </Link>
                  <button
                    onClick={() => {
                      setShowDeletePopup(true);
                      setDeleteId(row.id);
                      setDeleteType("subscriber");
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
