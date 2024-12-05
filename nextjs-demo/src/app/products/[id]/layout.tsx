import { ReactNode } from "react";

export default function ProductLayout({ children }: { children: ReactNode }) {
    return (
        <div>
            {children}{" "}
            <div>
                <h2>Featured products section</h2>
            </div>
        </div>
    );
}
