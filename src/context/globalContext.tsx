import {
  Dispatch,
  ReactElement,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

export interface GlobalContextProps {
  searchCard: boolean;
  setSearchCard: Dispatch<SetStateAction<boolean>>;
}

const GlobalContext = createContext({} as GlobalContextProps);

export function GlobalContextProvider({
  children,
}: {
  children: ReactElement;
}): ReactElement {
  const [searchCard, setSearchCard] = useState<boolean>(false);

  return (
    <GlobalContext.Provider value={{ searchCard, setSearchCard }}>
      {children}
    </GlobalContext.Provider>
  );
}

export const useGlobalContext = () => {
  const data = useContext(GlobalContext);
  if (!data) {
    throw new Error(
      "Global context is being used outside Global Context Provider"
    );
  }
  return data;
};
