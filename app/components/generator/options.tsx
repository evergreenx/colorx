import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "~/components/ui/navigation-menu";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "~/components/ui/alert-dialog";

import { useToggle } from "usehooks-ts";

import { Link } from "@remix-run/react";

export function GeneratorNavigation() {
  const [viewModal, toggle, setViewModal] = useToggle(false);

  const [exportModal, toggleExportModal, setExportModal] = useToggle(false);

  return (
    <>
      <NavigationMenu className="">
        <NavigationMenuList className="">
          <NavigationMenuItem>
            <NavigationMenuLink
              onSelect={toggle}
              className={navigationMenuTriggerStyle()}
            >
              View
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              onSelect={toggleExportModal}
              className={navigationMenuTriggerStyle()}
            >
              Export
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* view modal */}

      <AlertDialog open={viewModal}>
        <AlertDialogContent className="h-52">
          <AlertDialogHeader>
            <div onClick={toggle} className="cursor-pointer absolute top-10 ">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.5 4.5L4.5 13.5"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4.5 4.5L13.5 13.5"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <AlertDialogTitle className="text-center">
              Quick View
            </AlertDialogTitle>
            <AlertDialogDescription></AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter></AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* export modal */}
      <AlertDialog open={exportModal}>
        <AlertDialogContent className="h-52">
          <AlertDialogHeader>
            <div
              onClick={toggleExportModal}
              className="cursor-pointer absolute top-10 "
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.5 4.5L4.5 13.5"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4.5 4.5L13.5 13.5"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <AlertDialogTitle className="text-center">Export</AlertDialogTitle>
            <AlertDialogDescription></AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter></AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
