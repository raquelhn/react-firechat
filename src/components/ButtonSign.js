import React from 'react';
import { Button } from 'semantic-ui-react';
//signin button
//why children?
const ButtonSign = ({onClick=null, children=null}) =>(
 <Button basic color='black' onClick={onClick}>{children}</Button>
);

export default ButtonSign;