"use client";
import { PopupButton } from "@typeform/embed-react";
import { IconArrowRight } from "@tabler/icons-react";

function LetsTalk() {
  return (
    <PopupButton
      id="YdQ587DV"
      className="group inline-flex items-center gap-3 bg-primary text-primary-foreground font-display font-semibold px-8 py-4 rounded-full hover:brightness-110 transition-all duration-300 text-sm md:text-base"
    >
      {`Let's Talk`}
      <IconArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
    </PopupButton>
  );
}

export default LetsTalk;
