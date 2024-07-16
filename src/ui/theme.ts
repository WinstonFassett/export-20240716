import {
  extendBaseTheme,
  theme as chakraTheme,
  StyleFunctionProps,
} from "@chakra-ui/react";

const { Button, Input, Card, Badge, Modal } = chakraTheme.components;
console.log(chakraTheme.components);
const theme = extendBaseTheme({
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },
  components: {
    Badge: {
      ...Badge,
      baseStyle: {
        ...Badge.baseStyle,
        border: "solid 1px rgba(0,0,0,0.1)",
        borderRadius: "3px",
        fontSize: "10px",
        padding: "2px 8px 2px 8px",
        textTransform: "none",
        px: "4px",
      },
    },
    Button: {
      ...Button,
      baseStyle: {
        ...Button.baseStyle,
        fontSize: "14px",
        borderRadius: "md",
        borderWidth: "1px",
        borderColor: "rgba(0,0,0,0.1)",
        padding: "8px 12px 8px 12px",
        lineHeight: "1",
        height: "auto",
        _disabled: {
          bg: "#E4E4E4",
          color: "#CCCCCC",
          cursor: "not-allowed",
        },
      },
      variants: {
        ...Button.variants,
        solid: (props: StyleFunctionProps) => ({
          ...Button.variants?.solid(props),
          fontSize: "14px",
          padding: "2px",
          height: "auto",
          ...(props.colorScheme === "primary" && {
            bg: "primary.500",
            color: "black",
            height: "auto",

            _hover: {
              bg: "primary.600",
            },
            _disabled: {
              bg: "#E4E4E4",
              color: "#CCCCCC",
              cursor: "not-allowed",
            },
          }),
        }),
        outline: (props: StyleFunctionProps) => ({
          ...Button.variants?.outline(props),
          border: "solid 1px rgba(0,0,0,0.1)",
        }),
      },
      sizes: {
        ...Button.sizes,
        lg: {
          ...Button.sizes?.lg,
          h: "12",
        },
        md: {
          ...Button.sizes?.md,
          h: "9",
        },
      },
    },
    Input: {
      ...Input,
      baseStyle: {
        ...Input.baseStyle,

        field: {
          ...Input.baseStyle!.field,
          color: "#231F20",
          fontSize: "sm",
        },
        padding: "8px 12px 8px 12px",
        borderRadius: "md",
        borderWidth: "1px",
        borderColor: "rgba(0,0,0,0.1)",
        lineHeight: "1",
        _disabled: {
          bg: "#E4E4E4",
          color: "#CCCCCC",
          cursor: "not-allowed",
        },
      },
    },
    Card: {
      ...Card,
      baseStyle: {
        ...Card.baseStyle,
        container: {
          ...Card.baseStyle!.container,
          borderRadius: "8px",
          boxShadow: "sm",
          borderWidth: "1px",
          borderColor: "rgba(0,0,0,0.1)",
        },
        body: {
          ...Card.baseStyle!.body,
          padding: "8px 12px 8px 12px",
        },
        footer: {
          ...Card.baseStyle!.footer,
          width: "100%",
          borderTop: "solid 1px rgba(0,0,0,0.1)",
        },
      },
    },
    Modal,
  },
  colors: {
    primary: {
      100: "#FFCD00",
      200: "#FFCD00",
      300: "#FFCD00",
      400: "#FFCD00",
      500: "#FFCD00",
      600: "#F3C400",
      700: "#E1B500",
      800: "#E1B500",
      900: "#FFCD00",
    },
  },
});

console.log({ theme });

export default theme;
