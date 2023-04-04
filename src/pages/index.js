import { AiFillInfoCircle } from "react-icons/ai";
import { MdQuiz, MdPlayLesson } from "react-icons/md";

import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Text,
  Image,
} from "@chakra-ui/react";

const Home = () => {
  return (
    <Box w="100%" bg="black" overflow="hidden">
      <Box
        w="100%"
        position={"relative"}
        bg={"#38346A"}
        h="100vh"
        pt="5%"
        fontFamily="Ubuntu"
        px={{ base: "5%", lg: "10%" }}
      >
        <Flex height="10px">
          <Box>
            <Image src={"bg.png"} width={30} height={30} alt="" />
          </Box>
          <Box>
            <Text ml={3} fontSize={"15px"} lineHeight="30.58px" color="white">
              Pandora's Box
            </Text>
          </Box>
        </Flex>
        <Box mt={{ base: "30%", lg: "15%" }} maxW={{ base: "100%", lg: "50%" }}>
          <Heading fontSize={"2rem"} color="white">
            World-Class <Text color={"#F78D2B"}>Digital Experience</Text>
          </Heading>
          <Text mt="3%" fontSize={"12px"}>
            Enjoy world class experience using Pandora’s box. Learn design and
            test your knowledge without breaking a sweat
          </Text>
          <Box mt="3%">
            <Button
              h="40px"
              fontSize={"15px"}
              w="65%"
              color={"white"}
              bgGradient="linear(to-r, #CB3068, #FD7F0B)"
            >
              Register Now
            </Button>
          </Box>
        </Box>
        <Box
          position={"absolute"}
          top="-15%"
          right="-5%"
          display={{ base: "none", lg: "flex" }}
          flexDirection="column"
        >
          <Image alt="" w={"90%"} src={"connect.png"} />
          <Image alt="asset" w={"60%"} src={"globe.png"} mt="-110%" />
        </Box>
      </Box>
      <Box bgGradient="linear(to-l, #CB3068, #FD7F0B)" color={"white"} h="auto" py={8}>
        <Flex p={"50px"} gap="50px" textAlign={"center"}>
          <Box w="360px" >
            <Flex justify="center" mb={4} >
              <Heading fontSize={"1rem"} textAlign="center">
                About Us
              </Heading>
              <Icon ml={2} mt="3px" color="white" as={AiFillInfoCircle} />
            </Flex>
            <Text textAlign="justify" fontSize={"12px"}>
              Pandora's Box is a Ui/UX learning platform that offers a range of
              courses and quizzes to help users improve their skills. Users can
              track their progress and interact with a community of learners.{" "}
            </Text>
          </Box>
          <Box w="360px" textAlign="center">
            <Flex justify="center" mb={4} >
              <Heading fontSize={"1rem"} textAlign="center">
                Courses
              </Heading>
              <Icon ml={2} mt="3px" as={MdPlayLesson} />
            </Flex>
            <Text textAlign="justify" fontSize={"12px"}>
              Are you interested in learning how to design beautiful, intuitive
              user interfaces that engage and delight users? Our platform offers
              a range of courses on UI/UX design that cover everything from the
              basics of design principles and user research to advanced topics
              like prototyping and user testing.
            </Text>
          </Box>
          <Box w="360px">
            <Flex justify="center" mb={4} >
              <Heading fontSize={"1rem"} textAlign="center">
                Quiz
              </Heading>
              <Icon ml={2} mt="3px" color="white" as={MdQuiz} />
            </Flex>
            <Text textAlign="justify" fontSize={"12px"}>
              Looking to test your knowledge on UI/UX design? Our platform
              offers a comprehensive quiz that covers all aspects of user
              interface and user experience design.{" "}
            </Text>
          </Box>
        </Flex>
        <Flex justify={"space-between"} align="center" pb="" px="50px">
          <Box>
            <Text fontSize={"16px"}  >Contact us: +234 806 8640 710</Text>
          </Box>
          <Box >
            <Image src={"footlogo.png"} alt="" width={20} />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Home;
