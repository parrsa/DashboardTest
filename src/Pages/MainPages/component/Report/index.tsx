import * as React from 'react';
import { Grid, Typography, Button, } from "@mui/material";
import colors from "../../../../assets/theme/base/colors";
import MInput from '../../../../components/Minput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import MSelectBox from '../../../../components/MselectBox';
import MTButton from '../../../../components/Mbutton';
import MainLatout from '../../../../components/layouts/mainLayout/index'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

interface Column {
    id: 'name' | 'code' | 'population' | 'size' | 'density';
    label: string;
    minWidth?: number;
    align?: 'right';
    format?: (value: number) => string;
}

const columns: readonly Column[] = [
    { id: 'name', label: 'نام', minWidth: 170 },
    {
        id: 'population',
        label: 'نام',
        minWidth: 170,
        align: 'right',
        format: (value: number) => value.toLocaleString('en-US'),
    },
    {
        id: 'size',
        label: 'Size\u00a0(km\u00b2)',
        minWidth: 170,
        align: 'right',
        format: (value: number) => value.toLocaleString('en-US'),
    },
    {
        id: 'density',
        label: 'Density',
        minWidth: 170,
        align: 'right',
        format: (value: number) => value.toFixed(2),
    },
];

interface Data {
    name: string;
    code: string;
    population: number;
    size: number;
    density: number;
}

function createData(
    name: string,
    code: string,
    population: number,
    size: number,
): Data {
    const density = population / size;
    return { name, code, population, size, density };
}

const rows = [
    createData('India', 'IN', 1324171354, 3287263),
    createData('China', 'CN', 1403500365, 9596961),
    createData('Italy', 'IT', 60483973, 301340),
    createData('United States', 'US', 327167434, 9833520),
    createData('Canada', 'CA', 37602103, 9984670),
    createData('Australia', 'AU', 25475400, 7692024),
    createData('Germany', 'DE', 83019200, 357578),
    createData('Ireland', 'IE', 4857000, 70273),
    createData('Mexico', 'MX', 126577691, 1972550),
    createData('Japan', 'JP', 126317000, 377973),
    createData('France', 'FR', 67022000, 640679),
    createData('United Kingdom', 'GB', 67545757, 242495),
    createData('Russia', 'RU', 146793744, 17098246),
    createData('Nigeria', 'NG', 200962417, 923768),
    createData('Brazil', 'BR', 210147125, 8515767),
];

const Aboute: React.FC = () => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <MainLatout>
            <Grid container xs={12} justifyContent={"center"} textAlign={{ xs: "center" }}  >
                <Grid item container md={12} marginTop={2} height={"85vh"} >
                    <Grid item container justifyContent={"space-evenly"} md={12}>
                        <FormControl sx={{ m: 1, minWidth: 250 }}>
                            <InputLabel sx={{ marginLeft: "68%", marginTop: "-5px", backgroundColor: colors.white.main, width: "65px", fontSize: "20px" }} id="demo-controlled-open-select-label">قسمت</InputLabel>
                            <MSelectBox
                                form
                                // open={opens}
                                // onClose={handleClose}
                                // onOpen={handleOpen}
                                // value={age}
                                label="Age"
                            // onChange={handleChange}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Teasdasdn</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </MSelectBox>
                        </FormControl>
                        <FormControl sx={{ m: 1, minWidth: 250 }}>
                            <MInput popup sx={{ "& .MuiInputLabel-root": { marginLeft: "50%" } }} label={"توضیحات سیستم"} />
                        </FormControl>
                        <FormControl sx={{ m: 1, minWidth: 250 }}>
                            <MInput popup sx={{ "& .MuiInputLabel-root": { marginLeft: "50%" } }} label={"توضیحات سیستم"} />
                        </FormControl>
                    </Grid>

                    <Grid item container justifyContent={"center"} md={12} >
                        <TableContainer sx={{ maxHeight: 440, maxWidth: { md: "80%" }, border: "1px solid black", }}>
                            <Table stickyHeader aria-label="sticky table">
                                <TableHead>
                                    <TableRow >
                                        {columns.map((column) => (
                                            <TableCell
                                                key={column.id}
                                                align={column.align}
                                                style={{ minWidth: column.minWidth }}
                                                sx={{ borderBottom: "1px solid black" }}
                                            >
                                                <Typography variant='body1'>{column.label}</Typography>
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows
                                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        .map((row) => {
                                            return (
                                                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                                    {columns.map((column) => {
                                                        const value = row[column.id];
                                                        return (
                                                            <TableCell sx={{ borderBottom: '1px solid black', backgroundColor: "blue" }} key={column.id} align={column.align}>
                                                                {column.format && typeof value === 'number'
                                                                    ? column.format(value)
                                                                    : value}
                                                            </TableCell>
                                                        );
                                                    })}
                                                </TableRow>
                                            );
                                        })}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination
                            rowsPerPageOptions={[10, 25, 100]}
                            component="div"
                            count={rows.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </MainLatout>
    )
}
export default Aboute;