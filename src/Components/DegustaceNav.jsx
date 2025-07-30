import React from 'react'
import GuideImage from "../Assets/Guide.png";
import { motion } from "motion/react";
import { useNavigate } from 'react-router-dom';

const DegustaceNav = () => {

    const navigate = useNavigate();
  
    return (
      <div className="nav-img-container py-1">
        <div className="row g-0 mb-0 justify-content-center">
          
          <div className="col-md-5 m-5 position-relative">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => console.log('hover started!')}
            >
              <div className='box-degustace'> 
              <div className='shadow-wrapper-degustace'>
                <img src={GuideImage} alt="Obrázek 1" className="nav-img-image rounded-3" onClick={() => navigate('/nabidka/degustacni-trasy/wine-tour')} />
              
              <div
                className="position-absolute top-50 start-50 translate-middle text-white fw-bold text-center" onClick={() => navigate('/nabidka/degustacni-trasy/wine-tour')}
                style={{ fontSize: '2rem', textShadow: '0 0 5px rgba(0,0,0,0.7)', width:'100%' }}
              >
                Drink & Food tour Ostrava
              </div>        
              </div>
              </div>
            </motion.div>
          </div>
  
          <div className="col-md-5 m-5 position-relative">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => console.log('hover started!')}
            >
              <div className='box-degustace'>
              <div className='shadow-wrapper-degustace'>
                <img src={GuideImage} alt="Obrázek 1" className="nav-img-image rounded-3" onClick={() => navigate('/nabidka/degustacni-trasy/beer-tour')}/>
              </div>  
              <div
                className="position-absolute top-50 start-50 translate-middle text-white fw-bold text-center" onClick={() => navigate('/nabidka/degustacni-trasy/beer-tour')}
                style={{ fontSize: '2rem', textShadow: '0 0 5px rgba(0,0,0,0.7)', width:'100%' }}
              >
                Beer tour Ostrava
              </div>        
              </div>
            </motion.div>
          </div>
  
         
        </div>
      </div>
  
    )
}
  
  
  
  export default DegustaceNav