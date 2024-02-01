import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@/components/Button";

const Modal = ({ open = false, handleClose, title, children, onConfirm }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
      <DialogActions>
        <Button
          label="Cancel"
          className="w-[100px] rounded-md font-semibold text-black opacity-80 border border-black p-2 bg-[#d3d3d3] outline-none hover:opacity-80"
          handleClick={handleClose}
        />
        <Button
          label="Done"
          className="w-[100px] rounded-md font-semibold text-white p-2 bg-[dodgerblue] outline-none hover:opacity-80"
          handleClick={onConfirm}
        />
      </DialogActions>
    </Dialog>
  );
};

export default Modal;
