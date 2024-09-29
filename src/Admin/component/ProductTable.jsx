import {
  Avatar,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findProducts } from "../../State/Product/Action";

const ProductTable = () => {
  const dispatch = useDispatch();

  // Access customersProduct from Redux store
  const { customersProduct } = useSelector((store) => store);
  console.log("customersProduct ----", customersProduct);

  useEffect(() => {
    const data = {
      category: "",
      colors: [],
      sizes: [],
      minPrice: 0,
      maxPrice: 10000,
      minDiscount: 0,
      sort: "price_low",
      pageNumber: 1,
      pageSize: 10,
      stock: "",
    };
    dispatch(findProducts(data));
  }, [dispatch]);

  return (
    <div className="p-5">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>

              <TableCell>Image</TableCell>
              <TableCell>Product Name</TableCell>
              <TableCell align="center">ID</TableCell>
              <TableCell align="right">Category</TableCell>
              <TableCell align="right">Price (₹)</TableCell>
              <TableCell align="right">Quantity</TableCell>

            </TableRow>
            
          </TableHead>
          <TableBody>
            {customersProduct?.products?.content?.map((item) => (
              <TableRow
                key={item._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="right">
                  <Avatar
                    src={item.imageUrl || "/placeholder-image.png"}
                    alt={item.title}
                  />
                </TableCell>
                <TableCell component="th" scope="row">
                  {item.title}
                </TableCell>
                <TableCell align="center">{item._id}</TableCell>
                <TableCell align="right">{item.category?.name}</TableCell>
                <TableCell align="right">{item.price}</TableCell>
                <TableCell align="right">{item.quantity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ProductTable;
