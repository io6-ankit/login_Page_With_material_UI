import React from "react";
import "./login_page.css";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const LoginPage = () => {
  const DemoPaper = styled(Paper)(({ theme }) => ({
    width: 420,
    height: 420,
    marginLeft: 505,
    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: "center",
  }));
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <Box className="page">
      <Stack direction="row" spacing={2}>
        <DemoPaper variant="elevation">
          <h1>Login page</h1>
          <Box>
            <TextField
              id="standard-basic"
              label="Standard"
              variant="standard"
            />
          </Box>
          <Box>
            <TextField
              id="standard-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="standard"
            />
          </Box>
          <Box>
            <Checkbox {...label} defaultChecked />
            <span>Remember me</span>
            <span>
              {" "}
              <Link href="#" color="inherit">
                {'Forgot Password?"'}
              </Link>
            </span>
          </Box>
          <Box>
            <Button variant="contained" disableElevation color="inherit">
              Login
            </Button>
          </Box>
          <Box>
            <span>
              Don't have on account?{" "}
              <Link href="#" color="inherit">
                {'Register"'}
              </Link>
            </span>
          </Box>
        </DemoPaper>
      </Stack>
    </Box>
  );
};
export default LoginPage;
