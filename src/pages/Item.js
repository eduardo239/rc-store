import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { ItemContext } from '../context/items';

const Item = () => {
  const { items } = useContext(ItemContext);
  let { id } = useParams();
  const [item, setItem] = React.useState(null);
  const [qty, setQty] = React.useState(1);

  React.useState(() => {
    setItem(items.find((item) => item.id === id));
  }, []);

  const getShipping = (value) => {
    let res = parseFloat(value.replace(',', '.'));
    return ((parseFloat(res) * 8.5) / 100).toFixed(2);
  };

  if (item)
    return (
      <div>
        <div className='flex flex-center flex-wrap gap-9'>
          <div className='card-full'>
            <div className='card-image'>
              <img src={item.image} alt={item.name} />
            </div>
            <div className='card-full-text flex flex-column '>
              {/* end */}
              <div className='flex-1'>
                <div className='flex flex-between mb-12'>
                  <h3 className='mb-0'>{item.name}</h3>
                  <button className='btn-icon ic-heart'>
                    <FontAwesomeIcon icon={faHeart} fixedWidth />
                  </button>
                </div>
                {/* end */}
                <div className='card-full-description'>{item.description}</div>
                {/*  */}
                <label htmlFor='item-select-size'>Tamanho</label>
                <select id='item-select-size' className='mb-12'>
                  <option value='null'>Selecionar o Tamanho</option>
                  <option value='sm'>SM</option>
                  <option value='md'>MD</option>
                  <option value='lg'>LG</option>
                  <option value='xl'>XL</option>
                </select>

                <label htmlFor='item-input-qty'>Quantidade</label>
                <input
                  type='number'
                  id='item-input-qty'
                  value={qty}
                  onChange={(e) => setQty(e.target.value)}
                />
              </div>
              {/* end */}

              <div className='card-full-price'>
                <h3>R$ {(parseFloat(item.price) * qty).toFixed(2)}</h3>
                <small>+R$ {getShipping(item.price)} Custo do Frete</small>
              </div>

              <button className='btn-primary'>Comprar</button>

              {/* end */}
            </div>
          </div>
        </div>
      </div>
    );
  else return <div>Item não encontrado</div>;
};

export default Item;
