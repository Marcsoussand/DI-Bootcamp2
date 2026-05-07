
import React from 'react';

interface UserCardProps {
  name?: string;
  age?: number;
  role?: string;
}

export default function UserCard({ name="Unknown", age=0, role="Unknown" }: UserCardProps) {
    return (
        <div className="user-card">
            <h2>{name}</h2>
            <p>Age: {age}</p>   
            <p>Role: {role}</p>
        </div>
    );
}