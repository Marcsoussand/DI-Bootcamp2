import React from 'react';

export default function Greetings({name, messageCount}: {name: string, messageCount: number}) {
  return (
    <>
      <h1>Greetings</h1>
      <p>{name} : You have {messageCount} new messages.</p>
    </>
  );
}