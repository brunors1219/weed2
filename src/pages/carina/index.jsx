import React, { useEffect, useState }  from 'react';
import YouTube from 'react-youtube';
import { Box, Center, Input, Text, Collapse, Button } from "@chakra-ui/react";

const Example = () => {

    const [showButtons, setShowButtons] = useState(false);

    const opts = {
        height: '800px',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };
  
    return (
    <>
        <YouTube videoId="-RfTdZY7kfc" opts={opts} onEnd={()=>{setShowButtons(true)}}/>
        {showButtons ? 
            <Center position={"absolute"} 
                bottom={"10px"}
                width={"100%"}>
                
                <Button>Confirme sua presença</Button>
        
            </Center>
        : null}
    </>
    
    );
  }

export default Example;
