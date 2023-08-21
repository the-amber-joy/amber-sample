import axios, { AxiosResponse } from "axios";
import { config, reverseGeocodeUrl } from "./config";
import { map } from "lodash";

export interface ReverseGeocodeApiResponse {
  data: {
    name: string;
    state: string;
    country: string;
  };
}

export interface ReverseGeocodeResponse {
  data: ReverseGeocodeApiResponse[];
  status: number;
}
export interface LocationQueryParams {
  lat: string;
  lon: string;
}

/**
 *
 * @param {QueryParams} query
 * @returns {ReverseGeocodeResponse}
 */
export async function getCityByGeocode(query: LocationQueryParams) {
  try {
    return axios
      .get(reverseGeocodeUrl, {
        headers: { "X-Api-Key": config.headers["X-Api-Key"] },
        params: query,
      })
      .then(
        (response: AxiosResponse<ReverseGeocodeApiResponse>) => {
          const { data, status } = response;

          const cityData = map(data, (item) => ({
            name: item.name,
            state: item.state,
            country: item.country,
          }));

          return { data: cityData, status };
        },
        (err) => err.response
      );
  } catch (err) {
    console.log("error: ", err);
  }
}

