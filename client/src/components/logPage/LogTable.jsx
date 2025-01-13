import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { GoDotFill } from "react-icons/go";
import useGetAllLogs from "../../hooks/logs/useGetAllLogs";

export default function LogTable() {
  const { loading, logs } = useGetAllLogs();

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ backgroundColor: "#F9FAFB" }}>
            <TableCell
              sx={{ width: "20%", textAlign: "center", fontWeight: "bold" }}
            >
              Username
            </TableCell>
            <TableCell
              sx={{ width: "20%", textAlign: "center", fontWeight: "bold" }}
            >
              Date
            </TableCell>
            <TableCell
              sx={{ width: "20%", textAlign: "center", fontWeight: "bold" }}
            >
              Time
            </TableCell>
            <TableCell
              sx={{ width: "20%", textAlign: "center", fontWeight: "bold" }}
            >
              Communication
            </TableCell>
            <TableCell
              sx={{ width: "20%", textAlign: "center", fontWeight: "bold" }}
            >
              Vendor
            </TableCell>
            {/* <TableCell
              sx={{ width: "14%", textAlign: "center", fontWeight: "bold" }}
            >
              Service Category
            </TableCell> */}
            {/* <TableCell
              sx={{ width: "14%", textAlign: "center", fontWeight: "bold" }}
            >
              Status
            </TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {logs.map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                component="th"
                scope="row"
                sx={{ width: "20%", textAlign: "center" }}
              >
                {"UserName"}
              </TableCell>
              <TableCell sx={{ width: "20%", textAlign: "center" }}>
                {row.timestamp.slice(0, 10)}
              </TableCell>
              <TableCell sx={{ width: "20%", textAlign: "center" }}>
                {row.timestamp.slice(11)}
              </TableCell>
              <TableCell sx={{ width: "20%", textAlign: "center" }}>
                {row.action}
              </TableCell>
              <TableCell sx={{ width: "20%", textAlign: "center" }}>
                {row.service_name}
              </TableCell>
              {/* <TableCell sx={{ width: "14%", textAlign: "center" }}>
                {row.service}
              </TableCell>
              <TableCell sx={{ width: "14%", textAlign: "center" }}>
                <div>
                  {row.status === "Accepted" ? (
                    <p className="bg-[#A5FF9647] rounded-s-full rounded-e-full py-1 flex gap-2 items-center justify-center text-[#1E9609]">
                      <span className="text-xl">
                        <GoDotFill />
                      </span>
                      Accepted
                    </p>
                  ) : row.status === "Declined" ? (
                    <p className="bg-[#FBF3F3] rounded-s-full rounded-e-full py-1 flex gap-2 items-center justify-center text-[#A70909]">
                      <span className="text-xl">
                        <GoDotFill />
                      </span>
                      Declined
                    </p>
                  ) : (
                    <p className="bg-[#FFF9C1] rounded-s-full rounded-e-full py-1 flex gap-2 items-center justify-center text-[#FFB800]">
                      <span className="text-xl">
                        <GoDotFill />
                      </span>
                      Pending
                    </p>
                  )}
                </div>
              </TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
