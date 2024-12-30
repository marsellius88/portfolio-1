import PageHeading from "../components/PageHeading";
import ProjectsList from "../components/Projects/ProjectsList";

export default function Projects({ projects }) {
  return (
    <>
      <PageHeading title="Projects" />
      <ProjectsList projects={projects} />
    </>
  );
}
