import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AnaSayfa from "./Layouts/AnaSayfa";

import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import Iletisim from './Layouts/Iletisim';
import Urunler from './Layouts/Urunler';
import UrunSayfası from './Layouts/UrunSayfası';
import AdminPage from './Layouts/AdminPage';
import AdminCardUpdate from './Layouts/AdminPageUpdate';
import AdminLogin from './Layouts/AdminLogin';
import YeniUrun from './Layouts/YeniUrun';
import WsSayfasi from './Layouts/WsSayfasi';

import N11Sayfasi from './Layouts/N11Sayfasi';
import TeknosaSayfasi from './Layouts/TeknosaSayfasi';
import VatanSayfasi from './Layouts/VatanSayfasi';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />}>
  
      <Route path="AnaSayfa" element={<AnaSayfa />} />
      <Route path="Urunler/:page" element={<Urunler />} />
      <Route path="/WS-Sayfasi/:page" element={<WsSayfasi />} />

      <Route path="/N11Sayfasi/:page" element={<N11Sayfasi />} />
      <Route path="/TeknosaSayfasi/:page" element={<TeknosaSayfasi />} />
      <Route path="/VatanSayfasi/:page" element={<VatanSayfasi />} />


      <Route path="/UrunSayfasi/:name/:id" element={<UrunSayfası />} />
      
      <Route path="Iletisim" element={<Iletisim />} />

      <Route path="Ayarlar" element={<AdminLogin />} />
      <Route path="/AdminPage/:page" element={<AdminPage />} />
      <Route path="YeniUrun" element={<YeniUrun />} />

      <Route path="/Guncelle/:name/:id" element={<AdminCardUpdate />} />
      <Route path="*" element={<Navigate to="/AnaSayfa" />} />
      <Route path="/" element={<Navigate to="/AnaSayfa" />} />


    </Route>
  </Routes>
</BrowserRouter>
);


