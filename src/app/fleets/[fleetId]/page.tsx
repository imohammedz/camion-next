
import FleetDetailDashboard from "@/components/fleetDetailsPage";

type PageProps = {
  params: Promise<{
    fleetId: string;
  }>;
};
export default async function FleetDetail({ params }: PageProps) {
  const { fleetId } = await params;
  return <FleetDetailDashboard fleetId={fleetId} />
}

