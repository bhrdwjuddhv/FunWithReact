import { motion } from "motion/react";
import {
    FaGithub,
    FaLinkedin,
    FaTwitter,
    FaInstagram,
    FaYoutube
} from "react-icons/fa";

import { SiBuymeacoffee } from "react-icons/si";

export default function ProfileCard({ data }) {
    const socialIconMap = {
        github: FaGithub,
        linkedin: FaLinkedin,
        twitter: FaTwitter,
        instagram: FaInstagram,
        youtube: FaYoutube,
        buymeacoffee: SiBuymeacoffee
    };

    const techLinks = {
        javascript: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        typescript: "https://www.typescriptlang.org/",
        python: "https://www.python.org/",
        java: "https://www.oracle.com/java/",
        cplusplus: "https://isocpp.org/",
        c: "https://en.cppreference.com/w/c",
        go: "https://go.dev/",
        rust: "https://www.rust-lang.org/",
        php: "https://www.php.net/",
        html5: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        css3: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        react: "https://react.dev/",
        nextjs: "https://nextjs.org/",
        flutter: "https://flutter.dev/",
        django: "https://www.djangoproject.com/",
        nodejs: "https://nodejs.org/",
        express: "https://expressjs.com/",
        spring: "https://spring.io/projects/spring-boot",
        tailwindcss: "https://tailwindcss.com/",
    };
    const techIconMap = {
        javascript: "devicon-javascript-plain colored",
        typescript: "devicon-typescript-plain colored",
        python: "devicon-python-plain colored",
        java: "devicon-java-plain colored",
        cplusplus: "devicon-cplusplus-plain colored",
        c: "devicon-c-plain colored",
        go: "devicon-go-plain colored",
        rust: "devicon-rust-plain colored",
        php: "devicon-php-plain colored",
        html5: "devicon-html5-plain colored",
        css3: "devicon-css3-plain colored",

        react: "devicon-react-original",
        nextjs: "devicon-nextjs-original",
        flutter: "devicon-flutter-plain colored",
        django: "devicon-django-plain colored",
        nodejs: "devicon-nodejs-plain colored",
        express: "devicon-express-original",
        spring: "devicon-spring-plain colored",
        tailwindcss: "devicon-tailwindcss-plain colored",
    };

    const socialIcons = {
        github: "devicon-github-original",
        linkedin: "devicon-linkedin-plain",
        twitter: "devicon-twitter-original",
        instagram: "devicon-instagram-plain",
        youtube: "devicon-youtube-plain",
        buymeacoffee: "devicon-coffeescript-original"
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative flex flex-col items-center gap-8 p-8
                 w-full max-w-md
                 rounded-3xl
                 bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#312e81]
                 shadow-[0_0_80px_rgba(99,102,241,0.45)]
                 border border-white/10 backdrop-blur-xl overflow-hidden"
        >

            {/* Animated Glow */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -z-10 w-[450px] h-[450px]
                   bg-gradient-to-r from-fuchsia-600 via-blue-500 to-cyan-400
                   opacity-20 blur-3xl rounded-full"
            />

            {/* Avatar */}
            <motion.img
                whileHover={{ scale: 1.08 }}
                className="rounded-full size-36 sm:size-44 object-cover
                   ring-4 ring-cyan-400/50
                   shadow-[0_0_40px_rgba(34,211,238,0.6)]"
                src={data.image}
                alt="Profile"
            />

            {/* Name + Role */}
            <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl sm:text-4xl font-bold text-white">
                    {data.name || "Your Name"}
                </h1>

                <p className="text-sm sm:text-lg font-mono text-cyan-300">
                    {data.role || "Your Role"}
                </p>
            </div>

            {/* Dynamic Tech Icons */}
            <div className="flex flex-wrap justify-center gap-5 text-3xl sm:text-4xl">
                {data.tech?.map((tech, index) => (
                    <motion.a
                        key={index}
                        href={techLinks[tech]}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, rotate: 6 }}
                        className="drop-shadow-[0_0_12px_rgba(99,102,241,0.7)]"
                    >
                        <i className={techIconMap[tech]} />

                    </motion.a>
                ))}
            </div>

            {/* Dynamic Social Section */}
            {Object.keys(data.socials || {}).length > 0 && (
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex flex-col items-center gap-4
                     bg-white/5 backdrop-blur-md
                     px-6 py-4 rounded-2xl
                     border border-white/10
                     w-full "
                >
          <span className="text-gray-200 font-medium">
            Connect With Me
          </span>

                    <div className="flex flex-wrap justify-center gap-6 text-2xl text-white">
                        {Object.entries(data.socials).map(([social, link]) => {
                            const Icon = socialIconMap[social];

                            if (!Icon) return null;

                            return (
                                <a
                                    key={social}
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:scale-110 transition-transform duration-300 hover:text-cyan-300"
                                >
                                    <Icon />
                                </a>
                            );
                        })}
                    </div>

                </motion.div>
            )}

        </motion.div>
    );
}
