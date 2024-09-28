"use client"

import { GoSearch } from "react-icons/go"

const Input = () => {
    return (
        <form className="flex gap-2 items-center text-gray-500">
            <button>
                <GoSearch />
            </button>

            <input className="p-1 outline-none" placeholder="ara" type="text" />
        </form>
    )
}

export default Input