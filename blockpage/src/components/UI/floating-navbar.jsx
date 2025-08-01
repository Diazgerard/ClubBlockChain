"use client";
import React, {useState} from "react";
import {motion, AnimatePresence, useScroll, useMotionValueEvent} from "motion/react";
import {cn} from "../../lib/utils.ts";

export const FloatingNav = ({navItems, className}) => {
    const visible = true;

    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{
                    opacity: 1,
                    y: -100,
                }}
                animate={{
                    y: visible ? 0 : -100,
                    opacity: visible ? 1 : 0,
                }}
                transition={{
                    duration: 0.2,
                }}
                className={cn(
                    "group flex max-w-fit fixed bottom-6 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white/10 hover:bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 pr-8 py-4 items-center justify-center space-x-4 opacity-20 hover:opacity-100 transition-opacity transition-colors duration-300 backdrop-blur-lg",
                    className
                )}
            >
                {navItems.map((navItem, idx) => (
                    <a key={`link=${idx}`} href={navItem.link} className={cn("relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500")}>
                        <span className="block sm:hidden">{navItem.icon}</span>
                        <span className="hidden sm:block text-sm">{navItem.name}</span>
                    </a>
                ))}
                {/* <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
                    <span>Login</span>
                    <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
                </button> */}
            </motion.div>
        </AnimatePresence>
    );
};
