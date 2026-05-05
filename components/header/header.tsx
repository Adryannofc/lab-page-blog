import  Link  from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { useRouter } from "next/router";
import { cn } from "@/lib/utils";

export const Header = () =>  {
  const router = useRouter();
  console.log(router.pathname);
  const isHomePage = router.pathname === '/';
  const isBlogPage = router.pathname.startsWith('/blog');
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/0B0C0F p-2">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/">
            <Image
              src="/Brand-logo.svg"
              alt="Logo"
              width={120}
              height={40}
            />
          </Link>

          <nav className="flex items-center gap-6">
            <Link href="/" className={cn('text-sm font-medium transition-colors hover:text-blue-500', isHomePage ? 'text-blue-500' : 'text-muted-foreground')}>Inicio</Link>
            <Link href="/blog" className={cn('text-sm font-medium transition-colors hover:text-blue-500', isBlogPage ? 'text-blue-500' : 'text-muted-foreground')}>Blog</Link>
            <Button variant="secondary">Comecar</Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
