import React from 'react'
import TrasyContent from './TrasyContent'
import EmblaCarousel from './EmblaCarousel'
const OPTIONS = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const BeerTour = () => {
  return (
    <div>
        <div className="start">
        <h1>Drink & Food tour Ostrava</h1>
        </div>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        <TrasyContent />
    </div>
  )
}

export default BeerTour