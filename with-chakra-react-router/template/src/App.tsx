import React from "react";
import {VStack, HStack, Box, Text} from "@chakra-ui/react";

const App = () => {
	return (
		<VStack h={"auto"} minHeight={"100vh"} minWidth={"100%"} w={"auto"} bg={"gray.100"}>
			<HStack width={"100%"} maxWidth={"1600px"} alignItems={"flex-start"} spacing={0}>
				<Box>
					<Text>Sidebar here</Text>
				</Box>

				<Box height={"100%"} minHeight={"100vh"} width={"100%"} p={5}>
					<Text>Page here</Text>
				</Box>
			</HStack>
		</VStack>
	);
};

export default App;