import React, { useContext } from 'react';
import { v4 as uuid } from 'uuid';
import { ItemContext } from '../../context/items';
import i from '../../assets/Vector_Tshirt_Vector_Tshirt.jpg';

const AddItem = () => {
  const { setItems } = useContext(ItemContext);

  const [form, setForm] = React.useState({
    name: '',
    price: '',
    image: i,
    description: '',
    sizes: [],
    colors: [],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { ...form, id: uuid() };

    setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <div>
      <h1>Add Item</h1>
      <form onSubmit={handleSubmit}>
        <div className='card'>
          <div className='card-image'>
            <input type='file' id='item-image' />
            <img src={i} alt='Loja de Roupas' />
          </div>

          <div className='card-text'>
            <div className='mb-12'>
              <label htmlFor='item-title'>Titulo do Item</label>
              <input
                type='text'
                id='item-title'
                placeholder='Titulo aqui..'
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>

            <select className='mb-12'>
              <option value='null'>Selecionar o Tamanho</option>
              <option value='sm'>SM</option>
              <option value='md'>MD</option>
              <option value='lg'>LG</option>
              <option value='xl'>XL</option>
            </select>

            {/* Show sizes */}
            <div className='pills mb-12'>
              <span className='pill'>SM</span>
              <span className='pill'>MD</span>
              <span className='pill'>LG</span>
              <span className='pill'>XL</span>
            </div>

            <div className='card-details'>
              <span>Detalhes: </span>
              <br />
              <textarea
                rows='10'
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
              ></textarea>
            </div>

            <div className='mb-12 '>
              <label htmlFor='additem-input-price'>Preço</label>
              <input
                type='number'
                id='additem-input-price'
                placeholder='Valor do produto ..'
                value={form.price}
                onChange={(e) => setForm({ ...form, price: e.target.value })}
              />
            </div>

            <button className='btn-primary' type='submit'>
              ADICIONAR
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddItem;
