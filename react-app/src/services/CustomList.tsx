import React from 'react';

interface List {
    id: number,
    item: string
}

export default function getCustomList<List>(): Promise<List> {
    return fetch('http://localhost:4000/list')
        .then(data => data.json())
};