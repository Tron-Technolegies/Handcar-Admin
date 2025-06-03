import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import useGetAllProducts from "../../hooks/products/useGetAllProducts";
import Loading from "../Loading";

const rows = [];

export default function LatestProducts() {
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
              sx={{ width: "30%", textAlign: "center", fontWeight: "bold" }}
            >
              Stock
            </TableCell>
            <TableCell
              sx={{ width: "30%", textAlign: "center", fontWeight: "bold" }}
            >
              Price
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.slice(0, 4).map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                component="th"
                scope="row"
                sx={{ width: "40%", textAlign: "center" }}
              >
                <div className="flex gap-3 items-center">
                  <img
                    src={row.image}
                    className="w-10 object-cover rounded-md"
                  />
                  <p>{row.name}</p>
                </div>
              </TableCell>
              <TableCell sx={{ width: "30%", textAlign: "center" }}>
                {row.stock}
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
