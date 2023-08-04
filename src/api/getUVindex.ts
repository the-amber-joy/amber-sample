import axios, { AxiosResponse } from "axios";

import { config, url } from "./config";

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
export interface UVIndexData {
  uvCurrent: number;
  // uv_time: string;
  uvMax: number;
  uvMaxTime: string;
}

export interface UVIndexResponse extends UVIndexData {
  data: UVIndexData;
  status: number;
}

/**
 *
 * @returns {UVIndexResponse}
 */
export async function getCurrentIndex() {
  try {
    return axios.get(url, config).then(
      (response: AxiosResponse<UvApiResponse>) => {
        const { data, status } = response;
        const { result } = data;

        const uvIndexData: UVIndexData = {
          uvCurrent: result.uv,
          uvMax: result.uv_max,
          uvMaxTime: result.uv_max_time,
        };

        return { data: uvIndexData, status };
      },
      (err) => err.response
    );
  } catch (err) {
    console.log("error: ", err);
  }
}

export interface QueryParams {
  lat: number;
  lng: number;
}
/**
 *
 * @param {QueryParams} query
 * @returns
 */
export async function getCurrentIndexByLocation(query: QueryParams) {
  try {
    return axios.get(url, { ...config, params: query }).then(
      (response: AxiosResponse<UvApiResponse>) => {
        const { data, status } = response;

        const uvIndexData: UVIndexData = {
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
