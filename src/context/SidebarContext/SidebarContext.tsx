import { useRouter } from "next/router";
import { ReactNode, useCallback, useEffect, useState } from "react";
import { createContext } from "use-context-selector";

type SidebarContextProps = {
  children: ReactNode;
};

type SidebarContextData = {
  isOpen: boolean;
  toggleIsOpen: () => void;
};

export const SidebarContext = createContext({} as SidebarContextData);

export const SidebarContextProvider = ({ children }: SidebarContextProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const { asPath } = useRouter();

  useEffect(() => {
    setIsOpen(false);
  }, [asPath]);

  const toggleIsOpen = useCallback(() => {
    setIsOpen((current) => !current);
  }, []);

  return (
    <SidebarContext.Provider value={{ isOpen, toggleIsOpen }}>
      {children}
    </SidebarContext.Provider>
  );
};
