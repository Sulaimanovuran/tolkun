import React from 'react';
import ProductModal from "./ProductModal";
import TableCell from "@mui/material/TableCell";

const ProductEdit = ({id}) => (
    <TableCell>
      <ProductModal
        modalTitle={"Edit product"}
        id={id}
      />
    </TableCell>
);

export default ProductEdit;