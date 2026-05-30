"use client";
import { PopupButton } from "@typeform/embed-react";
import { IconArrowRight } from "@tabler/icons-react";

function LetsTalk() {
  return (
    <PopupButton
      id="YdQ587DV"
      className="group inline-flex items-center gap-2 bg-primary text-primary-foreground font-mono font-medium lowercase px-5 py-2.5 rounded-md hover:brightness-110 transition-all duration-300 text-sm"
    >
      {`> let's talk`}
      <IconArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
    </PopupButton>
  );
}

export default LetsTalk;
