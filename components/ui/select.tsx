"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, CheckCircle2, type LucideIcon } from "lucide-react";

export interface SelectOption {
  value: string;
  label: string;
  icon?: LucideIcon;
}

interface SelectProps {
  name: string;
  options: readonly SelectOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  invalid?: boolean;
  errorId?: string;
  onOpen?: () => void;
}

export function Select({
  name,
  options,
  value,
  onChange,
  placeholder = "Select one",
  invalid,
  errorId,
  onOpen,
}: SelectProps) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const selected = options.find((o) => o.value === value);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node))
        setOpen(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  function openMenu() {
    onOpen?.();
    setActiveIndex(
      Math.max(
        0,
        options.findIndex((o) => o.value === value),
      ),
    );
    setOpen(true);
  }

  function selectOption(index: number) {
    onChange(options[index].value);
    setOpen(false);
    buttonRef.current?.focus();
  }

  function handleListKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => (i + 1) % options.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => (i - 1 + options.length) % options.length);
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      selectOption(activeIndex);
    } else if (e.key === "Escape") {
      setOpen(false);
      buttonRef.current?.focus();
    } else if (e.key === "Tab") {
      setOpen(false);
    }
  }

  return (
    <div ref={rootRef} className="relative">
      <button
        ref={buttonRef}
        type="button"
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-invalid={invalid}
        aria-describedby={invalid ? errorId : undefined}
        onClick={() => (open ? setOpen(false) : openMenu())}
        onKeyDown={(e) => {
          if (["Enter", " ", "ArrowDown", "ArrowUp"].includes(e.key)) {
            e.preventDefault();
            if (!open) openMenu();
          } else if (e.key === "Escape") setOpen(false);
        }}
        className={`focus-ring flex w-full items-center justify-between gap-2 rounded-lg border bg-bg px-4 py-2.5 text-left font-body text-sm transition-colors ${
          invalid ? "border-red-400" : "border-ink/15"
        }`}
      >
        <span
          className={`flex items-center gap-2 ${selected ? "text-ink" : "text-ink-muted/60"}`}
        >
          {selected?.icon && (
            <selected.icon
              size={15}
              strokeWidth={1.75}
              className="shrink-0 text-primary"
            />
          )}
          {selected ? selected.label : placeholder}
        </span>
        <ChevronDown
          size={16}
          strokeWidth={1.75}
          className={`shrink-0 text-ink-muted transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            role="listbox"
            tabIndex={-1}
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.14 }}
            onKeyDown={handleListKeyDown}
            className="absolute z-20 mt-1.5 w-full overflow-hidden rounded-lg border border-ink/10 bg-bg py-1 shadow-card"
          >
            {options.map((o, i) => {
              const isSelected = o.value === value;
              return (
                <li
                  key={o.value}
                  role="option"
                  aria-selected={isSelected}
                  onMouseEnter={() => setActiveIndex(i)}
                  onClick={() => selectOption(i)}
                  className={`flex cursor-pointer items-center gap-2.5 px-4 py-2.5 font-body text-sm transition-colors ${
                    i === activeIndex
                      ? "bg-primary/10 text-ink"
                      : "text-ink-muted"
                  }`}
                >
                  {o.icon && (
                    <o.icon
                      size={15}
                      strokeWidth={1.75}
                      className={`shrink-0 ${isSelected ? "text-primary" : "text-ink-muted"}`}
                    />
                  )}
                  {o.label}
                  {isSelected && (
                    <CheckCircle2
                      size={14}
                      strokeWidth={2}
                      className="ml-auto shrink-0 text-primary"
                    />
                  )}
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>

      <input type="hidden" name={name} value={value} />
    </div>
  );
}
