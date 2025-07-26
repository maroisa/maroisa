export default function FrontPage() {
    return (
        <div class="h-screen w-full max-w-6xl mx-auto flex flex-col-reverse md:flex-row p-6 lg:p-0 justify-around md:justify-between items-center">
            <div class="text-center md:text-left">
                <h1 class="text-4xl md:text-6xl">Ahmad Roisul</h1>
                <p class="text-lg md:text-2xl">
                    Mahasiswa Pendidikan Informatika
                </p>
            </div>
            <img
                class="aspect-square sm:max-w-sm rounded-full border-4 border-sky-200"
                src="/profile.jpg"
                alt="Maroisa's Profile"
            />
        </div>
    );
}
