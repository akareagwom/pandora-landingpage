import { AiOutlineMenu,AiFillInfoCircle } from "react-icons/ai";
import {MdQuiz,MdPlayLesson} from "react-icons/md"
import logo from '../assets/bg.png';
import globe from '../assets/globe.png';
import connect from '../assets/connect.png';
import footlogo from '../assets/footlogo.png';
import about from '../assets/about.png';
import course from '../assets/course.png';
import quiz from '../assets/quiz.png';

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Text
} from '@chakra-ui/react'
import Image from "next/image";
const Home = () => {
  return ( 
    <>
      <Box 
      bg={'#CAC8C8'} 
      h='50vh'
      p='0'
      fontFamily='Ubuntu'>
        <Box px='30px' pt={'10px'}>
            <Icon width='35px' h='20px' color={'#D76F22'} as={AiOutlineMenu}></Icon>
        </Box>
        <Flex>
        <Container ml='100px'>
          <Flex height='10px'>
            <Box>
              <Image src={logo} width={30} height={30} alt="" />
            </Box>
            <Box>
              <Text fontSize={'15px'} lineHeight='30.58px' color='white'>Pandora's Box</Text>
            </Box>
          </Flex> 
          <Box mt='25px'>
            <Heading fontSize={'2rem'} color='white'>World-class</Heading>
            <Heading fontSize={'1.5rem'} color={'#F78D2B'}>Digital Experience</Heading>
            <Text fontSize={'12px'}>Enjoy world class experience using Pandora’s box. Learn design and test your knowledge without breaking a sweat</Text>
            <Box mt='25px'>
              <Button h='40px'fontSize={'15px'} w='223px' color={"white"} bgGradient='linear(to-r, #CB3068, #FD7F0B)'>Register Now</Button>
            </Box>
          </Box>
        </Container>
        <Box position={"relative"} top='-120px' m='0' pr='15px'> 
          <Box position={"relative"} top='1px'>
            <Image h={'100px'}  width={300} height={300} src={connect}/>
          </Box>
          <Box position={"absolute"} right={'100px'} top={'80px'}>
            <Image width={200}  height={200} src={globe}/>
          </Box>
        </Box>
        </Flex>
        
      </Box>
      <Box bgGradient='linear(to-l, #CB3068, #FD7F0B)' color={'white'}  h="50vh">
      <Flex  p={'50px'} textAlign={'center'} >
          <Container>
            <Flex px='100px'>
              <Heading fontSize={'1rem'} textAlign='center'>About Us</Heading>
              <Icon mt='3px' color='white' as={AiFillInfoCircle}  src={about}/>
            </Flex>
            <Text fontSize={'12px'}>Pandora's Box is a Ui/UX learning platform that offers a range of courses and quizzes to help users improve their skills. Users can track their progress and interact with a community of learners. </Text>
          </Container>
          <Container textAlign='center'>
           <Flex px='100px' >
            <Heading fontSize={'1rem'} textAlign='center'>Courses</Heading>
            <Icon mt='3px' as={MdPlayLesson}/>
           </Flex>
            <Text fontSize={'12px'}>Are you interested in learning how to design beautiful, intuitive user interfaces that engage and delight users? Our platform offers a range of courses on UI/UX design that cover everything from the basics of design principles and user research to advanced topics like prototyping and user testing.
        </Text>
          </Container>
          <Container>
            <Flex px='100px'>
            <Heading fontSize={'1rem'} textAlign='center'>Quiz</Heading>
            <Icon mt='3px' color='white' as={MdQuiz}/>
            </Flex>
            <Text fontSize={'12px'}>Looking to test your knowledge on UI/UX design? Our platform offers a comprehensive quiz that covers all aspects of user interface and user experience design. </Text>
          </Container>
      </Flex>
      <Flex justifyContent={'flex-end'} pb='' px='150px' >
        <Box mr={'400px'}>
          <Text fontSize={'12px'}>Contact us:01 26673 99, 01 26337 89</Text>
        </Box>
        <Box mt='-17px'>
          <Image src={footlogo} width={20} height={20}/>
          <Text fontSize={'12px'}>nHub Nigeria</Text>
        </Box>
      </Flex>
      </Box>
      
    </>
   );
}
 
export default Home;
