import { getUserById } from "@/utils/api"
import Link from "next/link"
import { MdClose } from "react-icons/md"

const Modal = async ({ id }: { id: string }) => {

    const data = await getUserById(id)

    //* ekrana basılacak olan nesnenin alanlarından bir dizi oluşturduk
    const fields = [
        {
            label: "Email",
            value: data.email,
        },
        {
            label: "Ülke",
            value: data.address.country,
        },
        {
            label: "Şehir",
            value: data.address.city,
        },
        {
            label: "Sokak",
            value: data.address.street,
        },
        {
            label: "Posta Kodu",
            value: data.address.postal_code,
        },
        {
            label: "Telefon No",
            value: data.phone,
        },
        {
            label: "Sipariş Sayısı",
            value: data.orders.length,
        },
    ]

    return (
        <div className="fixed bg-black inset-0 z-[99] bg-opacity-50 grid place-items-center">
            <div className="bg-white rounded-lg shadow py-8 px-14 pb-16">
                <div className="flex justify-end">
                    <Link href="/users" className="shadow p-2 rounded-lg hover:shadow-lg hover:bg-gray-200 transition">
                        <MdClose />
                    </Link>
                </div>

                <div className="flex flex-col gap-5">
                    <h1 className="text-4xl font-semibold text-center my-5">
                        {data.name}
                    </h1>

                    {fields.map((field, key) => (
                        <div className="flex justify-between gap-16" key={key}>
                            <span>{field.label}</span>
                            <span className="font-semibold">{field.value}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Modal