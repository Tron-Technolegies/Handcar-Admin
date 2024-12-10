import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { GoDotFill } from "react-icons/go";
import useGetAllSubscriptions from "../../hooks/subscriptions/useGetAllSubscriptions";
import Loading from "../Loading";

export default function SubscriptionTable() {
  const { loading, subs } = useGetAllSubscriptions();

  return loading ? (
    <Loading />
  ) : (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ backgroundColor: "#F9FAFB" }}>
            <TableCell
              sx={{ width: "16%", textAlign: "center", fontWeight: "bold" }}
            >
              Email
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
          {subs.map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                component="th"
                scope="row"
                sx={{ width: "16%", textAlign: "center" }}
              >
                {row.email}
              </TableCell>
              <TableCell sx={{ width: "14%", textAlign: "center" }}>
                {row.service_type}
              </TableCell>
              <TableCell sx={{ width: "14%", textAlign: "center" }}>
                {row.plan}
              </TableCell>
              <TableCell sx={{ width: "14%", textAlign: "center" }}>
                {row.duration}
              </TableCell>
              <TableCell sx={{ width: "14%", textAlign: "center" }}>
                {row.start_date}
              </TableCell>
              <TableCell sx={{ width: "14%", textAlign: "center" }}>
                {row.end_date}
              </TableCell>
              <TableCell sx={{ width: "14%", textAlign: "center" }}>
                <div>
                  {new Date(row.end_date) >= new Date() ? (
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
