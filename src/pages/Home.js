import React, { useContext } from 'react';
import Card from '../components/Card';
import { ItemContext } from '../context/items';

const Home = () => {
  const { items } = useContext(ItemContext);
  if (items && items.length > 0)
    return (
      <div className='flex flex-center flex-wrap gap-9'>
        {items.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    );
  else if (items && items.length === 0) return <h1>No items found</h1>;
  else return <h1>Loading...</h1>;
};

export default Home;
