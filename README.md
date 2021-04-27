# RN-OS-UI

React Native UI Library
inspired from tailwind and chakra ui

## **0. Install**

### npm install rn-os-ui

## **1. Intruduction**

#### - React Native UI Library<br/>

#### - Typescript supported<br/>

#### - inspired from tailwind and chakra ui

## **2. Use**
```
const blacklist = require('metro-config/src/defaults/blacklist');

module.exports = {
  resolver: {
    blacklistRE: blacklist([
      /ios\/Pods\/JitsiMeetSDK\/Frameworks\/JitsiMeet.framework\/assets\/node_modules\/react-native\/.*/,
    ]),
  },
};
```

## **2. Compoments**

#### - View

#### - ScrollView

#### - Text

#### - Image

#### - TouchableOpacity

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
