import React from "react"
import {
  Center,
  VStack,
  Image,
  SpiroKitProvider,
  TitleOne,
  usePoppins,
  useSpiroKitTheme,
  Box,
} from "@spirokit/core"
import { SUPABASE_ANON_KEY, SUPABASE_URL } from "@env"

const myTheme = useSpiroKitTheme()

export default function App() {
  const fontLoaded = usePoppins()

  if (!fontLoaded) return <></>

  return (
    <SpiroKitProvider theme={myTheme}>
      <Center flex={1} padding={4}>
        <VStack alignItems={"center"} space={4}>
          <Image
            alt="SpiroKit logo"
            size={"220px"}
            resizeMode="contain"
            source={{ uri: "https://i.imgur.com/TvHaA0H.png" }}
          ></Image>
          <TitleOne>
            Welcome to SpiroKit {SUPABASE_ANON_KEY} {SUPABASE_URL}
          </TitleOne>
        </VStack>
      </Center>
      <Box></Box>
    </SpiroKitProvider>
  )
}
