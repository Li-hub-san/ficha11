import React from 'react';
import {Box, Button, TextField} from "@mui/material";
import "../css/login.css";
import {useNavigate} from "react-router-dom";

const Login = (props) => {
        const navigate = useNavigate();

        return (
            <Box className="login"
                 component="form"
                 noValidate
                 autoComplete="off"
            >
                <TextField id="email" label="email" variant="outlined"/>
                <TextField id="password" label="password" variant="outlined"/>
                <Button fullWidth={true} variant="contained" onClick={() => {
                    navigate("/home");
                    props.doLogin("Lígia")
                }}>LOG IN</Button>
            </Box>
        );
    }
;

export default Login;