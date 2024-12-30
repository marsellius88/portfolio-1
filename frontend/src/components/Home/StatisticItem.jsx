// import Box from "@mui/material/Box";
// import Stack from "@mui/material/Stack";
// import Typography from "@mui/material/Typography";
// import * as Icons from "@mui/icons-material";

// export default function StatisticItem({ statistic }) {
//   const IconComponent = Icons[statistic.icon] || Icons.HelpOutline;
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//       }}
//     >
//       <IconComponent sx={{ fontSize: 75, mr: 2, color: "text.primary" }} />
//       <Stack spacing={0.5}>
//         <Typography variant="h4" sx={{ fontWeight: "bold" }}>
//           {statistic.value}
//         </Typography>
//         <Typography variant="body2" sx={{ color: "text.secondary" }}>
//           {statistic.text}
//         </Typography>
//       </Stack>
//     </Box>
//   );
// }

import React, { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import * as Icons from "@mui/icons-material";

export default function StatisticItem({ statistic }) {
  const IconComponent = Icons[statistic.icon] || Icons.HelpOutline;
  const [visible, setVisible] = useState(false)
  const [currentValue, setCurrentValue] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (visible) {
      const increment = statistic.value / 50;
      const interval = setInterval(() => {
        setCurrentValue((prev) => {
          const nextValue = prev + increment;
          if (nextValue >= statistic.value) {
            clearInterval(interval);
            return statistic.value;
          }
          return nextValue;
        });
      }, 20);
    }
  }, [visible, statistic.value]);

  return (
    <Box
      ref={containerRef}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <IconComponent sx={{ fontSize: 75, mr: 2, color: "text.primary" }} />
      <Stack spacing={0.5}>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          {Math.floor(currentValue)}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {statistic.text}
        </Typography>
      </Stack>
    </Box>
  );
}
