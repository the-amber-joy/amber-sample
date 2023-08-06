import { Box } from "@chakra-ui/react";
import { RISK_LEVELS } from "../../util";
import { map } from "lodash";

export const LegendComponent = () => {

  return (
    <Box>
      {map(RISK_LEVELS, (r) => {
        return (
          <Box p={4} bgColor={r.color} color={r.fontColor}>
            {r.level}
          </Box>
        );
      })}
    </Box>
  );
};
