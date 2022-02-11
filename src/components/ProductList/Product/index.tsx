import React, {useState, useEffect} from 'react'
import api from "../../../services/api";


type Products = {
  avaliations: number;
  classification: string;
  country: string;
  discount: number;
  flag: string;
  id: number;
  image: string;
  name: string;
  price: number;
  priceMember: number;
  priceNonMember: number;
  rating: number;
  region: string;
  size: string;
  sommelierComment: string;
  type: string;
};

const Product = () => {
  const [posts, setPosts] = useState<Products[]>([]); //dados da API
  const URL_API =
    "https://wine-back-test.herokuapp.com/products?page=1&limit=9";
  useEffect(() => {
    api.get(URL_API).then((response) => {
      setPosts(response.data.items);
      // console.log(response.data.items);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const listId = posts.map(obj => ({id: obj.id}))
  const listNames = posts.map(obj => ({names: obj.name}))
  return (
    <>
      {posts.map((post) => (
        <li>
          {post.name}
        </li>
      ))}
    </>

  )
}

export default Product