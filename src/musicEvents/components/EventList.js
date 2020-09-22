import React from 'react';
// import { Link } from 'react-router-dom';

import Card from '../../shared/components/UIElements/Card';
import EventItem from './EventItem';
import Button from '../../shared/components/FormElements/Button';
import './EventList.css';


// Output the list of events 
const EventList = props => {
    // Check first if there is any events to show
    if(props.items.length === 0){
        
        return <div className="events-list center">
            <Card>
                <h2>No events found. Maybe create one?</h2>
                <Button to='/events/new'>Share Event</Button>
            </Card>
        </div>
    }

    
    return  (
        <ul className="events-list">
            {props.items.map(event => (
                <EventItem 
                    key={event.id} 
                    id={event.id} 
                    image={event.imageUrl} 
                    title={event.title} 
                    description={event.description} 
                    // address={event.address} 
                    // datum={event.datum} 
                    time={event.time} 
                    creatorId={event.creator} 
                    coordinates={event.location}   
                />
                
            ))}
        </ul>
    );
};

export default EventList;



