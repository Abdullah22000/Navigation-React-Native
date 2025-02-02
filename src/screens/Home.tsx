import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

//navigation
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from '../App'

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>

const Home = ({navigation}: HomeProps) => {
  return (
    <View style={styles.Container}>
      <Text style={styles.smallText}>Home</Text>
      <Button
      title='Go to details'
      // onPress={() => navigation.navigate("Details", {
      //   productId: "86"
      // })}
      
      // onPress={() => navigation.navigate("Details")}

      onPress={() => navigation.push('Details', {
        productId: "86"
      })}
      />  
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    Container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    smallText:{
        color: '#0000'
    }
})