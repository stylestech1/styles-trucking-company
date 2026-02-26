/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useRef, useState, useEffect, useCallback, ReactNode, UIEvent } from "react";
import { motion, useInView } from "motion/react";
import "../app/globals.css";

type LookingForItem = { label: string; icon: ReactNode };

interface AnimatedItemProps {
    children: ReactNode;
    delay?: number;
    index: number;
    onMouseEnter?: () => void;
    onClick?: () => void;
}

const AnimatedItem: React.FC<AnimatedItemProps> = ({ children, delay = 0, index, onMouseEnter, onClick }) => {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { amount: 0.5, once: false });

    return (
        <motion.div
            ref={ref}
            data-index={index}
            onMouseEnter={onMouseEnter}
            onClick={onClick}
            initial={{ scale: 0.7, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.7, opacity: 0 }}
            transition={{ duration: 0.2, delay }}
            style={{ cursor: "pointer" }}
        >
            {children}
        </motion.div>
    );
};

interface AnimatedListProps<T> {
    items: T[];
    onItemSelect?: (item: T, index: number) => void;
    showGradients?: boolean;
    enableArrowNavigation?: boolean;
    className?: string;
    displayScrollbar?: boolean;
    initialSelectedIndex?: number;

    // ✅ new: custom render
    renderItem?: (item: T, index: number, selected: boolean) => ReactNode;
}

export default function AnimatedList<T>({
    items,
    onItemSelect,
    showGradients = true,
    enableArrowNavigation = true,
    className = "",
    displayScrollbar = true,
    initialSelectedIndex = -1,
    renderItem,
}: AnimatedListProps<T>) {
    const listRef = useRef<HTMLDivElement>(null);
    const [selectedIndex, setSelectedIndex] = useState<number>(initialSelectedIndex);
    const [keyboardNav, setKeyboardNav] = useState<boolean>(false);
    const [topGradientOpacity, setTopGradientOpacity] = useState<number>(0);
    const [bottomGradientOpacity, setBottomGradientOpacity] = useState<number>(1);

    const handleItemMouseEnter = useCallback((index: number) => {
        setSelectedIndex(index);
    }, []);

    const handleItemClick = useCallback(
        (item: T, index: number) => {
            setSelectedIndex(index);
            onItemSelect?.(item, index);
        },
        [onItemSelect]
    );

    const handleScroll = useCallback((e: UIEvent<HTMLDivElement>) => {
        const target = e.target as HTMLDivElement;
        const { scrollTop, scrollHeight, clientHeight } = target;

        setTopGradientOpacity(Math.min(scrollTop / 50, 1));

        const bottomDistance = scrollHeight - (scrollTop + clientHeight);
        setBottomGradientOpacity(scrollHeight <= clientHeight ? 0 : Math.min(bottomDistance / 50, 1));
    }, []);

    useEffect(() => {
        if (!enableArrowNavigation) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowDown") {
                e.preventDefault();
                setKeyboardNav(true);
                setSelectedIndex((prev) => Math.min((prev < 0 ? 0 : prev + 1), items.length - 1));
            } else if (e.key === "ArrowUp") {
                e.preventDefault();
                setKeyboardNav(true);
                setSelectedIndex((prev) => Math.max((prev < 0 ? 0 : prev - 1), 0));
            } else if (e.key === "Enter") {
                if (selectedIndex >= 0 && selectedIndex < items.length) {
                    e.preventDefault();
                    onItemSelect?.(items[selectedIndex], selectedIndex);
                }
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [items, selectedIndex, onItemSelect, enableArrowNavigation]);

    useEffect(() => {
        if (!keyboardNav || selectedIndex < 0 || !listRef.current) return;

        const container = listRef.current;
        const selectedItem = container.querySelector(`[data-index="${selectedIndex}"]`) as HTMLElement | null;

        if (selectedItem) {
            const extraMargin = 50;
            const containerScrollTop = container.scrollTop;
            const containerHeight = container.clientHeight;
            const itemTop = selectedItem.offsetTop;
            const itemBottom = itemTop + selectedItem.offsetHeight;

            if (itemTop < containerScrollTop + extraMargin) {
                container.scrollTo({ top: itemTop - extraMargin, behavior: "smooth" });
            } else if (itemBottom > containerScrollTop + containerHeight - extraMargin) {
                container.scrollTo({ top: itemBottom - containerHeight + extraMargin, behavior: "smooth" });
            }
        }

        setKeyboardNav(false);
    }, [selectedIndex, keyboardNav]);

    return (
        <div className={`scroll-list-container ${className}`}>
            <div
                ref={listRef}
                className={`scroll-list ${!displayScrollbar ? "no-scrollbar" : ""}`}
                onScroll={handleScroll}
            >
                {items.map((item, index) => {
                    const selected = selectedIndex === index;

                    return (
                        <AnimatedItem
                            key={index}
                            delay={0.1}
                            index={index}
                            onMouseEnter={() => handleItemMouseEnter(index)}
                            onClick={() => handleItemClick(item, index)}
                        >
                            {renderItem ? (
                                renderItem(item, index, selected)
                            ) : (
                                // ✅ default style (works for your {label, icon})
                                <DefaultLookingForCard item={item as any as LookingForItem} selected={selected} />
                            )}
                        </AnimatedItem>
                    );
                })}
            </div>

            {showGradients && (
                <>
                    <div className="top-gradient" style={{ opacity: topGradientOpacity }} />
                    <div className="bottom-gradient" style={{ opacity: bottomGradientOpacity }} />
                </>
            )}
        </div>
    );
}

function DefaultLookingForCard({ item, selected }: { item: LookingForItem; selected: boolean }) {
    return (
        <div
            className={[
                "flex items-center gap-4 bg-white px-6 py-4 rounded-xl",
                "shadow-[0_12px_30px_rgba(32,93,172,0.15)]",
                selected ? "ring-2 ring-[#205DAC]/20" : "",
            ].join(" ")}
        >
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#FFF1EE]">
                {item.icon}
            </div>

            <span className="text-[16px] font-medium text-[#205DAC]">{item.label}</span>
        </div>
    );
}