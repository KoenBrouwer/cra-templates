import React from "react";
import {ChakraProvider} from "@chakra-ui/react";
import {createRoot} from "react-dom/client";
import App from "./App";
import theme from "./theme";

createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ChakraProvider theme={theme}>
			<App />
		</ChakraProvider>
	</React.StrictMode>
);