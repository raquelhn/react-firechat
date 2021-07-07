import React, { useEffect, useState} from 'react';
import firebase from 'firebase/app';
import Message from './Message';
import { Input, Button, List, Container} from 'semantic-ui-react'





const Channel = ({ user = null, db=null }) => {
  
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  //we get this information from the parent company props
  const {uid, displayName, photoURL} = user;




  useEffect(() => {
    if (db) {
    //this is the collection from firebase
    //its a listener
      const unsubscribe = db.collection('messages').orderBy('createdAt').limit(100)
      //we use this to get the messages in real time
      .onSnapshot(querySnapshot => {
          //get all documents from collection with ID's
          const data = querySnapshot.docs.map(doc=>({...doc.data(),id:doc.id,}));
          //update state
          setMessages(data)
      })
      //detach the listener
      return unsubscribe;
    }
}, [db]);

const handleOnChange = e => {
    setNewMessage(e.target.value);
  };

const handleOnSubmit = e => {
    e.preventDefault();
    //its adding the messages to our firebase database
    if (db){
        db.collection('messages').add({
            text:newMessage,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            displayName,
            photoURL,
        })
    }

}

return (
    
    <>
    <List divided relaxed>
        <Container textAlign='left'>
        {messages.map(message => (
            <li key={message.id}>
                <Message {...message}/>
            </li>
        ))}
        </Container>
    </List>
    <form onSubmit={handleOnSubmit}>
        <Input
        type="text"
        value={newMessage}
        onChange={handleOnChange}
        placeholder="Type your message here..."/>
        <Button positive type="submit" disabled={!newMessage}>
            Send
        </Button>
    </form>
    </>
    
);
};

export default Channel;


