import React from 'react';
import { users } from '../data/userlive';

export const UserLiveFunc = () => {
    const user = users.map(data =>{
        const username =`${data.name}`;
        const email =`${data.email}`
        //const username =`${data.name}`
    })
  return (
    <div>UserLiveFunc</div>
  )
}
