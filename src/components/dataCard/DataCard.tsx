import { SunIcon } from "@chakra-ui/icons";
import {
  Card,
  CardBody,
  CardHeader,
  Center,
  Heading,
  Spinner,
  Stack,
  Tag,
  Text,
  VStack,
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

  const max = () => {
    const maxRisk: RiskLevel = getRiskLevel(weather?.uvMax);
    return (
      <Tag marginTop=".25rem" bgColor={maxRisk.color} color={maxRisk.fontColor}>
        {maxRisk.level}
      </Tag>
    );
  };

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
                  <VStack>
                    <Heading size="md">
                      Risk Level:{" "}
                      <span style={{ color: riskLevel.color }}>
                        {riskLevel.level}
                      </span>
                    </Heading>
                    <SunIcon boxSize="6em" color={riskLevel.color} />
                  </VStack>
                </Center>
              )}

              <Stack mt="6" spacing="3">
                <Heading size="md">Current:</Heading>
                <Text>{weather?.uvCurrent}</Text>
                <Heading size="md">Max Forecast:</Heading>
                <Text>
                  UV Index will be {max()} ({weather?.uvMax}) at{" "}
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
