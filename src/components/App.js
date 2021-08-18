import React, { Component, useState } from 'react';
import './../styles/App.css';

// Do not alter the states const and values inside it.
const states = [
   {
      name: 'Madhya Pradesh',
      cities: [
         {
            name: 'Indore',
            towns: [
               {
                  name: 'Mhow',
               },
               {
                  name: 'Dewas',
               },
            ],
         },
         {
            name: 'Bhopal',
            towns: [
               {
                  name: 'Manit',
               },
               {
                  name: 'Berasia',
               },
            ],
         },
         {
            name: 'Gwalior',
            towns: [
               {
                  name: 'Ajaypur',
               },
            ],
         },
      ],
   },
   {
      name: 'Jharkhand',
      cities: [
         {
            name: 'Dhanbad',
            towns: [
               {
                  name: 'IIT(ISM) Dhanbad',
               },
               {
                  name: 'Hirapur',
               },
            ],
         },
         {
            name: 'Wasseypur',
            towns: [
               {
                  name: "Sardar khan's",
               },
               {
                  name: "Faizal khan's",
               },
            ],
         },
         {
            name: 'Mirzapur',
            towns: [
               {
                  name: "Kaleen bhaiya's",
               },
               {
                  name: "Guddu bhaiya's",
               },
            ],
         },
      ],
   },
   {
      name: 'Assam',
      cities: [
         {
            name: 'Guwhati',
            towns: [
               {
                  name: 'Amin',
               },
               {
                  name: 'Jalah',
               },
            ],
         },
         {
            name: 'Jungle1',
            towns: [
               {
                  name: 'Tiger found at IIT Guwahati',
               },
               {
                  name: 'Leopard found in IIT Guwahati',
               },
            ],
         },
         {
            name: 'Tezpur',
            towns: [
               {
                  name: 'Dibrugarh',
               },
               {
                  name: 'Silchar',
               },
            ],
         },
      ],
   },
   {
      name: 'Bihar',
      cities: [
         {
            name: 'Patna',
            towns: [
               {
                  name: 'Sonpur',
               },
               {
                  name: 'Maner',
               },
            ],
         },
         {
            name: 'Gaya',
            towns: [
               {
                  name: 'Bakraur',
               },
               {
                  name: 'Barachatti',
               },
            ],
         },
         {
            name: 'Darbhanga',
            towns: [
               {
                  name: 'Singhwara',
               },
               {
                  name: 'Jale',
               },
            ],
         },
      ],
   },
];

function App() {
   const handleClick = (e) => {
      e.target.nextSibling.classList.toggle('visible');
   };

   return (
      <div id="main">
         <ul>
            {states.map((state, stateIndex) => (
               <li key={'state' + stateIndex}>
                  <span id={'state' + (stateIndex + 1)} onClick={handleClick}>
                     {state.name}
                  </span>
                  <ul>
                     {state.cities.map((city, cityIndex) => (
                        <li key={'city' + (stateIndex + cityIndex)}>
                           <span
                              id={'city' + (stateIndex + cityIndex + 2)}
                              onClick={handleClick}
                           >
                              {city.name}
                           </span>
                           <ul>
                              {city.towns.map((town, townIndex) => (
                                 <li
                                    key={'town' + (stateIndex + cityIndex + townIndex)}
                                    id={'town' + (stateIndex + cityIndex + townIndex + 3)}
                                 >
                                    {town.name}
                                 </li>
                              ))}
                           </ul>
                        </li>
                     ))}
                  </ul>
               </li>
            ))}
         </ul>
      </div>
   );
}

export default App;
