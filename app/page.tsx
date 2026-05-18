
import { Button } from "@/shared/ui/button"


export default function HomePage() {
  return (
    <>
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <div className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              A
            </div>
            <span className="text-lg font-semibold">AppName</span>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
            <a href="#" className="hover:text-foreground">Dashboard</a>
            <a href="#" className="hover:text-foreground">Projects</a>
            <a href="#" className="hover:text-foreground">Settings</a>
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="ghost">Sign in</Button>
            <Button>Get started</Button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-10 min-h-[calc(100vh-65px-65px)]">
      
      </main>

      <footer className="border-t">
        <div className=" h-16 mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© 2026 AppName. All rights reserved.</p>

          <div className="flex gap-4">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Contact</a>
          </div>
        </div>
      </footer>

    </>
      
  )
}
