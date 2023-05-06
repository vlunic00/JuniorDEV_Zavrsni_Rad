
function TableRow({ donation, status }){
    return(
        <>
        <tr class="bg-gray-50/70 border-b hover:bg-gray-50/80">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {donation.item}
                </th>
                <td class="px-6 py-4">
                    {donation.amount}€
                </td>
                <td class="px-6 py-4">
                    {donation.description}
                </td>
                <td class="px-6 py-4 text-right">
                {status == "wanted" && 
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none">Doniraj</button>
                }
            </td>
            </tr>
        </>
    )
}

export default TableRow