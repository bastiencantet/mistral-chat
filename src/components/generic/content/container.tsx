import React from "react";

export function ContentContainer({children} : Readonly<{children: React.ReactNode;}>) {
    return (
        <div className="max-w-screen-2xl mx-auto flex justify-center h-screen flex-col gap-6 overflow-y-hidden">
            {children}
        </div>
    );
}
