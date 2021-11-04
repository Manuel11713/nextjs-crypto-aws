import React, { FC, createContext, useContext, useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps, AlertColor } from "@mui/material/Alert";

type MessageTypes = "info" | "error" | "warning" | "success";

const initialValues = {
  showNotitication: (message: string, type: MessageTypes = "info") => {
    message + type;
  },
};

const NotificationContext = createContext(initialValues);

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const NotificationProvider: FC = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [messageSnack, setMessageSnack] = useState("");
  const [severity, setSeverity] = useState<AlertColor>("success");
  const handleClose = (_?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const showNotitication = (message: string, type: MessageTypes = "info") => {
    setMessageSnack(message);
    setOpen(true);
    setSeverity(type);
  };

  return (
    <NotificationContext.Provider value={{ showNotitication }}>
      {children}
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
          {messageSnack}
        </Alert>
      </Snackbar>
    </NotificationContext.Provider>
  );
};

export const useNotification = () => useContext(NotificationContext);
