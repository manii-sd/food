import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../Components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);

  const serachApi = async () => {
    const response = await yelp.get('/search', {
      params: {
        limit: 50,
        term,
        location: 'san jose',
      },
    });
    setResults(response.data.businesses);
  };

  return (
    <View>
      <SearchBar term={term} onTermChange={setTerm} onTermSumit={serachApi} />
      <Text> serach bar </Text>
      <Text>we have found {results.length} results</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
