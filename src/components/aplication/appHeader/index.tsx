import Link from "next/link";
import { FileSymlink, FileOutput  } from 'lucide-react';
import { SidebarTrigger } from "@/components/ui/sidebar";
import Image from "next/image";
import { appVariables } from "@/lib/project-variables";

export default function AppHeader() {
  return(
    <header className="flex items-center justify-between p-4 h-14">
      <div className="flex items-center space-x-4">
        <SidebarTrigger className="cursor-pointer hover:text-hover-1" />
        <Image
          alt={`logo ${appVariables.appTitle}`} 
          src='/logo-96x96.png' 
          width={96} 
          height={96}
          className="h-8 w-8"
        />
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