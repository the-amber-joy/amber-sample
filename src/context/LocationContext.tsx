import { createContext, useContext, useState } from "react";
import { CityState } from "../types/CityState";

interface LocationContextType {
  location: CityState;
  updateLocation: (newLocation: CityState) => void;
}

export const LocationContext = createContext<LocationContextType>(
  {} as LocationContextType
);

export const useLocationContext = () => {
  const context = useContext(LocationContext);
  if (!context) {
    throw new Error(
      "useLocationContext must be used within a LocationContextProvider"
    );
  }
  return context;
};

export const LocationContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, setState] = useState<CityState>({} as CityState);

  const updateLocation = (newState: CityState) => {
    setState(newState);
  };

  return (
    <LocationContext.Provider value={{ location: state, updateLocation }}>
      {children}
    </LocationContext.Provider>
  );
};
