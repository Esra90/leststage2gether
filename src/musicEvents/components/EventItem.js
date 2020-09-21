import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

import Button from '../../shared/components/FormElements/Button';
import Card from '../../shared/components/UIElements/Card';
import Modal from '../../shared/components/UIElements/Modal';
import './EventItem.css';


// Output the list of events 
const EventItem = props => {
    const [showMap, setShowMap] = useState(false);

    const openMapHandler = () => setShowMap(true);

    const closeMapHandler = () => setShowMap(false);


   return (
        <React.Fragment>
        <Modal
            show={showMap}
            onCancel={closeMapHandler}
            header={props.address}
            contentClass="place-item__modal-content"
            footerClass="place-item__modal-actions"
            footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
        >
            <div className="map-container">
            <h2>THE MAP!</h2>
            </div>
        </Modal>

            <li className="event-item">
                <Card className="event-item__content">
                    <div className="event-item__image">
                        <img src={props.image} alt={props.name} />
                    </div>
                    <div className="event-item__info">
                        <h2>{props.title}</h2>
                        <h3>{props.address}</h3>
                        {/* <h3>{props.datum} {props.time}</h3> */}
                        <p>{props.description}</p>
                    </div>
                    <div className="event-item__actions">
                        <Button inverse onClick={openMapHandler}>VIEW ON MAP</Button>
                        <Button tp={`/events/{props.id}`}>EDIT</Button>
                        <Button danger>DELETE</Button>
                    </div>
                </Card>
            </li> 
        </React.Fragment>
    )
};

export default EventItem;


