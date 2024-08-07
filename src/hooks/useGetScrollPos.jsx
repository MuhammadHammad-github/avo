import React from "react";

const useGetScrollPos = () => {
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const getScrollPos = () => {
      setScrollPos(window.scrollY);
    };
    window.addEventListener("scroll", getScrollPos);
    return () => {
      window.removeEventListener("scroll", getScrollPos);
    };
  }, []);
  return scrollPos;
};

export default useGetScrollPos;
