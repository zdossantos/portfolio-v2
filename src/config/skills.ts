import { 
    SiTypescript, SiReact, SiNextdotjs, SiJavascript, 
    SiHtml5, SiCss3, SiSass, SiVuedotjs, 
    SiExpress, SiLaravel, SiMariadb, SiMysql,
    SiVercel, SiNetlify, SiPhpstorm, SiPnpm,
    SiApple, SiUbuntu
} from "react-icons/si";

export interface SkillItem {
    id: string;
    name: string;
    icon: React.ElementType;
    level: number;
    color?: string;
    category: 'frontend' | 'backend' | 'devops' | 'database' | 'tools';
}

export const skills: SkillItem[] = [
    // Frontend (from most complex to simplest)
    { id: 'nextjs', name: 'Next.js', icon: SiNextdotjs, level: 90, color: '#ffffff', category: 'frontend' },
    { id: 'react', name: 'React', icon: SiReact, level: 95, color: '#61DAFB', category: 'frontend' },
    { id: 'vue', name: 'Vue.js', icon: SiVuedotjs, level: 50, color: '#4FC08D', category: 'frontend' },
    { id: 'typescript', name: 'TypeScript', icon: SiTypescript, level: 90, color: '#3178C6', category: 'frontend' },
    { id: 'javascript', name: 'JavaScript', icon: SiJavascript, level: 95, color: '#F7DF1E', category: 'frontend' },
    { id: 'sass', name: 'SASS', icon: SiSass, level: 70, color: '#CC6699', category: 'frontend' },
    { id: 'css3', name: 'CSS3', icon: SiCss3, level: 85, color: '#1572B6', category: 'frontend' },
    { id: 'html5', name: 'HTML5', icon: SiHtml5, level: 90, color: '#E34F26', category: 'frontend' },

    // Backend (from most complex to simplest)
    { id: 'laravel', name: 'Laravel', icon: SiLaravel, level: 90, color: '#FF2D20', category: 'backend' },
    { id: 'express', name: 'Express.js', icon: SiExpress, level: 40, color: '#ffffff', category: 'backend' },

    // Databases (from most complex to simplest)
    { id: 'mariadb', name: 'MariaDB', icon: SiMariadb, level: 90, color: '#003545', category: 'database' },
    { id: 'mysql', name: 'MySQL', icon: SiMysql, level: 90, color: '#4479A1', category: 'database' },

    // DevOps & Hosting (from most complex to simplest)
    { id: 'vercel', name: 'Vercel', icon: SiVercel, level: 60, color: '#ffffff', category: 'devops' },
    { id: 'netlify', name: 'Netlify', icon: SiNetlify, level: 50, color: '#00C7B7', category: 'devops' },

    // Development Tools & OS (from most complex to simplest)
    { id: 'phpstorm', name: 'PhpStorm', icon: SiPhpstorm, level: 95, color: '#ffffff', category: 'tools' },
    { id: 'pnpm', name: 'pnpm', icon: SiPnpm, level: 90, color: '#F69220', category: 'tools' },
    { id: 'macos', name: 'macOS', icon: SiApple, level: 90, color: '#ffffff', category: 'tools' },
    { id: 'ubuntu', name: 'Ubuntu', icon: SiUbuntu, level: 80, color: '#E95420', category: 'tools' }
];

export const categories = {
    frontend: {
        name: "Frontend",
        icon: SiReact,
        skills: skills.filter(skill => skill.category === 'frontend')
    },
    backend: {
        name: "Backend",
        icon: SiExpress,
        skills: skills.filter(skill => skill.category === 'backend')
    },
    devops: {
        name: "DevOps",
        icon: SiVercel,
        skills: skills.filter(skill => skill.category === 'devops')
    },
    database: {
        name: "Bases de données",
        icon: SiMariadb,
        skills: skills.filter(skill => skill.category === 'database')
    },
    tools: {
        name: "Outils & OS",
        icon: SiPhpstorm,
        skills: skills.filter(skill => skill.category === 'tools')
    }
};

export const getSkillById = (id: string) => skills.find(skill => skill.id === id);
export const getSkillsByCategory = (category: keyof typeof categories) => categories[category].skills; 