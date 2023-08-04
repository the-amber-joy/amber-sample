import { SunIcon } from "@chakra-ui/icons";
import {
  Card,
  CardBody,
  CardHeader,
  Center,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";

import dayjs from "dayjs";
import { useLocationContext } from "../../context/LocationContext";
import { getIndexColor } from "../../util";

export const DataCard = () => {
  const { location } = useLocationContext();

  return (
    <Card w={{ base: "auto", lg: "md" }} minHeight="sm">
      <CardHeader>
        <Heading size="md">Today's UV Index</Heading>
      </CardHeader>
      <CardBody>
        <Center>
          <SunIcon
            boxSize="6em"
            color={getIndexColor(location?.uvIndexData?.uvCurrent)}
          />
        </Center>
        <Stack mt="6" spacing="3">
          <Heading size="md">
            UV Index for {location?.city?.name}, {location?.city?.state}
          </Heading>
          <Text>Current UV Index: {location?.uvIndexData?.uvCurrent}</Text>
          <Heading size="md">Max Forecast</Heading>
          <Text>
            UV Index will be {location?.uvIndexData?.uvMax} at{" "}
            {dayjs(location?.uvIndexData?.uvMaxTime).format("HH:mm a")}
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
};
