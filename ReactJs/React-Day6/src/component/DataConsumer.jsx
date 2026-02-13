import React, { useContext } from 'react';
import { dataContext } from '../context/DataProvider';

function DataConsumer() {

    const { data, fetchData } = useContext(dataContext);

    return (
        <div>
            <button onClick={fetchData}>Fetch Data</button>

            {data.loading && <p>Loading...</p>}

            {data.error && <p>Error : {data.error}</p>}

            {data.value && data.value.map((item) => (
                <p key={item.id}>{item.title}</p>
            ))}
        </div>
    );
}

export default DataConsumer;
