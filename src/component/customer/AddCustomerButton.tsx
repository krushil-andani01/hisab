import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useRouter } from "next/navigation";
import React from "react";
import AddCustomer from "./AddCustomer";

export default function AddCustomerButton() {
  const [open, setOpen] = React.useState(false);
  return (
    <Stack
      direction="row"
      spacing={2}
      style={{ position: "absolute", bottom: "50px", right: "5px" }}
    >
      <Button
        variant="contained"
        endIcon={<AddCircleRoundedIcon fontSize="large" />}
        onClick={() => setOpen(true)}
      >
        Add Customer
      </Button>
      {open && <AddCustomer open={open} setOpen={setOpen} />}
    </Stack>
  );
}
