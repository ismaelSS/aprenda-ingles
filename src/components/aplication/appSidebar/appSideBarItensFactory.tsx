import Link from "next/link";
import clsx from 'clsx';
import {
  appSideMenuNavigation,
  AppSideMenuNavigationItem,
  AppSideMenuNavigationSection
} from "@/lib/project-variables";
import { usePathname } from 'next/navigation';


export function AppSidebarIten({ name, href, isEnable }: AppSideMenuNavigationItem) {
  const pathname = usePathname();

  return isEnable ? (
    <Link
      href={href}
      className={clsx('text-font-1 ml-2', {
        'text-selected-1': pathname === href,
      })}
    >
      {name}
    </Link>
  ) : (
    <span className="text-disabled-1 ml-2">{name}</span>
  );
}

type AppSidebarSectionProps = {
  title: string;
  itens: AppSideMenuNavigationSection;
};

function AppSidebarSection({ title, itens }: AppSidebarSectionProps) {
  return (
    <div className="flex flex-col gap-1">
      <h5 className="text-font-1 font-semibold">{title}</h5>
      <div className="flex flex-col gap-0.5">
        {itens.sections.map((item, index) => (
          <AppSidebarIten key={index} {...item} />
        ))}
      </div>
    </div>
  );
}


export function AppSidebarItensFactory() {
  return (
    <div className="flex flex-col gap-3">
      {appSideMenuNavigation.map((item, index) => {
        if ('sections' in item) {
          return (
            <AppSidebarSection
              key={index}
              title={item.title || ''}
              itens={item}
            />
          );
        }
        return <AppSidebarIten key={index} {...item} />;
      })}
    </div>
  );
}
