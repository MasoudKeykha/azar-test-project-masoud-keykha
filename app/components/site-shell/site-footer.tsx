import Image from "next/image";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { contactEmail, phoneHref, shellContent } from "./shared";

const services = [
  "خودروهای سواری",
  "کشنده و کامیون",
  "حمل و نقل",
  "واردات، صادرات و ترخیص",
  "انبارداری و سردخانه گمرکی",
  "ثبت سفارش و امور ارزی",
];

const contacts = [
  { icon: "email", label: "پست الکترونیکی", text: contactEmail, href: `mailto:${contactEmail}`, dir: "ltr" },
  { icon: "phone", label: "تلفن تماس", text: "۰۲۱-۴۴۵۱۴۵۶۷", href: phoneHref, dir: "ltr" },
  { icon: "location", label: "آدرس", text: "تهران، جردن، ناهید غربی، گروه اصولی" },
];

const socialLinks = [
  { icon: "send", label: "تلگرام" },
  { icon: "whatsapp", label: "واتس‌اپ" },
  { icon: "instagram", label: "اینستاگرام" },
];

const muted = "#A6B0BF";

const textLink = {
  color: "inherit",
  textDecoration: "none",
  "&:hover": { textDecoration: "underline", textUnderlineOffset: 4 },
  "&:focus-visible": { outline: "2px solid", outlineColor: "primary.light", outlineOffset: 3 },
} as const;

function FooterIcon({ icon }: { icon: string }) {
  return <Image src={`/assets/home/footer/${icon}.svg`} width={20} height={20} alt="" />;
}

export function SiteFooter() {
  return (
    <Box component="footer" sx={{ flexShrink: 0 }}>
      <Image
        src="/assets/home/footer/divider.svg"
        alt=""
        width={1512}
        height={40}
        style={{ display: "block", width: "100%", height: "auto", marginBottom: -1 }}
      />
      <Box sx={{ bgcolor: "surface.inverse", color: "common.white" }}>
        <Box
          sx={{
            ...shellContent,
            display: "grid",
            gap: { xs: 7, md: 10 },
            pt: { xs: 6, md: 5 },
            pb: { xs: 8, md: 10 },
          }}
        >
          <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 7 }}>
            <Box sx={{ display: "grid", alignContent: "start", gap: 3 }}>
              <Box component="a" href="/#top" sx={{ ...textLink, justifySelf: "start" }}>
                <Image
                  src="/assets/home/brand/footer-logo.svg"
                  alt="شرکت بازرگانی اصولی شجاعی"
                  width={151}
                  height={40}
                />
              </Box>
              <Typography component="h2" sx={{ mt: 1, fontWeight: 600, fontSize: "1.25rem" }}>
                شرکت بازرگانی اصولی شجاعی
              </Typography>
              <Typography sx={{ color: muted, fontSize: "0.875rem" }}>
                واردات و صادرات کالا، ترخیص مستقل، گمرکات سرزمین اصلی و مناطق آزاد، مسیر ترکیبی خدمات
              </Typography>
            </Box>

            <Box sx={{ width: "100%", maxWidth: 360, pt: { md: 5 } }}>
              <Typography component="h2" sx={{ fontWeight: 600, fontSize: "1.125rem" }}>
                عضویت در خبرنامه
              </Typography>
              <Box aria-hidden sx={{ width: 24, height: 4, borderRadius: 1, bgcolor: "#FBB015", mt: 2, mb: 5 }} />
              <Box sx={{ display: "flex", gap: 2 }}>
                <Box
                  sx={{
                    flex: 1,
                    minWidth: 0,
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    px: 4,
                    minHeight: 48,
                    borderRadius: "8px",
                    bgcolor: "surface.inverseRaised",
                    border: "1px solid #526077",
                  }}
                >
                  <FooterIcon icon="email" />
                  <Box
                    component="input"
                    type="email"
                    disabled
                    aria-label="ایمیل خود را وارد کنید"
                    placeholder="ایمیل خود را وارد کنید"
                    sx={{
                      width: "100%",
                      minWidth: 0,
                      fontSize: "0.875rem",
                      "&::placeholder": { color: muted, opacity: 1 },
                    }}
                  />
                </Box>
                <IconButton
                  disabled
                  aria-label="عضویت در خبرنامه"
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: "10px",
                    "&.Mui-disabled": { bgcolor: "primary.main" },
                  }}
                >
                  <FooterIcon icon="send" />
                </IconButton>
              </Box>
            </Box>
          </Box>

          <Box id="services" component="nav" aria-label="منوی پانوشت" sx={{ scrollMarginTop: 112, bgcolor: "surface.inverseRaised", borderRadius: "12px", px: 7, py: 4 }}>
            <Box
              component="ul"
              sx={{ display: "flex", flexWrap: "wrap", gap: { xs: 3, md: 6 }, listStyle: "none", fontSize: "0.875rem", color: muted }}
            >
              <li><Box component="a" href="/#top" aria-current="page" sx={{ ...textLink, color: "common.white" }}>‹ صفحه اصلی</Box></li>
              {services.map((label) => <li key={label}>{label}</li>)}
            </Box>
          </Box>

          <Box
            id="contact"
            component="address"
            sx={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 5,
              fontStyle: "normal",
              scrollMarginTop: 112,
            }}
          >
            <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "center", columnGap: { xs: 4, md: 8 }, rowGap: 3 }}>
              {contacts.map(({ icon, label, text, href, dir }) => (
                <Box key={icon} sx={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 2, fontSize: "0.875rem" }}>
                  <Box component="span" sx={{ color: muted, fontSize: "0.75rem" }}>{label}</Box>
                  {href ? <Box component="a" href={href} dir={dir} sx={textLink}>{text}</Box> : <span>{text}</span>}
                  <FooterIcon icon={icon} />
                </Box>
              ))}
            </Box>
            <Box sx={{ display: "flex", gap: 2 }}>
              {socialLinks.map(({ icon, label }) => (
                <IconButton
                  key={icon}
                  disabled
                  aria-label={label}
                  sx={{ width: 40, height: 40, borderRadius: "8px", border: "1px solid #526077" }}
                >
                  <FooterIcon icon={icon} />
                </IconButton>
              ))}
            </Box>
          </Box>

          <Image
            src="/assets/home/footer/wordmark.svg"
            width={1280}
            height={78}
            alt=""
            style={{ display: "block", width: "100%", height: "auto" }}
          />

          <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 3, fontSize: "0.875rem", color: muted }}>
            <Box sx={{ color: "#FBB015", display: "flex", alignItems: "center", gap: 3 }}>
              <Box aria-hidden sx={{ width: 24, height: 3, borderRadius: 1, bgcolor: "currentColor" }} />
              همراه شما در مسیر تجارت جهانی
            </Box>
            <span>© ۲۰۲۶ - تمامی حقوق برای شرکت بازرگانی اصولی شجاعی محفوظ است.</span>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
