import React from "react";
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
import { MdDeleteOutline } from "react-icons/md";
import { MdOutlineFilterList } from "react-icons/md";
import { visuallyHidden } from '@mui/utils';
import { Link } from "react-router-dom";
import ProgressBar from "../ProgressBar";
import { AiOutlineEdit } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa6";
import { GoTrash } from "react-icons/go";
import Button from "@mui/material/Button";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function createData(id, calories, fat, carbs, protein, kk) {
  return {
    id,
    calories,
    fat,
    carbs,
    protein,
    kk,
  };
}

const rows = [
  createData(1, 'Electronics', 'Women', 'AnimeClub', 'dd', 'dd'),
  createData(2, 'Electronics', 'Women', 'AnimeClub', 'dd', 'dd'),
  createData(3, 'Electronics', 'Women', 'AnimeClub', 'dd', 'dd'),
  createData(4, 'Electronics', 'Women', 'AnimeClub', 'dd', 'dd'),
  createData(5, 'Electronics', 'Women', 'AnimeClub', 'dd', 'dd'),
  createData(6, 'Electronics', 'Women', 'AnimeClub', 'dd', 'dd'),
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
    id: 'Product',
    numeric: false,
    disablePadding: true,
    label: 'Product',
  },
  {
    id: 'Category',
    numeric: true,
    disablePadding: false,
    label: 'Category',
  },
  {
    id: 'Sub Category',
    numeric: true,
    disablePadding: false,
    label: 'Sub Category',
  },
  {
    id: 'Brand',
    numeric: true,
    disablePadding: false,
    label: 'Brand',
  },
  {
    id: 'Price',
    numeric: true,
    disablePadding: false,
    label: 'Price',
  },
  {
    id: 'Sales',
    numeric: true,
    disablePadding: false,
    label: 'Sales',
  },
  {
    id: 'Action',
    numeric: true,
    disablePadding: false,
    label: 'Action',
  },
];

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead className="bg-gray-50">
      <TableRow>
        <TableCell padding="checkbox">
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
          Sales
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


const Material_UI_Table = () => {

  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

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
      <div className="relative overflow-x-auto !mt-5 bg-white">
        <Box sx={{ width: '100%' }}>
          <Paper sx={{ width: '100%', mb: 2 }}>
            <EnhancedTableToolbar numSelected={selected.length} />
            <div className=" flex items-center justify-between m-2 ml-5 mr-5">
              <FormControl sx={{ minWidth: 200 }}>
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
                <Button className="btn-blue">Add Product</Button>
              </div>
            </div>
            <TableContainer>
              <Table
                sx={{ minWidth: 750 }}
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
                      <TableRow>
                        <TableCell padding="checkbox">
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
                            <div className="info w-[75%]">
                              <Link to={"product/93982"}>
                                <h3 className="font-[600] text-[13px]">✧ Columbina Hyposelenia (Damselette/Kuutar) ✧</h3>
                              </Link>

                            </div>
                          </div>
                        </TableCell>
                        <TableCell >{row.calories}</TableCell>
                        <TableCell >{row.fat}</TableCell>
                        <TableCell >{row.carbs}</TableCell>
                        <TableCell >
                          <span className="line-through text-gray-500 text-[15px] font-[500]">$50.00</span><span className="text-[red] text-[15px] font-[600]"> / $58.00</span>
                        </TableCell>
                        <TableCell >
                          <p className="text-[14px]"><span className="font-[600]">234</span> Sales</p>
                          <ProgressBar value={50} type="success" />
                        </TableCell>
                        <TableCell >
                          <div className='flex items-center gap-3'>
                            <Tooltip title="Edit" placement="top">
                              <Button className="w-[35px]! h-[35px]! min-w-[35px]! border! border-[rgba(0,0,0,0.2)]! rounded-full! hover:bg-[#f1f1f1]!">
                                <AiOutlineEdit className='text-[rgba(0,0,0,0.7)] text-[20px]' />
                              </Button>
                            </Tooltip>

                            <Tooltip title="View" placement="top">
                              <Button className="w-[35px]! h-[35px]! min-w-[35px]! border! border-[rgba(0,0,0,0.2)]! rounded-full! hover:bg-[#f1f1f1]!">
                                <FaRegEye className='text-[rgba(0,0,0,0.7)] text-[20px]' />
                              </Button>
                            </Tooltip>

                            <Tooltip title="Remove" placement="top">
                              <Button className="w-[35px]! h-[35px]! min-w-[35px]! border! border-[rgba(0,0,0,0.2)]! rounded-full! hover:bg-[#f1f1f1]!">
                                <GoTrash className='text-[rgba(0,0,0,0.7)] text-[20px]' />
                              </Button>
                            </Tooltip>

                          </div>
                        </TableCell>
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
export default Material_UI_Table;