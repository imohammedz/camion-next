import UpdateFleetPage from "@/components/update-fleet-page"

type PageProps = {
    params: Promise<{
      fleetId: string;
    }>;
  };

export default async function EditFleet({ params }:  PageProps ) {
    const { fleetId } = await params;
  return <UpdateFleetPage fleetId={fleetId} />
}

