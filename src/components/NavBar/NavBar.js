import React from "react";
import Fab from "@material-ui/core/Fab";
import HomeIcon from "@material-ui/icons/Home";
import GetAppIcon from "@material-ui/icons/GetApp";
import PolicyIcon from "@material-ui/icons/Policy";
import GavelIcon from '@material-ui/icons/Gavel';
import ContactMailIcon from "@material-ui/icons/ContactMail";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  flex-wrap: nowrap;
  padding: 15px;

  button {
    margin: 0px 5px;
  }
`;

const NavBar = () => (
    <Wrapper>
        <Fab color="secondary" aria-label="home">
            <HomeIcon />
        </Fab>
        <Fab color="secondary" aria-label="getapp">
            <GetAppIcon />
        </Fab>
        <Fab color="secondary" aria-label="rules">
            <GavelIcon />
        </Fab>
        <Fab color="secondary" aria-label="policy">
            <PolicyIcon />
        </Fab>
        <Fab color="secondary" aria-label="contact">
            <ContactMailIcon />
        </Fab>
    </Wrapper>
);

export default NavBar;
