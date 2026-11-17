"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import { initialSlide, slides } from "./content";

export function HeroSlider() {
  const [active, setActive] = useState(initialSlide);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const slide = slides[active];

  function handleTabKey(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next: number;
    switch (event.key) {
      case "ArrowLeft":
        next = (index + 1) % slides.length;
        break;
      case "ArrowRight":
        next = (index - 1 + slides.length) % slides.length;
        break;
      case "Home":
        next = 0;
        break;
      case "End":
        next = slides.length - 1;
        break;
      default:
        return;
    }
    event.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  }

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "minmax(0, 1fr)", md: "minmax(0, 1fr) minmax(0, 59.5%)" },
        columnGap: { md: 10 },
        mt: { xs: 6, md: 11 },
      }}
    >
      <Box
        role="tablist"
        aria-label="دسته‌های خدمات"
        sx={{
          gridRow: 2,
          gridColumn: { xs: "1 / -1", md: 1 },
          mt: { xs: 3, md: -12 },
          marginInlineStart: { md: "16px" },
          display: "grid",
          gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
          gap: 1,
          alignItems: "end",
          zIndex: 1,
        }}
      >
        {slides.map(({ label }, index) => {
          const selected = index === active;
          return (
            <ButtonBase
              key={label}
              ref={(node) => { tabs.current[index] = node; }}
              id={`hero-tab-${index}`}
              role="tab"
              aria-selected={selected}
              aria-controls="hero-slide"
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(index)}
              onKeyDown={(event) => handleTabKey(event, index)}
              sx={{
                minHeight: selected ? 48 : 44,
                isolation: "isolate",
                fontSize: { xs: "0.6875rem", sm: "0.8125rem" },
                color: selected ? "common.white" : "text.secondary",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  inset: 0,
                  zIndex: -1,
                  borderRadius: "10px 10px 0 0",
                  transform: "skewY(-2deg)",
                  bgcolor: selected ? "primary.main" : "background.paper",
                },
                "&::after": selected ? {
                  content: '""',
                  position: "absolute",
                  bottom: 10,
                  insetInline: "22%",
                  height: 2,
                  bgcolor: "surface.tintedStrong",
                } : undefined,
                "&.Mui-focusVisible": { outline: "2px solid", outlineColor: "primary.dark", outlineOffset: 2 },
              }}
            >
              {label}
            </ButtonBase>
          );
        })}
      </Box>

      <Box
        id="hero-slide"
        role="tabpanel"
        aria-labelledby={`hero-tab-${active}`}
        sx={{
          gridRow: 1,
          gridColumn: "1 / -1",
          display: "grid",
          gridTemplateColumns: "subgrid",
          rowGap: 5,
          minHeight: { md: 504 },
        }}
      >
        <Box
          sx={{
            minWidth: 0,
            pt: { md: 6 },
            paddingInlineStart: { md: "16px" },
            pb: { md: 16 },
            minHeight: { xs: 230, md: 0 },
          }}
        >
          <Typography sx={{ color: "#B36A00", fontSize: { xs: "1rem", md: "1.125rem" }, fontWeight: 600, mb: 4 }}>
            {slide.eyebrow}
          </Typography>
          <Image src="/assets/home/hero/title-accent.svg" alt="" width={104} height={14} />
          <Typography
            component="h1"
            sx={{
              color: "primary.main",
              fontSize: { xs: "clamp(1.875rem, 6vw, 2.625rem)", lg: "2.75rem" },
              fontWeight: 700,
              lineHeight: 1.12,
              letterSpacing: "-0.025em",
              mt: 3,
            }}
          >
            {slide.title.map((line) => (
              <Box component="span" sx={{ display: "block" }} key={line}>{line}</Box>
            ))}
          </Typography>
          <Box component="ul" sx={{ display: "flex", listStyle: "none", flexWrap: "wrap", gap: 2, mt: 6 }}>
            {slide.tags.map((tag) => (
              <Box
                key={tag}
                component="li"
                sx={{ bgcolor: "#0F172A", color: "common.white", borderRadius: 8, px: 2, py: 0.5, fontSize: "0.8125rem" }}
              >
                {tag}
              </Box>
            ))}
          </Box>
          <Typography sx={{ color: "text.secondary", fontSize: "0.75rem", mt: 3 }}>
            {slide.description}
          </Typography>
          <Button
            href="/#services"
            variant="contained"
            disableElevation
            sx={{
              mt: 6,
              px: 6,
              minHeight: 48,
              borderRadius: "10px",
              gap: 3,
              fontSize: "1rem",
              textTransform: "none",
              "&.Mui-focusVisible": { outline: "2px solid", outlineColor: "primary.main", outlineOffset: 3 },
            }}
          >
            مشاهده خدمات
            <Image src="/assets/home/icons/arrow-left.svg" alt="" width={24} height={24} />
          </Button>
        </Box>

        <Box
          sx={{
            position: "relative",
            aspectRatio: { xs: "16 / 10", md: "auto" },
            overflow: "hidden",
            borderRadius: { xs: "14px", md: 0 },
            clipPath: { md: "url(#home-hero-photo-clip)" },
            bgcolor: "surface.tintedStrong",
          }}
        >
          <Image
            src={slide.image}
            alt={slide.label}
            fill
            sizes="(max-width: 899px) calc(100vw - 32px), (max-width: 1311px) 60vw, 762px"
            preload={active === initialSlide}
            style={{ objectFit: "cover" }}
          />
        </Box>
      </Box>

    </Box>
  );
}
