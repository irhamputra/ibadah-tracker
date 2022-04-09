const renderTimeSolat = (index: number) => {
  switch (index) {
    case 0:
      return "Subuh";
    case 1:
      return "Dzuhur";
    case 2:
      return "Ashar";
    case 3:
      return "Maghrib";
    case 4:
      return "Isya";
    default:
      return "";
  }
};

export default renderTimeSolat;
