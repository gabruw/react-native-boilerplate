import { Theme } from "@react-navigation/native";

const LIGHT_THEME: Theme = {
    dark: false,
    colors: {
        card: "#F4F4F4",
        text: "#282828",
        border: "#D2292D",
        primary: "#AF0C15",
        background: "#DBDBDB",
        notification: "#181818",
    },
};

const DARK_THEME: Theme = {
    dark: true,
    colors: {
        card: "#181818",
        text: "#F4F4F4",
        border: "#D2292D",
        primary: "#AF0C15",
        background: "#282828",
        notification: "#DBDBDB",
    },
};

export { LIGHT_THEME, DARK_THEME };
