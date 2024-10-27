import { View, Text } from "react-native";
interface Names {
  fname: string;
  lname: string;
}
const Field = ({ fname, lname }: Names) => {
  return (
    <View>
      <Text>
        My Name is {fname} {lname}
      </Text>
    </View>
  );
};

export default Field;
