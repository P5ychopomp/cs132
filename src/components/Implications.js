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

export default function Implications({ color }) {
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
            <HStack mx={4} minW="16em">
              <Text color={`${color}.400`} fontWeight={800}>
                05
              </Text>
              <Text fontWeight={800}>Implications and Conclusion</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>
          <Flex alignItems="center" justifyContent="center">
            <Box p={4}>
              <Box>
                <Heading
                  fontSize={{ base: "xl", sm: "2xl" }}
                  fontWeight={"bold"}
                  pb={8}
                  ml={4}
                >
                  Impacts and Applications
                </Heading>
                <Text
                  color={useColorModeValue("gray.800", "gray.100")}
                  fontSize={"md"}
                  px={4}
                  pb={5}
                >
                  The potential impacts of the research on the red-tagging of
                  the Makabayan bloc are multi-faceted. Firstly, it can
                  contribute to raising awareness about the issue of red-tagging
                  and its implications for democratic processes, human rights,
                  and freedom of expression. The research findings can shed
                  light on the extent and consequences of red-tagging, helping
                  to address concerns regarding the safety and security of
                  individuals and organizations targeted by such accusations.
                  <br />
                  <br />
                  Additionally, the research can inform policy discussions and
                  advocacy efforts aimed at safeguarding the rights and freedoms
                  of political groups, promoting inclusivity, and fostering a
                  conducive environment for political participation. Practical
                  applications may include developing guidelines or protocols to
                  prevent and respond to red-tagging incidents, supporting
                  initiatives for legal protection, and fostering dialogue and
                  understanding among diverse political actors. Ultimately, the
                  research can contribute to fostering a more inclusive and
                  democratic political environment in the Philippines.
                </Text>
              </Box>
              <Box>
                <Heading
                  fontSize={{ base: "xl", sm: "2xl" }}
                  fontWeight={"bold"}
                  pb={8}
                  ml={4}
                >
                  Conclusion
                </Heading>
                <Text
                  color={useColorModeValue("gray.800", "gray.100")}
                  fontSize={"md"}
                  px={4}
                  pb={5}
                >
                  The bottom line is that the research on the red-tagging of the Makabayan bloc highlights the challenges faced by progressive party-list organizations and the need to protect democratic processes and human rights. With this information, we can raise awareness, advocate for policy reforms, support legal protection, foster dialogue and collaboration, and engage in international advocacy to address red-tagging and create a more inclusive and democratic political environment in the Philippines.
                </Text>
              </Box>
            </Box>
          </Flex>
        </Stack>
      </Container>
    </>
  );
}
