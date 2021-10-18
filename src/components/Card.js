import React from 'react'
import PropTypes from 'prop-types';
import './cards.css';

function Card({title, imageSource, url, text}) {
   return (
      <div className='card text-center bg-dark animate__animated animate__fadeInUp'>
         <div className='overflow'><img src={imageSource} alt="" className='card-img-top'/></div>
         <div className="card-body text-light">
            <h4 className="card-title">{title}</h4>
            <p className='card-text text-secondary'>
               {
                  text ? text : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem unde quis consequuntur dicta suscipit. Reiciendis ullam doloremque, nam nostrum fugiat at inventore, voluptates labore doloribus aliquid facilis atque possimus totam!'
               }
            </p>
            <a href={url} className='btn btn-outline-secondary rounded-0' target="_blank">
               Go to this website
            </a>
         </div>
      </div>
   )
}

Card.propTypes = {
   title: PropTypes.string.isRequired,
   url: PropTypes.string,
   image: PropTypes.string
}

export default Card;
