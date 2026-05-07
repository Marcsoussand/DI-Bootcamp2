import React, { type ReactNode } from 'react'

type ListProps<T> = {
  items: T[]
}

export default function List<T>({ items }: ListProps<T>) {
    return (
        <>
        <h2> List of Generic </h2>
        {
        items && items.map((item, index) => {
           return <div key={index}>{item as ReactNode}</div>
        })
        }
        </>
    )
}