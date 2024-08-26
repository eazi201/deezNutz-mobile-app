import { View, Text,ScrollView ,Images} from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

import { images } from '../constants'




const DeeZNutz = () => {
  return (
    <SafeAreaView  className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height:'100%'}}>
        <View className="w-full justify-center items-center h-full px-4">
          <Image
          source={images.logo2}
          className="w-[130px] b-[84px]"
          resizeMode="contain"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default DeeZNutz