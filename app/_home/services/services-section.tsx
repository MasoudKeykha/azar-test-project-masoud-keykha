import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { shellContent } from "@/app/components/site-shell/shared";
import { services } from "./content";
import { ServiceCard } from "./service-card";

export function ServicesSection() {
  return (
    <Box
      component="section"
      id="services"
      aria-labelledby="services-title"
      sx={{
        bgcolor: "background.paper",
        scrollMarginTop: 112,
        position: "relative",
        pt: { xs: 9, md: 10 },
        pb: { xs: 10, md: 12 },
      }}
    >
      <svg aria-hidden="true" width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <clipPath id="home-service-card-panel" clipPathUnits="objectBoundingBox">
            <path d="M .03 0 H .97 Q 1 0 1 .06 V .84 Q 1 .9 .97 .904 L .03 .998 Q 0 1 0 .94 V .06 Q 0 0 .03 0 Z" />
          </clipPath>
        </defs>
      </svg>

      <Box sx={shellContent}>
        <Box sx={{ textAlign: "center", mb: { xs: 8, md: 11 } }}>
          <Typography id="services-title" component="h2" variant="h2" color="primary.main">
            خدمات ما
          </Typography>
          <Box
            aria-hidden="true"
            sx={{
              mx: "auto",
              width: 24,
              height: 4,
              borderRadius: "2px",
              backgroundImage: "linear-gradient(to left, #FBB015, transparent)",
              mt: 1,
              mb: 1,
            }}
          />
          <Typography color="text.secondary">
            راهکارهای تخصصی برای بازرگانان، شرکت‌ها و صاحبان کالا: برآورد اولیه همان لحظه
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "minmax(0, 1fr)",
              sm: "repeat(2, minmax(0, 1fr))",
              md: "repeat(3, minmax(0, 1fr))",
            },
            columnGap: 6,
            rowGap: { xs: 6, md: 10 },
          }}
        >
          {services.map((service) => <ServiceCard key={service.id} service={service} />)}
        </Box>
      </Box>
    </Box>
  );
}
