import { useEffect, useState } from 'react';
import { Service } from '../types/Service';
import { ListItem } from '../types/ListItem';

export interface ItemList {
    results: ListItem[];
}

const useListService = (): Service<ItemList> => {
    const [result, setResult] = useState<Service<ItemList>>({
        status: 'loading'
    });

    console.log("Before hook call!")

    useEffect(() => {
        console.log("useEffect from useListService");
        fetch('localhost:4000/list')
            .then(response => response.json())
            .then(response => setResult({ status: 'loaded', payload: response }))
            .catch(error => setResult({ status: 'error', error }));
    }, []);

    console.log(result);

    return result;
}

export default useListService;