import {
  Box,
  Button,
  Image,
  Grid,
  GridItem,
  Heading,
  Text,
  Flex,
} from "@chakra-ui/react";

export default function UserFriendlyContent() {
  return (
    <Box bgColor="rgb(252, 250, 248)" w="100%" pt="50px">
      <Grid
        templateColumns={["repeat(4, minmax(56px, 64px))", "repeat(12, 64px)"]}
        gap={["0 24px", "0px 32px"]}
        justifyContent={"center"}
        p={["0 32px", "70px 0 0"]}
      >
        <GridItem
          m={["0", "0px -32px"]}
          h={["240px", "320px"]}
          colStart={[1, 3]}
          colEnd={[-1, 11]}
        >
          <Heading
            as="h2"
            textAlign="center"
            fontSize={["30px", "48px"]}
            letterSpacing="-0.01em"
            fontWeight={300}
            color="rgb(38, 38, 39)"
          >
            Remember everything and tackle each project with your notes, tasks
            and calendar all in one place.
          </Heading>
        </GridItem>

        <GridItem
          colStart={[1, 4]}
          colEnd={[-1, 10]}
          textAlign="center"
          alignContent={"center"}
          alignItems="center"
          pt={["40px", "100px"]}
          pb="60px"
        >
          <Box
            maxW={["440px", "540px"]}
            maxH="200px"
            letterSpacing={"0.1em"}
            m="0px auto"
            fontWeight={500}
            fontSize={["14px", "16px"]}
          >
            <Box m="20px 0px" lineHeight={"1.5"} textTransform={"uppercase"}>
              Made for humans
            </Box>
            <Text
              fontSize={"14px"}
              textAlign="center"
              lineHeight={"1.3"}
              color="rgb(38, 38, 39)"
              fontWeight={300}
              m="0 0 20px"
            >
              Built-in photo and video libraries bring questions to life. Custom
              layouts and themes show your brand at its best. A sleek interface
              ties it all together.
            </Text>
          </Box>
        </GridItem>

        <GridItem colStart={1} colEnd={2}>
          <Button bgColor={"none"} color="inherit" border="none" p={0}>
            <Image
              src="./img/arrow.svg"
              alt="arrow left"
              w="96px"
              mt="293.5px"
              // mr="58px"
              ml="64px"
              // m="293.5px 58px 0 64px"
              transform={"rotate(180deg)"}
            />
          </Button>
        </GridItem>
        <UserFriendlyCarousel />
      </Grid>
    </Box>
  );
}

const UserFriendlyCarousel = () => {
  return (
    <GridItem colStart={4} colEnd={-1} ml="-32px" h="587px">
      <Box display={"inline-flex"}>
        <Grid
          templateColumns={"repeat(3, min-content)"}
          columnGap="41px"
          position={"relative"}
          transition="transform 0.4s ease-in-out 0s"
        >
          <Box w="100%">
            <Flex
              w="607px"
              h="427px"
              borderRadius={"2px"}
              bgColor="rgb(251, 161, 55)"
              alignContent={"center"}
              alignItems="center"
            >
              <Box flex={"1 1 0%"} textAlign="center"></Box>
            </Flex>
          </Box>

          <Box w="100%">
            <Flex
              flexDir={"column"}
              w="607px"
              h="427px"
              borderRadius={"2px"}
              bgColor="rgb(2, 100, 81)"
              alignContent={"center"}
              alignItems="center"
            ></Flex>
          </Box>
        </Grid>
      </Box>
    </GridItem>
  );
};
