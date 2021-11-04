import '../../App.css';
import { 
        Flex, Heading, 
        Button, Spacer, 
        Breadcrumb, BreadcrumbItem, 
        MenuItem, Menu, 
        MenuButton, MenuList,
      } from "@chakra-ui/react"
import { ChevronDownIcon } from '@chakra-ui/icons'
import {
  Link
} from "react-router-dom";

function NavBar() {
  return (
  <Breadcrumb paddingLeft="10" separator=" ">
    <BreadcrumbItem>
      <Link to="/"><Button colorScheme="blue">Home</Button></Link>
    </BreadcrumbItem>
    <BreadcrumbItem>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          Questions
        </MenuButton>
        <MenuList>
          <MenuItem><Link to="/quizApp/questions/submit"> Submit new question</Link></MenuItem>
          <MenuItem><Link to="/quizApp/questions/view">View submited questions</Link></MenuItem>
        </MenuList>
      </Menu>
    </BreadcrumbItem>
    <BreadcrumbItem>
      <Menu>
        <MenuButton disabled as={Button} rightIcon={<ChevronDownIcon />}>
          Quizes
        </MenuButton>
        <MenuList>
          <MenuItem><Link to="/quizApp/quiz/create">Create Quiz</Link></MenuItem>
        </MenuList>
      </Menu>
    </BreadcrumbItem>
  </Breadcrumb>
  );
}

function Navigation() {
  return (
    <Flex direction="row" p="4">
      <Heading p="2" size="md">FST Suite</Heading>
      <NavBar/>
      <Spacer />
    </Flex>
  );
}

export default Navigation;
