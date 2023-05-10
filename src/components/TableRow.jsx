import { useContext } from "react"
import AdminContext from "./context"

function TableRow({ donation, status, change, deleteDonation }){

    const role = useContext(AdminContext)

    return(
        <>
        <tr className="bg-gray-50/70 border-b hover:bg-gray-50/80">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {donation.item}
                </th>
                <td className="px-6 py-4">
                    {donation.amount}€
                </td>
                <td className="px-6 py-4">
                    {donation.description}
                </td>
                <td className="px-6 py-4 text-right">
                <div className="flex">
                {status == "wanted" && 
                <button type="button" onClick={() => change(donation.id, donation.item, donation.amount, donation.description, "done")} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none">{role == "user" ? "Doniraj" : "Donirano" }</button>
                }
                {status == "done" && role == "admin" && 
                <button type="button" onClick={() => change(donation.id, donation.item, donation.amount, donation.description, "wanted")} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none">Ponovi</button>
                }
                {(status == "wanted" || status == "done") && role == "admin" &&
                <button type="button" onClick={() => deleteDonation(donation.id)} className="text-white bg-red-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none">Izbriši</button>
                }
                {status == "offered" && role == "admin" && 
                <button type="button" onClick={() => change(donation.id, donation.item, donation.amount, donation.description, "done")} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none">Prihvati</button>
                }
                </div>
            </td>
            </tr>
        </>
    )
}

export default TableRow