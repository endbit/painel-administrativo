import {
    DollarSign,
    ShoppingCart,
    Users,
    FileText,
    TrendingUp,
    Activity,
} from "lucide-react";

export default function Dashboard() {
    const stats = [
        {
            title: "Vendas",
            value: "R$ 12.450",
            icon: DollarSign,
            growth: "+12%",
        },
        {
            title: "Pedidos",
            value: "328",
            icon: ShoppingCart,
            growth: "+8%",
        },
        {
            title: "Clientes",
            value: "1.248",
            icon: Users,
            growth: "+18%",
        },
        {
            title: "Posts",
            value: "42",
            icon: FileText,
            growth: "+5%",
        },
    ];

    return (
        <div className="space-y-8">
            {/* Welcome */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-white">
                        Bem-vindo de volta 👋
                    </h1>

                    <p className="text-zinc-400 mt-2">
                        Aqui está um resumo geral da sua plataforma.
                    </p>
                </div>

                <button className="bg-cyan-500 hover:bg-cyan-400 transition px-6 py-3 rounded-2xl text-black font-semibold w-full lg:w-fit">
                    Gerar Relatório
                </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
                {stats.map((item, index) => {
                    const Icon = item.icon;

                    return (
                        <div
                            key={index}
                            className="bg-white/3 border border-white/10 rounded-3xl p-5 backdrop-blur-xl"
                        >
                            <div className="flex items-start justify-between">
                                <div>
                                    <p className="text-zinc-400 text-sm">
                                        {item.title}
                                    </p>

                                    <h2 className="text-3xl font-bold text-white mt-3">
                                        {item.value}
                                    </h2>
                                </div>

                                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                                    <Icon size={24} />
                                </div>
                            </div>

                            <div className="flex items-center gap-2 mt-6">
                                <TrendingUp
                                    size={16}
                                    className="text-green-400"
                                />

                                <span className="text-green-400 text-sm font-medium">
                                    {item.growth}
                                </span>

                                <span className="text-zinc-500 text-sm">
                                    este mês
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
                {/* Activity */}
                <div className="xl:col-span-2 bg-white/3 border border-white/10 rounded-3xl p-6">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h2 className="text-white text-xl font-bold">
                                Atividades Recentes
                            </h2>

                            <p className="text-zinc-400 text-sm mt-1">
                                Últimas movimentações da plataforma
                            </p>
                        </div>

                        <Activity className="text-cyan-400" />
                    </div>

                    <div className="space-y-5">
                        {[
                            "Novo pedido realizado",
                            "Novo usuário cadastrado",
                            "Post publicado no blog",
                            "Produto atualizado",
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between border border-white/5 bg-white/2 rounded-2xl px-5 py-4"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-3 h-3 rounded-full bg-cyan-400" />

                                    <p className="text-white">
                                        {item}
                                    </p>
                                </div>

                                <span className="text-zinc-500 text-sm">
                                    Agora
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white/3 border border-white/10 rounded-3xl p-6">
                    <h2 className="text-white text-xl font-bold mb-6">
                        Ações Rápidas
                    </h2>

                    <div className="space-y-4">
                        <button className="w-full bg-cyan-500 hover:bg-cyan-400 transition text-black font-semibold rounded-2xl py-4">
                            + Novo Produto
                        </button>

                        <button className="w-full bg-white/5 hover:bg-white/10 transition text-white font-medium rounded-2xl py-4 border border-white/10">
                            + Nova Postagem
                        </button>

                        <button className="w-full bg-white/5 hover:bg-white/10 transition text-white font-medium rounded-2xl py-4 border border-white/10">
                            Gerenciar Site
                        </button>
                    </div>

                    {/* Status */}
                    <div className="mt-8 border border-white/10 rounded-2xl p-5 bg-black/20">
                        <div className="flex items-center justify-between">
                            <span className="text-zinc-400">
                                Status do Sistema
                            </span>

                            <span className="text-green-400 font-semibold">
                                Online
                            </span>
                        </div>

                        <div className="w-full h-2 bg-white/5 rounded-full mt-4 overflow-hidden">
                            <div className="w-[82%] h-full bg-cyan-400 rounded-full" />
                        </div>

                        <p className="text-zinc-500 text-sm mt-3">
                            Performance excelente
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}