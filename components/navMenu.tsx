import { FC, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const NavMenu: FC = () => {
  const router = useRouter();
  return (
    <div>
      <ul className="">
        {navData.map((nav) => {
          const isActive = router.asPath === nav.href;

          return (
            <NavItem href={nav.href} label={nav.label} active={isActive} />
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
  return (
    <Link href={href}>
      <div
        className={`p-2 mb-2 capitalize hover:bg-gradient-to-r from-blue-500 to-fuchsia-300 ${
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
];
