import {
    Plus,
    Search,
    Package,
    Pencil,
    Trash2,
    Boxes,
} from "lucide-react";

export default function Produtos() {
    const products = [
        {
            id: 1,
            name: "Notebook Gamer",
            price: "R$ 5.499",
            stock: 12,
            status: "Em estoque",
        },
        {
            id: 2,
            name: "Mouse RGB",
            price: "R$ 249",
            stock: 38,
            status: "Em estoque",
        },
        {
            id: 3,
            name: "Monitor Ultrawide",
            price: "R$ 1.899",
            stock: 4,
            status: "Baixo estoque",
        },
    ];

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-white">
                        Produtos
                    </h1>

                    <p className="text-zinc-400 mt-2">
                        Gerencie os produtos da sua plataforma
                    </p>
                </div>

                <button className="bg-cyan-500 hover:bg-cyan-400 transition px-6 py-3 rounded-2xl text-black font-semibold flex items-center justify-center gap-2 w-full lg:w-fit">
                    <Plus size={20} />

                    Novo Produto
                </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div className="bg-white/3 border border-white/10 rounded-3xl p-5">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-zinc-400 text-sm">
                                Total de Produtos
                            </p>

                            <h2 className="text-3xl font-bold text-white mt-3">
                                124
                            </h2>
                        </div>

                        <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                            <Package size={24} />
                        </div>
                    </div>
                </div>

                <div className="bg-white/3 border border-white/10 rounded-3xl p-5">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-zinc-400 text-sm">
                                Estoque Total
                            </p>

                            <h2 className="text-3xl font-bold text-white mt-3">
                                2.430
                            </h2>
                        </div>

                        <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                            <Boxes size={24} />
                        </div>
                    </div>
                </div>

                <div className="bg-white/3 border border-white/10 rounded-3xl p-5">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-zinc-400 text-sm">
                                Produtos Baixos
                            </p>

                            <h2 className="text-3xl font-bold text-white mt-3">
                                8
                            </h2>
                        </div>

                        <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-400">
                            <Package size={24} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
                {/* Form */}
                <div className="bg-white/3 border border-white/10 rounded-3xl p-6">
                    <h2 className="text-white text-xl font-bold mb-6">
                        Cadastrar Produto
                    </h2>

                    <div className="space-y-5">
                        <div>
                            <label className="text-zinc-400 text-sm mb-2 block">
                                Nome do Produto
                            </label>

                            <input
                                type="text"
                                placeholder="Digite o nome"
                                className="w-full h-12 bg-white/5 border border-white/10 rounded-2xl px-4 text-white outline-none focus:border-cyan-400"
                            />
                        </div>

                        <div>
                            <label className="text-zinc-400 text-sm mb-2 block">
                                Valor
                            </label>

                            <input
                                type="text"
                                placeholder="R$ 0,00"
                                className="w-full h-12 bg-white/5 border border-white/10 rounded-2xl px-4 text-white outline-none focus:border-cyan-400"
                            />
                        </div>

                        <div>
                            <label className="text-zinc-400 text-sm mb-2 block">
                                Estoque
                            </label>

                            <input
                                type="number"
                                placeholder="Quantidade"
                                className="w-full h-12 bg-white/5 border border-white/10 rounded-2xl px-4 text-white outline-none focus:border-cyan-400"
                            />
                        </div>

                        <button className="w-full bg-cyan-500 hover:bg-cyan-400 transition py-4 rounded-2xl text-black font-semibold">
                            Salvar Produto
                        </button>
                    </div>
                </div>

                {/* Table */}
                <div className="xl:col-span-2 bg-white/3 border border-white/10 rounded-3xl p-6 overflow-hidden">
                    {/* Top */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
                        <div>
                            <h2 className="text-white text-xl font-bold">
                                Lista de Produtos
                            </h2>

                            <p className="text-zinc-400 text-sm mt-1">
                                Todos os produtos cadastrados
                            </p>
                        </div>

                        {/* Search */}
                        <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 h-12 w-full lg:w-72">
                            <Search
                                size={18}
                                className="text-zinc-500"
                            />

                            <input
                                type="text"
                                placeholder="Pesquisar..."
                                className="bg-transparent outline-none border-none text-white placeholder:text-zinc-500 w-full"
                            />
                        </div>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-175">
                            <thead>
                                <tr className="border-b border-white/10 text-left">
                                    <th className="pb-4 text-zinc-400 font-medium">
                                        Produto
                                    </th>

                                    <th className="pb-4 text-zinc-400 font-medium">
                                        Valor
                                    </th>

                                    <th className="pb-4 text-zinc-400 font-medium">
                                        Estoque
                                    </th>

                                    <th className="pb-4 text-zinc-400 font-medium">
                                        Status
                                    </th>

                                    <th className="pb-4 text-zinc-400 font-medium text-right">
                                        Ações
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {products.map((product) => (
                                    <tr
                                        key={product.id}
                                        className="border-b border-white/5"
                                    >
                                        <td className="py-5">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                                                    <Package
                                                        size={22}
                                                    />
                                                </div>

                                                <div>
                                                    <h3 className="text-white font-medium">
                                                        {
                                                            product.name
                                                        }
                                                    </h3>

                                                    <p className="text-zinc-500 text-sm">
                                                        ID #
                                                        {
                                                            product.id
                                                        }
                                                    </p>
                                                </div>
                                            </div>
                                        </td>

                                        <td className="py-5 text-white font-medium">
                                            {product.price}
                                        </td>

                                        <td className="py-5 text-white">
                                            {product.stock}
                                        </td>

                                        <td className="py-5">
                                            <span
                                                className={`px-3 py-1 rounded-full text-sm font-medium ${
                                                    product.stock <=
                                                    5
                                                        ? "bg-red-500/10 text-red-400"
                                                        : "bg-green-500/10 text-green-400"
                                                }`}
                                            >
                                                {product.status}
                                            </span>
                                        </td>

                                        <td className="py-5">
                                            <div className="flex items-center justify-end gap-2">
                                                <button className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition">
                                                    <Pencil
                                                        size={18}
                                                    />
                                                </button>

                                                <button className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 hover:bg-red-500/20 transition">
                                                    <Trash2
                                                        size={18}
                                                    />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}