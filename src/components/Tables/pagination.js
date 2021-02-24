import React from 'react';
import TablePagination from '@material-ui/core/TablePagination';

export default function TablePaginationDemo(props) {
  const {page,rowsPerPage, handleChangePage,handleChangeRowsPerPage,count } = props
 

  return (
    <TablePagination
      component="div"
      count={count}
      page={page}
      onChangePage={handleChangePage}
      rowsPerPage={rowsPerPage}
      onChangeRowsPerPage={handleChangeRowsPerPage}
      style={{backgroundColor:"lightblue", color:"blue"}}
    />
  );
}