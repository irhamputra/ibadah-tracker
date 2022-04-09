import { ListSholat } from "../typings";
import renderTimeSolat from "./renderTimeSolat";

const listSholat = Array.from({ length: 5 }).map((_, idx) => {
  return {
    name: renderTimeSolat(idx),
    value: false,
  };
}) as ListSholat[];

export default listSholat;
