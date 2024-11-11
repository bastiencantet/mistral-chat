import React from "react";


export function ContentSplitter ({children, alternance } : Readonly<{children: React.ReactNode; alternance?: boolean;}>) {
    return (
        <div className={`flex flex-col ${alternance ? 'bg-gray-200 dark:bg-gray-800' : 'bg-gray-100 dark:bg-gray-900'}`}>
            {children}
        </div>
    );
}
