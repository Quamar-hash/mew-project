import { View, Text, SafeAreaView, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import * as Animatable from 'react-native-animatable';

import { useNavigation } from '@react-navigation/native'
import { HeroImage, LogoImage, LOGOImage } from '../assets';
import { TouchableOpacity } from 'react-native';


const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
     navigation.setOptions({
        headerShown : false,
     })
  }, [])


  return (
    <SafeAreaView className="bg-white-200 flex-1"  >
      {/* first section*/}

      <View className="flex-row px-7 mt-10 items-center space-x-2">
        <View className="w-16 h-16 bg-red-700 rounded-full items-center justify-center">
            <Text className="text-1xl font-bold "> QATAR </Text>
        </View>
         <Text className="text-2xl font-bold">STAY</Text>
      </View>

      {/* Second section*/}

      <View className="px-7 mt-10 space-y-2">
        <Text className="text-[#3C6072] text-[34px]">Book your Dream stay</Text>
        <Text className="text-[#00BCC9] text-[30px]"> Live your best Life</Text>
      </View>

      {/* circle section*/}
        <View className="w-[400px] h-[400px] bg-[#00BCC9] rounded-full absolute bottom-36 -left-36"></View>
        <View className="w-[380px] h-[400px] bg-[#ffd700] rounded-full absolute -bottom-28 -right-36"></View>

        {/* image section */}
          <View className="flex-1 relative items-center justify-center">
             <Animatable.Image
             animation="fadeIn"
             easing="ease-in-out" 
             source={HeroImage} className="w-full h-full object-cover" />
            
             <TouchableOpacity 
             onPress={() => navigation.navigate("Discover")}
             className="absolute bottom-20 w-80 h-20 border-l-2 border-r-2 border-t-4 border-b-4 rounded-2xl bg-blue-200 items-center justify-center">
              <Animatable.View 
                animation={"pulse"}
                easing="ease-in-out"
                iterationCount={Infinity}
             className="w-28 items-center justify-center rounded-2xl ">
                <Text className="text-[18px] font-semibold">Get Started</Text>
          </Animatable.View>
            </TouchableOpacity>
          </View>
    </SafeAreaView>
  )
}

export default  HomeScreen