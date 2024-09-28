import { getUsers } from "@/utils/api"
import { wait } from "@/utils/wait"
import TableContainer from "./TableContainer"
import Link from "next/link"
import { FaEye } from "react-icons/fa"
import DeleteButton from "./DeleteButton"

const Table = async () => {

    const data = await getUsers()

    return (
        <TableContainer>
            <thead>
                <tr className="border-b shadow">
                    <th className="py-4">#</th>
                    <th>İsim</th>
                    <th>Eposta</th>
                    <th>Ülke</th>
                    <th>Şehir</th>
                    <th>Eylem</th>
                </tr>
            </thead>

            <tbody>
                {data.map((user, key) => (
                    <tr className="border-b" key={user.id}>
                        <td className="py-8">{key}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.address.country}</td>
                        <td>{user.address.city}</td>
                        <td className="py-8 flex justify-center gap-2">
                            <Link
                                href={`?show=${user.id}`}
                                className="border shadow p-2 rounded-md hover:shadow-lg hover:bg-gray-200 transition"
                            >
                                <FaEye />
                            </Link>
                            <DeleteButton id={user.id} />
                        </td>
                    </tr>
                ))}
            </tbody>
        </TableContainer>
    )
}

export default Table