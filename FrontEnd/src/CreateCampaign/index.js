import React, { useRef } from "react";

import {
  HStack,
  useToast,
  ScrollView,
  Text,
  VStack,
  Box,
  Input,
} from "native-base";
import { TouchableOpacity } from "react-native";
import colors from "../utils/colors";

function CreateCampaign({ navigation }) {
  const toast = useToast();

  return (
    <ScrollView w={"100%"} h={"100%"} backgroundColor={colors.black}>
      <VStack px={5} pb={30}>
        <Text
          mt={50}
          color={colors.white}
          fontSize={"36"}
          fontFamily={"JosefinSans-Bold"}
        >
          DeCHO [TestNet]
        </Text>
        <Text
          my={2}
          color={colors.white}
          fontSize={"18"}
          fontFamily={"JosefinSans-Bold"}
        >
          Create A new campaign for crowfunding.
        </Text>
        <Box width={"100%"} my={3} p={4} borderRadius={5} bgColor={colors.grey}>
          <Input
            variant="unstyled"
            fontFamily={"JosefinSans-Bold"}
            size={"xl"}
            placeholder="Project Title"
          />
        </Box>
        <Box width={"100%"} my={3} p={4} borderRadius={5} bgColor={colors.grey}>
          <Input
            variant="unstyled"
            fontFamily={"JosefinSans-Bold"}
            size={"xl"}
            placeholder="Project Tagline"
          />
        </Box>
        <Box width={"100%"} my={3} p={4} borderRadius={5} bgColor={colors.grey}>
          <Input
            variant="unstyled"
            fontFamily={"JosefinSans-Bold"}
            size={"xl"}
            placeholder="Photo URL"
          />
        </Box>
        <Box width={"100%"} my={3} p={4} borderRadius={5} bgColor={colors.grey}>
          <Input
            variant="unstyled"
            fontFamily={"JosefinSans-Bold"}
            size={"xl"}
            placeholder="Voting Goal"
          />
        </Box>
        <Box width={"100%"} my={3} p={4} borderRadius={5} bgColor={colors.grey}>
          <Input
            variant="unstyled"
            fontFamily={"JosefinSans-Bold"}
            size={"xl"}
            placeholder="Donation Goal"
          />
        </Box>
        <Box width={"100%"} my={3} p={4} borderRadius={5} bgColor={colors.grey}>
          <Input
            variant="unstyled"
            fontFamily={"JosefinSans-Bold"}
            size={"xl"}
            placeholder="Expiry Date"
          />
        </Box>
        <Box width={"100%"} my={3} p={4} borderRadius={5} bgColor={colors.grey}>
          <Input
            variant="unstyled"
            fontFamily={"JosefinSans-Bold"}
            size={"xl"}
            placeholder="Website URL"
          />
        </Box>
        <HStack width={"100%"} justifyContent={"space-between"}>
          <TouchableOpacity
            style={{
              backgroundColor: colors.darkgrey,
              height: 60,
              width: 126,
              borderRadius: 20,
              elevation: 5,
              alignItems: "center",
              justifyContent: "center",
              marginVertical: 20,
              flexDirection: "row",
            }}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Text
              color={colors.white}
              fontSize={18}
              fontFamily={"JosefinSans-Regular"}
            >
              Cancel
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: colors.teal,
              height: 60,
              width: 126,
              borderRadius: 20,
              alignItems: "center",
              justifyContent: "center",
              marginVertical: 20,
              flexDirection: "row",
            }}
            onPress={() => {
              navigation.goBack();
              toast.show({
                description: "Create A Campaign feature coming soon!",
              });
            }}
          >
            <Text
              color={colors.white}
              fontSize={18}
              fontFamily={"JosefinSans-Regular"}
            >
              Create {">"}
            </Text>
          </TouchableOpacity>
        </HStack>
      </VStack>
    </ScrollView>
  );
}

export default CreateCampaign;

