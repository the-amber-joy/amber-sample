import { Box, Heading } from "@chakra-ui/react";
import { RISK_LEVELS } from "../../util";
import { map } from "lodash";

export const LegendComponent = () => {

  return (
    <Box>
      <Heading>Risk Levels</Heading>
      {map(RISK_LEVELS, (r) => {
        return (
          <Box p={2} bgColor={r.color} color={r.fontColor} key={r.level}>
            {r.level}
          </Box>
        );
      })}
    </Box>
  );
};
