import {
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
  Link,
  GridItemProps,
} from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box position={"relative"} zIndex={1}>
      <Box as="section">
        <Box as="footer" bgColor="rgb(38, 38, 39)" color="rgb(255, 255, 255)">
          <Grid
            templateRows={"280px auto"}
            rowGap={["64px", "80px"]}
            templateColumns={[
              "repeat(4, minmax(56px, 64px))",
              "repeat(12, 64px)",
            ]}
            gap="0 24px"
            justifyContent={"center"}
            p={["80px 32px"]}
          >
            <FooterItem title="Product" gridColumn={["1 / -1", "2 / span 2"]} />
            <FooterItem
              title="Templates"
              gridColumn={["1 / -1", "4 / span 2"]}
            />
            <FooterItem
              title="Integrations"
              gridColumn={["1 / -1", "6 / span 2"]}
            />
            <FooterItem
              title="Resources"
              gridColumn={["1 / -1", "8 / span 2"]}
            />

            <FooterItem
              title="Get to know us"
              gridColumn={["1 / -1", "10 / span 2"]}
            />
          </Grid>

          <Grid
            p="40px 32px"
            borderTop="1px solid rgb(76, 76, 76)"
            templateColumns={[
              "repeat(4, minmax(56px, 64px))",
              "repeat(12, 64px)",
            ]}
            gap="0px 32px"
            justifyContent={"center"}
            alignItems={"center"}
          ></Grid>
        </Box>
      </Box>
    </Box>
  );
}

interface FooterItemProps extends GridItemProps {
  title: string;
}
const FooterItem = ({ title, ...rest }: FooterItemProps) => {
  return (
    <GridItem
      // gridRow={["1 / -1"]}
      // gridArea={["1", "1 / span 2 / -1 / auto"]}
      alignSelf={"flex-start"}
      {...rest}
    >
      <Heading
        as="h3"
        textTransform={"uppercase"}
        fontSize="16px"
        lineHeight={"1.5"}
        m="0px 0px 32px"
        fontWeight={700}
      >
        {title}
      </Heading>
      <Link
        href="#"
        mb="16px"
        fontSize="16px"
        fontWeight={300}
        lineHeight={"1.5"}
      >
        <Text
          as="span"
          transition={"transform 0.2s ease-in 0s"}
          display={"block"}
        >
          Pricing
        </Text>
      </Link>
    </GridItem>
  );
};
