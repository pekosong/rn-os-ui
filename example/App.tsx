import React from "react";
import { Text, View, TouchableOpacity } from "rn-os-ui";

export default function App() {
  return (
    <View flex={1} pt="40" px="16">
      <View row justify="space-between" align="center">
        <View row align="center">
          <Text color="primary" fontWeight="bold" size="20" mr="4">
            프로미카
          </Text>
          <Text>출동서비스</Text>
        </View>
        <View row align="center">
          <Text mr="10" p="5">
            아1
          </Text>
          <Text p="5">아2</Text>
        </View>
      </View>
      <View borderTop="1px #eee" my="10" />
      <View row align="center" mt="10">
        <View bg="#eee" w="60" h="60" mr="10" round="4" />
        <View flex={1}>
          <View row align="flex-end" mb="4">
            <Text fontWeight="bold" size="20" mr="4">
              홍길동
            </Text>
            <Text>서울강남서비스</Text>
          </View>
          <Text size="12">오늘도 즐거운 하루 보내세요!</Text>
        </View>
        <View align="flex-end">
          <View border="1px #ccc" round="4" w="70" mb="4" py="2">
            <Text color="#ccc" fontWeight="bold" size="14" textAlign="center">
              출동대기
            </Text>
          </View>
          <Text size="12">2021-04-25 목요일</Text>
        </View>
      </View>
      <View row my="20" justify="center" bg="#eee" round="8">
        <TouchableOpacity flex={1} bg="#fff" border="1px #ccc" p="10" round="8">
          <Text color="primary" fontWeight="bold" textAlign="center">
            출동정보
          </Text>
        </TouchableOpacity>
        <TouchableOpacity flex={1} p="10">
          <Text textAlign="center">모니터링</Text>
        </TouchableOpacity>
        <TouchableOpacity flex={1} p="10">
          <Text textAlign="center">커뮤니티</Text>
        </TouchableOpacity>
        <TouchableOpacity flex={1} p="10">
          <Text textAlign="center">조회업무</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
