import EditTruckPage from "@/components/edit-truck-page"

type PageProps = {
    params: Promise<{
        truckId: string;
    }>;
};

export default async function EditTruck({ params }: PageProps) {
    const { truckId } = await params;
    return <EditTruckPage truckId={truckId} />
}

