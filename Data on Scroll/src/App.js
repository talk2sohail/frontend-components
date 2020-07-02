import React, { useState } from 'react'
import ReactDOM from 'react-dom'

// import Spinner from './Spinner'

import Scroll from './Scroll'
const style = {
    height: 30,
    border: "1px solid green",
    margin: 6,
    padding: 8
};

export const MyApp = () => {
    const [data, setdata] = useState(Array.from({ length: 10 }));
    const [hasMoreData, setHasMoreData] = useState(true)


    const fetchMoreData = () => {

        if (data.length === 100) {
            //this will update state of MyApp
            setHasMoreData(hasMoreData => !hasMoreData)
            return;
        }
        setTimeout(() => {
            console.log('updating data')
            setdata(data => data.concat(Array.from({ length: 10 })));
        }, 1500);
    };

    return (
        <div style={{ width: 600, height: "100vh", margin: "0 auto" }}>
            <h1>Hello Developer</h1>
            <Scroll
                name="sohail"
                next={fetchMoreData}
                dataLength="20"
                hasMore={hasMoreData ? true : false}
            >
                {data.map((i, index) => (
                    <div style={style} key={index}>
                        div - #{index}
                    </div>
                ))}
            </Scroll>
        </div>
    )
}


ReactDOM.render(<MyApp />, document.getElementById("app"))