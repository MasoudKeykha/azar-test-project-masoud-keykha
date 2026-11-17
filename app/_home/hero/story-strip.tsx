"use client";

import { useState } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonBase from "@mui/material/ButtonBase";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { stories } from "./content";

export function StoryStrip() {
  const [selected, setSelected] = useState<(typeof stories)[number] | null>(null);
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <>
      <Box aria-label="داستان‌ها" role="region" sx={{ overflowX: "auto", px: 1, pb: 1 }}>
        <Box component="ul" sx={{ display: "flex", listStyle: "none", width: "max-content", mx: "auto", gap: 3 }}>
          {stories.map((story) => (
            <li key={story.label}>
              <ButtonBase
                onClick={() => {
                  setSelected(story);
                  setOpen(true);
                }}
                aria-haspopup="dialog"
                sx={{
                  display: "grid",
                  gap: 1,
                  width: 80,
                  fontSize: "0.75rem",
                  lineHeight: 1.5,
                  whiteSpace: "nowrap",
                  color: "text.primary",
                  borderRadius: "6px",
                  "&.Mui-focusVisible": { outline: "2px solid", outlineColor: "primary.main" },
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: 80,
                    height: 88,
                    overflow: "hidden",
                    clipPath:
                      "path('M 0 6 Q 0 0 6 .52 L 74 6.45 Q 80 6.97 80 13 V 82 Q 80 88 74 87.48 L 6 81.55 Q 0 81.03 0 75 Z')",
                  }}
                >
                  <Image src={story.image} alt="" fill sizes="80px" style={{ objectFit: "cover" }} />
                </Box>
                <span>{story.label}</span>
              </ButtonBase>
            </li>
          ))}
        </Box>
      </Box>

      <Dialog
        open={open}
        onClose={close}
        aria-labelledby="story-title"
        fullWidth
        maxWidth="sm"
      >
        {selected && (
          <>
            <DialogTitle id="story-title">{selected.label}</DialogTitle>
            <DialogContent>
              <Box sx={{ position: "relative", aspectRatio: "4 / 3" }}>
                <Image
                  src={selected.image}
                  alt={selected.label}
                  fill
                  sizes="(max-width: 640px) 85vw, 550px"
                  style={{ objectFit: "contain" }}
                />
              </Box>
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={close} sx={{ textTransform: "none" }}>بستن</Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </>
  );
}
