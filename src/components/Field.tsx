import { View, Text } from "react-native";

const Field = ({ fname, lname }) => {
  return (
    <View>
      <Text>
        My Name is {fname} {lname}
      </Text>
    </View>
  );
};

export default Field;
