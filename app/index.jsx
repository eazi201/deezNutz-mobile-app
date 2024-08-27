import { View, Text,ScrollView ,Image} from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Link, router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'


import { images } from '../constants'
import CustomButton from '../components/CustomButton'




const DeeZNutz = () => {
  return (
    <SafeAreaView  className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: '100%',}}>
        <View className="w-full justify-start items-center min-h-[84vh] px-4">
          <Image
          source={images.logo}
          className="w-[150px] b-[84px]"
          resizeMode="contain"
          />
          <Image
            source={images.cards}
            className="max-w-[350px] w-full h-[198px]"
            resizeMode="contain"
          />

            <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Discover Endless{"\n"}
              Possibilities with{" "}
              <Text className="text-secondary-200">Nutz</Text>
            </Text>


            <Image
              source={images.path}
              className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
              resizeMode="contain"
            />
          </View>

          <Text className="text-sm font-pregular text-gray-100 mt-4 text-center">
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with Nutz
          </Text>

          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push("/sign-in")}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
      </SafeAreaView>
    
  )
}

export default DeeZNutz