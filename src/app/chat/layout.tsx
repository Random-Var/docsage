import Sidebar from "../../components/Sidebar";
import Appbar from "../../components/Appbar";

export default function ChatLayout({ 
    children, 
    }: Readonly<{ 
    children: React.ReactNode 
}>) {
    return (
        <div className="flex flex-row h-screen">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Appbar />
                <main className="flex-1 overflow-y-auto p-4">
                    {children}
                </main>
            </div>
        </div>
    )
}
