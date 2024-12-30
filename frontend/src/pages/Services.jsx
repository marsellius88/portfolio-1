import PageHeading from "../components/PageHeading";
import ServicesList from "../components/Services/ServicesList";

export default function Services({ services }) {
  return (
    <>
      <PageHeading title="Services" />
      <ServicesList services={services} />
    </>
  );
}
