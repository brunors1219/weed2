import React, { useState, useEffect } from "react";
import {Box} from "@chakra-ui/react";

const Footer = (props) => {
  const [scroll, setScroll] = useState(false);
  const [whidth, setWhidth] = useState(false);

  useEffect(() => {

    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });

    setWhidth(window.innerWidth <= 1200);

  }, []);

  return (
    <>
      <Box backgroundColor={"var(--background-collor)"}
        bottom={0}
        color={"white"}
        p={6}>
        2022 - Desenvolvido por Anselmo Ichihara
      </Box>
    </>
  );
};

export default Footer;
