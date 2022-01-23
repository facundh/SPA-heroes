import React from 'react';
import { heroes } from '../data/heroes';

const getHeroByName = (name = '') => {

    console.log('componeten llamado');

    if(name.length === 0){
        return [];
    }
    return  heroes.filter(hero => hero.superhero.toLocaleLowerCase().includes(name))


};

export default getHeroByName;
