import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
  Heading,
  Center,
  Avatar,
  Button,
  Link,
  Badge,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaEnvelope, FaFacebook } from "react-icons/fa";
import ProfileArray from "./ProfileArray";

export default function Contact({ color }) {
  function Card({ name, email, bio, fb, img }) {
    return (
      <Center py={6}>
        <Box
          maxW={"500px"}
          minH={"560px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.900")}
          boxShadow={"lg"}
          rounded={"xl"}
          p={6}
          textAlign={"center"}
        >
          <Avatar
            size={"2xl"}
            src={img}
            alt={"Avatar Alt"}
            mb={4}
            pos={"relative"}
          />
          <Heading fontSize={"2xl"} fontFamily={"body"}>
            {name}
          </Heading>
          <Text fontWeight={600} color={"gray.500"} mb={4}>
            @{fb}
          </Text>
          <Text
            textAlign={"center"}
            color={useColorModeValue("gray.700", "gray.400")}
            px={3}
            fontSize={"sm"}
          >
            {bio}
          </Text>

          <Stack mt={8} direction={"row"} spacing={4} justify="center">
            <Link href={`https://fb.com/${fb}`}>
              <Button colorScheme="facebook" leftIcon={<FaFacebook />}>
                Facebook
              </Button>
            </Link>
            <Link href={`mailto:${email}`}>
              <Button colorScheme="teal" leftIcon={<FaEnvelope />}>
                Mail
              </Button>
            </Link>
          </Stack>
        </Box>
      </Center>
    );
  }
  return (
    <>
      <Container maxW={"8xl"} id="contact">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 20, md: 36 }}
        >
          <Stack fontSize={"2xl"} align="center" direction="row" p={4}>
            <HStack mx={4}>
              <Text fontWeight={800}>Contact</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>
          <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
            <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
              Meet the Team!
            </Heading>
          </Stack>
          <Stack
            justify="center"
            spacing={10}
            direction={["column", "column", "column", "row"]}
          >
            <Card
              name="Denver Bugaoisan"
              email="dsbugaoisan@up.edu.ph"
              bio="I'm a passionate computer science student with a deep love for developing web apps. The art of crafting interactive and user-friendly interfaces has always fascinated me, and I find immense joy in bringing ideas to life through code. My enthusiasm for technology extends beyond web development, as I'm equally captivated by the realms of Artificial Intelligence and Computer Systems. Exploring the intricate algorithms and systems that power intelligent machines is a never-ending adventure that fuels my curiosity and inspires me to push the boundaries of what's possible in the digital world."
              fb="dnverb"
              img="denver.jpg"
            />
            <Card
              name="Victor Naraval"
              email="vdnaraval@up.edu.ph"
              bio="I'm Victor Dominic Naraval, a BS Computer Science student at the University of the Philippines Diliman. While I may be considered a novice in the field of data science, my eagerness to learn and expand my capabilities knows no bounds. I aspire to not only gain knowledge, skills, and experiences but also to share them with others, ultimately making a positive impact in the world."
              fb="victor.naraval"
              img="victor.jpg"
            />
            <Card
              name="Jedric Campos"
              email="jlcampos1@up.edu.ph"
              bio="Hi! I am Jedric Campos, a Junior Computer Science student at the University of the Philippines, Diliman. For the past semester, I have been exploring different Computer Science domains, specifically Data Science, Artificial Intelligence, and Numerical computing. Anything that includes Mathematics always fascinates me."
              fb="jedric.campos"
              img="jedric.jpg"
            />
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
