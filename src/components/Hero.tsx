/* eslint-disable react/no-unescaped-entities */
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
  UnorderedList,
  ListItem,
  Icon,
  IconButton,
} from "@chakra-ui/react";

export default function CallToActionWithVideo() {
  return (
    <Box
      as="section"
      bgColor="rgb(252, 250, 248)"
      className="homepage-hero"
      position={"relative"}
    >
      <Box position={"relative"}>
        <Box
          height="100%"
          display={["flex", "block"]}
          left="0"
          right={0}
          top={"0px"}
          justifyContent="center"
          alignItems="center"
          zIndex={2}
          padding={["60px 32px 0 32px", "148px 0 5% 0"]}
        >
          <Grid
            templateColumns={[
              "repeat(4, minmax(56px, 64px))",
              "repeat(12, 64px)",
            ]}
            gap={["0 24px", "0px 32px"]}
            justifyContent={"center"}
            color="rgb(38, 38, 39)"
          >
            <GridItem
              colStart={1}
              colEnd={[-1, 7]}
              textAlign={["center", "initial"]}
              display={"flex"}
              flexDir="column"
            >
              <Heading
                fontFamily={"Montserrat"}
                fontWeight={700}
                textAlign={["center", "initial"]}
                fontSize={["36px", "64px"]}
                lineHeight="1.2"
                marginBottom={"24px"}
              >
                Let's make your
                <Text as="span" px="8px" color="#5eba8d">
                  planning
                </Text>
                <Box display={["none", "block"]} />
                more effective
              </Heading>
              <Text
                maxW={["unset", "484px"]}
                mb="40px"
                textAlign={["center", "initial"]}
                fontSize={["14px", "16px"]}
                lineHeight="1.7"
                // color="rgb(38, 38, 39)"
                fontWeight={"400"}
              >
                You don't want to make a boring form. And your audience won't
                answer one. Create a typeform instead—and make everyone happy.
              </Text>

              <Flex mb="24px" gap={["20px", "28px"]} align="center">
                <Button
                  w={["50%", "auto"]}
                  h="50px"
                  display={"inline-block"}
                  borderRadius="4px"
                  fontWeight={400}
                  bg="rgb(38, 38, 39)"
                  border="1px solid rgb(38, 38, 39)"
                  p={["12px 10px", "12px 32px"]}
                  lineHeight={"1.5"}
                  color="rgb(252, 250, 248)"
                >
                  Discover
                </Button>
                <Flex h="50px" align="center" justify={"space-between"}>
                  <IconButton
                    bgColor="white"
                    rounded={"full"}
                    aria-label="Call Segun"
                    h="50px"
                    w="50px"
                    minW="50px"
                    borderLeft={"6px solid #DEAC97"}
                    boxShadow="rgb(19 19 19 / 8%) 4px 4px 16px"
                    icon={<PhoneIcon />}
                  />
                  <Button
                    w={["100%", "auto"]}
                    p={["4px", "20px"]}
                    // leftIcon={<MdCall />}
                    fontWeight={500}
                    variant="outline"
                    whiteSpace={"normal"}
                  >
                    Request a call back
                  </Button>
                </Flex>
              </Flex>
              {/* <Box display={"initial"}>
                <UnorderedList
                  fontSize={"14px"}
                  lineHeight="1.5"
                  opacity={"0.7"}
                  p={0}
                  m={0}
                >
                  <ListItem>
                    <Icon mr="8px" />
                    <div>No credit card required</div>
                  </ListItem>
                </UnorderedList>
              </Box> */}
            </GridItem>
            <GridItem colStart={[1, 7]} colEnd={[-1, 13]} pos="relative">
              <Image
                src="./img/header2.svg"
                alt="Header"
                pos="absolute"
                w="calc(100% + 100px)"
                maxW="unset"
              />
            </GridItem>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
