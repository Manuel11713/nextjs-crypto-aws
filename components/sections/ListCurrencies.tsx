import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Container,
  Button,
} from "@mui/material";

type ICurrency = {
  name: string;
  id: string;
  market_cap_change_percentage_24h: string;
  current_price: string;
};

export const ListCurrencies = () => {
  const [currencies, setCurrencies] = useState<ICurrency[]>([]);
  useEffect(() => {
    const fetchCurrencies = async () => {
      const { data } = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=4&page=1&sparkline=false"
      );
      setCurrencies(data);
    };
    fetchCurrencies();
  }, []);
  return (
    <div style={{ marginTop: 30 }}>
      <Container>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Change</TableCell>
                <TableCell align="right">Trade</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {currencies.map((currency) => (
                <TableRow
                  key={currency.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {currency.name}
                  </TableCell>
                  <TableCell align="right">{currency.current_price}</TableCell>
                  <TableCell align="right">
                    {currency.market_cap_change_percentage_24h}
                  </TableCell>
                  <TableCell align="right">
                    <Link href="/dashboard">
                      <a>
                        <Button>Trade</Button>
                      </a>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
};
