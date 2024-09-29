import {
  Avatar,
  Button,
  Card,
  CardHeader,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, findProducts } from "../../State/Product/Action";

const ProductTable = () => {
  const dispatch = useDispatch();
  const { customersProduct } = useSelector((store) => store);

 
  const [pageNumber, setPageNumber] = useState(1);
  const pageSize = 10;

  const handleProductDelete=(productId)=>{
    dispatch(deleteProduct(productId))
  }
  useEffect(() => {
    const data = {
      category: "",
      colors: [],
      sizes: [],
      minPrice: 0,
      maxPrice: 10000,
      minDiscount: 0,
      sort: "price_low",
      pageNumber: pageNumber,
      pageSize: pageSize,
      stock: "",
    };
    dispatch(findProducts(data));
  }, [dispatch, pageNumber,customersProduct.deletedProduct]);

  // Handle next page
  const handleNextPage = () => {
    if (customersProduct?.products?.content?.length === pageSize) {
      setPageNumber((prevPage) => prevPage + 1);
    }
  };

  // Handle previous page
  const handlePreviousPage = () => {
    if (pageNumber > 1) {
      setPageNumber((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className="p-5">
      <Card className="mt-2">
        <CardHeader title="All Products" />

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell align="center">Product Name</TableCell>
                <TableCell align="center">ID</TableCell>
                <TableCell align="right">Category</TableCell>
                <TableCell align="right">Price (₹)</TableCell>
                <TableCell align="right">Quantity</TableCell>
                <TableCell align="center">Delete</TableCell>
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
                  <TableCell align="right">

                    <Button onClick={()=>handleProductDelete(item._id)}  variant="outlined">Delete</Button>

                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Pagination Buttons */}
        <Box display="flex" justifyContent="space-between" p={2}>
          <Button
            variant="contained"
            onClick={handlePreviousPage}
            disabled={pageNumber === 1}
          >
            Previous
          </Button>
          <Button
            variant="contained"
            onClick={handleNextPage}
            disabled={customersProduct?.products?.content?.length < pageSize}
          >
            Next
          </Button>
        </Box>
      </Card>
    </div>
  );
};

export default ProductTable;
