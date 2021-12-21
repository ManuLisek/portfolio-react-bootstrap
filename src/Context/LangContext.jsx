import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';
import en from '../data/lang/en.json';
import pl from '../data/lang/pl.json';

export const LangContext = createContext();

export const LangProvider = ({children}) => {

  const [lang, setLang] = useState(pl);
  const selectEn = () => {
    if(lang === pl){
      setLang(en);
    } 
  };
  const selectPl = () => {
    if(lang === en){
      setLang(pl);
    } 
  };
  return(
    <LangContext.Provider value={[lang, selectEn, selectPl]}>
      {children}
    </LangContext.Provider>
  );
};

LangProvider.propTypes = {
  children: PropTypes.array,
};