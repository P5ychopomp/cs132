import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
  Flex,
  Heading,
  Icon,
  useColorModeValue,
  UnorderedList,
  ListItem,
  Button,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import ExperienceArray from "./ExperienceArray";
import TagsArray from "./TagsArray";
import { FcInfo, FcLineChart, FcQuestions } from "react-icons/fc";
import { Link } from "react-router-dom/dist";

const Card = ({ heading, description, sub, icon, href, color, methods }) => {
  return (
    <Box
      maxW={{ base: "full", xl: "400px" }}
      w={"full"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      borderColor={color}
      p={5}
    >
      <Stack align={"start"} spacing={2}>
        {/* <Flex
          w={16}
          h={16}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
          bg={useColorModeValue("gray.100", "gray.700")}
        >
          {icon}
        </Flex> */}
        <Box mt={2} w="100%">
          <Heading size="md" pb={4} textAlign="center">
            {heading}
          </Heading>
          <Divider borderColor={color} />
          <Container pt={5} px="0" mx="2">
            <UnorderedList textAlign="left">
              {description?.map((desc) => (
                <ListItem>{desc}</ListItem>
              ))}
              {sub && (
                <UnorderedList>
                  {sub.map((s) => (
                    <ListItem>{s}</ListItem>
                  ))}
                </UnorderedList>
              )}
            </UnorderedList>
          </Container>
          <Container centerContent w="full" mt={6}>
            {
              
              <Link to={href}>
                <Button mx="auto" colorScheme={color.split(".")[0]}>
                  {methods}
                </Button>
              </Link>
            }
          </Container>
        </Box>
      </Stack>
    </Box>
  );
};

export default function Experience({ color }) {
  const experience = ExperienceArray();
  const options = TagsArray("ExperienceTags");
  const [selected, setSelected] = useState("");

  const CardElements = {
    heading: [
      ["Data Collection", useColorModeValue("red.500", "red.300")],
      ["Preprocessing", useColorModeValue("blue.500", "blue.300")],
      ["Exploration", useColorModeValue("yellow.500", "yellow.300")],
      ["Stat Modelling", useColorModeValue("green.500", "green.300")],
      ["Data Modelling", useColorModeValue("gray.700", "gray.300")],
    ],
    description: {
      "Data Collection": [
        "Scraping 153 tweets using Snscrape library in Python.",
        "Keywords used:",
      ],
      Preprocessing: [
        "Columns with missing values are removed",
        "Outliers are preserved",
        "New dataframe is constructed containing the Month and Year (Month) and the frequency of tweets per month (Tweet Count).",
      ],
      Exploration: [
        "Binned by months to identify trends.",
        "Used scatter plot, bar plot and line plot for visualization",
      ],
      "Stat Modelling": [
        "Used a two-sample t-test to determine if the formation of the anti-terror law and NTF-ELCAC was significant to the red-tagging of the Makabayan bloc.",
      ],
      "Data Modelling": [
        "Used peak detection using SciPy and change point detection via Pelt algorithm in detecting events.",
      ],
    },
    sub: {
      "Data Collection": [
        '"npa" (makabayan OR kabataan OR gabriela OR bayan muna)',
        '"npa makabayan"',
        "npa (neri OR elago OR raoul)",
      ],
    },
    icon: [],
    href: {
      "Data Collection":
        "https://drive.google.com/drive/u/0/folders/1y9-2tsFHxdCwo-TCHN1tXe_amSk7tGu8",
      Preprocessing:
        "https://docs.google.com/spreadsheets/d/1KVlCvt_JlqYjNnKcomNbHiLXg6qq7EMVSlDdBrPYQfs/edit?usp=sharing",
      Exploration: "https://p5ychopomp.github.io/authentica/exploration.html",
      "Stat Modelling": "https://drive.google.com/file/d/11NnUUDGUplNl6J6wgcWQqnbgIfaXsOZf/view?usp=sharing",
      "Data Modelling": "https://authentica.w3spaces.com/index.html",
    },
    methods: {
      "Data Collection": "See the data!",
      Preprocessing: "See the (new) data!",
      Exploration: "See our exploration!",
      "Stat Modelling": "See the stat model!",
      "Data Modelling": "See the data model!",
    },
  };

  useEffect(() => {
    if (options.length > 0) {
      setSelected(options[0].value);
    }
  }, [options]);

  const handleSelected = (value) => {
    setSelected(value);
  };

  return (
    <>
      <Container maxW={"8xl"} id="experience">
        <Stack
          as={Box}
          textAlign={"left"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 10, md: 14 }}
        >
          <Stack fontSize={"2xl"} align="center" direction="row">
            <HStack mx={4} minW="13em">
              <Text color={`${color}.400`} fontWeight={800}>
                02
              </Text>
              <Text fontWeight={800} textAlign={"left"}>
                Materials and Methods
              </Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>
          <Flex alignItems="center" justifyContent="center">
            <Box p={4} w={"full"}>
              <Container
                maxW={"Full"}
                alignItems="center"
                justifyContent="center"
              >
                <Stack
                  spacing={6}
                  mx="auto"
                  justify="center"
                  alignItems=""
                  direction={["column", "column", "column", "column", "row"]}
                >
                  {CardElements.heading.map((head) => (
                    <Card
                      heading={head[0]}
                      description={CardElements.description[head[0]]}
                      sub={CardElements.sub[head[0]]}
                      color={head[1]}
                      href={CardElements.href[head[0]]}
                      methods={CardElements.methods[head[0]]}
                    />
                  ))}
                </Stack>
              </Container>
            </Box>
          </Flex>
        </Stack>
      </Container>
    </>
  );
}
