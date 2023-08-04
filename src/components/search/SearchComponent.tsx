// import { SearchIcon } from "@chakra-ui/icons";
// import {
//   FormControl,
//   FormErrorMessage,
//   HStack,
//   IconButton,
//   Input,
//   Spinner,
// } from "@chakra-ui/react";
// import { useState } from "react";
// import { useSelectionContext } from "../../context/SelectionContext";
// import { getCurrentIndexByLocation } from "../../api/getUVindex";

export const SearchComponent = () => {
  <></>;
  //   const [searchTerm, setSearchTerm] = useState<string>("");
  //   const [isInvalid, setIsInvalid] = useState<boolean>(false);
  //   const [isLoading, setIsLoading] = useState<boolean>(false);

  //   const handleSubmit = async () => {
  //     setIsLoading(true);

  //     await getCurrentIndexByLocation(input: QueryParams).then(
  //       (res: UVIndexResponse) => {
  //         if (res.status === 404) {
  //           setIsInvalid(true);
  //         }
  //         if (res.status === 200) {
  // /* put it in context & update display */
  //         }
  //       }
  //     );
  //   };

  //   return (
  //     <form
  //       onSubmit={(e) => {
  //         e.preventDefault();
  //         handleSubmit();
  //       }}
  //     >
  //       <FormControl isInvalid={isInvalid}>
  //         <HStack w={{ base: "auto", lg: "sm" }}>
  //           <Input
  //             placeholder="Search by lat/long"
  //             onChange={(e) => {
  //               setIsInvalid(false);
  //               setSearchTerm(e.currentTarget.value);
  //             }}
  //             value={searchTerm}
  //             errorBorderColor="red"
  //           />
  //           <IconButton
  //             type="submit"
  //             isDisabled={isLoading || searchTerm === ""}
  //             aria-label="Search by name"
  //             icon={isLoading ? <Spinner size="sm" /> : <SearchIcon />}
  //             onClick={() => {
  //               handleSubmit();
  //             }}
  //           />
  //         </HStack>
  //         {isInvalid && (
  //           <FormErrorMessage>This is not a valid location.</FormErrorMessage>
  //         )}
  //       </FormControl>
  //     </form>
  //   );
};
