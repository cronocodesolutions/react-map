import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Map from '../src';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <Map />
  </React.StrictMode>,
);
