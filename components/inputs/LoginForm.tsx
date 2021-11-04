import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CustomCard } from "components/elements";
import styled from "styled-components";
import { useUser } from "providers";

export const LoginForm = ({ setShowLoign }) => {
  const { login } = useUser();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    const data = { name, password };
    login(data);
  };
  return (
    <CustomCard>
      <FormStyles>
        <div>
          <Typography align="center" variant="h4" gutterBottom component="div">
            Sign In Form
          </Typography>
        </div>

        <Box onSubmit={onSubmit} component="form" noValidate autoComplete="off">
          <TextField
            label="Name"
            variant="outlined"
            sx={{ marginBottom: 2 }}
            onChange={(e) => setName(e.target.value)}
            fullWidth
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            sx={{ marginBottom: 2 }}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
          />
          <Button
            fullWidth
            type="submit"
            variant="contained"
            sx={{ marginBottom: 2 }}
          >
            Login
          </Button>
        </Box>

        <small
          className="link-back"
          onClick={() => {
            setShowLoign(false);
          }}
        >
          Don't have an account yet?
        </small>
      </FormStyles>
    </CustomCard>
  );
};

const FormStyles = styled.div`
  .link-back {
    cursor: pointer;
    color: var(--primaryColor);
  }
`;
