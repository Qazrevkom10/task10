import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteAd } from '../redux/actions';
import './AdList.css'; 

const AdList = () => {
  const ads = useSelector(state => state.ads);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteAd(id));
  };

  return (
    <ul className="ad-list">
      {ads.map(ad => (
        <li className="ad-item" key={ad.id}>
          {ad.text}
          <button onClick={() => handleDelete(ad.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default AdList;
