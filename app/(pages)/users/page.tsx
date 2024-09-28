import Loader from "@/components/loaders/Loader"
import Table from "@/components/table"
import Title from "@/components/title"
import { Suspense } from "react"
import Modal from "./modal"

type Props = {
    searchParams: Record<string, string> | undefined | null
}

const Users = async ({ searchParams }: Props) => {

    return (
        <div>
            <Title>Kullanıcılar</Title>

            <Suspense fallback={<Loader designs="mt-20" />}>
                <Table />
            </Suspense>

            {/** eğer urlde de show parametresi varsa ekrana modal bas */}
            {searchParams?.show && <Modal id={searchParams?.show} />}
        </div>
    )
}

export default Users