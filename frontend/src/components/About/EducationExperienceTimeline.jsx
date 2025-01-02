import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function EducationExperienceTimeline({ title, about }) {
  const education = about.education;
  const experience = about.experience;
  return (
    <Box>
      <Timeline
        sx={{
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0.2,
          },
        }}
      >
        {(title === "Education" ? education : experience).map((item, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent color="text.secondary">
              <Typography>{item.period}</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              {index <
                (title === "Education" ? education : experience).length - 1 && (
                <TimelineConnector />
              )}
            </TimelineSeparator>
            <TimelineContent sx={{ mb: 4 }}>
              <Typography sx={{ fontWeight: "bold", fontSize: "1.3rem" }}>
                {title === "Education" ? item.degree : item.position}
              </Typography>
              <Typography color="text.secondary" sx={{ my: 1 }}>
                {title === "Education" ? item.university : item.company}
              </Typography>
              <Typography>{item.description}</Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
}
