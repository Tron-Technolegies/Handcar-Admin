import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { CiEdit } from "react-icons/ci";
import useGetAllOrders from "../../hooks/orders/useGetAllOrders";
import useUpdateOrderStatus from "../../hooks/orders/useUpdateOrderStatus";
import Loading from "../Loading";

export default function OrderTable({ search }) {
  const { loading, orders, refetch } = useGetAllOrders({
    search: search || "",
  });
  const [editId, setEditId] = useState("");
  const [status, setStatus] = useState("Pending");
  const { loading: updateLoading, updateStatus } = useUpdateOrderStatus();
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
                  <p className="max-w-[200px]">{row.address}</p>
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
                        {item.quantity} x {item.price} ={" "}
                        {parseInt(item.quantity) * parseInt(item.price)}
                      </p>
                    </div>
                  ))}
                </div>
              </TableCell>
              <TableCell sx={{ textAlign: "center" }}>
                {row.coupon ? (
                  <div className="flex flex-col gap-1">
                    <p>{row.coupon?.name}</p>
                    <p>{row.coupon?.coupon_code}</p>
                    <p>Discount: {row.coupon?.discount_percentage}%</p>
                  </div>
                ) : (
                  "N/A"
                )}
              </TableCell>
              <TableCell sx={{ textAlign: "center" }}>
                {row.coupon ? (
                  <div className="flex flex-col gap-1">
                    <p className="line-through">{row.total_price}</p>
                    <p>
                      {parseInt(row.total_price) -
                        parseInt(row.total_price) *
                          (parseInt(row.coupon.discount_percentage) / 100)}
                    </p>
                  </div>
                ) : (
                  row.total_price
                )}
              </TableCell>
              <TableCell sx={{ textAlign: "center" }}>
                {editId === row.order_id ? (
                  <div className="flex flex-col gap-2 justify-center items-center">
                    <select
                      value={status}
                      className="py-1 px-3 rounded-lg bg-[#F5F5F5] border border-gray-300 text-gray-900 h-11"
                      onChange={(e) => setStatus(e.target.value)}
                    >
                      <option value={"Pending"}>Pending</option>
                      <option value={"Confirmed"}>Confirmed</option>
                      <option value={"Shipped"}>Shipped</option>
                      <option value={"Delivered"}>Delivered</option>
                    </select>
                    <button
                      onClick={async () => {
                        await updateStatus({ order_id: row.order_id, status });
                        setEditId("");
                        setStatus("Pending");
                        refetch();
                      }}
                      className="px-3 py-1 rounded-md bg-blue-800 text-white"
                    >
                      Update
                    </button>
                    {updateLoading && <Loading />}
                  </div>
                ) : (
                  <div className="flex gap-2 justify-center items-center">
                    <p>{row.status}</p>
                    <p onClick={() => setEditId(row.order_id)}>
                      <CiEdit />
                    </p>
                  </div>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
