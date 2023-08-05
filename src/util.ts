enum RISK_LEVEL {
  LOW = "#558B2F",
  MODERATE = "#F9A825",
  HIGH = "#EF6C00",
  VERY_HIGH = "#B71C1C",
  EXTREME = "#6A1B9A",
}

export const getIndexColor = (currentIndex: number) => {
  if (currentIndex < 3) {
    return RISK_LEVEL.LOW;
  }

  if (currentIndex >= 3 && currentIndex < 6) {
    return RISK_LEVEL.MODERATE;
  }

  if (currentIndex >= 6 && currentIndex < 8) {
    return RISK_LEVEL.HIGH;
  }

  if (currentIndex >= 8 && currentIndex < 11) {
    return RISK_LEVEL.VERY_HIGH;
  }

  if (currentIndex >= 0) {
    return RISK_LEVEL.EXTREME;
  }
};
