import {
    Plus,
    Search,
    FileText,
    Eye,
    MessageCircle,
    Pencil,
    Trash2,
    Calendar,
} from "lucide-react";

export default function Posts() {
    const posts = [
        {
            id: 1,
            title: "Como melhorar a performance do seu PC",
            category: "Tecnologia",
            views: 1240,
            comments: 18,
            status: "Publicado",
            date: "02 Jun 2026",
        },
        {
            id: 2,
            title: "5 dicas de segurança digital",
            category: "Segurança",
            views: 842,
            comments: 9,
            status: "Publicado",
            date: "30 Mai 2026",
        },
        {
            id: 3,
            title: "Melhores SSDs para 2026",
            category: "Hardware",
            views: 421,
            comments: 4,
            status: "Rascunho",
            date: "28 Mai 2026",
        },
    ];

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-white">
                        Posts
                    </h1>

                    <p className="text-zinc-400 mt-2">
                        Gerencie as postagens do blog
                    </p>
                </div>

                <button className="bg-cyan-500 hover:bg-cyan-400 transition px-6 py-3 rounded-2xl text-black font-semibold flex items-center justify-center gap-2 w-full lg:w-fit">
                    <Plus size={20} />

                    Nova Postagem
                </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div className="bg-white/3 border border-white/10 rounded-3xl p-5">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-zinc-400 text-sm">
                                Total de Posts
                            </p>

                            <h2 className="text-3xl font-bold text-white mt-3">
                                48
                            </h2>
                        </div>

                        <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                            <FileText size={24} />
                        </div>
                    </div>
                </div>

                <div className="bg-white/3 border border-white/10 rounded-3xl p-5">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-zinc-400 text-sm">
                                Visualizações
                            </p>

                            <h2 className="text-3xl font-bold text-white mt-3">
                                18.2k
                            </h2>
                        </div>

                        <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                            <Eye size={24} />
                        </div>
                    </div>
                </div>

                <div className="bg-white/3 border border-white/10 rounded-3xl p-5">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-zinc-400 text-sm">
                                Comentários
                            </p>

                            <h2 className="text-3xl font-bold text-white mt-3">
                                324
                            </h2>
                        </div>

                        <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                            <MessageCircle size={24} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="bg-white/3 border border-white/10 rounded-3xl p-6 overflow-hidden">
                {/* Top */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
                    <div>
                        <h2 className="text-white text-xl font-bold">
                            Lista de Postagens
                        </h2>

                        <p className="text-zinc-400 text-sm mt-1">
                            Todas as postagens cadastradas
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

                {/* Posts */}
                <div className="space-y-4">
                    {posts.map((post) => (
                        <div
                            key={post.id}
                            className="border border-white/10 bg-black/20 rounded-3xl p-5 flex flex-col xl:flex-row xl:items-center xl:justify-between gap-5"
                        >
                            {/* Left */}
                            <div className="flex items-start gap-4">
                                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0">
                                    <FileText size={26} />
                                </div>

                                <div>
                                    <div className="flex flex-wrap items-center gap-3 mb-2">
                                        <span
                                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                                                post.status ===
                                                "Publicado"
                                                    ? "bg-green-500/10 text-green-400"
                                                    : "bg-yellow-500/10 text-yellow-400"
                                            }`}
                                        >
                                            {post.status}
                                        </span>

                                        <span className="text-zinc-500 text-sm">
                                            {
                                                post.category
                                            }
                                        </span>
                                    </div>

                                    <h3 className="text-white text-lg font-semibold">
                                        {post.title}
                                    </h3>

                                    <div className="flex flex-wrap items-center gap-5 mt-4 text-zinc-400 text-sm">
                                        <div className="flex items-center gap-2">
                                            <Eye
                                                size={16}
                                            />

                                            {
                                                post.views
                                            }{" "}
                                            views
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <MessageCircle
                                                size={16}
                                            />

                                            {
                                                post.comments
                                            }{" "}
                                            comentários
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <Calendar
                                                size={16}
                                            />

                                            {
                                                post.date
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex items-center gap-3">
                                <button className="px-5 h-11 rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition">
                                    Visualizar
                                </button>

                                <button className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition">
                                    <Pencil
                                        size={18}
                                    />
                                </button>

                                <button className="w-11 h-11 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 hover:bg-red-500/20 transition">
                                    <Trash2
                                        size={18}
                                    />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}