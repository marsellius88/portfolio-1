// import Typography from "@mui/material/Typography";
// import Paper from "@mui/material/Paper";
// import LinearProgressWithLabel from "../LinearProgressWithLabel";

// export default function SkillPaper({ skill }) {
//   return (
//     <Paper variant="outlined" sx={{ p: 3 }}>
//       <Typography sx={{ pb: 1 }}>{skill.name}</Typography>
//       <LinearProgressWithLabel value={skill.percentage} />
//     </Paper>
//   );
// }

import React, { useState, useEffect, useRef } from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import LinearProgressWithLabel from "../LinearProgressWithLabel";

export default function SkillPaper({ skill }) {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const paperRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (paperRef.current) {
      observer.observe(paperRef.current);
    }

    return () => {
      if (paperRef.current) {
        observer.unobserve(paperRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (visible) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          const nextValue = prev + 5;
          if (nextValue >= skill.percentage) {
            clearInterval(interval);
            return skill.percentage;
          }
          return nextValue;
        });
      }, 50);
    }
  }, [visible, skill.percentage]);

  return (
    <Paper ref={paperRef} variant="outlined" sx={{ p: 3 }}>
      <Typography sx={{ pb: 1 }}>{skill.name}</Typography>
      <LinearProgressWithLabel value={progress} />
    </Paper>
  );
}
