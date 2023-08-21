export interface RiskLevel {
  levelName: RISK_LEVEL;
  color: string;
  fontColor: string;
  range: string | null;
}

enum RISK_LEVEL {
  UNKNOWN = "Unknown",
  LOW = "Low",
  MODERATE = "Moderate",
  HIGH = "High",
  VERY_HIGH = "Very High",
  EXTREME = "Extreme",
}

export const RISK_LEVELS = {
  UNKNOWN: {
    levelName: RISK_LEVEL.UNKNOWN,
    range: null,
    color: "gray",
    fontColor: "white",
  },
  LOW: {
    levelName: RISK_LEVEL.LOW,
    range: "0 – 2.9999",
    color: "#558B2F",
    fontColor: "white",
  },
  MODERATE: {
    levelName: RISK_LEVEL.MODERATE,
    range: "3 – 5.9999",
    color: "#F9A825",
    fontColor: "black",
  },
  HIGH: {
    levelName: RISK_LEVEL.HIGH,
    range: "6 – 7.9999",
    color: "#EF6C00",
    fontColor: "white",
  },
  VERY_HIGH: {
    levelName: RISK_LEVEL.VERY_HIGH,
    range: "8 – 10.9999",
    color: "#B71C1C",
    fontColor: "white",
  },
  EXTREME: {
    levelName: RISK_LEVEL.EXTREME,
    range: "11+",
    color: "#6A1B9A",
    fontColor: "white",
  },
};

/**
 *
 * @param {number} currentIndex
 * @returns {RiskLevel} RiskLevel – the current risk level based on the UV index
 */
export const getRiskLevel = (currentIndex: number) => {
  if (currentIndex < 3) {
    return RISK_LEVELS.LOW;
  }

  if (currentIndex >= 3 && currentIndex < 6) {
    return RISK_LEVELS.MODERATE;
  }

  if (currentIndex >= 6 && currentIndex < 8) {
    return RISK_LEVELS.HIGH;
  }

  if (currentIndex >= 8 && currentIndex < 11) {
    return RISK_LEVELS.VERY_HIGH;
  }

  if (currentIndex >= 0) {
    return RISK_LEVELS.EXTREME;
  }
  
  return RISK_LEVELS.UNKNOWN;
};
