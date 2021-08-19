import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const SearchBar = ({term, onTermChange, onTermSumit}) => {
  return (
    <View style={styles.background}>
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

  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
});
export default SearchBar;
