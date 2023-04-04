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
  Card,
  CardBody,
} from "@chakra-ui/react";

const Home = () => {
  return (
    <Box w="100%" bg="black" overflow="hidden">
      <Box
        w="100%"
        position={"relative"}
        bg={"#38346A"}
        h="200vh"
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
          <Text mt="3%" color={'white'}  fontSize={"14px"}>
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
        <Box>
          <Flex justify="center" mt={'15%'} >
              <Heading color={'#F67714'} fontSize={"1rem"} textAlign="center">
                About Us
              </Heading>
              <Icon ml={2} mt="3px" color="white" as={AiFillInfoCircle} />
          </Flex>
          <Text fontSize={"14px"} color={'white'}>Pandora's Box is a Ui/UX learning platform that offers a range of courses and quizzes to help users improve their skills. Users can track their progress and interact with a community of learners. With a user-friendly interface and engaging content, Pandora's Box is perfect for beginners and experienced designers alike.</Text>
        </Box>
        <Flex justify={'center'} mt={'10%'} gap="50px">
          <Card w="28%" textAlign={'center'} justify={'center'}>
            <CardBody >
              <Image src={"card1.png"} alt='asset'/>
              <Heading fontSize={'1rem'}>UI/UX Courses</Heading>
              <Text fontSize={'14px'}>We provide a vast array of UI/UX courses that are tailored to suit your needs and level of expertise.</Text>
            </CardBody>
          </Card>
          <Card w="28%" textAlign={'center'} justify={'center'}>
            <CardBody>
              <Image src={"card2.png"} alt='asset'/>
              <Heading fontSize={'1rem'}>UX Quization</Heading>
              <Text fontSize={'14px'}>Put your knowledge to the test with our thought-provoking and engaging quiz questions.</Text>
            </CardBody>
          </Card>
          <Card w="28%" textAlign={'center'} justify={'center'}>
            <CardBody>
              <Image src={"card3.png"} alt='asset'/>
              <Heading fontSize={'1rem'}>SkillUp Tracker</Heading>
              <Text fontSize={'14px'}>Elevate your UI/UX Proficiency with our User-Friendly Progress Monitoring Tool</Text>
            </CardBody>
          </Card>
        </Flex>
      </Box>
      <Box bgGradient="linear(to-l, #CB3068, #FD7F0B)" color={"white"} h="auto" py={8}>

      </Box>
    </Box>
  );
};

export default Home;
