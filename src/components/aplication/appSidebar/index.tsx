'use client'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar"
import SidebarMobileTrigger from "../sidebarMobileTrigger"
import Image from "next/image";
import { appVariables } from "@/lib/project-variables";
import { AppSidebarItensFactory } from "./appSideBarItensFactory";

export function AppSidebar() {
  const { isMobile } = useSidebar();

  return (
    <Sidebar>
      <SidebarHeader className="flex items-center pt-4">
        <div className="flex gap-1.5">
          <Image 
            alt={`logo ${appVariables.appTitle}`} 
            src='/logo-96x96.png' 
            width={96} 
            height={96}
            className="h-7 w-7"
          />
          <h2 className="text-xl font-bold">{appVariables.appTitle}</h2>
        </div>
        {isMobile && <SidebarMobileTrigger/>}
      </SidebarHeader>
      <SidebarContent className="px-4 py-2">
        <AppSidebarItensFactory/>
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}