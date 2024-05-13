import Navbar from "@/components/Navbar";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="flex min-h-screen w-full flex-col">
                <Navbar />
                <main className="flex-col md:flex gap-4 p-4 md:gap-8 md:p-8 h-full">
                    <TooltipProvider>
                        {children}
                    </TooltipProvider>
                </main>
            </div>

        </>
    )
}