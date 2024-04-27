import { useEffect, useState } from "react";

function useHashChange() {
  const [hash, setHash] = useState(() => {
    if (typeof window !== "undefined") {
      return window.location.hash.substr(1) || "";
    }
    return "";
  });

  useEffect(() => {
    function handleHashChange() {
      setHash(window.location.hash.substr(1) || "");
    }

    if (typeof window !== "undefined") {
      window.addEventListener("hashchange", handleHashChange);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("hashchange", handleHashChange);
      }
    };
  }, []);

  return hash;
}

export default useHashChange;
