"use client"

import { inputs } from "@/constants"
import Input from "./Input"
import { FormEvent } from "react"
import { createProduct, editProduct } from "@/utils/api"
import { Product } from "@/types"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"
import Link from "next/link"

type Props = {
    editItem: Product | undefined
}

const Form = ({ editItem }: Props) => {

    const router = useRouter()

    //* form gönderilince
    //* edit item yoksa yeni ürün oluştur
    //* edit item varsa ürünü düzenle
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        //* formdata örneği al
        const formData = new FormData(e.target as HTMLFormElement)
        const productData = Object.fromEntries(formData.entries())

        // *edit item yoksa yeni ürün oluştur
        if (!editItem) {
            //* resim ekle (rastgele id)
            const id = Math.round(Math.random() * 100)
            productData.image_url = `https://picsum.photos/seed/${id}/500/500`

            //* varsayılan rating ve yorum sayısını belirle
            // @ts-ignore
            productData.rating = 0
            // @ts-ignore
            productData.reviews_count = 0

            //* API'a ekleme isteği at
            createProduct(productData as unknown as Product).then(() => {
                router.push("/products")
                router.refresh()
                toast.success("Ürün başarıyla oluştu")
            })
        } else {
            //* edit item varsa ürünü düzenle
            //* API isteğinde gönderilecek nesneyi hazırla
            let updatedItem = { ...editItem, ...productData }

            editProduct(updatedItem).then(() => {
                router.push("/products")
                router.refresh()
                toast.info("Ürün başarıyla düzenlendi")
            })
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 mt-5">
            {inputs.map((i) => (
                // @ts-ignore
                <Input item={i} value={editItem ? editItem[i.name] : ""} />
            ))}

            <div className="flex justify-end gap-5">
                <Link
                    href="."
                    type="button"
                    className="bg-gray-300 hover:bg-gray-400 py-2 px-5 rounded-lg"
                >
                    Geri
                </Link>

                <button
                    type="submit"
                    className="bg-blue-300 hover:bg-blue-400 py-2 px-5 rounded-lg"
                >
                    {editItem ? "Kaydet" : "Oluştur"}
                </button>
            </div>
        </form>
    )
}

export default Form