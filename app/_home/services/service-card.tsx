import Image from "next/image";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import type { services } from "./content";

export function ServiceCard({ service }: { service: (typeof services)[number] }) {
  const { id, title, lettering, description, artwork } = service;

  return (
    <Box component="article" id={id} aria-labelledby={`${id}-title`} sx={{ minWidth: 0, scrollMarginTop: 112 }}>
      <Box
        dir="ltr"
        aria-hidden="true"
        sx={{
          aspectRatio: "411 / 232",
          position: "relative",
          zIndex: 1,
          pointerEvents: "none",
          isolation: "isolate",
          clipPath: "inset(-8% 0 -10%)",
        }}
      >
        <Typography
          component="span"
          sx={{
            position: "absolute",
            insetInline: 0,
            top: 0,
            textAlign: "center",
            fontSize: { xs: "clamp(1.875rem, 10vw, 3.25rem)", sm: "clamp(2rem, 5vw, 3.25rem)", md: "clamp(2rem, 3.6vw, 3.25rem)" },
            fontFamily: "var(--font-vazirmatn), sans-serif",
            fontWeight: 600,
            lineHeight: 1.25,
            letterSpacing: "-0.025em",
            whiteSpace: "nowrap",
            backgroundImage: "linear-gradient(180deg, #B9C1CF, var(--mui-palette-background-paper))",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          {lettering}
        </Typography>
        {artwork.map(({ image, width, left, bottom }) => (
          <Box key={image.src} sx={{ position: "absolute", width, insetInlineStart: left, bottom }}>
            <Image
              src={image}
              alt=""
              sizes="(min-width: 1312px) 370px, (min-width: 900px) 30vw, (min-width: 600px) 45vw, 90vw"
              style={{ display: "block", width: "100%", height: "auto" }}
            />
          </Box>
        ))}
      </Box>

      <Box
        sx={{
          position: "relative",
          isolation: "isolate",
          mt: -3,
          display: "grid",
          gridTemplateRows: "auto minmax(44px, auto) auto",
          justifyItems: "center",
          alignContent: "start",
          gap: 3,
          minHeight: 209,
          pt: 8,
          pb: 8,
          px: 5,
          textAlign: "center",
          color: "surface.inverseRaised",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            zIndex: -1,
            bgcolor: "surface.raised",
            clipPath: "url(#home-service-card-panel)",
          },
        }}
      >
        <Typography id={`${id}-title`} component="h3" variant="h2" sx={{ fontSize: { xs: "1.125rem", lg: "1.375rem" } }}>
          {title}
        </Typography>
        <Typography sx={{ fontSize: "0.8125rem", lineHeight: 1.7 }}>
          {description}
        </Typography>
        <Button
          href="/#contact"
          aria-label={`بررسی و ادامه روند درخواست، ${title}`}
          sx={{
            color: "inherit",
            gap: 2,
            minHeight: 32,
            fontSize: "0.8125rem",
            textTransform: "none",
            "&.Mui-focusVisible": { outline: "2px solid", outlineColor: "primary.main" },
          }}
        >
          بررسی و ادامه روند درخواست
          <Image src="/assets/home/icons/arrow-left.svg" alt="" width={16} height={16} style={{ filter: "brightness(.3)" }} />
        </Button>
      </Box>
    </Box>
  );
}
