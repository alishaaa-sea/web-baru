import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog";

export default function Gallery() {
    return (
        <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Documentation <span className="text-primary-light">Gallery</span></h2>
            <div className="grid grid-cols-3 gap-4">
                <div className="space-y-4">
                    <Dialog>
                        <DialogTrigger asChild>
                            <div className="rounded-xl overflow-hidden h-40 group relative border border-gray-100 dark:border-gray-700 shadow-sm cursor-pointer">
                                <img alt="First Gathering ASMAT" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/img/firstgath.jpg" />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary-dark/90 to-transparent p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <p className="text-white text-xs font-medium">First Gathering ASMAT</p>
                                </div>
                            </div>
                        </DialogTrigger>
                        <DialogContent className="max-w-3xl bg-transparent border-none p-0 shadow-none">
                            <img alt="First Gathering ASMAT" className="w-full h-auto rounded-lg" src="/img/firstgath.jpg" />
                        </DialogContent>
                    </Dialog>

                    <Dialog>
                        <DialogTrigger asChild>
                            <div className="rounded-xl overflow-hidden h-40 group relative border border-gray-100 dark:border-gray-700 shadow-sm cursor-pointer">
                                <img alt="Upgrading 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/img/upgrading1.jpg" />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary-dark/90 to-transparent p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <p className="text-white text-xs font-medium">Upgrading 1</p>
                                </div>
                            </div>
                        </DialogTrigger>
                        <DialogContent className="max-w-3xl bg-transparent border-none p-0 shadow-none">
                            <img alt="Upgrading 1" className="w-full h-auto rounded-lg" src="/img/upgrading1.jpg" />
                        </DialogContent>
                    </Dialog>

                    <Dialog>
                        <DialogTrigger asChild>
                            <div className="rounded-xl overflow-hidden h-40 group relative border border-gray-100 dark:border-gray-700 shadow-sm cursor-pointer">
                                <img alt="Pelatihan Kakak Pembimbing" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/img/kabing.jpg" />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary-dark/90 to-transparent p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <p className="text-white text-xs font-medium">Pelatihan Kakak Pembimbing</p>
                                </div>
                            </div>
                        </DialogTrigger>
                        <DialogContent className="max-w-3xl bg-transparent border-none p-0 shadow-none">
                            <img alt="Pelatihan Kakak Pembimbing" className="w-full h-auto rounded-lg" src="/img/kabing.jpg" />
                        </DialogContent>
                    </Dialog>
                </div>

                <div className="space-y-4 pt-8">
                    <Dialog>
                        <DialogTrigger asChild>
                            <div className="rounded-xl overflow-hidden h-40 group relative border border-gray-100 dark:border-gray-700 shadow-sm cursor-pointer">
                                <img alt="Pelatihan Internal" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/img/pelatihaninternal.jpg" />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary-dark/90 to-transparent p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <p className="text-white text-xs font-medium">Pelatihan Internal</p>
                                </div>
                            </div>
                        </DialogTrigger>
                        <DialogContent className="max-w-3xl bg-transparent border-none p-0 shadow-none">
                            <img alt="Pelatihan Internal" className="w-full h-auto rounded-lg" src="/img/pelatihaninternal.jpg" />
                        </DialogContent>
                    </Dialog>

                    <Dialog>
                        <DialogTrigger asChild>
                            <div className="rounded-xl overflow-hidden h-40 group relative border border-gray-100 dark:border-gray-700 shadow-sm cursor-pointer">
                                <img alt="Pelatihan Internal" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/img/pelatihaninternal2.jpg" />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary-dark/90 to-transparent p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <p className="text-white text-xs font-medium">Pelatihan Internal</p>
                                </div>
                            </div>
                        </DialogTrigger>
                        <DialogContent className="max-w-3xl bg-transparent border-none p-0 shadow-none">
                            <img alt="Pelatihan Internal" className="w-full h-auto rounded-lg" src="/img/pelatihaninternal2.jpg" />
                        </DialogContent>
                    </Dialog>

                    <Dialog>
                        <DialogTrigger asChild>
                            <div className="rounded-xl overflow-hidden h-40 group relative border border-gray-100 dark:border-gray-700 shadow-sm cursor-pointer">
                                <img alt="Klinik Matematika" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/img/klimat.jpg" />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary-dark/90 to-transparent p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <p className="text-white text-xs font-medium">Klinik Matematika</p>
                                </div>
                            </div>
                        </DialogTrigger>
                        <DialogContent className="max-w-3xl bg-transparent border-none p-0 shadow-none">
                            <img alt="Klinik Matematika" className="w-full h-auto rounded-lg" src="/img/klimat.jpg" />
                        </DialogContent>
                    </Dialog>

                    <Dialog>
                        <DialogTrigger asChild>
                            <div className="rounded-xl overflow-hidden h-40 group relative border border-gray-100 dark:border-gray-700 shadow-sm cursor-pointer">
                                <img alt="Asmat at Artmatics" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/img/asmatart.jpeg" />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary-dark/90 to-transparent p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <p className="text-white text-xs font-medium">Asmat at Artmatics</p>
                                </div>
                            </div>
                        </DialogTrigger>
                        <DialogContent className="max-w-3xl bg-transparent border-none p-0 shadow-none">
                            <img alt="Asmat at Artmatics" className="w-full h-auto rounded-lg" src="/img/asmatart.jpeg" />
                        </DialogContent>
                    </Dialog>

                </div>
                <div className="space-y-4">
                    <Dialog>
                        <DialogTrigger asChild>
                            <div className="rounded-xl overflow-hidden h-40 group relative border border-gray-100 dark:border-gray-700 shadow-sm cursor-pointer">
                                <img alt="Kelas Riset" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/img/kelasriset.jpg" />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary-dark/90 to-transparent p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <p className="text-white text-xs font-medium">Kelas Riset</p>
                                </div>
                            </div>
                        </DialogTrigger>
                        <DialogContent className="max-w-3xl bg-transparent border-none p-0 shadow-none">
                            <img alt="Kelas Riset" className="w-full h-auto rounded-lg" src="/img/kelasriset.jpg" />
                        </DialogContent>
                    </Dialog>

                    <Dialog>
                        <DialogTrigger asChild>
                            <div className="rounded-xl overflow-hidden h-40 group relative border border-gray-100 dark:border-gray-700 shadow-sm cursor-pointer">
                                <img alt="Kumpul Asmat PH X Pengembangan" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/img/kumatpengem.jpg" />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary-dark/90 to-transparent p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <p className="text-white text-xs font-medium">Kumpul Asmat PH X Pengembangan</p>
                                </div>
                            </div>
                        </DialogTrigger>
                        <DialogContent className="max-w-3xl bg-transparent border-none p-0 shadow-none">
                            <img alt="Kumpul Asmat PH X Pengembangan" className="w-full h-auto rounded-lg" src="/img/kumatpengem.jpg" />
                        </DialogContent>
                    </Dialog>

                    <Dialog>
                        <DialogTrigger asChild>
                            <div className="rounded-xl overflow-hidden h-40 group relative border border-gray-100 dark:border-gray-700 shadow-sm cursor-pointer">
                                <img alt="Klinik Matematika" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/img/klimat2.jpg" />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary-dark/90 to-transparent p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <p className="text-white text-xs font-medium">Klinik Matematika</p>
                                </div>
                            </div>
                        </DialogTrigger>
                        <DialogContent className="max-w-3xl bg-transparent border-none p-0 shadow-none">
                            <img alt="Klinik Matematika" className="w-full h-auto rounded-lg" src="/img/klimat2.jpg" />
                        </DialogContent>
                    </Dialog>

                </div>
            </div>
        </div>
    );
}