import { useState } from "react";
import Data from "../Data"

export default function useGeocoding() {
  const { MapBoxToken, ApiMapboxURI } = { ...Data };

  const [forwardData, setForwardData] = useState<{[key in string]: any}>()
  // const [backwardData, setBackwardData] = useState<object>()

  const Forward = (search_text: string) => {
    const URL = ApiMapboxURI + "geocoding/v5/mapbox.places/" + search_text + ".json?access_token=" + MapBoxToken;
    fetch(URL)
      .then((res) => res.json())
      .then((res: object) => {setForwardData(res)})
      .catch((error) => { console.log(error)})
  }

  const Backward = (longitude: number, latitude: number) => {
    const URL = ApiMapboxURI + "geocoding/v5/mapbox.places/" + longitude + "," + latitude + ".json?access_token=" + MapBoxToken;
    console.log(URL);
  }

  return { Forward, forwardData, Backward }

}