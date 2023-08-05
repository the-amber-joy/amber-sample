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
import { isEmpty } from "lodash";
import { useLoadingContext } from "../../context/LoadingContext";
import { useLocationContext } from "../../context/LocationContext";
import { useWeatherContext } from "../../context/WeatherContext";
import { RiskLevel, getRiskLevel } from "../../util";
import { useEffect, useState } from "react";

export const DataCard = () => {
  const { location } = useLocationContext();
  const { weather } = useWeatherContext();
  const { isLoading } = useLoadingContext();
  const [riskLevel, setRiskLevel] = useState<RiskLevel>({} as RiskLevel);

  useEffect(() => {
    const risk = getRiskLevel(weather?.uvCurrent) as RiskLevel;
    setRiskLevel(risk);
  }, [weather]);

  return (
    <Card
      w={{ base: "auto", lg: "md" }}
      minHeight="sm"
      data-testid="weather-card"
    >
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
              {!isEmpty(riskLevel) && (
                <Center>
                  <Heading size="md">Risk Level: {riskLevel.level}</Heading>
                  <SunIcon boxSize="6em" color={riskLevel.color} />
                </Center>
              )}

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
