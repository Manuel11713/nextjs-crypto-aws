import React from "react";
import { SplitSection, ListCurrencies } from "components/sections";
import { Typography, Button, Grid, Container } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import cryptosImg from "../public/img/cryptocurrencies.jpg";
const HomePage = () => {
  return (
    <div>
      <SplitSection
        leftNode={
          <>
            <Typography variant="h2" sx={{ fontWeight: "bold" }}>
              Start trading with cyptos
            </Typography>
            <Typography variant="body2" mt={5}>
              This platform is the easiest place to buy, sell and borrow crypto
              assets. Sign up and get started today.
            </Typography>
            <div style={{ marginTop: 20 }}>
              <Link href="/dashboard">
                <a>
                  <Button variant="outlined">Get Started &#x2192;</Button>
                </a>
              </Link>
            </div>
          </>
        }
        rightNode={
          <div style={{ position: "relative", height: "100%", width: "100%" }}>
            <Image src={cryptosImg} alt="cryptos" />
          </div>
        }
      />
      <div style={{ background: "#33691e", color: "#fff", padding: 20 }}>
        <Container>
          <Grid container>
            <Grid item xs={12} md={4}>
              <Typography align="center" variant="h6">
                462T
              </Typography>
              <Typography align="center" variant="subtitle2">
                Quarterly volume traded
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography align="center" variant="h6">
                100+
              </Typography>
              <Typography align="center" variant="subtitle2">
                Quarterly volume traded
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography align="center" variant="h6">
                100+M
              </Typography>
              <Typography align="center" variant="subtitle2">
                Verified users
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </div>
      <ListCurrencies />
    </div>
  );
};

export default HomePage;
