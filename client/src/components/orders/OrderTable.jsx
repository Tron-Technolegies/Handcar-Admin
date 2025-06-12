import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import useGetAllOrders from "../../hooks/orders/useGetAllOrders";

export default function OrderTable({ search }) {
  const { loading, orders } = useGetAllOrders({ search: search || "" });
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ backgroundColor: "#F9FAFB" }}>
            <TableCell sx={{ textAlign: "center", fontWeight: "bold" }}>
              Order ID
            </TableCell>
            <TableCell sx={{ textAlign: "center", fontWeight: "bold" }}>
              Ordered By
            </TableCell>
            <TableCell sx={{ textAlign: "center", fontWeight: "bold" }}>
              Ordered At
            </TableCell>
            <TableCell sx={{ textAlign: "center", fontWeight: "bold" }}>
              Items
            </TableCell>
            <TableCell sx={{ textAlign: "center", fontWeight: "bold" }}>
              coupons
            </TableCell>
            <TableCell sx={{ textAlign: "center", fontWeight: "bold" }}>
              Total Price
            </TableCell>
            <TableCell sx={{ textAlign: "center", fontWeight: "bold" }}>
              Status
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((row, index) => (
            <TableRow
              key={row.order_id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell sx={{ textAlign: "center" }}>{row.order_id}</TableCell>
              <TableCell sx={{ textAlign: "center" }}>
                <div className="flex flex-col items-center gap-1">
                  <p>{row.name}</p>
                  <p>{row.contact}</p>
                  <p>{row.address}</p>
                </div>
              </TableCell>
              <TableCell sx={{ textAlign: "center" }}>
                {row.created_at}
              </TableCell>
              <TableCell sx={{ textAlign: "center" }}>
                <div className="flex flex-col items-center gap-3">
                  {row.items.map((item) => (
                    <div key={item.id} className="flex flex-col gap-1">
                      <p>{item.name}</p>
                      <p>
                        {item.quantity} x {item.price}
                      </p>
                    </div>
                  ))}
                </div>
              </TableCell>
              <TableCell sx={{ textAlign: "center" }}>
                {row.total_price}
              </TableCell>
              <TableCell sx={{ textAlign: "center" }}>
                {row.total_price}
              </TableCell>
              <TableCell sx={{ textAlign: "center" }}>{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
