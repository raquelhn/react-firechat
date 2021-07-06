import React from 'react';
import {formatRelative} from 'date-fns';
import { List, Image, Header } from 'semantic-ui-react'
//this component is responsible to format and render the data
const Message=({
    createdAt=null,
    text='',
    displayName='',
    photoURL='',
})=>{
    return (
    <List divided relaxed>
        <List.Item>
        {photoURL ? (
            <Image avatar src={photoURL} alt="Avatar" width={45} height={45}/>
        ):null}
            <List.Content>
            <List.Header as='a'>{displayName ? <p>{displayName}</p>:null}</List.Header>
            <List.Description as='a'>{createdAt?.seconds?(
            <span>
                {formatRelative (new Date(createdAt.seconds*1000),new Date())}
            </span>
            
            ):null}
            </List.Description>
            <Header as='h3' dividing>
            <p>{text}</p>
            </Header>
            </List.Content>
        </List.Item>
        </List>
        );
    };

export default Message;