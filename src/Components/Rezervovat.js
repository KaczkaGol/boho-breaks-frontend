import React from 'react';
import { useNavigate } from 'react-router-dom';

const Rezervovat = () => {
  const navigate = useNavigate();

  const handleVyber = (nazevNabidky) => {
    navigate('/rezervace', { state: { nabidka: nazevNabidky } });
  };

  return (
    <div>
        <h1 className='start'>Rezervace</h1>
        <p className='start'>Vyberte si zážitek a klepněte na tlačítko Vybrat pro pokračování k rezervačnímu formuláři</p>
        <div className="container-fluid bg-light rounded shadow mt-5 ">
        <div className="row mb-3" style={{ borderBottom: '2px solid #477d14'}}>
        <div className="rezervace-popis col-md-6 d-flex flex-column">
            <div className="px-4 py-2 ">
              <p className="popis">
                Popis
              </p>
            </div>
            </div>
            <div className="rezervace-cena col-md-3 d-flex flex-column">
            <div className="px-4 py-2 ">
              <p className="popis">
                Cena
              </p>
            </div>
            </div>
            <div className="rezervace-button col-md-3 d-flex flex-column">
            <div className="px-4 py-2 ">
              <p className="popis">
                
              </p>
            </div>
            </div>
            
            </div>

            <div className="row border-bottom">

        <div className="rezervace-popis col-md-6 d-flex flex-column">
            <div className="px-4 py-2 ">
              <p className="popis">
                Prohlídka DOV s návštěvou Bolt Café
              </p>
            </div>
            </div>
            <div className="rezervace-cena col-md-3 d-flex flex-column">
            <div className="px-4 py-2 ">
              <p className="popis">
                200 Kč/osoba
              </p>
            </div>
            </div>
            <div className="rezervace-button col-md-3 d-flex flex-column">
            <div className="px-4 py-2 ">
            <button className="btn btn-primary" onClick={() => navigate('/rezervace', { state: { nabidka: 'Prohlídka DOV s návštěvou Bolt Café' } })}>Vybrat</button>
            </div>
            </div>
            
            </div>

            <div className="row mt-3 border-bottom">

        <div className="rezervace-popis col-md-6 d-flex flex-column">
            <div className="px-4 py-2 ">
              <p className="popis">
                Drink & Food tour Ostrava
              </p>
            </div>
            </div>
            <div className="rezervace-cena col-md-3 d-flex flex-column">
            <div className="px-4 py-2 ">
              <p className="popis">
                500 Kč/osoba
              </p>
            </div>
            </div>
            <div className="rezervace-button col-md-3 d-flex flex-column">
            <div className="px-4 py-2 ">
            <button className="btn btn-primary" onClick={() => navigate('/rezervace', { state: { nabidka: 'Drink & Food tour Ostrava' } })}>Vybrat</button>
            </div>
            </div>
            
            </div>

            <div className="row mt-3 border-bottom">

<div className="rezervace-popis col-md-6 d-flex flex-column">
    <div className="px-4 py-2 ">
      <p className="popis">
        Beer tour Ostrava
      </p>
    </div>
    </div>
    <div className="rezervace-cena col-md-3 d-flex flex-column">
    <div className="px-4 py-2 ">
      <p className="popis">
        500 Kč/osoba
      </p>
    </div>
    </div>
    <div className="rezervace-button col-md-3 d-flex flex-column">
    <div className="px-4 py-2 ">
    <button className="btn btn-primary" onClick={() => navigate('/rezervace', { state: { nabidka: 'Beer tour Ostrava' } })}>Vybrat</button>
    </div>
    </div>
    
    </div>

    <div className="row mt-3 border-bottom">

        <div className="rezervace-popis col-md-6 d-flex flex-column">
            <div className="px-4 py-2 ">
              <p className="popis">
                Jednodenní výlet do Rud (PL)
              </p>
            </div>
            </div>
            <div className="rezervace-cena col-md-3 d-flex flex-column">
            <div className="px-4 py-2 ">
              <p className="popis">
                500 Kč/osoba
              </p>
            </div>
            </div>
            <div className="rezervace-button col-md-3 d-flex flex-column">
            <div className="px-4 py-2 ">
            <button className="btn btn-primary" onClick={() => navigate('/rezervace', { state: { nabidka: 'Jednodenní výlet do Rud (PL)' } })}>Vybrat</button>
            </div>
            </div>
            
            </div>

            </div>
    </div>
  )
}

export default Rezervovat