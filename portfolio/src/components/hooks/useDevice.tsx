import React from "react";
import { useEffect, useState } from "react";

function useDevice() {
  const [matches, setMatches] = useState<String>("desktop");

  useEffect(() => {
    let isMobile = window.matchMedia("(max-width: 50rem)").matches;
    if (isMobile) {
      setMatches("mobile");
    }
  }, [matches]);
  return matches;
}
export default useDevice;
