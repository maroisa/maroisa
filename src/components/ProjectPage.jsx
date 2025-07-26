export default function ProjectPage() {
    const ProjectItem = ({ href, label, description }) => {
        return (
            <a href={href} class="p-2 grow">
                <div class="bg-gray-600 aspect-video rounded-md shadow-lg/25">
                </div>
                <p class="text-2xl font-semibold mt-4">{label}</p>
                <p class="text-md">{description}</p>
            </a>
        );
    };

    return (
        <div class="h-screen w-full max-w-6xl m-auto">
            <h1>Project</h1>
            <nav class="size-full grid grid-cols-3 items-center gap-4">
                <ProjectItem
                    label="Go Maro"
                    href="https://go.maroisa.org"
                    description="URL Shortener"
                />
                <ProjectItem
                    label="Webforge"
                    href="https://webforge.maroisa.org"
                    description="HTML Course (early development)"
                />
                <ProjectItem
                    label="Neruka"
                    href="https://github.com/maroisa/neruka"
                    description="A cat game"
                />
            </nav>
        </div>
    );
}
