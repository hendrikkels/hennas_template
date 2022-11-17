import type { NextPage } from "next";
import { HStack, View, Text, Title } from "../library";

const Home: NextPage = () => {
  return (
    <View height={"100%"} width={"100%"}>
      <HStack
        width={"100%"}
        backgroundColor={"lightGray"}
        justifyContent={"space-between"}
        padding={"10px"}
      >
        <View>
          <Title>Hennas Software</Title>
        </View>
      </HStack>
    </View>
  );
};

export default Home;
