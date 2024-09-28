
const TableContainer = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
    return (
        <div className="relative w-full overflow-x-auto">
            <table
                border={4}
                className="border shadow w-full bg-white rounded-md mt-5 z-0"
            >
                {children}
            </table>
        </div>
    )
}

export default TableContainer