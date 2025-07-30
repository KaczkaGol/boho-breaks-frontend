import React from 'react'
import BlobImage from './BlobImage'

const ONasContent = () => {
  return (
    <div>
    <div className="container">
        <div className="row align-items-center">

        <div className="onas-foto col-md-6 p-5 d-flex flex-column ">
            <BlobImage />
        </div>
        <div className="onas-text col-md-6 p-5 d-flex flex-column ">
            <h2>Jaká je naše vize?</h2>
            <p className="onas-obsah">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium illo omnis id incidunt! Mollitia commodi quisquam natus? Inventore nobis vero perspiciatis obcaecati earum ea, voluptates ut tempora. Sed eveniet assumenda numquam omnis modi nisi at soluta, a ipsum. Sint facere blanditiis eligendi repellendus quas distinctio perferendis sequi, sed excepturi fuga?</p>
            </div>
    </div>
    </div>

    <div className="container">
<div className="row align-items-center justify-content-center">

<div className="onas-info col-md-6 p-5 d-flex flex-column bg-light rounded shadow">
<h2>Základní údaje</h2>
<h4>Markéta</h4>
<p>IČ: 123456576</p>
<p>E-mail: info@marketa.cz </p>
<p>Telefon: +420 111 222 444</p>
</div>
    </div>
    </div>

    </div>


    
  )
}

export default ONasContent