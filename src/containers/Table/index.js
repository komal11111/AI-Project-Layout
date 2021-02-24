import React, { Fragment, useEffect, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import classNames from 'classnames';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import styles from '../../components/Tables/tableStyle-jss';
import { Link } from 'react-router-dom';


import MultiSearch from '../../components/MultiSearch'
import Pagination from '../../components/Tables/pagination'

const StrippedTable = (props) => {
  const { classes } = props;

  const history = useHistory();
  const [faultData, setFaultData] = useState([]);
  const [filterField, setfilterField] = useState([]);
  const [page, setPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [filterData, setFilterData] = useState(
    {
      "event_type": -1,
      "camera_id": -1,
      "url": -1,
      "start_date": -1,
      "end_date": -1,

    });



    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };
    console.log("page", rowsPerPage)
  const applyFilter = (searchData) => {
    fetch("http://localhost:5000/retrieve_violation",
      {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(searchData)
      })
      .then(response => response.json())
      .then(data => {
        setFaultData(data);
      });
  }

  useEffect(() => {
    fetch("http://localhost:5000/retrieve_violation",
      {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(filterData)
      })
      .then(response => response.json())
      .then(data => {
        setFaultData(data);
        setPage(data.page)
        setRowsPerPage(data.limit)
      });
  }, []);

  return (
    <Fragment>
      <div styles={{marginTop:16, marginBottom:16 }}>
          <MultiSearch setfilterField={setfilterField} filterField={filterField} applyFilter={applyFilter} 
          />
        </div> 

      <div className={classes.rootTable}>
        <Table className={classNames(classes.table, classes.stripped)}>
          <TableHead>
            <TableRow className={classes.rowheader}>
              <TableCell className={classes.headerText} padding="dense">Event Type</TableCell>
              <TableCell className={classes.headerText} align="center">Date And Time </TableCell>
              <TableCell className={classes.headerText} align="center">URL Address </TableCell>
              <TableCell className={classes.headerText} align="center">Camera Id</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {faultData.data &&  faultData.data.map(n => ([
              <TableRow key={n.id}>
                <TableCell padding="dense">{n.Event_Type}</TableCell>
                <TableCell align="center">{n.event_timestamp}</TableCell>
                <TableCell align="center">
                <a
               href={n.image_url}
                
                > 
                Click For Image 
                </a>
                    </TableCell>
                <TableCell align="center">{n.camera}</TableCell>
              </TableRow>
            ]))}
          </TableBody>
        </Table>
        <Pagination  page={page} rowsPerPage={rowsPerPage } handleChangePage={handleChangePage} handleChangeRowsPerPage={handleChangeRowsPerPage} count={faultData.totalData} />
      </div>

    </Fragment>
  );
}



export default withStyles(styles)(StrippedTable);
