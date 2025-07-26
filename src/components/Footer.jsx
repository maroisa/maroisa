import { Github, Instagram, Linkedin } from "./svg.jsx";

export default function Footer() {
    function FooterItem({ href, label, icon }) {
        return (
            <a
                class="p-4 flex items-center gap-2 active:bg-gray-700 hover:bg-gray-700"
                href={href}
            >
                {icon}
                <span class="text-xl">{label}</span>
            </a>
        );
    }

    return (
        <div class="w-screen bg-gray-800">
            <nav class="flex justify-center gap-12">
                <FooterItem
                    href="https://instagram.com/maroiisa"
                    label="maroiisa"
                    icon={<Instagram />}
                />
                <FooterItem
                    href="https://github.com/maroisa/"
                    label="maroisa"
                    icon={<Github />}
                />
                <FooterItem
                    href="https://www.linkedin.com/in/maroiisa/"
                    label="maroisa"
                    icon={<Linkedin />}
                />
            </nav>
        </div>
    );
}
