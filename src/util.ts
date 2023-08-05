export interface RiskLevel {
  level: RISK_LEVEL;
  color: string;
}

enum RISK_LEVEL {
  LOW = "Low",
  MODERATE = "Moderate",
  HIGH = "High",
  VERY_HIGH = "Very High",
  EXTREME = "Extreme",
}

const RISK_LEVELS = {
  LOW: { level: RISK_LEVEL.LOW, color: "#558B2F" },
  MODERATE: { level: RISK_LEVEL.MODERATE, color: "#F9A825" },
  HIGH: { level: RISK_LEVEL.HIGH, color: "#EF6C00" },
  VERY_HIGH: { level: RISK_LEVEL.VERY_HIGH, color: "#B71C1C" },
  EXTREME: { level: RISK_LEVEL.EXTREME, color: "#6A1B9A" },
};

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
  return {};
};
