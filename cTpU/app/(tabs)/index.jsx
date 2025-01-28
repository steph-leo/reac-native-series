import { View, Text,StyleSheet, ImageBackground } from "react-native";
import togatherCoffee from "@/assets/images/togatherCoffe.jpg";
const app = () => {
  return (
    <View style = {styles.container}>
        <ImageBackground
          source = {togatherCoffee}
          resizeMode = 'cover'
          style = {style.ImageBackground}
        >
        <Text style = {styles.text}>Coffee Restaurant</Text>
      </ImageBackground>
    </View>
  )
}
export default app

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor : 'blue',
  },
  image: {
    resizeMode: 'cover',
    justifyContent: 'center',
    flex: 1,
    width: '100%',
    height:'100%',
  },
  text: {
    fontSize: 42,
    color: 'red',
    textAlign: "center",
    fontWeight: 'bold'
  },
})
