import { SunIcon } from "@chakra-ui/icons";
import {
  Card,
  CardBody,
  CardHeader,
  Center,
  Heading,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";

import dayjs from "dayjs";
import { useLocationContext } from "../../context/LocationContext";
import { getIndexColor } from "../../util";
import { useWeatherContext } from "../../context/WeatherContext";
import { useLoadingContext } from "../../context/LoadingContext";
import { isEmpty } from "lodash";

export const DataCard = () => {
  const { location } = useLocationContext();
  const { weather } = useWeatherContext();
  const { isLoading } = useLoadingContext();

  return (
    <Card w={{ base: "auto", lg: "md" }} minHeight="sm" data-testid="weather-card">
      {isLoading && (
        <CardBody>
          <Center>
            <Spinner size="xl" />
          </Center>
        </CardBody>
      )}
      {!isLoading && (
        <>
          {!isEmpty(location) && (
            <CardHeader>
              <Heading size="md">
                Today's UV Index for {location?.name}, {location?.state}
              </Heading>
            </CardHeader>
          )}
          {!isEmpty(weather) && (
            <CardBody>
              <Center>
                <SunIcon
                  boxSize="6em"
                  color={getIndexColor(weather?.uvCurrent)}
                />
              </Center>
              <Stack mt="6" spacing="3">
                <Heading size="md">Current:</Heading>
                <Text>{weather?.uvCurrent}</Text>
                <Heading size="md">Max Forecast:</Heading>
                <Text>
                  UV Index will be {weather?.uvMax} at{" "}
                  {dayjs(weather?.uvMaxTime).format("h:mm a")}
                </Text>
              </Stack>
            </CardBody>
          )}
        </>
      )}
    </Card>
  );
};
