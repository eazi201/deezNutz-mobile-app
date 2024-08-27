import { View, Text,Image } from 'react-native'
import { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native'
import {Link} from 'expo-router'

import {images} from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { createUser } from '../../lib/appwrite';
const SingUp = () => {
  
  const [form, setForm] = useState({
    username:'',
    email: '',
    password:'',
  });
  const [isSubmitting, setSubmitting] = useState(false);
  const submit = () =>{
    createUser();
  }
  
  
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-start h-full px-4 my-6">
          <Image source={images.logo}
          resizeMode='contain'
          className="w-[115px] h-[30px]"
          />
          <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">Log in to DeezNutz</Text>
          <FormField
          title="Username"
          value={form.username}
          handleChangeText={(e) => setForm ({...form,username: e})}
          otherStyles="mt-7"
         
          />
          <FormField
          title="Email"
          value={form.email}
          handleChangeText={(e) => setForm ({...form,email: e})}
          otherStyles="mt-7"
          keyboardType="email-address"
          />
           <FormField
          title="Password"
          value={form.password}
          handleChangeText={(e) => setForm ({...form,password: e})}
          otherStyles="mt-7"
          
          />

           <CustomButton
            title="Register"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />
            <View className="flex justify-center pt-4 flex-row gap-2">
            <Text className="text-l text-gray-100 font-pregular">
              Have an account already?
            </Text>
            <Link
              href="/sign-in"
              className="text-l font-psemibold text-secondary"
            >
              Sign in
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SingUp