import React, { useState } from 'react';
import "./input.scss"
import search from "../../assets/search.svg"

const Input = () => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000000);

  const handleMinChange = (event) => {
    const value = parseInt(event.target.value);
    if (!isNaN(value) && value <= maxPrice) {
      setMinPrice(value);
    }
  };

  const handleMaxChange = (event) => {
    const value = parseInt(event.target.value);
    if (!isNaN(value) && value >= minPrice) {
      setMaxPrice(value);
    }
  };

  return (
    <div className="filter-container">
      <p className='narx'>Narx so’mda</p>
      <div className="price-wrapper">
      <div className='price-box'><p className='price-text'> {minPrice}</p></div> 
      <h1 className='---'>-</h1>
      <div className='price-box'><p className='price-text'> {maxPrice}</p></div>
      </div>
        <label htmlFor="min-price"></label>
        <input className='price-filter'
          type="range"
          id="min-price"
          name="min-price"
          min="0"
          max="999999"
          value={minPrice}
          onChange={handleMinChange}
        />
        <label htmlFor="max-price"></label>
        <input  className='price-filter'
          type="range"
          id="max-price"
          name="max-price"
          min="1"
          max="1000000"
          value={maxPrice}
          onChange={handleMaxChange}
        />
      <div className="value-display">
      </div>
      <div className="brend__boyicha">
        <h3 className='brand-title'>Brend bo’yicha</h3>
        <div className="srchh">
          <input type="search" name="search" className="search" placeholder="Qidirish" />
          <button className="btn__search" type="submit">
            <img className="search__img" src={search} alt="search icon" />
          </button>
        </div>
        <div className="lable__input">
          <ul className='checkbox-list'>
            <li className='checkbox-item'>
              <input type="checkbox" name="checkbox" id="Apple" className="checkbox__inp" value="value" />
              <label htmlFor="Apple" className="check__lab">Apple</label>
              <p>5500</p>
            </li>
            <li className='checkbox-item'>
              <input type="checkbox" name="checkbox" id="Samsung" className="checkbox__inp" value="value" />
              <label htmlFor="Samsung" className="check__lab">Samsung</label>
              <p>5350</p>
            </li>
            <li className='checkbox-item'>
              <input type="checkbox" name="checkbox" id="Xiaomi" className="checkbox__inp" value="value" />
              <label htmlFor="Xiaomi" className="check__lab">Xiaomi</label>
              <p>58710</p>
            </li>
            <li className='checkbox-item'>
              <input type="checkbox" name="checkbox" id="Huawei" className="checkbox__inp" value="value" />
              <label htmlFor="Huawei" className="check__lab">Huawei</label>
              <p>5240</p>
            </li>
            <li className='checkbox-item'>
              <input type="checkbox" name="checkbox" id="Artel" className="checkbox__inp" value="value" />
              <label htmlFor="Artel" className="check__lab">Artel</label>
              <p>5532</p>
            </li>
            <li className='checkbox-item'>
              <input type="checkbox" name="checkbox" id="Boshqalar" className="checkbox__inp" value="value" />
              <label htmlFor="Boshqalar" className="check__lab">Boshqalar</label>
              <p>5000</p>
            </li>
          </ul>
        </div>
      </div>
      <div className='on-off'>
        <label class="switch">
          <p className='switch-text'>Bo’lib to’lash</p>
          <input type="checkbox" />
          <span class="slider round"></span>
        </label>
        <label class="switch">
          <p className='switch-text'>Yangi mahsulotlar</p>
          <input type="checkbox" />
          <span class="slider round"></span>
        </label>
        <label class="switch">
          <p className='switch-text'>Chegirmali mahsulot</p>
          <input type="checkbox" />
          <span class="slider round"></span>
        </label>
      </div>
      <div className="lable__input">
          <ul className='checkbox-list'>
            <li className='checkbox-item'>
              <input type="checkbox" name="checkbox" id="Nasiya" className="checkbox__inp" value="value" />
              <label htmlFor="Nasiya" className="check__lab">NextStore nasiya orqali</label>
              <p>5500</p>
            </li>
            <li className='checkbox-item'>
              <input type="checkbox" name="checkbox" id="Kredit" className="checkbox__inp" value="value" />
              <label htmlFor="Kredit" className="check__lab">Kreditga olish</label>
              <p>5350</p>
            </li>
            <li className='checkbox-item'>
              <input type="checkbox" name="checkbox" id="delivery" className="checkbox__inp" value="value" />
              <label htmlFor="delivery" className="check__lab">Yetkazib berish </label>
              <p>58710</p>
            </li>
            <li className='checkbox-item'>
              <input type="checkbox" name="checkbox" id="Sotuvda" className="checkbox__inp" value="value" />
              <label htmlFor="Sotuvda mavjud" className="check__lab">Sotuvda mavjud</label>
              <p>5240</p>
            </li>
            <li className='checkbox-item'>
              <input type="checkbox" name="checkbox" id="Chegirma" className="checkbox__inp" value="value" />
              <label htmlFor="Chegirma" className="check__lab">Chegirma bilan</label>
              <p>5532</p>
            </li>
            <li className='checkbox-item'>
              <input type="checkbox" name="checkbox" id="Yuqori" className="checkbox__inp" value="value" />
              <label htmlFor="Yuqori" className="check__lab">Yuqori reyting</label>
              <p>5000</p>
            </li>
          </ul>
        </div>
    </div>
  );
};

export default Input;
