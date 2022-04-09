import renderTimeSolat from "./renderTimeSolat";
import { ListSholat } from "../typings";

const listSholat = Array.from({ length: 5 }).map((_, idx) => {
  return {
    name: renderTimeSolat(idx),
    value: false,
  };
}) as ListSholat[];

export default listSholat;
