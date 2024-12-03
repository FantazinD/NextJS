"use client";
import React, { useState } from "react";

type Props = {};

const Counter = (props: Props) => {
    console.log("Counter component");
    const [count, setCount] = useState(0);

    return <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>;
};

export default Counter;
