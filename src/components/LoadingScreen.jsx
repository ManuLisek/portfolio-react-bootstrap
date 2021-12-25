import React from 'react';
import Shape from './Shape';
import Loader from 'react-js-loader';

function LoadingScreen() {

  return (
    <>
      <div className="bg-primary vh-100 d-flex justify-content-center">
        <Loader type="bubble-top" bgColor={'#32485c'} />
      </div>
      <Shape />
    </>
  );
}

export default LoadingScreen;