import Text from "../components/Text";
import View from "../components/View";
import TouchableOpacity from "../components/TouchableOpacity";
import TextInput from "../components/TextInput";
import Image from "../components/Image";

const TestText = () => (
  <View flex={1} pt="40" px="40">
    <View flex={1} />
    <Text size="20" color="primary" fontWeight="bold" mb="20">
      Login to your Account
    </Text>
    <TextInput
      placeholder="Email"
      h="50"
      px="10"
      bg="#fff"
      round="8"
      shadow="sm"
      mb="10"
    />
    <TextInput
      placeholder="Password"
      h="50"
      px="10"
      bg="#fff"
      round="8"
      shadow="sm"
    />
    <TouchableOpacity
      mt="20"
      bg="#23049d"
      h="50"
      justify="center"
      round="8"
      shadow="sm"
    >
      <Text textAlign="center" color="white">
        Sign In
      </Text>
    </TouchableOpacity>
    <Text textAlign="center" mt="40" mb="20" color="#aaa">
      - Or sign in with -
    </Text>
    <View row>
      <TouchableOpacity
        flex={1}
        bg="#fff"
        shadow="sm"
        p="10"
        round="8"
        align="center"
      >
        <Image
          source={{
            uri:
              "https://cdn.icon-icons.com/icons2/2699/PNG/512/google_logo_icon_169090.png",
          }}
          w="24"
          h="24"
        />
      </TouchableOpacity>
      <View w="10" />
      <TouchableOpacity
        flex={1}
        bg="#fff"
        shadow="sm"
        p="10"
        round="8"
        align="center"
      >
        <Image
          source={{
            uri: "https://recruit.navercorp.com/img/favicon/naver_favicon.ico",
          }}
          w="24"
          h="24"
        />
      </TouchableOpacity>
      <View w="10" />
      <TouchableOpacity
        flex={1}
        bg="#fff"
        shadow="sm"
        p="10"
        round="8"
        align="center"
      >
        <Image
          source={{
            uri:
              "https://upload.wikimedia.org/wikipedia/commons/f/f2/Kakao_logo.jpg",
          }}
          w="24"
          h="24"
        />
      </TouchableOpacity>
    </View>
    <View flex={1} />
  </View>
);

export default TestText;
