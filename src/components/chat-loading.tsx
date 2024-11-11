
export function ChatLoading({loading} : Readonly<{loading: boolean;}>) {
    return (
        <div className={`w-96 h-10 bg-gradient-to-r from-gray-800  rounded-lg  to-gray-700 animate-pulse ${loading ? 'block' : 'hidden'}`}></div>
    );
}
