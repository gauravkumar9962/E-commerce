import React, { useContext } from "react";
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { MdDeleteOutline, MdOutlineMarkEmailRead } from "react-icons/md";
import { MdOutlineFilterList } from "react-icons/md";
import { visuallyHidden } from '@mui/utils';
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import InputLabel from '@mui/material/InputLabel';
import SearchBox from "../../Components/SearchBox";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { MyContext } from "../../App";
import { FaPhoneAlt } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

function createData(id, image, name, email, phoneNo) {
    return {
        id,
        image,
        name,
        email,
        phoneNo,
    };
}

const rows = [
    createData(1, 'Images', 'Vikas Kumar', 'vikas@email.com', '+91 839288210'),
    createData(2, 'Images', 'Vikas Kumar', 'vikas@email.com', '+91 839288210'),
    createData(3, 'Images', 'Vikas Kumar', 'vikas@email.com', '+91 839288210'),
    createData(4, 'Images', 'Vikas Kumar', 'vikas@email.com', '+91 839288210'),
];

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

const headCells = [
    {
        id: 'Image',
        numeric: false,
        disablePadding: true,
        label: 'USER Image',
    },
    {
        id: 'Name',
        numeric: true,
        disablePadding: false,
        label: 'USER Name',
    },
    {
        id: 'Email',
        numeric: true,
        disablePadding: false,
        label: 'USER Email',
    },
    {
        id: 'Phone',
        numeric: true,
        disablePadding: false,
        label: 'USER Phone No.',
    },
    {
        id: 'created',
        numeric: true,
        disablePadding: false,
        label: 'USER Created',
    },
];

function EnhancedTableHead(props) {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
        props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead className="bg-gray-100">
            <TableRow>
                <TableCell padding="checkbox" className="pl-15! pr-15!">
                    <Checkbox
                        size="small"
                        color="primary"
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        slotProps={{
                            input: { 'aria-label': 'select all desserts' },
                        }}
                    />
                </TableCell>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
    const { numSelected } = props;
    return (
        <Toolbar
            sx={[
                {
                    pl: { sm: 2 },
                    pr: { xs: 1, sm: 1 },
                },
                numSelected > 0 && {
                    bgcolor: (theme) =>
                        alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
                },
            ]}
        >
            {numSelected > 0 ? (
                <Typography
                    variant="subtitle1"
                    component="div"
                    sx={{
                        color: 'inherit',
                        flex: '1 1 100%',
                    }}
                >
                    {numSelected} selected
                </Typography>
            ) : (
                <Typography
                    sx={{ flex: '1 1 100%' }}
                    variant="h6"
                    id="tableTitle"
                    component="div"
                >
                    0 Selected
                </Typography>
            )}
            {numSelected > 0 ? (
                <Tooltip title="Delete">
                    <IconButton>
                        <MdDeleteOutline />
                    </IconButton>
                </Tooltip>
            ) : (
                <Tooltip title="Filter list">
                    <IconButton>
                        <MdOutlineFilterList />
                    </IconButton>
                </Tooltip>
            )}
        </Toolbar>
    );
}

EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
};



const Users = () => {

    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const context = useContext(MyContext);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelected = rows.map((n) => n.id);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, id) => {
        const selectedIndex = selected.indexOf(id);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }
        setSelected(newSelected);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const visibleRows = React.useMemo(
        () =>
            [...rows]
                .sort(getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
        [order, orderBy, page, rowsPerPage],
    );

    const id = React.useId();
    const [categoryFilterVal, setCategoryFilterVal] = React.useState('');

    const handleChangeCatFilter = (event) => {
        setCategoryFilterVal(event.target.value);
    };

    return (
        <>
            <div className="card bg-white shadow-md rounded-md p-5 flex items-center justify-between">
                <h1 className="font-[700] text-[20px] text-gray-800">Products</h1>
                <div className="col1 w-[20] ml-auto">
                    <SearchBox />
                </div>
            </div>
            <div className="relative shadow-lg overflow-x-auto !mt-5">
                <Box sx={{ width: '100%' }}>
                    <Paper sx={{ width: '100%', mb: 2 }}>
                        <EnhancedTableToolbar numSelected={selected.length} />
                        <div className=" flex items-center justify-between m-2 ml-5 mr-5">
                            <FormControl sx={{ minWidth: 200 }} className="bg-white">
                                <InputLabel id={`${id}-label`}>Category</InputLabel>
                                <Select
                                    className="w-[225px]"
                                    size="medium"
                                    aria-describedby={`${id}-helper-text`}
                                    labelId={`${id}-label`}
                                    id={id}
                                    value={categoryFilterVal}
                                    label="Category"
                                    onChange={handleChangeCatFilter}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Men</MenuItem>
                                    <MenuItem value={20}>Women</MenuItem>
                                    <MenuItem value={30}>Kids</MenuItem>
                                </Select>
                            </FormControl>
                            <div className="flex items-center gap-3">
                                <Button className="btn-green">Export</Button>
                                <Button className="btn-blue" onClick={() => context.setIsOpenFullScreenPanel({
                                    open: true,
                                    model: 'Add Product'
                                })}>Add Product</Button>
                            </div>
                        </div>
                        <TableContainer>
                            <Table
                                sx={{ minWidth: 750, '& .MuiTableCell-root': { padding: '15px 24px' } }}
                                aria-labelledby="tableTitle"
                                size={dense ? 'small' : 'medium'}
                            >
                                <EnhancedTableHead
                                    numSelected={selected.length}
                                    order={order}
                                    orderBy={orderBy}
                                    onSelectAllClick={handleSelectAllClick}
                                    onRequestSort={handleRequestSort}
                                    rowCount={rows.length}
                                />
                                <TableBody>
                                    {visibleRows.map((row, index) => {
                                        const isItemSelected = selected.includes(row.id);
                                        const labelId = `enhanced-table-checkbox-${index}`;

                                        return (
                                            <TableRow className="bg-gradient-to-r from-red-100 to-green-100">
                                                <TableCell padding="checkbox" className="pl-15!">
                                                    <Checkbox
                                                        size="small"
                                                        color="primary"
                                                        checked={isItemSelected}
                                                        onClick={(event) => handleClick(event, row.id)}
                                                        slotProps={{
                                                            input: { 'aria-labelledby': labelId },
                                                        }}
                                                    />
                                                </TableCell>
                                                <TableCell
                                                    component="th"
                                                    id={labelId}
                                                    scope="row"
                                                    padding="none"
                                                >
                                                    <div className="flex items-center gap-4">

                                                        <div className="img w-[65px] h-[65px] overflow-hidden rounded-md group">
                                                            <Link to={"product/93982"}>
                                                                <img src="https://i.pinimg.com/736x/3a/2c/bd/3a2cbdd0e7995b011e7fa1da1c10c60d.jpg" className="w-full group-hover:scale-110 transition-all" /></Link>
                                                        </div>
                                                    </div>
                                                </TableCell>
                                                <TableCell ><span className="flex items-center gap-2"><MdOutlineMarkEmailRead className="text-[18px]" />{row.name}</span></TableCell>
                                                <TableCell ><span className="flex items-center gap-2"><FaPhoneAlt />{row.email}</span></TableCell>
                                                <TableCell >{row.phoneNo}</TableCell>
                                                <TableCell ><span className="flex items-center gap-2"><SlCalender />10-12-2024</span></TableCell>
                                            </TableRow>
                                        );
                                    })}
                                    {emptyRows > 0 && (
                                        <TableRow
                                            style={{
                                                height: (dense ? 33 : 53) * emptyRows,
                                            }}
                                        >
                                            <TableCell colSpan={6} />
                                        </TableRow>
                                    )}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25]}
                            component="div"
                            count={rows.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </Paper>
                </Box>
            </div>
        </>
    )
}

export default Users;