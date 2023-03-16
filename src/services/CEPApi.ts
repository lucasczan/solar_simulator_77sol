import axios from 'axios';

const viaCepURL = axios.create({
  baseURL: 'https://viacep.com.br/ws/'
});

export async function getAddressByZipcode(zipcode: string) {
  const { data } = await viaCepURL.get(`${zipcode}/json`);
  return data;
}
