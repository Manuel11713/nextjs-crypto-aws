import { ArrowBack } from "@mui/icons-material";
import Link from "next/link";
import { IconButton } from "@mui/material";
import styles from "./ButtonBack.module.css";

export const ButtonBack = () => {
  return (
    <div className={styles.iconContainer}>
      <Link href="/">
        <a>
          <IconButton>
            <ArrowBack fontSize="large" />
          </IconButton>
        </a>
      </Link>
    </div>
  );
};
