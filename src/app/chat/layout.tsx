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
            <div className="flex-1 flex flex-col min-h-0">
                <Appbar />
                <main className="flex-1 min-h-0 overflow-y-auto bg-app">
                    {children}
                </main>
            </div>
        </div>
    )
}
