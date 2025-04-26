import { IconCloud } from "@/components/magicui/icon-cloud";

const slugs = [
    "typescript",
    "javascript",
    "react",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "prisma",
    "amazonaws",
    "nginx",
    "vercel",
    "docker",
    "git",
    "github",
    "gitlab",
    "visualstudiocode",
    "figma",
];

export function StackCloud() {
    const images = slugs.map(
        (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
    );

    return (
        <div className="relative flex size-full items-center justify-center overflow-hidden">
            <div className={"rounded-full absolute size-96 bg-radial from-white/40 to-60% to-transparent shadow-white/10"}/>
            <div className={"relative z-20"}>
                <IconCloud images={images} />
            </div>
        </div>
    );
}
