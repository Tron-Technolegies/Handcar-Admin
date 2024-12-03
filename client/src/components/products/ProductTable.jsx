import React, { useContext } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AdminContext } from "../../AdminContext";
import useGetAllProducts from "../../hooks/products/useGetAllProducts";
import Loading from "../Loading";

function createData(product, stock, price) {
  return { product, stock, price };
}

const rows = [
  createData(
    <Link to={"/products/1"} className="flex gap-2 items-center w-fit">
      <img
        src="/dashboard/product.png"
        className="w-[50px] h-[50px] rounded-md"
      ></img>
      <div className="flex items-start flex-col gap-1">
        <p className="font-medium">Dash Cam</p>
        <p className="text-sm text-[#7D7D7D]">A800S</p>
      </div>
    </Link>,
    35,
    "$35"
  ),
  createData(
    <Link to={"/products/2"} className="flex gap-2 items-center w-fit">
      <img
        src="/dashboard/product.png"
        className="w-[50px] h-[50px] rounded-md"
      ></img>
      <div className="flex items-start flex-col gap-1">
        <p className="font-medium">Dash Cam</p>
        <p className="text-sm text-[#7D7D7D]">A800S</p>
      </div>
    </Link>,
    40,
    "$35"
  ),
  createData(
    <Link to={"/products/3"} className="flex gap-2 items-center max-w-fit">
      <img
        src="/dashboard/product.png"
        className="w-[50px] h-[50px] rounded-md"
      ></img>
      <div className="flex items-start flex-col gap-1">
        <p className="font-medium">Dash Cam</p>
        <p className="text-sm text-[#7D7D7D]">A800S</p>
      </div>
    </Link>,
    50,
    "$35"
  ),
];

export default function ProductTable() {
  const { setShowDeletePopup } = useContext(AdminContext);
  const { loading, products } = useGetAllProducts();
  return loading ? (
    <Loading />
  ) : (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ backgroundColor: "#F9FAFB" }}>
            <TableCell
              sx={{ width: "40%", textAlign: "left", fontWeight: "bold" }}
            >
              Product
            </TableCell>
            <TableCell
              sx={{ width: "20%", textAlign: "center", fontWeight: "bold" }}
            >
              Stock
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
          {products?.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                component="th"
                scope="row"
                sx={{ width: "40%", textAlign: "center" }}
              >
                <Link
                  to={`/products/${row.id}`}
                  className="flex gap-2 items-center w-fit"
                >
                  <img
                    src={row.image}
                    className="w-[50px] h-[50px] rounded-md"
                  ></img>
                  <div className="flex items-start flex-col gap-1">
                    <p className="font-medium">{row.name}</p>
                    <p className="text-sm text-[#7D7D7D]">Model No</p>
                  </div>
                </Link>
                ,
              </TableCell>
              <TableCell sx={{ width: "20%", textAlign: "center" }}>
                {row.category}
              </TableCell>
              <TableCell sx={{ width: "20%", textAlign: "center" }}>
                {row.price}
              </TableCell>
              <TableCell sx={{ width: "20%", textAlign: "center" }}>
                <div className="flex gap-5 justify-center text-xl text-[#ABABAB]">
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
