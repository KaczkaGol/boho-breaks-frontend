import React from 'react';
import { useNavigate } from 'react-router-dom';

const TrasyContent = () => {

  const navigate = useNavigate();

  const handleRezervaceClick = () => {
    navigate('/rezervace', { state: { nabidka: 'Prohlídka DOV s návštěvou Bolt Café' } }); // ← tady upravíš podle daného výletu
  };

  return (
    <>
      

      {/* Hlavní obsah: dva sloupce vedle sebe */}
      <div className="container-obsah">
        <div className="row align-items-start">
          
          {/* Levý sloupec s více boxy */}
          <div className="col-md-8 d-flex flex-column bg-white shadow rounded">
            <div className="m-4 pt-3 info ">
              <p>Popis</p>
            </div>

            <div className="px-4 py-2 ">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium voluptates ratione repudiandae unde nulla veritatis veniam consequuntur harum quasi alias necessitatibus, dolorem pariatur dolore tenetur, eos fuga accusamus optio inventore dicta ea. Quasi est sint nemo iure doloribus ducimus unde ut, placeat possimus vel, tenetur illum itaque impedit ex sed dignissimos tempora autem beatae soluta aliquam consequatur eveniet optio! Molestias aliquam voluptate iste veniam nam, enim, quaerat nostrum cupiditate officiis laudantium inventore vero eaque, minus accusamus necessitatibus illo velit quibusdam.
              </p>
            </div>

            <div className="px-4 py-2 ">
              <p className="included">ZAHRNUJE</p>
            </div>

            <div className="px-4 py-2 ">
              <ul>
                <li>lorem ipsum</li>
                <li>lorem ipsum</li>
                <li>lorem ipsum</li>
              </ul>
            </div>

            <div className="px-4 py-2 ">
              <p className="included">NEZAHRNUJE</p>
            </div>

            <div className="px-4 py-2 ">
              <ul>
                <li>lorem ipsum</li>
                <li>lorem ipsum</li>
                <li>lorem ipsum</li>
              </ul>
            </div>
          </div>

          {/* Pravý sloupec s informacemi */}
          <div className="col-md-4 d-flex flex-column gap-3">
            <div>
            <div className="row">
            <div className="col-6">
              <div className="button-rezervace p-3 m-0 bg-white shadow rounded">
                  <h6 className="text-uppercase text-warning  my-text-color text-center">CENA ZA OSOBU</h6>
                  <p className='text-center'>200 Kč</p>
              </div>
              </div>
              <div className="col-6 " onClick={handleRezervaceClick}>
              <div className="button-rezervace p-1 m-0 bg-white shadow rounded d-flex justify-content-center align-items-center" >
                  <h6 className="text-uppercase text-warning  my-text-color m-0 p-0" >ZAREZERVOVAT</h6>
              </div>
              </div>
              </div>
            </div>
            

            <div className="p-4 bg-white shadow rounded">
              <h6 className="text-uppercase text-warning my-text-color">Délka</h6>
              <p>8 hodin</p>
            </div>
            <div className="p-4 bg-white shadow rounded">
              <h6 className="text-uppercase text-warning my-text-color ">Typ aktivity</h6>
              <p>Trasa s průvodcem</p>
            </div>
            <div className="p-4 bg-white shadow rounded">
              <h6 className="text-uppercase text-warning my-text-color">Doprava</h6>
              <p>Vlastní</p>
            </div>
          </div>
          </div>
        </div>
      
    </>
  );
};

export default TrasyContent;
