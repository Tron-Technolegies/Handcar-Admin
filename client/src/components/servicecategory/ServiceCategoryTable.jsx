import React, { useContext, useEffect } from "react";
import { AdminContext } from "../../AdminContext";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import useGetAllServiceCategories from "../../hooks/servicecategory/useGetAllServiceCategories";
import Loading from "../Loading";

export default function ServiceCategoryTable() {
  const { setShowDeletePopup, setDeleteId, setDeleteType, refetchTrigger } =
    useContext(AdminContext);
  const { loading, categories, refetch } = useGetAllServiceCategories();

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
              sx={{ width: "50%", textAlign: "center", fontWeight: "bold" }}
            >
              Category Name
            </TableCell>
            <TableCell
              sx={{ width: "50%", textAlign: "center", fontWeight: "bold" }}
            >
              Action
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categories.map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                component="th"
                scope="row"
                sx={{ width: "50%", textAlign: "center" }}
              >
                {row.name}
              </TableCell>
              <TableCell sx={{ width: "50%", textAlign: "center" }}>
                <div className="flex gap-5 justify-center text-xl text-[#ABABAB]">
                  <Link to={`/service_category/${row.id}/edit`}>
                    <FaRegEdit />
                  </Link>
                  <button
                    onClick={() => {
                      setShowDeletePopup(true);
                      setDeleteId(row.id);
                      setDeleteType("service_category");
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
