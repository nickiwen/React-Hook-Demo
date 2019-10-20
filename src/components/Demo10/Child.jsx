import React from 'react';

const Child = ({ seconds }) => {
  console.log('I am rendering');
  return <p>I am updating every { seconds } seconds.</p>;
}

export default React.memo(Child);