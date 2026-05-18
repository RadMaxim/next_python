export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 text-sm text-muted-foreground">
        <p>
          © 2026 AppName. All rights reserved.
        </p>

        <div className="flex gap-4">
          <a
            href="#"
            className="hover:text-foreground"
          >
            Privacy
          </a>

          <a
            href="#"
            className="hover:text-foreground"
          >
            Terms
          </a>

          <a
            href="#"
            className="hover:text-foreground"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  )
}