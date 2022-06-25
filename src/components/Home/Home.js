import React from 'react';
import PrimeraSeccion from './Portada/PrimeraSeccion';
import SeccionIntermedia from './SeccionIntermedia/SeccionIntermedia';
import SegundaSeccion from './FraseEmblema/SegundaSeccion';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import Category from '../Category/Category';

const Home = () => {
    return (
      <>
      <PrimeraSeccion />
      <SeccionIntermedia />
      <SegundaSeccion />
      <Category />
      {/* <ItemListContainer /> */}
      </>
    );
  };

export default Home