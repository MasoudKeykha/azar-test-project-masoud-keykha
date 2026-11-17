"use client";

import { useSyncExternalStore } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { shellContent } from "./shared";

function subscribeToScroll(onScroll: () => void) {
  window.addEventListener("scroll", onScroll, { passive: true });
  return () => window.removeEventListener("scroll", onScroll);
}

const readScrollState = () => window.scrollY > 12;
const readServerScrollState = () => false;

const actionStyles = {
  px: { xs: 2, sm: 3 },
  minWidth: 0,
  minHeight: 32,
  gap: 2,
  whiteSpace: "nowrap",
  fontSize: "0.875rem",
  lineHeight: 1.4,
  letterSpacing: 0,
  textTransform: "none",
  borderRadius: "6px",
  "&.Mui-focusVisible": { outline: "2px solid", outlineOffset: 2 },
} as const;

export function SiteHeader() {
  const scrolled = useSyncExternalStore(
    subscribeToScroll,
    readScrollState,
    readServerScrollState,
  );

  return (
    <Box
      component="header"
      data-scrolled={scrolled}
      sx={{
        position: "sticky",
        top: 0,
        zIndex: "appBar",
        flexShrink: 0,
        py: { xs: 3, sm: 6 },
        pointerEvents: "none",
      }}
    >
      <Box
        component="nav"
        aria-label="منوی اصلی"
        sx={{
          ...shellContent,
          minHeight: 64,
          position: "relative",
          isolation: "isolate",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 1,
          px: { xs: 3, sm: 8 },
          pointerEvents: "auto",
          translate: scrolled ? { xs: "0 -4px", sm: "0 -12px" } : "0",
          transition: "translate 180ms ease-out",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            zIndex: -1,
            bgcolor: "background.paper",
            border: "1px solid",
            borderColor: "surface.raised",
            borderRadius: "12px",
            transform: { sm: "skewX(12deg)" },
            boxShadow: scrolled
              ? "0 8px 24px rgb(15 23 42 / 17%)"
              : "0 8px 12px -6px rgb(15 23 42 / 24%)",
            transition: "box-shadow 180ms ease-out",
          },
          "@media (prefers-reduced-motion: reduce)": {
            transition: "none",
            "&::before": { transition: "none" },
          },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: { xs: 0, sm: 3 } }}>
          <Box
            component="a"
            href="/#top"
            aria-label="شرکت بازرگانی اصولی شجاعی، صفحه اصلی"
            sx={{ display: "inline-flex", flexShrink: 0 }}
          >
            <Image src="/assets/home/brand/logo.svg" width={93} height={24} alt="" />
          </Box>
          <Button
            href="/#top"
            aria-current="page"
            sx={{ ...actionStyles, color: "text.primary", display: { xs: "none", sm: "inline-flex" } }}
          >
            <Image src="/assets/home/header/home.svg" width={16} height={16} alt="" />
            خانه
          </Button>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: { xs: 0, sm: 1 } }}>
          <Button href="/#contact" sx={actionStyles}>
            <Image src="/assets/home/header/call-outgoing.svg" width={16} height={16} alt="" />
            مشاوره
          </Button>
          <Button
            disabled
            variant="outlined"
            aria-label="ورود یا ثبت‌نام"
            sx={{
              ...actionStyles,
              "&.Mui-disabled": {
                bgcolor: "surface.subtle",
                borderColor: "surface.raised",
                color: "text.secondary",
              },
            }}
          >
            <Image src="/assets/home/header/login.svg" width={16} height={16} alt="" />
            <Box component="span" sx={{ display: { xs: "none", sm: "inline" } }}>
              ورود | ثبت‌نام
            </Box>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
