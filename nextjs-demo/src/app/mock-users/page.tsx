type MockUser = {
    id: number;
    name: string;
};

export default async function MockUsers() {
    const response = await fetch("https://6758788c60576a194d10ab21.mockapi.io/users");
    const users = await response.json();

    return (
        <ul className="space-y-4 p-4">
            {users.map((user: MockUser) => (
                <li key={user.id} className="p-4 bg-white shadow-md rounded-lg text-gray-700">
                    {user.name}
                </li>
            ))}
        </ul>
    );
}
