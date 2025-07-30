import React from 'react'
import GuideImage from "../Assets/Guide.png";
import { motion } from "motion/react";
import { useNavigate } from 'react-router-dom';

const HomeContent = () => {

  const navigate = useNavigate();

  return (
    <div className="nav-img-container py-1">
      <div className="row g-0 mb-0 justify-content-center">
        
        <div className="col-md-3 m-5 position-relative">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log('hover started!')}
          >
            <div className="square-box">
            <div className='shadow-wrapper rounded-3'>
              <img src={GuideImage} alt="Obrázek 1" className="nav-img-image rounded-3" onClick={() => navigate('/nabidka/zazitkove-trasy')} />
             
            <div
              className="position-absolute top-50 start-50 translate-middle text-white fw-bold text-center" 
              onClick={() => navigate('/nabidka/zazitkove-trasy')}
              style={{ fontSize: '2rem', textShadow: '0 0 5px rgba(0,0,0,0.7)', width:'100%' }}
            >
              Zážitkové trasy
            </div>   
            </div>      
          </div>
          </motion.div>
        </div>

        <div className="col-md-3 m-5 position-relative">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log('hover started!')}
          >
            <div className="square-box">
            <div className='shadow-wrapper rounded-3'>
              <img src={GuideImage} alt="Obrázek 1" className="nav-img-image rounded-3" onClick={() => navigate('/nabidka/degustacni-trasy')}/>
            </div>  
            <div
              className="position-absolute top-50 start-50 translate-middle text-white fw-bold text-center"
              onClick={() => navigate('/nabidka/degustacni-trasy')}
              style={{ fontSize: '2rem', textShadow: '0 0 5px rgba(0,0,0,0.7)', width:'100%' }}
            >
              Degustační trasy
            </div>        
          </div>
          </motion.div>
        </div>

        <div className="col-md-3 m-5 position-relative">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log('hover started!')}
          >
            <div className="square-box">
            <div className='shadow-wrapper rounded-3'>
              <img src={GuideImage} alt="Obrázek 1" className="nav-img-image rounded-3" onClick={() => navigate('/nabidka/tematicke-balicky')} />
            </div>  
            <div
              className="position-absolute top-50 start-50 translate-middle text-white fw-bold text-center"
              onClick={() => navigate('/nabidka/tematicke-balicky')}
              style={{ fontSize: '2rem', textShadow: '0 0 5px rgba(0,0,0,0.7)', width:'100%' }}
            >
              Jednodenní výlet do Rud (PL)
            </div>        
          </div>
          </motion.div>
        </div>

        
      </div>
    </div>



);
};


export default HomeContent