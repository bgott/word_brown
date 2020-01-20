import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import FilterListIcon from '@material-ui/icons/FilterList';
import Divider from '@material-ui/core/Divider';

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

const search_text = "Employee's first name, last name or SSN";
const search_input_props = {
    endAdornment: (
        <InputAdornment position="start">
            <SearchIcon />
        </InputAdornment>
    ),
};

const CustomTablePagination = () => (
    <>
        <div className="custom-table-pagination">
            <div className="showing-entries">
                Showing 1–10 of 60 entries
                <Divider orientation="vertical" />
                Show
                <FormControl variant="outlined">
                    <Select value={10}>
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={25}>25</MenuItem>
                        <MenuItem value={"All"}>All</MenuItem>
                    </Select>
                </FormControl>
                entries
            </div>
            <div className="page-selection">
                <Button className="ul">Previous</Button>
                <Button variant="outlined">1</Button>
                <Button className="ul">2</Button>
                <Button>...</Button>
                <Button>5</Button>
                <Button>6</Button>
                <Button className="ul">Next</Button>
            </div>
        </div>
    </>
)



const EmployeeDatatable = () => (

    <>

        <div className="employee-section">
            <div className="table-data-control">
                <form className="search" noValidate autoComplete="off">
                    <TextField className="search-input" label={search_text} variant="outlined" InputProps={search_input_props}/>
                </form>
                <ButtonGroup size="medium">
                    <Button>
                        <AddIcon />
                    </Button>
                    <Button>
                        <FilterListIcon />
                    </Button>
                </ButtonGroup>
            </div>
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
            <CustomTablePagination />
        </div>
    </>
)

export default EmployeeDatatable
