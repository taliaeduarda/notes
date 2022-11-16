import { PhoneIcon } from "@chakra-ui/icons";
import {
  Grid,
  GridItem,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
} from "@chakra-ui/react";

export default function DataHydrationOnDemand() {
  return (
    <Box as="section">
      <Box>
        <Box bgColor="rgb(245, 241, 234)">
          <Grid
            templateColumns={[
              "repeat(4, minmax(56px, 64px))",
              "repeat(12, 64px)",
            ]}
            gap="0px 32px"
            justifyContent={"center"}
            p={["0 32px"]}
          >
            <GridItem
              gridColumn="4 / 9"
              p="96px 0px"
              display="flex"
              alignItems={"center"}
              justifyContent="center"
            >
              <Heading
                as="h2"
                textAlign={"center"}
                fontWeight={300}
                fontSize={"48px"}
                letterSpacing="-0.01em"
                lineHeight={"1.2"}
              >
                People make magic happen with Typeform
              </Heading>
            </GridItem>
          </Grid>
        </Box>
        <Box overflow={"hidden"}>
          <Box
            overflow={"hidden"}
            pos="relative"
            // esse height precisa ser controlado por um hook
            h={["605px", "660.328px"]}
            transition={"height 0.2s ease-in 0s"}
          >
            <Box
              pos="absolute"
              w="100%"
              opacity={1}
              zIndex={1}
              transition="opacity 0.2s ease-in 0s"
              h="100%"
            >
              <Box bgColor={"#f5ebe0"} h="100%" pos="relative" pb={["32px"]}>
                <Grid
                  templateColumns={[
                    "repeat(4, minmax(56px, 64px))",
                    "repeat(12, 64px)",
                  ]}
                  gap="0px 32px"
                  justifyContent={"center"}
                  p={["0 32px"]}
                >
                  <GridItem
                    gridColumn={["1 / -1", "span 6 / auto"]}
                    display="flex"
                    flexDir={"column"}
                    pos="relative"
                    zIndex={1}
                    p={["48px 0px 56px", "80px 0px"]}
                  >
                    <Heading
                      as="h3"
                      fontSize={["20px", "24px"]}
                      fontWeight={300}
                      lineHeight="1.4"
                    >
                      <Text as="span" fontWeight={500}>
                        Marketers
                      </Text>
                      <br />
                      attract new customers
                      <Text as="span" display={["none", "initial"]} pl="6px">
                        with Typeform
                      </Text>
                    </Heading>

                    <Text
                      fontSize={["30px", "50px"]}
                      mt={["24px", "60px"]}
                      fontWeight={300}
                      lineHeight="1.25"
                    >
                      Your notes and meetings have context,
                      <Text as="span" fontWeight={500} pl="10px">
                        so nothing gets lost along the way.
                      </Text>
                    </Text>
                  </GridItem>
                  <GridItem
                    gridColumn={["1 / -1", "span 6 / auto"]}
                    mt={["-20px", "0"]}
                    h={["250px", "auto"]}
                    overflow="hidden"
                    pos={"relative"}
                  >
                    <Image src="./img/woman5.jpg" alt="woman" />
                  </GridItem>
                </Grid>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
