import { getOrders } from "@/utils/api"
import Graph from "./Graph"
import { wait } from "@/utils/wait"

const SalesGraph = async () => {

    const data = await getOrders()
    await wait(2000)

    return (
        <div className="mt-10 bg-white rounded-lg p-5 w-[800px] h-[600px] mx-auto">
            <h2 className="font-semibold text-lg">Satış Detayları</h2>

            <Graph data={data} />
        </div>
    )
}

export default SalesGraph