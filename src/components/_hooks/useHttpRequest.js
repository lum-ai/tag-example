import {useState, useEffect} from 'react';
import axios from "axios";

export const useHttpRequest = (url) => {
    const [data, setData] = useState({
        loading: false,
        data: null,
        error: false
    })

    useEffect(() => {
        setData({
            loading: true,
            data: null,
            error: false
        });

        axios.get(url)
            .then(response => {
                setData({
                    loading: false,
                    data: response.data,
                    error: false
                });
            })
            .catch(() => {
                setData({
                    loading: false,
                    data: null,
                    error: true
                });
            })
    }, [url]);

    return data;
};