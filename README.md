# RN-OS-UI

React Native UI Library<br/>
Typescript supported<br/>
inspired from tailwind and chakra ui

## **0. Install**

```
npm install rn-os-ui
```

## **1. Use**

```javascript
import { Text, View, TouchableOpacity, TextInput, Image } from "rn-os-ui";

export default function App() {
  return (
    <View flex={1} p="40">
      <View flex={1} />
      <Text size="20" fontWeight="bold" mb="20">
        Login to your Account
      </Text>
      <Input placeholder="Email" />
      <View h="10" />
      <Input placeholder="Password" />
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
        <SnsButton uri="https://cdn.icon-icons.com/icons2/2699/PNG/512/google_logo_icon_169090.png" />
        <View w="10" />
        <SnsButton uri="https://recruit.navercorp.com/img/favicon/naver_favicon.ico" />
        <View w="10" />
        <SnsButton uri="https://upload.wikimedia.org/wikipedia/commons/f/f2/Kakao_logo.jpg" />
      </View>
      <View flex={1} />
    </View>
  );
}

const Input = ({ placeholder }: { placeholder: string }) => {
  return (
    <TextInput
      placeholder={placeholder}
      h="50"
      px="10"
      bg="#fff"
      round="8"
      shadow="sm"
    />
  );
};

const SnsButton = ({ uri }: { uri: string }) => {
  return (
    <TouchableOpacity
      flex={1}
      bg="#fff"
      shadow="sm"
      p="10"
      round="8"
      align="center"
    >
      <Image source={{ uri }} w="24" h="24" />
    </TouchableOpacity>
  );
};
```

## **2. Compoments**

- View
- ScrollView
- Text
- Image
- TouchableOpacity
- TextInput

## **3. Props**

|    Prop    |    Css Prop    |      Type      |                                Description                                 |
| :--------: | :------------: | :------------: | :------------------------------------------------------------------------: |
| d, display |    display     |     string     |                                 flex, none                                 |
|  f, flex   |      flex      | string, number |                                                                            |
|    row     | flexDirection  |    boolean     |                                     -                                      |
|    col     | flexDirection  |    boolean     |                                     -                                      |
|   align    |   alignItems   |     string     |              flex-start, flex-end, center, stretch, baseline               |
|  justify   | justifyContent |     string     | flex-start, flex-end, center<br/>space-between, space-around, space-evenly |

## **4. Margin / Padding Props**

| Prop |     Css Prop      |      Type      | Description |
| :--: | :---------------: | :------------: | :---------: |
|  m   |      margin       | string, number |      -      |
|  mt  |     marginTop     | string, number |      -      |
|  mb  |   marginBottom    | string, number |      -      |
|  ml  |    marginLeft     | string, number |      -      |
|  mr  |    marginRight    | string, number |      -      |
|  my  |  marginVertical   | string, number |      -      |
|  mx  | marginHorizontal  | string, number |      -      |
|  pt  |    paddingTop     | string, number |      -      |
|  pb  |   paddingBottom   | string, number |      -      |
|  pl  |    paddingLeft    | string, number |      -      |
|  pr  |   paddingRight    | string, number |      -      |
|  py  |  paddingVertical  | string, number |      -      |
|  px  | paddingHorizontal | string, number |      -      |

## **4. Box Style Props**

|  Prop  |              Css Prop               |  Type  |  Description   |
| :----: | :---------------------------------: | :----: | :------------: |
|   bg   |           backgroundColor           | string |    hex, rgb    |
| shadow | elevation in android, shadow in ios | string | sm, md, lg, xl |

## **5. borderRound Props**

|     Prop      |        Css Prop         |      Type      | Description |
| :-----------: | :---------------------: | :------------: | :---------: |
|     round     |      borderRadius       | string, number |      -      |
| roundBotLeft  | borderBottomLeftRadius  | string, number |      -      |
| roundBotRight | borderBottomRightRadius | string, number |      -      |
| roundTopLeft  |   borderTopLeftRadius   | string, number |      -      |
| roundTopRight |  borderTopRightRadius   | string, number |      -      |
