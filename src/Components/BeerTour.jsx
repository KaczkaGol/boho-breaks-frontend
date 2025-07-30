import React from 'react'
import BeerTourContent from './BeerTourContent'
import EmblaCarousel from './EmblaCarousel'
const OPTIONS = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const BeerTour = () => {
  return (
    <div>
        <div className="start">
        <h1>Beer tour</h1>
        </div>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        <BeerTourContent />
    </div>
  )
}

export default BeerTour