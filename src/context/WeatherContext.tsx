import { createContext, useContext, useState } from "react";
import { UVIndexType } from "../api/getUVindex";

interface WeatherContextType {
  weather: UVIndexType;
  updateWeather: (newWeatherData: UVIndexType) => void;
}

export const WeatherContext = createContext<WeatherContextType>(
  {} as WeatherContextType
);

export const useWeatherContext = () => {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error(
      "useWeatherContext must be used within a WeatherContextProvider"
    );
  }
  return context;
};

export const WeatherContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, setState] = useState<UVIndexType>({} as UVIndexType);

  const updateWeather = (newState: UVIndexType) => {
    setState(newState);
  };

  return (
    <WeatherContext.Provider value={{ weather: state, updateWeather }}>
      {children}
    </WeatherContext.Provider>
  );
};
