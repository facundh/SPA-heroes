import React, { useMemo } from 'react';
import { HeroCard } from './HeroCard';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';

import 'animate.css';

export const HeroList = ({ publisher }) => {

  const heroes = useMemo(() => getHeroesByPublisher( publisher ), [publisher] ) ;
  return(
  <div className='row rows-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeInLeft'>
        

            {
                heroes.map((hero) => (
                    <HeroCard 
                    key={hero.id}
                    {...hero}
                    /> 
                    
                ))
            }

          

        
  </div>
  );
};
