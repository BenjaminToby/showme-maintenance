module.exports = {
    content: [
        "./components/**/*.{html,js,jsx}",
        "./pages/**/*.{html,js,jsx}",
        "./layouts/**/*.{html,js,jsx}",
        "./public/**/*.{html,js,jsx}",
    ],
    theme: {
        screens: {
            xs: "350px",
            sm: "450px",
            md: "600px",
            sl: "800px",
            lg: "990px",
            xl: "1200px",
        },
        extend: {
            colors: {
                primary: "#2968c6",
                primary_dark: "#132f58",
                primary_darkest: "#041426",
                dark: "#120e16",
                secondary: "#e64d4d",
                secondary_light: "#ee8484",
                secondary_dark: "#ac2e2e",
                secondary2: "#1ca396",
            },
        },
    },
    plugins: [],
    corePlugins: {
        preflight: false,
    },
    darkMode: "class",
};
