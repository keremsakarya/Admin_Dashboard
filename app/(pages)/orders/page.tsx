import Loader from "@/components/loaders/Loader"
import TableContainer from "@/components/table/TableContainer"
import Title from "@/components/title"
import { getOrders } from "@/utils/api"
import { Suspense } from "react"

const Orders = () => {
    return (
        <div>
            <Title>Siparişler</Title>

            <Suspense fallback={<Loader />}>
                <List />
            </Suspense>
        </div>
    )
}

const List = async () => {
    const data = await getOrders()

    const colors = {
        Shipped: "bg-blue-600",
        Delivered: "bg-green-600",
        Processing: "bg-yellow-600",
    }

    return (
        <TableContainer>
            <thead className="border-b shadow">
                <tr>
                    <th className="py-3">Sipariş ID</th>
                    <th>Toplam Fiyat</th>
                    <th>Ürün Sayısı</th>
                    <th>Sipariş Tarihi</th>
                    <th>Durum</th>
                </tr>
            </thead>

            <tbody>
                {data.map((order, key) => (
                    <tr key={key}>
                        <td>{order.order_id}</td>

                        <td className="text-green-600">${order.total_price}</td>

                        <td>{order.items.reduce((a, b) => a + b.quantity, 0)}</td>

                        <td className="whitespace-nowrap">
                            {new Date(order.order_date).toLocaleDateString("tr", {
                                day: "2-digit",
                                month: "long",
                                year: "2-digit",
                            })}
                        </td>

                        <td>
                            <span
                                className={`${colors[order.status]} py-1 px-2 text-white rounded-lg shadow`}
                            >
                                {order.status}
                            </span>
                        </td>
                    </tr>
                ))}
            </tbody>
        </TableContainer>
    )
}

export default Orders