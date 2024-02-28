import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <>
    <div className='hero'>
        <div className="heroshield">
            <img src="/asserts/1.png" alt="shield" />
        </div>
        <div className="herocontent">
            <h5> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h5>
           <ul>
            <li> C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
            <li> C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</li>
           </ul>
           <img src="/asserts/2.png" alt="photo" />
           <h6>Government of India has awarded the <strong> "National Energy Conservation Award 2018"</strong>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</h6>
        </div>
      
    </div>
    <div className="lowerherocontent">
        <h6>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </h6>
        <img src="/asserts/3.png" alt="pumps" />
        <h6 className='pumps_h6'>
               Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors 
     </h6>
     <hr color='red'/>
     <div className="lastherosection">
        <strong>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</strong>
        <h6>CHEMICALS & PROCESS | POWER WATER & WASTE | WATER OILS & GAS PHARMA | SUGARS & DISTILLERIES | PAPER & PULP | MARINE & DEFENCE | METAL & MINING | FOOD & BEVERAGE</h6>
          <h5>PETROCHEMICAL & REFINERIES | SOLAR | BUILDING | HVAC | FIRE FIGHTING | AGRICULTURE & RESIDENTIAL</h5> 
     </div>
    </div>
    </>
  )
}

export default Hero;
