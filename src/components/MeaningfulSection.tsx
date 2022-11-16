import { Box, Grid, GridItem, Image } from "@chakra-ui/react";

export default function MeaningfulSection() {
  return (
    <Grid
      as="section"
      templateColumns={["repeat(4, minmax(56px, 64px))", "repeat(12, 64px)"]}
      gap={["0 24px", "0px 32px"]}
      justifyContent={"center"}
      p="80px 32px"
    >
      <GridItem
        as="a"
        bgColor={"rgba(0, 0, 0, 0)"}
        colStart={1}
        colEnd={[-1]}
        fontSize="100%"
      >
        <Box>
          <Image src="./img/meaningful-banner-lg.gif" alt="Meaningful ..." />
        </Box>
      </GridItem>
    </Grid>
  );
}
