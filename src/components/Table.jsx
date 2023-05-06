import TableRow from "./TableRow"

function Table({ donations, status }){

    const toDisplay = Object.keys(donations).filter(key => donations[key].status == status)

    return(
        <>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-[80%] mx-auto mb-6">
            <table className="w-full text-m text-left text-gray-900">
                <thead className="text-l text-gray-700 uppercase bg-gray-50/80">
                    <tr>
                        <th scope="col" className="px-6 py-3 w-[20%]">
                            Tip
                        </th>
                        <th scope="col" className="pl-6 pr-2 py-3 w-[20%]">
                            Vrijednost
                        </th>
                        <th scope="col" className="pl-6 pr-8 py-3 w-[50%]">
                            Opis
                        </th>
                        <th scope="col" className="px-6 py-3">
                            
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {toDisplay.map(el => (
                        <TableRow donation={donations[el]} status={status} />
                    ))}
                </tbody>
            </table>
        </div>
        </>
    )
}

export default Table