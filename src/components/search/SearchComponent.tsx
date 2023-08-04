import { SearchIcon } from "@chakra-ui/icons";
import {
  FormControl,
  FormErrorMessage,
  IconButton,
  Input,
  Select,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { getLocationByCity } from "../../api/getLocationByCity";
import { getCurrentIndexByLocation } from "../../api/getUVindex";
import { useLocationContext } from "../../context/LocationContext";
import { OptionList } from "./OptionList";

export const SearchComponent = () => {
  const { location, updateLocation } = useLocationContext();

  const [cityName, setCityName] = useState<string>("");
  const [stateName, setStateName] = useState<string>("");
  const [isInvalid, setIsInvalid] = useState<boolean>(false);

  const handleSubmit = async () => {
    const query = { city: cityName, state: stateName, country: "US" };

    await getLocationByCity(query).then((geoResponse: any) => {
      if (geoResponse.status === 404) {
        setIsInvalid(true);
      }
      if (geoResponse.status === 200) {
        updateLocation({
          city: geoResponse.data[0],
          uvIndexData: { uvCurrent: 0, uvMax: 0, uvMaxTime: "" },
        });

        getCurrentIndexByLocation({
          lat: geoResponse.data[0].lat,
          lng: geoResponse.data[0].lng,
        }).then((uvResponse) => {
          if (uvResponse.status === 200) {
            updateLocation({
              city: geoResponse.data[0],
              uvIndexData: uvResponse.data,
            });
          }
        });
      }
    });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <FormControl>
        <VStack w={{ base: "auto", lg: "sm" }}>
          <Input
            placeholder="City"
            onChange={(e) => {
              setCityName(e.currentTarget.value);
            }}
            value={cityName}
          />
          <Select
            value={stateName}
            onChange={(e) => {
              setStateName(e.currentTarget.value);
            }}
            placeholder="State"
          >
            <OptionList />
          </Select>
          <IconButton
            type="submit"
            aria-label="Search"
            icon={<SearchIcon />}
            onClick={() => {
              handleSubmit();
            }}
          />
        </VStack>
      </FormControl>
    </form>
  );
};
