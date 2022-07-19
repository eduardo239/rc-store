import React, { useContext } from 'react';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ItemContext } from '../../context/items';

const AllItems = () => {
  const { items, setItems } = useContext(ItemContext);

  const handleRemoveItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h1>Todos os Itens</h1>
      {items && items.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Titulo</th>
              <th>Descrição</th>
              <th>Tamanho</th>
              <th>Preço</th>
              <th>Cores</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td className='px-12'>{item.id}</td>
                <td className='px-12'>{item.name}</td>
                <td className='truncate px-12'>
                  <p>{item.description}</p>
                </td>
                <td className='px-12'>
                  {item?.sizes.length > 0 &&
                    item.sizes.map((x) => (
                      <span key={x || ''}>{x || ''} </span>
                    ))}
                </td>
                <td className='px-12'>{item.price}</td>
                <td>
                  <select>
                    {item?.colors.length > 0 &&
                      item.colors.map((c) => (
                        <option key={c || ''}>{c || ''}</option>
                      ))}
                  </select>
                </td>
                <td>
                  <div className='flex flex-end '>
                    <button
                      className='btn-icon btn-icon-primary'
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                    <button className='btn-icon btn-icon-secondary'>
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {!items && <h4>Nenhum item cadastrado</h4>}
    </div>
  );
};

export default AllItems;
