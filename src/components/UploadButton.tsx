"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";

// this component implements a button that opens a dialog
const UploadButton = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(v) => {
        if (!v) {
          setIsOpen(v);
        }
      }}
    >
      {/* dialog trigger then triggers the dialog to be opened ; asChild lets the dialog trigger use the child component with it as the trigger*/}
      <DialogTrigger
        onClick={() => {
          setIsOpen(true);
        }}
        asChild
      >
        <Button>Upload PDF</Button>
      </DialogTrigger>

      {/* section for the dialog */}
      <DialogContent>open dialog</DialogContent>
    </Dialog>
  );
};

export default UploadButton;
