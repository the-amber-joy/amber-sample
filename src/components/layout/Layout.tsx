import { Box, Flex, Heading, Stack } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";
import { DataCard } from "../dataCard/DataCard";
import { SearchComponent } from "../search/SearchComponent";
import { LegendComponent } from "../legendComponent/LegendComponent";

export const Layout = () => (
  <Box textAlign="center" fontSize="xl">
    <ColorModeSwitcher />
    <Heading>UV Index for Today</Heading>
    <Flex p={4} w="100%" direction={{ base: "column", lg: "row" }}>
      <Stack
        direction={{ base: "column", lg: "row" }}
        justify="center"
        spacing={3}
      >
        <SearchComponent />
        <DataCard />
        <LegendComponent />
      </Stack>
    </Flex>
  </Box>
);
