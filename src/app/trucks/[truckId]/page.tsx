import TruckDetailPage from "@/components/truck-detail-page"

type PageProps = {
    params: Promise<{
        truckId: string;
    }>;
};

export default async function TruckDetail({ params }: PageProps) {
    const { truckId } = await params;
  return <TruckDetailPage truckId={truckId} />
}

