import { FC } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAppContext } from "../middleware/appContext";

const NavMenu: FC = () => {
  const router = useRouter();

  return (
    <div>
      <ul className="transition-all duration-300">
        {navData.map((nav, index) => {
          const isActive = router.asPath === nav.href;

          return (
            <NavItem key={index} href={nav.href} label={nav.label} active={isActive} />
          );
        })}
      </ul>
    </div>
  );
};

const NavItem: FC<{ href: string; label: string; active?: boolean }> = ({
  href,
  label,
  active,
}) => {
  const { handleMobileNav } = useAppContext();

  return (
    <Link href={href}>
      <div
        onClick={() => handleMobileNav()}
        className={`p-2 mb-2 transition-all duration-300 capitalize hover:bg-gradient-to-r from-blue-500 to-fuchsia-300 ${
          active ? "bg-gradient-to-r" : ""
        }`}
      >
        <span className="italic">{label}</span>
      </div>
    </Link>
  );
};

export default NavMenu;

const navData = [
  { href: "/", label: "rain" },
  { href: "/temperature", label: "temperature" },
  { href: "#", label: "humidity" },
  { href: "/users", label: "meteorologists" },
  { href: "#", label: "settings" },
];
