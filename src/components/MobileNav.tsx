import { Menu } from "lucide-react";
import {
  Button,
  Separator,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui";

export const MobileNav = () => (
  <Sheet>
    <SheetTrigger>
      <Menu className="text-orange-500" />
    </SheetTrigger>
    <SheetContent className="space-y-3">
      <SheetTitle>
        <span>Welcome to MernEets.com!</span>
      </SheetTitle>
      <Separator />
      <SheetDescription className="flex">
        <Button className="flex-1 font-bold bg-orange-500">Log In</Button>
      </SheetDescription>
    </SheetContent>
  </Sheet>
);
