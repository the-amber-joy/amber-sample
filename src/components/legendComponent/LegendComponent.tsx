import { Box, Heading, Text } from "@chakra-ui/react";
import { RISK_LEVELS } from "../../util";
import { map } from "lodash";

export const LegendComponent = () => {

  return (
    <Box>
      <Heading>Risk Levels</Heading>
      {map(RISK_LEVELS, (r) => {
        return (
          <Box p={2} bgColor={r.color} color={r.fontColor} key={r.levelName}>
            {r.levelName} {r.range && <Text fontSize="sm">(UV Range {r.range})</Text>}
          </Box>
        );
      })}
    </Box>
  );
};
