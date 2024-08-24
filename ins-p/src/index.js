import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { BrowserRouter } from "react-router-dom";
// cua reducer
import allReducers from '../../ins-p/src/components_1/reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(allReducers);

const styles = {
	global: (props) => ({
		body: {
			bg: mode("gray.100", "#000")(props),
			color: mode("gray.800", "whiteAlpha.900")(props),
		},
	}),
};

const config = {
	initialColorMode: "dark",
	useSystemColorMode: false,
};

const theme = extendTheme({ config, styles });

ReactDOM.createRoot(document.getElementById("root")).render(
	<Provider store={store}>
		<BrowserRouter>
			<ChakraProvider theme={theme}>
				<App />
			</ChakraProvider>
		</BrowserRouter>
	</Provider>
);

