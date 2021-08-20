import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import Search from 'react-native-vector-icons/Feather';

const SearchBar = ({term, onTermChange, onTermSumit}) => {
  return (
    <View style={styles.background}>
      <Search name="search" style={styles.iconsStyle} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder="Search"
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSumit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    marginTop: 10,
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
  },
  iconsStyle: {
    fontSize: 30,
    alignSelf: 'center',
    marginHorizontal: 15,
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
});
export default SearchBar;
