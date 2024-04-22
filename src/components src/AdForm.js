import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAd } from '../redux/actions';
import './AdForm.css'; 

const AdForm = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addAd(text));
    setText('');
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input type="text" className="form-input" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter your ad here..." />
      <button type="submit" className="form-button">Add Ad</button>
    </form>
  );
};

export default AdForm;
