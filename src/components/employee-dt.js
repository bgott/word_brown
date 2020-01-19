import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

function createData(name, ssn, status, type) {
  return { name, ssn, status, type };
}

const rows = [
  createData('Bertram Gilfoyle', 'XXXX–XX–1234', 'Completed', 'Online'),
  createData('Dinesh Chugtai', 'XXXX–XX–2345', 'Paper', 'Paper'),
  createData('Donald Dunn', 'XXXX–XX–3456', 'Incomplete', 'Online'),
  createData('Erlich Bachman', 'XXXX–XX–5678', 'Not Started', 'Online'),
  createData('Gavin Belson', 'XXXX–XX–6789', 'Completed', 'Online'),
  createData('Jian Yang', 'XXXX–XX–7890', 'Not Started', 'Online'),
  createData('Laurie Bream', 'XXXX–XX–8901', 'Incomplete', 'Online'),
  createData('Monica Hall', 'XXXX–XX–9012', 'Completed', 'Online'),
  createData('Nelson Bighetti', 'XXXX–XX–0123', 'Completed', 'Online'),
  createData('Richard Hendricks', 'XXXX–XX–1234', 'Completed', 'Online'),
];

const EmployeeDatatable = () => (
    <>
        <div className="employee-section">
            <TableContainer component={Paper}>
                <Table className="table" aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Employee Name</TableCell>
                            <TableCell align="left">SSN</TableCell>
                            <TableCell align="left">Enrollment Status</TableCell>
                            <TableCell align="left">Enrollment Type</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="left">{row.ssn}</TableCell>
                                <TableCell align="left">{row.status}</TableCell>
                                <TableCell align="left">
                                    <FormControl variant="outlined">
                                        <Select
                                            labelId="demo-simple-select-filled-label"
                                            id="demo-simple-select-filled"
                                            value={row.type}
                                            className="type-select"
                                        >
                                            <MenuItem value={row.type}>{row.type}</MenuItem>
                                        </Select>
                                    </FormControl>
                                </TableCell>
                            </TableRow>
                      ))}
                  </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count="60"
                rowsPerPage="10"
                page="0"
                nextIconButtonText="Next"
            />
        </div>
    </>
)

export default EmployeeDatatable
