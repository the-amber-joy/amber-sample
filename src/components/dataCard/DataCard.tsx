import {
  Card,
  CardBody,
  CardHeader,
  Center,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import { SunIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";

import {
  UVIndexResponse,
  getCurrentIndexByLocation,
} from "../../api/getUVindex";
import { getIndexColor } from "../../util";
import dayjs from "dayjs";


export const DataCard = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [uvMax, setUvMax] = useState<number>(0);
  const [uvMaxTime, setUvMaxTime] = useState<string>("");

  useEffect(() => {
    const fetchCurrentData = async () => {
      await getCurrentIndexByLocation({ lat: 41.87, lng: -87.63 }).then(
        async (res: UVIndexResponse) => {
          if (res.status === 404) {
            console.log(res);
          }
          if (res.status === 200) {
            const { uvCurrent, uvMax, uvMaxTime } = res.data;
            setCurrentIndex(uvCurrent);
            setUvMax(uvMax);
            setUvMaxTime(uvMaxTime);
          }
        }
      );
    };

    fetchCurrentData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Card w={{ base: "auto", lg: "md" }} minHeight="sm">
      <CardHeader>
        <Heading size="md">Today's UV Index</Heading>
      </CardHeader>
      <CardBody>
        <Center>
          <Center>
            <SunIcon boxSize="6em" color={getIndexColor(currentIndex)} />
          </Center>{" "}
        </Center>
        <Stack mt="6" spacing="3">
          <Heading size="md">UV Index for Chicago</Heading>
          <Text>Current UV Index: {currentIndex}</Text>
          <Heading size="md">Max Forecast</Heading>
          <Text>
            UV Index will be {uvMax} at {dayjs(uvMaxTime).format("HH:mm a")}
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
};
