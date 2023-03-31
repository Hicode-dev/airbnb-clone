import React from 'react'
import {FaSearch}  from 'react-icons/fa'

const CarouselPage = () => {
  return (
    <div>
       <header>
    <div class="empty">
      <div class="top-navigation">
      <nav> 
      
  
            <form class="search shadow-lg px-3"> 
              <div class="search-inputs">
                <label for="location"> 
                  <div class="label">Location</div>
                  <input name="location" id="location" placeholder="Where are you going?"/>
                </label>
                
              </div>
              <div class="search-inputs">
                <label for="check-in"> 
                  <div class="label">Check in</div>
                  <input name="check-in" id="check-in" placeholder="Add dates"/>
                </label>
              </div>
              <div class="search-inputs">
                <label for="check-out"> 
                  <div class="label">Check out</div>
                  <input name="check-out" id="check-out" placeholder="Add dates"/>
                </label>
              </div>
              <div class="search-inputs">
                <label for="guests"> 
                  <div class="label">Guests</div>
                  <input name="guests" id="guests" placeholder="Add dates"/>
                </label>
              </div>
              <div class="search-button flex justify-center items-center ">
                <button onclick="preventDefault()" className='p-3 rounded-full'><FaSearch /></button>
              </div>
            </form>
        </nav> 
  
      
  
  
      </div> 
    </div>  
  </header>
    </div>
  )
}

export default CarouselPage
