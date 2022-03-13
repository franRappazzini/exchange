import { Button, Dialog, DialogContent, Typography } from "@mui/material";

import React from "react";

function DialogError({ open, setOpen, text1, text2 }) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography variant="h4" gutterBottom>
          {text1}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {text2}
        </Typography>

        <Button color="error" onClick={handleClose}>
          Aceptar
        </Button>
      </DialogContent>
    </Dialog>
  );
}

export default DialogError;
