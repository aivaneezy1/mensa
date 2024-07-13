import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Link from "next/link";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function ModalDownloadDocument() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button
        onClick={handleOpen}
        className="p-2 bg-blue-500 text-white rounded-xl hover:bg-blue-700 mt-10 "
      >
        Generate CV
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Devi essere loggato per scaricare il documento
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Link href="/api/auth/signin?callbackUrl=/create-cv">
              <button className="rounded-xl px-10 py-2 bg-black text-white font-semibold hover:bg-gray-800 hover:text-yellow-400 w-full">
                Login
              </button>
            </Link>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
