import Box from "@mui/material/Box";
import { shellContent } from "@/app/components/site-shell/shared";
import { HeroSlider } from "./hero-slider";
import { StoryStrip } from "./story-strip";

export function HeroSection() {
  return (
    <Box
      component="section"
      aria-label="معرفی خدمات"
      sx={{
        overflow: "clip",
        backgroundImage: "linear-gradient(180deg, var(--mui-palette-background-paper), var(--mui-palette-surface-tintedStrong))",
      }}
    >
      <svg aria-hidden="true" width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <clipPath id="home-hero-photo-clip" clipPathUnits="objectBoundingBox">
            <path d="M 0 .032 Q 0 0 .021 .001 L .979 .047 Q 1 .048 1 .08 V 1 H 0 Z" />
          </clipPath>
        </defs>
      </svg>
      <Box sx={shellContent}>
        <StoryStrip />
        <HeroSlider />
      </Box>
    </Box>
  );
}
