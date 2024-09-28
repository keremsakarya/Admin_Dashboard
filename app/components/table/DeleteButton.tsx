"use client"

import { deleteUser } from "@/utils/api"
import { useRouter } from "next/navigation"
import { FaTrash } from "react-icons/fa"
import { toast } from "react-toastify"

const DeleteButton = ({ id }: { id: string }) => {

    const router = useRouter()

    //* kullanıcı hesabını sil
    const handleDelete = () => {
        deleteUser(id)
            .then(() => {
                router.refresh()

                toast.success("Kullanıcı hesabı kaldırıldı")
            })
            .catch(() => {
                toast.error("Kullanıcı hesabı kaldırılamadı")
            })
    }

    return (
        <button
            onClick={handleDelete}
            className="border shadow p-2 rounded-md hover:shadow-lg hover:bg-gray-200 transition"
        >
            <FaTrash className="text-red-500" />
        </button>
    )
}

export default DeleteButton