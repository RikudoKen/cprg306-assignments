import ItemList from './item-list';


export default function Page(){


    return(
        <main className="p-8 bg-gray-200 min-h-screen">
        <h1 className="text-3xl font-bold mb-6 text-left">Shopping List</h1>
            <ItemList/>
        </main>

    );
}