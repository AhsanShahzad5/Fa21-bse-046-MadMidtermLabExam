import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons'; 

const HeaderAndFilters = () => {
    return (
        <View>
            {/* Header Section */}
            <View style={styles.headerContainer}>
                <Ionicons name="menu" size={30} color="#000" />
                <Text style={styles.headerText}>Grocery App</Text>
                <View style={styles.headerIcons}>
                    <Ionicons name="heart-outline" size={25} color="#000" style={styles.icon} />
                    <Ionicons name="cart-outline" size={25} color="#000" />
                </View>
            </View>

            {/* Search Bar */}
            <View style={styles.searchBar}>
                <Ionicons name="search-outline" size={20} color="#888" style={styles.searchIcon} />
                <TextInput placeholder="Search for products" style={styles.searchInput} />
                <Ionicons name="filter-outline" size={20} color="#000" />
            </View>

            {/* Categories */}
            <View style={styles.categoriesContainer}>
                <TouchableOpacity style={styles.categoryButton}>
                    <Text style={styles.categoryText}>Fruits</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryButton}>
                    <Text style={styles.categoryText}>Vegetables</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryButton}>
                    <Text style={styles.categoryText}>Bakery</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryButton}>
                    <Text style={styles.categoryText}>Milk</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default HeaderAndFilters;

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    headerIcons: {
        flexDirection: 'row',
    },
    icon: {
        marginRight: 15,
    },
    searchBar: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        margin: 15,
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 15,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2,
    },
    searchIcon: {
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
    },
    categoriesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 15,
        marginBottom: 10,
    },
    categoryButton: {
        backgroundColor: '#e0e0e0',
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 20,
    },
    categoryText: {
        fontSize: 14,
        color: '#555',
    },
});
