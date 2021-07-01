import React from 'react';
//signin button
//why children?
const Button = ({onClick=null, children=null}) =>(
 <button onClick={onClick}>{children}</button>
);

export default Button;
