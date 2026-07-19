import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="flex flex-col gap-5">
      <div className="bg-primary py-1">
        <div className="container flex items-center justify-between">
          <p className="text-primary-foreground text-lg">Tashkent</p>
          <p className="text-primary-foreground text-lg">Content</p>
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
