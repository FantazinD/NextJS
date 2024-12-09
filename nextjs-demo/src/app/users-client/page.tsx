"use client";

import React, { useEffect, useState } from "react";

type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
};

const page = (props: User) => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                if (!response.ok) throw new Error("Failed to fetch users.");
                const data = await response.json();
                setUsers(data);
            } catch (err) {
                setError("Failed to fetch users.");
                if (err instanceof Error) {
                    setError(`Failed to fetch users: ${err.message}`);
                }
            } finally {
                setLoading(false);
            }
        }
        fetchUsers();
    }, []);

    return (
        <ul className="space-y-4 p-4">
            {users.map((user) => (
                <li key={user.id} className="p-4 bg-white shadow-md rounded-lg text-gray-700">
                    {user.name} ({user.email})
                </li>
            ))}
        </ul>
    );
};

export default page;