import Loader from "@/components/loaders/Loader"
import Title from "@/components/title"
import { getProducts } from "@/utils/api"
import { Suspense } from "react"
import Card from "./Card"
import Link from "next/link"

const Products = async () => {
    return (
        <div>
            <div className="flex justify-between items-center">
                <Title>Ürünler</Title>

                <Link
                    href="/products/new"
                    className="bg-green-400 hover:bg-green-500 transition py-1 px-3 rounded-lg text-white"
                >
                    Ürün Ekle
                </Link>
            </div>
            <Suspense fallback={<Loader designs="my-20" />}>
                <List />
            </Suspense>
        </div>
    )
}

const List = async () => {
    const data = await getProducts()

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {data.map((product) => (
                <Card product={product} key={product.id} />
            ))}
        </div>
    )
}

export default Products