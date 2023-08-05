import { ChakraProvider, theme } from "@chakra-ui/react";
import { Layout } from "./components/layout/Layout";
import { LocationContextProvider } from "./context/LocationContext";
import { WeatherContextProvider } from "./context/WeatherContext";
import { LoadingContextProvider } from "./context/LoadingContext";

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <LoadingContextProvider>
        <LocationContextProvider>
          <WeatherContextProvider>
            <Layout />
          </WeatherContextProvider>
        </LocationContextProvider>
      </LoadingContextProvider>
    </ChakraProvider>
  );
};
