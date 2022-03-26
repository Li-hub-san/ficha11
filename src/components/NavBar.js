import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";

export default function NavBar(props) {
    const navigate = useNavigate();
    return (
        <Box className="navbar-wrapper" sx={{flexGrow: 1}}>
            <AppBar className="navbar-header" position="static">
                <Toolbar>
                    <Box sx={{display: 'flex'}}>
                        <Button
                            sx={{my: 2, color: 'white', display: 'block'}}
                            onClick={() => {
                                navigate("/home");
                            }}>
                            HOME
                        </Button>
                        <Button
                            sx={{my: 2, color: 'white', display: 'block'}}
                            onClick={() => {
                                navigate("/info");
                            }}
                        >
                            INFO
                        </Button>
                        <Button
                            sx={{my: 2, color: 'white', display: 'block'}}
                            onClick={() => {
                                navigate("/contacts");
                            }}
                        >
                            CONTACTS
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
