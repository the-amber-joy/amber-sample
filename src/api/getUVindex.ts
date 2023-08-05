import axios, { AxiosResponse } from "axios";

import { config, openUvUrl } from "./config";

interface UvApiResponse {
  result: {
    uv: number;
    uv_time: string;
    uv_max: number;
    uv_max_time: string;
    ozone: number;
    ozone_time: string;
  };
}
export interface UVIndexType {
  uvCurrent: number;
  // uv_time: string;
  uvMax: number;
  uvMaxTime: string;
}

export interface UVIndexResponse extends UVIndexType {
  data: UVIndexType;
  status: number;
}

export interface QueryParams {
  lat: string;
  lng: string;
}
/**
 *
 * @param {QueryParams} query
 * @returns
 */
export async function getCurrentIndexByLocation(query: QueryParams) {
  try {
    return axios
      .get(openUvUrl, {
        headers: { "x-access-token": config.headers["x-access-token"] },
        params: query,
      })
      .then(
        (response: AxiosResponse<UvApiResponse>) => {
          const { data, status } = response;

          const uvIndexData: UVIndexType = {
            uvCurrent: data.result.uv,
            uvMax: data.result.uv_max,
            uvMaxTime: data.result.uv_max_time,
          };

          return { data: uvIndexData, status };
        },
        (err) => err.response
      );
  } catch (err) {
    console.log("error: ", err);
  }
}
