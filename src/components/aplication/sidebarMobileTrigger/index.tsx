import { useSidebar } from '@/components/ui/sidebar';
import { PanelLeftClose } from 'lucide-react';

export default function SidebarMobileTrigger() {
  const {toggleSidebar } = useSidebar();
  return (
    <button onClick={toggleSidebar} className='absolute right-1'>
      <PanelLeftClose/>
    </button>
  );
}