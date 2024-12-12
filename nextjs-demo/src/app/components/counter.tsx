"use client";
import { useAuth } from "@clerk/nextjs";
import React, { useState } from "react";

type Props = {};

const Counter = (props: Props) => {
    const { isLoaded, userId, sessionId, getToken } = useAuth();

    const [count, setCount] = useState(0);

    if (!isLoaded || !userId) {
        return null;
    }

    return <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>;
};

export default Counter;
