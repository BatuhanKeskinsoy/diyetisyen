"use client";
import React, {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
} from "react";
import Loading from "@/components/Global/Loading";

interface IContextProps {
  isMobile: boolean;
  setIsMobile: Dispatch<SetStateAction<boolean>>;
}

const GlobalContext = createContext<IContextProps>({
  isMobile: false,
  setIsMobile: (): boolean => false,
});

export const GlobalContextProvider = ({ children }: any) => {
  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);
      setLoading(false);
    };
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        isMobile,
        setIsMobile,
      }}
    >
      {loading && <Loading />}
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
