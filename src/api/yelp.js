import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer onqvgMMI9jBMGAwL3x_esUrFtLsg_FYDI-Kyk_Mh7Jf0aeEYXHlM4NIpZSQc192ICSI1w6Qj2V8WSAlpcB65w999BAc7IVAG7ihCuoDvqq6T3RE-bkPuX2x1OIwfYXYx',
  },
});
