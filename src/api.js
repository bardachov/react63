import axios from 'axios';

const request = axios.create({
  baseURL: 'http://localhost:3000/menu',
});

export const getMenuList = async () => await request.get();

export const getMenuProducts = async (menuId) => {
  const result = await request.get(`/:${menuId}/products`);
  console.log(result);
};
