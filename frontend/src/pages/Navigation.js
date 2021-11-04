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
            Applications
          </MenuButton>
          <MenuList>
            <MenuItem><Link to="/quizApp/">FST Quiz App</Link></MenuItem>
            <MenuItem disabled><Link to="/logDBApp/">Log DB</Link></MenuItem>
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