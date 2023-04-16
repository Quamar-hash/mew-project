import { View, Text, SafeAreaView, Image, } from 'react-native'
import React, {useLayoutEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import { User } from '../assets';



const Discover = () => {

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
           headerShown : false,
        })
     }, [])
  
    return (
    <SafeAreaView className="flex-1 bg-white relative">
        <View className="flex-row items-center justify-between px-7" >
            <View>
                <Text className="text-[30px] text-[#00ff7f] font-bold">COME ENJOY</Text>
                <Text className="text-[18px] font-medium text-[#527283]">Our luxurious Hotels,villas </Text>
            </View>

            <View className="w-12 h-12 bg-gray-400 rounded-md items-center justify-center shadow-lg">
              <Image 
               source={User}
               className="w-full h-full rounded-md object-cover"
              />  
            </View>
            <View >

            </View>
        </View>
    </SafeAreaView>
  )
}

export default Discover