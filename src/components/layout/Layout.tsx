import { Box, Flex, Stack } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";
import { PokemonCard } from "../pokemonCard/PokemonCard";
import { SearchComponent } from "../search/SearchComponent";

export const Layout = () => (
  <Box textAlign="center" fontSize="xl">
    <ColorModeSwitcher />
    <Flex p={4} w="100%" direction={{ base: "column", lg: "row" }}>
      <Stack
        direction={{ base: "column", lg: "row" }}
        justify="center"
        spacing={3}
      >
        <SearchComponent />
        <PokemonCard />
      </Stack>
    </Flex>
  </Box>
);
