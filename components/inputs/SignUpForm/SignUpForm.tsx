import React, { useState } from "react";
import { CustomCard } from "components/elements";
import {
  Box,
  TextField,
  Button,
  Typography,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateAdapter from "@mui/lab/AdapterDayjs";
import { useUser } from "providers";
import dayjs from "dayjs";
import styles from "./SignUpForm.module.css";

export const SignUpForm = ({ setShowLoign }) => {
  const { signUp } = useUser();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [birthdate, setBirthdate] = React.useState(
    dayjs("2014-08-18T21:11:54")
  );
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      name,
      email,
      birthdate: birthdate.format("DD/MM/YYYY"),
      gender,
      address,
      password,
    };
    signUp(data);
  };
  return (
    <div className={styles.formContainer}>
      <CustomCard>
        <div>
          <div>
            <Typography
              align="center"
              variant="h4"
              gutterBottom
              component="div"
            >
              Sign Up Form
            </Typography>
          </div>
          <Box
            onSubmit={onSubmit}
            component="form"
            noValidate
            autoComplete="off"
          >
            <TextField
              label="Name"
              variant="outlined"
              sx={{ marginBottom: 2 }}
              onChange={(e) => setName(e.target.value)}
              fullWidth
            />
            <TextField
              label="Email"
              variant="outlined"
              sx={{ marginBottom: 2 }}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
            />
            <div className={styles.datePicker}>
              <LocalizationProvider dateAdapter={DateAdapter}>
                <DesktopDatePicker
                  label="Date desktop"
                  inputFormat="DD/MM/YYYY"
                  value={birthdate}
                  onChange={(newValue) => newValue && setBirthdate(newValue)}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </div>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                value={gender}
                label="Age"
                onChange={(e) => setGender(e.target.value)}
                sx={{ marginBottom: 2 }}
                fullWidth
              >
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
            </FormControl>

            <TextField
              label="Address"
              variant="outlined"
              sx={{ marginBottom: 2 }}
              onChange={(e) => setAddress(e.target.value)}
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
            <small
              className={styles.linkBack}
              onClick={() => {
                setShowLoign(true);
              }}
            >
              Already have an account ?
            </small>
          </Box>
        </div>
      </CustomCard>
    </div>
  );
};
