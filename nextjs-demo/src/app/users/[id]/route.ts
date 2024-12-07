import { users } from "../route";

export async function GET(_request: Request, { params }: { params: { id: string } }) {
    const { id } = await params;
    const user = users.find((u) => u.id === parseInt(id));

    return Response.json(user);
}
