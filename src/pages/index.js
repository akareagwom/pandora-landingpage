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
  Tabs,
  TabList,
  Tab,
} from "@chakra-ui/react";

const Home = () => {
  return (
    <Box w="100%" bg="black" overflow="hidden">
      <Box
        
        w="100%"
        position={"relative"}
        bg={"#38346A"}
        h={{base:"auto", lg:"220vh"}}
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
          <Box pos={'absolute'} zIndex={0} opacity={'10%'} top={'10%'}>
            <Image src={"bg.png"} width={490}  alt="" />
          </Box>
        </Box>
        <Box
          position={"absolute"}
          top="-10%"
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
        <Flex w={'100%'} display={{base:'inline-block', lg:'flex'}}  pb={{base:'20%',lg:'10%'}}  flexWrap={{base:'wrap', lg:'nowrap'}} mx={{base:'10%',lg:'auto'}} justify={{base:'center', lg:'center'}} mt={'10%'}>
          <Card w={{base:"60%", lg:"30%"}} m={{base:'10%',lg:'auto'}} h={{base:"50%", lg:"auto"}} textAlign={'center'} justify={'center'}>
            <CardBody px={'20%'}  >
              <Image px={'10%'}  src={"card1.png"} alt='asset'/>
              <Heading fontSize={{base:'14px', lg:"1rem"}}>UI/UX Courses</Heading>
              <Text fontSize={{base:'12px', lg:'14px'}}>We provide a vast array of UI/UX courses that are tailored to suit your needs and level of expertise.</Text>
              <Box display={'flex'} justifyContent={'center'} borderBottom={'4px'} w={'20%'} borderRadius={'32.5167px'} borderColor={'#E99B00'} mx={'40%'} mt={'40px'}></Box>
            </CardBody>
          </Card>
          <Card w={{base:"60%", lg:"30%"}} m={{base:'10%',lg:'auto'}} h={{base:"50%", lg:"auto"}} textAlign={'center'} justify={'center'}>
            <CardBody px={'20%'} >
              <Image px={'10%'} src={"card2.png"} alt='asset'/>
              <Heading fontSize={{base:'14px', lg:"1rem"}}>UX Quization</Heading>
              <Text fontSize={{base:'12px', lg:'14px'}}>Put your knowledge to the test with our thought-provoking and engaging quiz questions.</Text>
              <Box display={'flex'} justifyContent={'center'} borderBottom={'4px'} w={'20%'} borderRadius={'32.5167px'} borderColor={'#0E7886'} mx={'40%'} mt={'40px'}></Box>
            </CardBody>
          </Card>
          <Card w={{base:"60%", lg:"30%"}} m={{base:'10%',lg:'auto'}} h={{base:"50%", lg:"auto"}} textAlign={'center'} justify={'center'}>
            <CardBody px={'20%'} >
              <Image px={'10%'} src={"card3.png"} alt='asset'/>
              <Heading fontSize={{base:'14px', lg:"1rem"}}>SkillUp Tracker</Heading>
              <Text fontSize={{base:'12px', lg:'14px'}}>Elevate your UI/UX Proficiency with our User-Friendly Progress Monitoring Tool</Text>
              <Box display={'flex'} justifyContent={'center'} borderBottom={'4px'} w={'20%'} borderRadius={'32.5167px'} borderColor={'#979695'} mx={'40%'} mt={'40px'} ></Box>
            </CardBody>
          </Card>
        </Flex>
      </Box>
      <Box bgGradient="linear(to-l, #CB3068, #FD7F0B)" color={"white"} h="auto" py={8}>
        <Flex justify={'space-around'} p={'5'} w="100%">
          <Box w="20%">
            <Text fontSize={{base:"12px", lg:"16px"}}  >Contact us:</Text> 
            <Text fontSize={{base:"12px", lg:"16px"}}  >+234 806 8640 710</Text> 
          </Box>
          <Box w="20%">
            <Text fontSize={{base:"12px", lg:"16px"}}>  
              Term and conditions
            </Text>
            <Text fontSize={{base:"12px", lg:"16px"}}>  
              Privacy and policies
            </Text>
          </Box>
          <Box w="20%">
          <Flex justify={'space-around'}>
            <Image src={"Instagram.png"} width={30} border={'2px'} borderRadius={'50%'} m='0' p={0} />
            <Image src={"Facebook.png"} width={30} border={'2px'} borderRadius={'50%'} m='0' p={0} />
            <Image src={"Behance.png"} width={30} border={'2px'} borderRadius={'50%'} m='0' p={0} /> 
          </Flex>
          </Box>
        </Flex>
          <Flex justify={'flex-end'} px={'10%'} >
            <Image src={"footlogo.png"} alt="" width={10} />
          </Flex>
      </Box>
    </Box>
  );
};

export default Home;
