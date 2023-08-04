import { createContext, useContext, useState } from "react";
import { CityState } from "../types/CityState";
import { UVIndexData } from "../api/getUVindex";

interface LocationType {
  city: CityState | null;
  uvIndexData: UVIndexData;
}
interface LocationContextType {
  location: LocationType,
  updateLocation: (newLocation: LocationType) => void;
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
  const [state, setState] = useState<LocationType>({} as LocationType);

  const updateLocation = (newState: LocationType) => {
    setState(newState);
  };

  return (
    <LocationContext.Provider value={{ location: state, updateLocation }}>
      {children}
    </LocationContext.Provider>
  );
};
