import { chakra, Center, Box, Flex, Button } from "@chakra-ui/react";

export const Fundo = chakra(Center, {
  baseStyle: {
    position: "absolute",
    width: "100vw",
    height: "100vh",
    zIndex: 999,
  },
});

export const CaixaMsg = chakra(Center, {
  baseStyle: {
    margin: "auto",
  },
});

export const CaixaTextoContive = chakra(Box, {
  baseStyle: {
    margin: "10px",
    width: "50vw",
    fontSize: "x-large",
    color: "#9583B6",
    alignSelf: "flex-end",
    "@media (min-height: 800px)": {
      width: "12vw",
    },
  },
});

export const Lateral = chakra(Box, {
  baseStyle: {
    width: "40%",
    backgroundColor: "#9583B6",
    display: "none",
    "@media (min-height: 800px)": {
      display: "block",
    },
  },
});

export const CaixaNoivos = chakra(Box, {
  baseStyle: {
    fontSize: "xx-large",
    color: "#9583B6",
    fontWeight: 500,
    fontFamily: "Mistrully",
  },
});

export const Caixa = chakra(Flex, {
  baseStyle: {
    backgroundImage: 'url(/images/inviteBackSemFolha.jpg)',
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    textAlign: 'center',
    alignItems: 'center',
    color: '#C8A2C8',
    fontFamily: '"Great Vibes"',
    ".locate": {
      fontSize: 'x-large',
    },
    ".time": {
      fontWeight: 900,
      fontFamily: '"Water Brush"',
    },
    ".frase": {
      fontSize: 'smaller',
      width: '50%',
      fontFamily: '"Water Brush"',
      marginTop: '2vh',
      textAlign: 'left',
      fontWeight: 900,
      color: '#9583B6',
    },
    ".fraseAutor": {
      marginLeft: '-20%',
    },
    "@media (min-height: 800px)": {
      width: '30%',
      ".title": {
        fontSize: 'xx-large',
      },
      ".locate": {
        fontSize: 'xx-large',
      },
    },
  },
});

export const Circlo = chakra(Flex, {
  baseStyle: {
    backgroundColor: '#505EA1',
    borderRadius: '50%',
    width: '200px',
    height: '170px',
    overflow: 'hidden',
  },
});

export const ImgQrCode = chakra(Flex, {
  baseStyle: {
    backgroundImage: 'url(/images/inviteBack1.jpg)',
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    textAlign: 'center',
    alignItems: 'center',
    color: 'black',
    fontSize: 'large',
    overflow: 'hidden',
    position: 'absolute',
    zIndex: 9999,
    width: '100%',
    height: '100%',
    img: {
      marginLeft: '10%',
      width: '80%',
      height: '40%',
    },
    button: {
      width: '50%',
    },
    "@media (min-height: 800px)": {
      marginLeft: '30vw',
    },
  },
});

export const BtnNovo = chakra(Button, {
  baseStyle: {
    display: 'block',
    height: '80px',
    width: '120px',
    borderRadius: '50%',
    backgroundColor: '#C8A2C8',
    color: 'white',
    textAlign: 'center',
    whiteSpace: 'normal',
    fontSize: 'larger',
    fontFamily: '"Water Brush"',
    margin: '5px',
    boxShadow: '3px 3px orange, 3px 2px orange, 0px 1px orange',
  },
});

export const BtnNovo1 = chakra(Button, {
  baseStyle: {
    display: 'block',
    height: '85px',
    width: '120px',
    borderRadius: '50%',
    backgroundColor: '#505EA1',
    color: 'white',
    textAlign: 'center',
    whiteSpace: 'normal',
    margin: '1px',
    fontSize: 'larger',
    fontFamily: '"Water Brush"',
    boxShadow: '3px 3px orange, 3px 2px orange, 0px 1px orange',
  },
});

export const Aviso1 = chakra(Box, {
  baseStyle: {
    boxShadow: '8px 13px 7px black',
  },
});
