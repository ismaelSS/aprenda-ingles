import Link from "next/link";
import { FileSymlink, FileOutput  } from 'lucide-react';
import { SidebarTrigger } from "@/components/ui/sidebar";

export default function AppHeader() {
  return(
    <header className="flex items-center justify-between p-4">
      <div className="flex items-center space-x-4">
        <SidebarTrigger className="cursor-pointer hover:text-hover-1" />
        <h1 className="text-xl font-bold">Aprenda inglês</h1>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <Link className="cursor-pointer hover:text-hover-1" href="/">
            <FileOutput/>
          </Link>
          <Link className="cursor-pointer hover:text-hover-1" href="/">
            <FileSymlink/>
          </Link>
        </ul>
      </nav>
    </header>
  )
}