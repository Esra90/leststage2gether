import React from 'react';
import './UsersList.css';
import Card from '../../shared/components/UIElements/Card';
import UserItem from './UserItem';

// used prop to get the list of the users
const UsersList = props => {
    // Check if there is any user to show
    if(props.items.length === 0 ){
        return (
            <div className="center">
                <Card>
                    <h2>No users found</h2>
                </Card>
            </div>
        );
    }
    
    return <ul className="users-list">
        {props.items.map(user => (
            <UserItem 
                key={user.id} 
                id={user.id} 
                image={user.image} 
                name={user.name} 
                eventCount={user.events} 
            />
        ))}
    </ul>
}


export default UsersList;



