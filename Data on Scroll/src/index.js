import React, { useState } from 'react';
import ReactDOM from 'react-dom';
// import './App.css';
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from './Spinner';

const style = {
    height: 30,
    border: "1px solid green",
    margin: 6,
    padding: 8
};


function App() {
    const [items, setItems] = useState(Array.from({ length: 20 }))
    // const [isLoading, setisLoading] = useState(true)
    const [hasMoreData, setHasMoreData] = useState(true)


    const fetchMoreData = () => {
        // a fake async api call like which sends
        // 20 more records in 1.5 secs
        if (items.length === 100) {
            setHasMoreData(hasMoreData => !hasMoreData)
            return;
        }
        setTimeout(() => {
            setItems(items => items.concat(Array.from({ length: 20 })));
        }, 1500);
    };


    return (
        <div style={{ width: 600, height: "100vh", margin: "0 auto" }}>
            <h1>demo: react-infinite-scroll-component</h1>
            <hr />
            <InfiniteScroll
                //this number is important fot next data
                dataLength={items.length}
                // it wiil be function that get called for more data
                next={fetchMoreData}
                //boolean to make sure that there is data to fetch
                hasMore={hasMoreData ? true : false}
                //this is the  value to ensure when api is to be called
                scrollThreshold={0.9}
                //compoent for the loader
                loader={<Spinner />}
                //component to render when there is no data left to show
                endMessage={
                    <p style={{ textAlign: 'center', fontSize: 90 }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
            >
                {items.map((i, index) => (
                    <div style={style} key={index}>
                        div - #{index}
                    </div>
                ))}
            </InfiniteScroll>
        </div>
    );
}


ReactDOM.render(<App />, document.getElementById("app"));

