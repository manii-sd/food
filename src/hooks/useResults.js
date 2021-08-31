import {result} from 'lodash';
import {useEffect, useState} from 'react';
import yepl from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMassage, serErrorMassage] = useState('');

  const serachApi = async searchTerm => {
    console.log('hi there!');
    try {
      const response = await yepl.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'san jose',
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      serErrorMassage('something went wrong');
    }
  };

  useEffect(() => {
    serachApi('pasta');
  }, []);
  return [serachApi, results, errorMassage];
};
