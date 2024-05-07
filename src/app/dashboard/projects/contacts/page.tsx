import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { File, ListFilter, PlusCircle } from "lucide-react"
import ContactSection from "./ContactSection"

export default function ContactPage() {
    return (
        <>
            <div className="space-y-6">
                <div className="flex">
                    <div>
                        <h3 className="text-lg font-medium">Contacts</h3>
                        <p className="text-sm text-muted-foreground">
                            You can see the list of your contacts.
                        </p>
                    </div>
                    <div className="flex gap-3 ml-auto self-center">
                        <Button variant={"outline"} size={"sm"}><ListFilter size={14} className="mr-2" /> Filter</Button>
                        <Button variant={"outline"} size={"sm"}><File size={14} className="mr-2" /> Export</Button>
                        <Button size={"sm"}><PlusCircle size={14} className="mr-2" /> Add new contact</Button>
                    </div>
                </div>
                <Separator />
                <ContactSection />
            </div>
        </>
    )
}