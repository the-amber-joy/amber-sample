import { ChakraProvider, theme } from "@chakra-ui/react";
import { Layout } from "./components/layout/Layout";
import { LocationContextProvider } from "./context/LocationContext";

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <LocationContextProvider>
        <Layout />
      </LocationContextProvider>
    </ChakraProvider>
  );
};
