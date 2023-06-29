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
  Link
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

export default function Results({ color }) {
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
            <HStack mx={4} minW="13em">
              <Text color={`${color}.400`} fontWeight={800}>
                03
              </Text>
              <Text fontWeight={800}>Results and Discussion</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>
          <Flex alignItems="center" justifyContent="center">
            <Box p={4}>
              <Stack
                spacing={4}
                as={Container}
                maxW={"3xl"}
                textAlign={"center"}
                pb={8}
              >
                <Heading
                  fontSize={{ base: "2xl", sm: "4xl" }}
                  fontWeight={"bold"}
                >
                  The Key Takeaways
                </Heading>
              </Stack>
              <Box>
                <Heading
                  fontSize={{ base: "xl", sm: "2xl" }}
                  fontWeight={"bold"}
                  pb={8}
                  ml={4}
                >
                  Statistical Model
                </Heading>
                <Text
                  color={useColorModeValue("gray.800", "gray.100")}
                  fontSize={"md"}
                  px={4}
                  pb={5}
                >
                  Based on the <Link color="blue" href="https://drive.google.com/file/d/11NnUUDGUplNl6J6wgcWQqnbgIfaXsOZf/view?usp=sharing">statistical model</Link> hypothesis test results,
                  specifically the obtained t-value of 1.4759 and the associated
                  p-value of 0.072476, we have sufficient evidence to reject the
                  null hypothesis at the 0.10 significance level. This means
                  that we found a statistically significant difference in the
                  number of tweets between the months when the anti-terror law
                  was passed and became effective compared to the other months,
                  excluding the specified notable events.
                  <br />
                  <br />
                  Therefore, we can conclude that there was a significant
                  increase in the number of tweets during the formation of the
                  anti-terror law based on the analysis conducted.
                </Text>
              </Box>
              <Box>
                <Heading
                  fontSize={{ base: "xl", sm: "2xl" }}
                  fontWeight={"bold"}
                  pb={8}
                  ml={4}
                >
                  Computational Model
                </Heading>
                <Box overflow="auto" pb={7}>
                  <Image src="datamodelfinal.png" w="100em" objectFit="cover" />
                </Box>
                <Text
                  color={useColorModeValue("gray.800", "gray.100")}
                  fontSize={"md"}
                  px={4}
                  pb={5}
                >
                  Mis/Disinformation tweet activity data shows fluctuations in
                  activity over time. There are periods of no engagement from
                  2016 to early 2017 and in 2018, with occasional spikes. A
                  notable increase in activity occurs in early 2018, followed by
                  a decline. From mid-2019 to early 2020, the tweet count
                  remains stable and low. A significant spike occurs in November
                  2020, reaching a peak of 14 tweets, indicating a possible
                  notable event. Another peak is observed in May 2022. The graph
                  displays fluctuating tweet activity with intermittent periods
                  of higher and lower activity. Overall, the data reflects
                  varying levels of interest and engagement, potentially
                  influenced by specific events.
                  <br />
                  <br />
                  Peak detection using SciPy with width = 1.25 and change point
                  detection via Pelt algorithm with penalty = 0.5 was used in
                  detecting significant events. Notable related events that have
                  occurred near these change points and peaks were the senate
                  hearing on red-tagging, red-tagging of health workers and
                  teachers by NTF-ELCAC, Makabayan bloc's protest against
                  Duterte's SONA, and the 2022 Election Day. The model confirmed
                  our hypothesis regarding the passage of the Anti-Terror Law.
                  Among the detected events, the highest peak corresponded to
                  the senate hearing on red-tagging. Based on the analysis
                  performed, it can be inferred that there was a significant
                  surge in tweet activity during the period when the anti-terror
                  law was being established.
                </Text>
              </Box>
              <Box>
                <Heading
                  fontSize={{ base: "xl", sm: "2xl" }}
                  fontWeight={"bold"}
                  pb={8}
                  ml={4}
                >
                  Significance of the findings
                </Heading>
                <Text
                  color={useColorModeValue("gray.800", "gray.100")}
                  fontSize={"md"}
                  px={4}
                  pb={5}
                >
                 The findings from the analysis provide valuable insights into public engagement and sentiment regarding significant events, such as the formation of the anti-terror law. The observed increase in tweet activity during this period suggests heightened interest and discussion around the topic.
                  <br />
                  <br />
                  These findings contribute to our existing knowledge by
                  demonstrating the impact of key events on tweet activity. They
                  provide evidence of a significant increase in tweets during
                  the formation of the anti-terror law, suggesting that it
                  generated considerable attention and discussion. Additionally,
                  the detection of related events, such as the senate hearing on
                  red-tagging and protests against Duterte's SONA, further
                  emphasizes the connection between political developments and
                  social media engagement. These findings enhance our
                  understanding of the dynamics between events, public
                  sentiment, and social media activity, contributing to a
                  broader comprehension of the intersection between digital
                  platforms and real-world events.
                </Text>
              </Box>
            </Box>
          </Flex>
        </Stack>
      </Container>
    </>
  );
}
