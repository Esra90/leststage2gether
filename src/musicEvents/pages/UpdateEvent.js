import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import Card from '../../shared/components/UIElements/Card';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook'
import './EventForm.css';

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
  
  const UpdateEvent = () => {
    const [isLoading, setIsLoading] = useState(true);
    const eventId = useParams().eventId;
  
    const [formState, inputHandler, setFormData] = useForm(
      {
        title: {
          value: '',
          isValid: false
        },
        description: {
          value: '',
          isValid: false
        }
      },
      false
    );
  
    const identifiedEvent = DUMMY_EVENTS.find(evt => evt.id === eventId);
    
   //To avoid the infinite loop use useEffect
    useEffect(() => {
      if(identifiedEvent){
        // initialize the form 
        setFormData(
          {
            title: {
              value: identifiedEvent.title,
              isValid: true
            },
            description: {
              value: identifiedEvent.description,
              isValid: true
            }
          },
          true
        );
      }
        setIsLoading(false);
      }, [setFormData, identifiedEvent]);
    
  
    const eventUpdateSubmitHandler = event => {
      event.preventDefault();
      console.log(formState.inputs);
    };
  
    if (!identifiedEvent) {
      return (
        <div className="center">
          <Card>
            <h2>Could not find event!</h2>
          </Card>
        </div>
      );
    }
  
    if (isLoading) {
      return (
        <div className="center">
          <h2>Loading...</h2>
        </div>
      );
    }
  
    return (
      <form className="event-form" onSubmit={eventUpdateSubmitHandler}>
        <Input
          id="title"
          element="input"
          type="text"
          label="Title"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid title."
          onInput={inputHandler}
          initialValue={formState.inputs.title.value}
          initialValid={formState.inputs.title.isValid}
        />
        <Input
          id="description"
          element="textarea"
          label="Description"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please enter a valid description (min. 5 characters)."
          onInput={inputHandler}
          initialValue={formState.inputs.description.value}
          initialValid={formState.inputs.description.isValid}
        />
        <Button type="submit" disabled={!formState.isValid}>
          UPDATE EVENT
        </Button>
      </form>
    );
  };
  
  export default UpdateEvent;