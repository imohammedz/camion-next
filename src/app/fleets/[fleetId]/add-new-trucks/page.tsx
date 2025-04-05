import AddTrucksPage from "@/components/add-trucks-page";

type PageProps = {
  params: Promise<{
    fleetId: string;
  }>;
};

export default async function AddTrucks({ params }: PageProps) {
  const { fleetId } = await params;
  return <AddTrucksPage fleetId={fleetId} />;
}
