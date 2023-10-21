import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const MyCart = () => {

    const carts = useLoaderData()
    console.log('carts', carts);

    const [remaining, setRemaining] = useState(carts);



    const handleDelete = (id) => {
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://beauty-world-server.vercel.app/delete/${id}`, {
                    method: "DELETE"
                })
                    .then((res) => {
                        console.log(res)
                        const remained = remaining.filter(remain => remain._id != id)
                        setRemaining(remained)

                        Swal("Successfully Added!", "Successfully added to the cart", "success")
                    }
                    )
                    .catch(error => console.log(error))

            }
        })


    }

    return (
        <div className="max-w-screen-lg my-10 mx-auto">

            <div className="relative overflow-x-auto shadow-md ">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Product name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Brand
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Type
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <span className="sr-only">Delete</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            remaining?.map((cart, i) => {

                                const { _id, name, brand, type, price } = cart
                                return <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {name}
                                    </th>
                                    <td className="px-6 py-4">
                                        {brand}
                                    </td>
                                    <td className="px-6 py-4">
                                        {type}
                                    </td>
                                    <td className="px-6 py-4">
                                        ${price}
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button onClick={() => handleDelete(_id)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyCart;