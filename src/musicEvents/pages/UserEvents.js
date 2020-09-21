import React from 'react';
import { useParams } from 'react-router-dom';

import EventList from '../components/EventList';


const DUMMY_EVENTS = [
    {
        id: 'p1',
        title: 'PARK JAM',
        description: `let's have fun!`,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
        address: '20 W 34th St, New York, NY 10001',
        // datum: 22 `September`,
        // time: 10 `pm`,
        location: {
          lat: 40.7484405,
          lng: -73.9878584
        },
        creator: 'u1'
      },
      {
        id: 'p2',
        title: 'Home party',
        description: `let's have fun!`,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
        address: '20 W 34th St, New York, NY 10001',
        // datum: 22 `September`,
        // time: 10 `pm`,
        location: {
          lat: 40.7484405,
          lng: -73.9878584
        },
        creator: 'u2'
      }
]

const UserEvents = () => {
    // This gives access to the userId that's encoded in the URL.
    const userId = useParams().userId;
    // Get the events with the userId
    const loadedEvents = DUMMY_EVENTS.filter(event => event.creator === userId);
    return <EventList items={loadedEvents} />;
};


export default UserEvents;




