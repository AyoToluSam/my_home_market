import { useEffect } from "react";

export const useNoScroll = ({ watch }: { watch: boolean }) => {
  useEffect(() => {
    document.body.style.overflow = watch ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [watch]);
};
