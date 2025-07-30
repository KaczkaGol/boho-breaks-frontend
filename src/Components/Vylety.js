import React from 'react'
import EmblaCarousel from './EmblaCarousel'
import VyletyContent from './VyletyContent'
const OPTIONS = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const Vylety = () => {
  return (
    <div>
        <div className="start">
        <h1>Jednodenní výlet do Polska</h1>
        </div>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        <VyletyContent />
        
    </div>
  )
}

export default Vylety