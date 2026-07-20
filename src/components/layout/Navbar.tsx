import Image from "next/image";
import Link from "next/link";
import { Separator } from "../ui/separator";
import {
  ChevronDown,
  Heart,
  MapPin,
  Menu,
  Search,
  ShoppingBag,
  X,
} from "@/icons/icons";

const Navbar = () => {
  return (
    <header className="flex flex-col gap-5">
      <div className="bg-primary py-1">
        <div className="container flex items-center justify-between">
          <p className="text-primary-foreground text-lg flex items-center gap-0.5">
            <MapPin />
            Tashkent <ChevronDown />
          </p>
          <div className="flex items-center gap-5">
            <Link href={"/seller"} className="text-primary-foreground">
              Sotuvchi bo&apos;lish
            </Link>
            <Separator orientation="vertical" />
            <Link href={"/faq"} className="text-primary-foreground">
              Savol-javob
            </Link>
            <p className="text-primary-foreground">Buyurtmalarim</p>
            <p className="text-primary-foreground">Uzbekcha</p>
          </div>
        </div>
      </div>
      <nav className="container flex items-center justify-between">
        <Link
          href={"/"}
          className="flex items-center gap-1 font-medium font-heading text-3xl"
        >
          <Image
            src={"/images/logo.png"}
            alt="This is logo image"
            width={30}
            height={30}
          />
          <p>
            <span className="text-primary">By</span>Mall
          </p>
        </Link>
        <div></div>
      </nav>
    </header>
  );
};

export default Navbar;
