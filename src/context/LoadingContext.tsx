import { createContext, useContext, useState } from "react";

interface LoadingContextType {
  isLoading: boolean;
  updateLoading: (newState: boolean) => void;
}

export const LoadingContext = createContext<LoadingContextType>(
  {} as LoadingContextType
);

export const useLoadingContext = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error(
      "useLoadingContext must be used within a LoadingContextProvider"
    );
  }
  return context;
};

export const LoadingContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, setState] = useState<boolean>(false);

  const updateLoading = (newState: boolean) => {
    setState(newState);
  };

  return (
    <LoadingContext.Provider value={{ isLoading: state, updateLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};
