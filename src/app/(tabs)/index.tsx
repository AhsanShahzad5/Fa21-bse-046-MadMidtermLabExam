//best practice is having colors of our code into a spearate file so we can re-use them
import products from '@/assets/data/products';
import Colors from '@/src/constants/Colors';
import { StyleSheet, View , Text , Image, ScrollView } from 'react-native';


export default function TabOneScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}> {products[0].name} </Text>
      <Text style={styles.price}> {products[0].price} </Text>
      <Image 
      source={{uri:products[0].image}}
      style={styles.image}
        resizeMode="contain"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    alignSelf: 'center',
  },
  title: {
    fontWeight: '600',
    fontSize: 18,
    marginVertical: 10,
  },
  price: {
    color: Colors.light.tint,
    fontWeight: 'bold',
    marginTop: 'auto',
  },
});