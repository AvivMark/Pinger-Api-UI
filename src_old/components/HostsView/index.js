import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


const API_URL = '/getGroups';

function HostsView() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      fetchData();
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  const fetchData = () => {
    //fetch data here
    fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
  }

  return ( 
    <TableContainer component={Paper}>
    <Table sx={{ maxWidth: 350 }} aria-label="customized table">
      <TableHead>
        <TableRow>
          <StyledTableCell>Servers [{data.length}]</StyledTableCell>
          <StyledTableCell align="center">IPS</StyledTableCell>
          <StyledTableCell align="center">Status</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((host) => (
          <StyledTableRow key={host.ID} style={{ backgroundColor: host.IsAlive ? 'green' : 'red'}}>
            <StyledTableCell component="th" scope="row">{host.Hostname}</StyledTableCell>
            <StyledTableCell align="center">{host.HostIP}</StyledTableCell>
            <StyledTableCell align="center">{host.IsAlive ? 'Online': 'Offline'}</StyledTableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  );
}

export default HostsView;