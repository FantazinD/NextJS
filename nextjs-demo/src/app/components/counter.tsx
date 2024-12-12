"use client";
import { useAuth, useUser } from "@clerk/nextjs";
import React, { useState } from "react";

type Props = {};

const Counter = (props: Props) => {
    //const { isLoaded, userId, sessionId, getToken } = useAuth();
    const { isLoaded, isSignedIn, user } = useUser();

    const [count, setCount] = useState(0);

    if (!isLoaded || !isSignedIn) {
        return null;
    }

    return <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>;
};

export default Counter;
