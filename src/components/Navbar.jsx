import React from "react";
import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";

const Container = styled.div`
  height: 40px;
  /* background-color: pink; */
`;

const Wrapper = styled.div`
  padding: 5px 20px;
		/* background-color: red; */
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Language = styled.div`
  font-size: 14px;
  cursor: pointer;
  padding:3px;
  background-color: #ccc;
`;

const SearchContainer = styled.div`
  border: 1px solid gray;
  display: flex;
  align-items: center;
  margin-left: 25px;
`;

const Input = styled.input`
  height:25px;

  border: none;
`;
const Center = styled.div`
  flex: 1;
`;

const Logo = styled.h1`
  flex: 1;
		margin:0px;
  text-align: center;
`;

const Right = styled.div`
  display: flex;
		justify-content: flex-end;

  flex: 1;
`;

const MenuItem = styled.div`
  font-style: 14px;
  cursor: pointer;
		margin-right: 25px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
							<Search style={{color:"gray",fontSize:16}}/>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Store</Logo>
        </Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Sign in</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
