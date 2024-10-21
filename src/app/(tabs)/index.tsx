//best practice is having colors of our code into a spearate file so we can re-use them
import products from '@/assets/data/products';
import Colors from '@/src/constants/Colors';
import { StyleSheet, View, Text, Image, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import UseGetApi from '../hooks/UseGetApi';
import ProductListItem from '@/src/components/ProductListItem';
import HeaderAndFilters from '@/src/components/Header';
const defaultImageUrl = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png'

const ProductCard = ({ item }: any) => {

  const isValidImageUrl = (image: any) => {
    return image && image.startsWith('http');
  };

  return (
    <TouchableOpacity style={styles.cardContainer}>
      <Image
        source={{ uri: isValidImageUrl(item.image) ? item.image : defaultImageUrl }}
        style={styles.productImage}
        resizeMode="contain"
      />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>{item.category}</Text>
      <Text style={styles.productPrice}>Available : {item.inStock.toString()}</Text>
    </TouchableOpacity>
  );
};

export default function TabOneScreen() {

  // const url = 'https://simple-grocery-store-api.online/products'
  const url = 'http://localhost:3001/products'
  const { data } = UseGetApi(url);




  return (
    <View>
      <HeaderAndFilters />
      <FlatList

        data={data}
        renderItem={({ item }) => <ProductCard item={item} />}
        numColumns={2}
        contentContainerStyle={styles.listContainer}

      />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: 'white',
//     borderRadius: 20,
//     padding: 10,
//     overflow: 'hidden',
//   },
//   image: {
//     width: '100%',
//     aspectRatio: 1,
//     alignSelf: 'center',
//   },
//   title: {
//     fontWeight: '600',
//     fontSize: 18,
//     marginVertical: 10,
//   },
//   price: {
//     color: Colors.light.tint,
//     fontWeight: 'bold',
//     marginTop: 'auto',
//   },
// });


const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  cardContainer: {
    backgroundColor: '#fff',
    flex: 1,
    margin: 10,
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  productImage: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 14,
    color: '#888',
  },
});