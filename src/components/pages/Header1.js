import React, { useState, useEffect } from "react";
import { Box, Center } from '@chakra-ui/react';

const Header = (props) => {
  const [scroll, setScroll] = useState(false);
  const [whidth, setWhidth] = useState(false);

  useEffect(() => {

    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });

    setWhidth(window.innerWidth <= 1200);

  }, []);

  // form class add & delete
  const classadd = () => {
    document.querySelector("#search-btn");
    document.querySelector(".search-form-area").classList.add("active");
  };

  const classdelet = () => {
    document.querySelector("#close-btn");
    document.querySelector(".search-form-area").classList.remove("active");
  };

  return (
    <>
      <Box>
        <div
          className={
            scroll ? "header-area sticky animated slideInDown" : whidth ? "header-area sticky" : "header-area"
          }
          style={{"display":"flex"}}
        >
          <div className="container">
            <div className="row">
              <a
                  className="navbar-brand"
                  href="#"
                >
                <img src="/img/logo.png" 
                  alt="logo" 
                  style={{width: whidth?"100%":"200px", padding:"1px"}}
                />
              </a>
              <Center fontSize={whidth?"large":"xx-large"}
                textAlign={"center"}
                fontWeight={500}
                w={whidth?"95%":"70%"}
                p={2}>
                E se você puder ter as fotos que seus convidados tiram, durante seu evento?
              </Center>                  
            </div>
          </div>
        </div>
        <div className="search-form-area">
          <div className="search-form-centered">
            <div id="search-box">
              <i
                id="close-btn"
                className="fa fa-times fa-2x"
                onClick={classdelet}
              ></i>
              <form className="search-form">
                <input
                  className="form-control"
                  placeholder="Type your text"
                  type="text"
                />
                <button type="submit">
                  <span>Search</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </Box>
    </>
  );
};

export default Header;
