
export default function Programs() {
    return (
        <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Program Kerja <span className="text-primary">Unggulan</span></h2>
            <div className="space-y-4">
                <details className="group bg-background-dim dark:bg-background-dark rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800" open>
                    <summary className="flex justify-between items-center p-4 cursor-pointer list-none font-semibold text-slate-800 dark:text-slate-200 hover:bg-primary/5 transition-colors">
                        <div className="flex items-center gap-3">
                            <span className="material-icons text-primary">school</span>
                            <span>Klinik Matematika</span>
                        </div>
                        <span className="transition group-open:rotate-180 text-primary">
                            <span className="material-icons">expand_more</span>
                        </span>
                    </summary>
                    <div className="p-4 pt-0 text-slate-600 dark:text-slate-400 border-t border-gray-200 dark:border-gray-800 ml-9">
                        Klinik Matematika adalah Progam kerja pengabdian masyarakat berupa pengajaran matematika ke sekolah sekolah di sekitar tembalang yang bertujuan  untuk memberi ilmu yang bermanfaat dan membantu anak-anak dalam menyelesaikan permasalahan dalam belajar matematika melalui pengajaran yang interaktif dan games edukatif.
                    </div>
                </details>
                <details className="group bg-background-dim dark:bg-background-dark rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800">
                    <summary className="flex justify-between items-center p-4 cursor-pointer list-none font-semibold text-slate-800 dark:text-slate-200 hover:bg-primary/5 transition-colors">
                        <div className="flex items-center gap-3">
                            <span className="material-icons text-primary">trending_up</span>
                            <span>Pelatihan PKM</span>
                        </div>
                        <span className="transition group-open:rotate-180 text-primary">
                            <span className="material-icons">expand_more</span>
                        </span>
                    </summary>
                    <div className="p-4 pt-0 text-slate-600 dark:text-slate-400 border-t border-gray-200 dark:border-gray-800 ml-9">
                        Pelatihan PKM merupakan kegiatan pembekalan yang ditujukan untuk Mahasiswa Matematika angkatan 2026, dengan tujuan memperkenalkan hal-hal yang berkaitan dengan penyusunan proposal PKM, mulai dari teknik penyusunan proposal PKM, pedoman kepenulisan, serta simulasi penyusunan proposal PKM.
                    </div>
                </details>
                <details className="group bg-background-dim dark:bg-background-dark rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800">
                    <summary className="flex justify-between items-center p-4 cursor-pointer list-none font-semibold text-slate-800 dark:text-slate-200 hover:bg-primary/5 transition-colors">
                        <div className="flex items-center gap-3">
                            <span className="material-icons text-primary">emoji_events</span>
                            <span>Modul Soal</span>
                        </div>
                        <span className="transition group-open:rotate-180 text-primary">
                            <span className="material-icons">expand_more</span>
                        </span>
                    </summary>
                    <div className="p-4 pt-0 text-slate-600 dark:text-slate-400 border-t border-gray-200 dark:border-gray-800 ml-9">
                        Modul soal merupakan program kerja unggulan dari Bidang Akademik Asmat, program ini dilaksanakan dengan menghimpun seluruh teks soal UTS dan UAS beserta pembahasannya dalam sebuah modul. Melalui program ini, diharapkan seluruh Mahasiswa Matematika terbantu dalam memahami bentuk soal dan dapat meningkatkan nilai akademiknya.
                    </div>
                </details>
            </div>
        </div>
    );
}
