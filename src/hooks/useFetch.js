import {useEffect, useState} from 'react';

const useFetch = (url, options) => {
    const [status, setStatus] = useState({
        loading: false,
        data: '',
        error: ''
    });

    function fetchUrl(url, options) {
        setStatus({ loading: true });
        fetch(url, options)
            .then((res) => res.json())
            .then((res) => {
                setStatus({ loading: false, data: res });
            })
            .catch((error) => {
                setStatus({ loading: false, error: true });
            });
    }

    useEffect(() => {
        fetchUrl(url, options);
    }, []);

    return {
        ...status,
        fetchUrl
    };
};

export default useFetch;