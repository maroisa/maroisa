export default function ProjectPage() {
    const ProjectItem = ({ href, label, description }) => {
        return (
            <a href={href} class="p-2 grow">
                
                <p class="text-xl md:text-2xl font-semibold mt-4">{label}</p>
                <p class="text-sm md:text-md">{description}</p>
            </a>
        );
    };

    return (
        <div class="h-screen w-full max-w-6xl mx-auto flex flex-col">
            <h1 class="text-3xl md:text-6xl p-6 md:px-0">Project</h1>
            <nav class="content-center text-center grow grid md:grid-cols-3 items-center gap-4 p-4 md:p-0">
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
