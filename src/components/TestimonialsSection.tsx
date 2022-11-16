/* eslint-disable react/no-unescaped-entities */
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
import Slider from "react-slick";
import { useState } from "react";

export default function TestimonialsSection() {
  const [slider, setSlider] = useState<Slider | null>(null);
  const [current, setCurrent] = useState(1);

  const settings = {
    className: "center",
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 3,
    dots: false,
    fade: false,
    infinite: true,
    slidesToScroll: 1,
    autoplay: false,
    swipeToSlide: true,
    variableWidth: true,
    adaptiveHeight: true,
    afterChange: (current: number) => setCurrent(current),
  };

  return (
    <Box bgColor="rgb(252, 250, 248)" w="100%">
      <Box p={["80px 0px 116px", "120px 0px 232px"]}>
        <Box as="section" maxW="100%" overflowX={"hidden"}>
          <Grid
            templateColumns={[
              "repeat(4, minmax(56px, 64px))",
              "repeat(12, 64px)",
            ]}
            gap={["0 24px", "0px 32px"]}
            justifyContent={"center"}
          >
            <Heading
              as="h2"
              textAlign="center"
              fontSize={["30px", "48px"]}
              letterSpacing="-0.01em"
              fontWeight={300}
              lineHeight="1.3"
              m={["0px 0px 44px", "0px 0px 80px -32px"]}
              color="rgb(38, 38, 39)"
              gridColumn={["1 / -1", "5 / 10"]}
            >
              Here's what people
              <br />
              say about us
            </Heading>
          </Grid>
          <link
            rel="stylesheet"
            type="text/css"
            charSet="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
          <Box w="100%" mb="16px">
            {/* <Grid
                templateColumns="repeat(18, min-content)"
                gap="8px"
                pos="relative"
              > */}
            <Slider ref={(slider) => setSlider(slider)} {...settings}>
              <Item
                curr={current}
                position={0}
                avatar="./img/avatar-slack.webp"
              />
              <Item curr={current} position={1} avatar="./img/person1.jpg" />
              <Item curr={current} position={2} avatar="./img/person2.jpg" />
              <Item curr={current} position={3} avatar="./img/person3.jpg" />
              <Item curr={current} position={4} avatar="./img/person4.jpg" />
            </Slider>
            {/* </Grid> */}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

interface ItemProps {
  curr: number;
  position: number;
  avatar: string;
}

const Item = ({ curr, position, avatar }: ItemProps) => {
  return (
    <GridItem w="100%">
      <Flex
        w={["224px", "352px"]}
        p={["30px 20px", "48px 32px"]}
        flexDir={"column"}
        bgColor="rgb(255, 255, 255)"
        borderRadius={"8px"}
        boxShadow="rgb(19 19 19 / 8%) 0px 2px 4px 0px, rgb(19 19 19 / 12%) 0px 2px 5px 0.5px"
        cursor="pointer"
        h="100%"
        textAlign={"center"}
        opacity={curr === position ? "1" : "0.7"}
        my="10px"
        transform={curr === position ? "scale(1.0001)" : "scale(0.9)"}
        color="rgb(38, 38, 39)"
      >
        <Flex
          align="center"
          // flex={1}
          flexGrow={1}
        >
          <Text
            fontSize={["18px", "28px"]}
            fontWeight={300}
            textAlign={"center"}
            lineHeight="1.3"
          >
            "Form builders are as old as the web, but Typeform elevates the
            medium substantially."
          </Text>
        </Flex>
        <Flex fontSize={"16px"} mt="24px" flexDir={"column"} align="center">
          <Flex
            justify={"center"}
            w="72px"
            h={["48px", "72px"]}
            boxShadow="rgb(19 19 19 / 8%) 0px 2px 4px 0px"
            rounded={"full"}
            overflow="hidden"
          >
            <Image src={avatar} alt="avatar" objectFit={"cover"} />
          </Flex>
          <Text m="16px 0px 0px">Johnny Rodgers</Text>
          <Text mt={["2px", "4px"]} opacity={"0.75"}>
            Product Architect
          </Text>
        </Flex>
      </Flex>
    </GridItem>
  );
};
