import FleetDetailDashBoard from "@/components/fleet-details-page"

type PageProps = {
  params: Promise<{
    fleetId: string;
  }>;
};
export default async function FleetDetail({ params }: PageProps) {
  const { fleetId } = await params;
  return <FleetDetailDashBoard fleetId={fleetId} />
}

