import React from "react";
import { BiSearch } from "react-icons/bi";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';

const Searchs = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: '100px',
    backgroundColor: '#e5e5e5',
    '&:hover': {
        backgroundColor: '#e5e5e5',
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: '#000',
    width: '100%',
    height: '50px',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '550px',
            '&:focus': {
                width: '70ch',
            },
        },
    },
}));


const Search = () => {

    return (
        <Box sx={{ flexGrow: 1 }}>
         
                <Toolbar className="bg-white">
                    <Searchs className="">
                        <SearchIconWrapper>
                            <BiSearch className="text-[18px]"/>
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Searchs>
                </Toolbar>
         
        </Box>
    );

}
export default Search;