import * as React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

export default function CvAlerts() {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert severity="success">
        Il CV è stato creato con successo e ora è disponibile nel tuo profilo.
      </Alert>
    </Stack>
  );
}
