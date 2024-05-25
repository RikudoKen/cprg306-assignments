

export default function Item({name, quantity, category}){


    return (
        <li className="flex-col justify-left items-center p-4 bg-blue-400 border rounded shadow mb-2">
            <p className="font-bold text-gray-700">{name}</p>
            <p className="text-gray-700">Buy {quantity} in {category}</p>
        </li>

    );
}