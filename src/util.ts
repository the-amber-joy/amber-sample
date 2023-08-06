export interface RiskLevel {
  level: RISK_LEVEL;
  color: string;
  fontColor: string;
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
  UNKNOWN: { level: RISK_LEVEL.UNKNOWN, color: "gray", fontColor: "" },
  LOW: { level: RISK_LEVEL.LOW, color: "#558B2F", fontColor: "" },
  MODERATE: {
    level: RISK_LEVEL.MODERATE,
    color: "#F9A825",
    fontColor: "black",
  },
  HIGH: { level: RISK_LEVEL.HIGH, color: "#EF6C00", fontColor: "" },
  VERY_HIGH: { level: RISK_LEVEL.VERY_HIGH, color: "#B71C1C", fontColor: "" },
  EXTREME: { level: RISK_LEVEL.EXTREME, color: "#6A1B9A", fontColor: "" },
};

/**
 *
 * @param {number} currentIndex
 * @returns {RiskLevel} RiskLevel - the current risk level based on the UV index
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
