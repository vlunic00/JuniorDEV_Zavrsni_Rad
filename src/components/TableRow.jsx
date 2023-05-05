
function TableRow({ donation }){
    return(
        <>
        <tr class="bg-gray-50/60 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50/80 dark:hover:bg-gray-600">
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
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
        </>
    )
}

export default TableRow