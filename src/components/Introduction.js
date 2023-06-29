import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
  Image,
  useColorModeValue,
  Flex,
  Button,
  Icon,
  Heading,
} from "@chakra-ui/react";
import {
  FcAbout,
  FcAssistant,
  FcCollaboration,
  FcDonate,
  FcInfo,
  FcLineChart,
  FcManager,
  FcQuestions,
} from "react-icons/fc";
import ProfileArray from "./ProfileArray";

const Card = ({ heading, description, icon, href }) => {
  return (
    <Box
      maxW={{ base: "full", md: "278px" }}
      w={"full"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
    >
      <Stack align={"start"} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
          bg={useColorModeValue("gray.100", "gray.700")}
        >
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={"sm"}>
            {description}
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};

export default function Introduction({ color }) {
  return (
    <>
      <Container maxW={"8xl"} id="about">
        <Stack
          as={Box}
          textAlign={"left"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 10, md: 14 }}
        >
          <Stack fontSize={"2xl"} align="center" direction="row">
            <HStack mx={4}>
              <Text color={`${color}.400`} fontWeight={800}>
                01
              </Text>
              <Text fontWeight={800}>Introduction</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>
          <Stack
            align="center"
            direction={["column", "column", "column", "row"]}
            spacing="6"
          >
            <Box
              width={{ base: "10xl", xs: "sm", sm: "md", md: "xl" }}
              pr={["0", "0", "0", "10"]}
            >
              <Image src="makabayan.png" />
            </Box>
            <Box>
              <Text
                color={useColorModeValue("gray.800", "gray.100")}
                fontSize={"md"}
                px={4}
                pb={5}
              >
                The Makabayan bloc is a group of progressive party-list
                organizations in the Philippines. It is composed of several
                political parties that advocate for social justice, human
                rights, and national sovereignty. The member organizations
                within the Makabayan bloc include Bayan Muna, Gabriela Women's
                Party, ACT Teachers Party, Kabataan Party-list, and Anakpawis
                (Gavilan, 2022). The Makabayan bloc and its member organizations
                have been subjected to red-tagging by certain individuals,
                groups, or institutions, particularly those with differing
                political ideologies (CNN Philippines, 2020). These accusations
                of red-tagging have been a source of contention and have raised
                concerns about the safety and security of members within the
                Makabayan bloc. Thus, this project aims to provide insights
                regarding the redtagging of the Makabayan bloc.
              </Text>
              <Text
                color={useColorModeValue("gray.800", "gray.100")}
                fontSize={"xs"}
                px={4}
              >
                References:
                <br />
                Gavilan, J. (2022, June 2). Makabayan bloc vows to fight on with
                fewer seats in 19th Congress. Rappler.
                https://www.rappler.com/nation/elections/makabayan-bloc-fight-on-progressives-19th-congress/
                <br />
                CNN Philippines. (2020, November 30). Duterte to makabayan bloc:
                “we are not red-tagging you, we are identifying you as
                Communists.” CNN Philippines.
                https://www.cnnphilippines.com/news/2020/11/30/Duterte-denies-red-tagging-Makabayan-bloc--supports-military-s-assertion-they-are--communists-.html
              </Text>
            </Box>
          </Stack>
          <Flex alignItems="center" justifyContent="center">
            <Box p={4}>
              <Stack
                spacing={4}
                as={Container}
                maxW={"3xl"}
                textAlign={"center"}
              >
                <Heading
                  fontSize={{ base: "2xl", sm: "4xl" }}
                  fontWeight={"bold"}
                >
                  Our Research Plan
                </Heading>
              </Stack>

              <Container maxW={"Full"} mt={12}>
                <Flex flexWrap="wrap" gridGap={6} justify="center">
                  <Card
                    heading={"Research Question"}
                    icon={<Icon as={FcQuestions} w={10} h={10} />}
                    description={
                      "What event or series of events heavily influenced the red-tagging of the Makabayan bloc?"
                    }
                    href={"#"}
                  />

                  <Card
                    heading={"Hypothesis"}
                    icon={<Icon as={FcInfo} w={10} h={10} />}
                    description={
                      "The formation of the anti-terror law triggered the red-tagging of the Makabayan bloc."
                    }
                    href={"#"}
                  />

                  <Card
                    heading={"Action Plan"}
                    icon={<Icon as={FcLineChart} w={10} h={10} />}
                    description={
                      "Analyze the posting time of tweets regarding the redtagging of the Makabayan bloc."
                    }
                    href={"#"}
                  />
                </Flex>
              </Container>
            </Box>
          </Flex>
        </Stack>
      </Container>
    </>
  );
}
