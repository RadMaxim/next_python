import {
  SidebarInset,
  SidebarProvider,
} from "@/shared/ui/sidebar"
import { Footer } from "@/widgets/Footer/ui/footer"
import { Header } from "@/widgets/Header/ui/app-header"
import { AppSidebar } from "@/widgets/sidebar/ui/app-sidebar"
import { ImagePreview } from "@/widgets/sidebar/ui/image-preview"


export default function HomePage() {
 
  
  return (
    <SidebarProvider>
     <AppSidebar/>

      <SidebarInset>
       <Header/>

        <main className="mx-auto max-w-7xl flex-1 px-6 py-10">
          <ImagePreview />
        </main>

        <Footer/>
      </SidebarInset>
    </SidebarProvider>
  )
}