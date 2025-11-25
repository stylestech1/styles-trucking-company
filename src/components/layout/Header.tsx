"use client";
import { TextAlignJustify, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, easeInOut } from "framer-motion";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpenMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const mobileMenuVariants = {
    closed: {
      x: "100%",
      transition: {
        duration: 0.3,
        ease: easeInOut,
      },
    },
    open: {
      x: 0,
      transition: {
        duration: 0.3,
        ease: easeInOut,
      },
    },
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      x: 20,
    },
    open: {
      opacity: 1,
      x: 0,
    },
  };

  const staggerVariants = {
    open: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const links = [
    {
      id: 1,
      name: "Services",
      href: "#services",
    },
    {
      id: 2,
      name: "About",
      href: "#about",
    },
    {
      id: 3,
      name: "Careers",
      href: "#careers",
    },
    {
      id: 4,
      name: "Driver App",
      href: "#driverApp",
    },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        openMenu
          ? "bg-white shadow-lg"
          : isScrolled
          ? "bg-white/90 backdrop-blur-lg shadow-sm border-b border-gray-100"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
            className="flex items-center gap-3"
          >
            <Image
              src="/assets/images/Logo.svg"
              width={45}
              height={45}
              alt="logo"
              loading="eager"
              className="rounded-lg"
            />
            <h2 className="text-xl text-[#1E56A0]">
              Styles Trucking
            </h2>
          </motion.div>
        </Link>

        {/* Links - Desktop */}
        <ul className="hidden lg:flex items-center gap-8">
          {links.map((item, index) => (
            <motion.li
              key={index}
              className="capitalize"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.2 }}
            >
              <Link
                href={item.href}
                className={`font-medium text-gray-700 hover:text-[#1E56A0] transition-colors`}
              >
                {item.name}
              </Link>
            </motion.li>
          ))}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.2 }}
          >
            <Link
              href={"tel:+4794803064"}
              className={`py-2.5 px-6 rounded-lg font-medium transition-all bg-[#1E56A0] text-white shadow-lg ${
                isScrolled ? "shadow-blue-500/25" : "shadow-white/20"
              }`}
            >
              Contact Us
            </Link>
          </motion.div>
        </ul>

        {/* Hamburger Button */}
        <motion.button
          onClick={() => setOpenMenu(!openMenu)}
          className={`flex lg:hidden p-3 rounded-lg transition-colors text-[#1E56A0]`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <TextAlignJustify size={20} />
        </motion.button>

        {/* Mobile Menu - Side Panel */}
        <AnimatePresence>
          {openMenu && (
            <>
              {/* Overlay */}
              <motion.div
                className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setOpenMenu(false)}
              />

              {/* Side Menu */}
              <motion.div
                className="fixed top-0 right-0 h-full w-80 max-w-full bg-white/95 backdrop-blur-xl shadow-2xl z-50 lg:hidden flex flex-col"
                variants={mobileMenuVariants}
                initial="closed"
                animate="open"
                exit="closed"
              >
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                  <Link href="/" onClick={() => setOpenMenu(false)} className="flex items-center gap-3">
                    <Image
                      src={"/assets/images/Logo.svg"}
                      width={40}
                      height={40}
                      alt="logo"
                      className="rounded-lg"
                    />
                    <h2 className="text-lg font-bold text-[#1E56A0]">
                      Styles Trucking
                    </h2>
                  </Link>
                  <motion.button
                    onClick={() => setOpenMenu(false)}
                    className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X size={20} />
                  </motion.button>
                </div>

                {/* Menu Items */}
                <motion.ul
                  className="flex-1 p-6 space-y-6"
                  variants={staggerVariants}
                  initial="closed"
                  animate="open"
                >
                  {links.map((item, index, arr) => (
                    <motion.li
                      key={index}
                      variants={itemVariants}
                      className={`border-b border-gray-300 pb-4 text-center ${
                        index === arr.length - 1 ? "border-b-0" : ""
                      }`}
                    >
                      <Link
                        href={item.href}
                        className="text-lg font-medium text-gray-800 hover:text-[#1E56A0] transition-colors block py-2"
                        onClick={() => setOpenMenu(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.li>
                  ))}

                  <motion.li className="pt-4" variants={itemVariants}>
                    <Link
                      href={"tel:+4794803064"}
                      className="w-full py-3 px-6 bg-[#1E56A0] text-white rounded-lg font-medium transition-colors block text-center shadow-lg shadow-blue-500/25"
                      onClick={() => setOpenMenu(false)}
                    >
                      Contact Us
                    </Link>
                  </motion.li>
                </motion.ul>

                {/* Footer */}
                <motion.div
                  className="p-6 border-t border-gray-100"
                  variants={itemVariants}
                >
                  <p className="text-sm text-gray-500 text-center">
                    © 2025 Styles Trucking
                  </p>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
