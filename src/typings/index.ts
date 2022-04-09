export type Sholat = "Subuh" | "Dzuhur" | "Ashar" | "Maghrib" | "Isya";

export type SholatTime = {
  [K in Sholat]: boolean;
};

export type ListSholat = {
  name: Sholat;
  value: boolean;
};
