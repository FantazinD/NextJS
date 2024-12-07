export const users = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Doe" },
];

export async function GET() {
    return Response.json(users);
}
