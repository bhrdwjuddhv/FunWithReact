import { useState } from "react";

export default function ProfileInputBox({ data, setData }) {
    const [copy, setCopy] = useState("Copy Code");


    const techOptions = [
        // Languages
        { label: "JavaScript", value: "javascript" },
        { label: "TypeScript", value: "typescript" },
        { label: "Python", value: "python" },
        { label: "Java", value: "java" },
        { label: "C++", value: "cplusplus" },
        { label: "C", value: "c" },
        { label: "Go", value: "go" },
        { label: "Rust", value: "rust" },
        { label: "PHP", value: "php" },
        { label: "HTML", value: "html5" },
        { label: "CSS", value: "css3" },

        // Frameworks
        { label: "React", value: "react" },
        { label: "Next.js", value: "nextjs" },
        { label: "Flutter", value: "flutter" },
        { label: "Django", value: "django" },
        { label: "Node.js", value: "nodejs" },
        { label: "Express", value: "express" },
        { label: "Spring Boot", value: "spring" },
        { label: "TailwindCSS", value: "tailwindcss" },
    ];
    const socialOptions = [
        "github",
        "linkedin",
        "twitter",
        "instagram",
        "youtube",
        "buymeacoffee",
    ];

    function handleLanguageToggle(lang) {
        setData(prev => ({
            ...prev,
            languages: prev.languages.includes(lang)
                ? prev.languages.filter(l => l !== lang)
                : [...prev.languages, lang]
        }));
    }

    function handleSocialToggle(social) {
        setData(prev => {
            const updated = { ...prev.socials };

            if (updated[social]) {
                delete updated[social];
            } else {
                updated[social] = "";
            }

            return { ...prev, socials: updated };
        });
    }

    function handleSocialLinkChange(social, value) {
        setData(prev => ({
            ...prev,
            socials: {
                ...prev.socials,
                [social]: value
            }
        }));
    }

    function socialIconComponentName(social) {
        const map = {
            github: "FaGithub",
            linkedin: "FaLinkedin",
            twitter: "FaTwitter",
            instagram: "FaInstagram",
            youtube: "FaYoutube",
            buymeacoffee: "SiBuymeacoffee"
        };

        return map[social];
    }

    function copyToClipboard() {

        const techJSX = data.tech
            .map(
                (tech) => `
          <motion.a
            href="${techLinks[tech]}"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 6 }}
            className="drop-shadow-[0_0_12px_rgba(99,102,241,0.7)]"
          >
            <i className="${techIconMap[tech]}" />
          </motion.a>`
            )
            .join("");

        const socialJSX = Object.entries(data.socials)
            .map(
                ([social, link]) => `
            <motion.a
              href="${link}"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="transition"
            >
              <${socialIconComponentName(social)} />
            </motion.a>`
            )
            .join("");

        const code = `
import { motion } from "motion/react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaYoutube
} from "react-icons/fa";
import { SiBuymeacoffee } from "react-icons/si";

export default function ProfileCard() {
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

      <motion.img
        whileHover={{ scale: 1.08 }}
        className="rounded-full size-36 sm:size-44 object-cover
                   ring-4 ring-cyan-400/50
                   shadow-[0_0_40px_rgba(34,211,238,0.6)]"
        src="${data.image}"
        alt="Profile"
      />

      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl sm:text-4xl font-bold text-white">
          ${data.name}
        </h1>

        <p className="text-sm sm:text-lg font-mono text-cyan-300">
          ${data.role}
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-5 text-3xl sm:text-4xl">
        ${techJSX}
      </div>

      <motion.div
        whileHover={{ scale: 1.02 }}
        className="flex flex-col items-center gap-4
                   bg-white/5 backdrop-blur-md
                   px-6 py-4 rounded-2xl
                   border border-white/10
                   w-full"
      >
        <span className="text-gray-200 font-medium">
          Connect With Me
        </span>

        <div className="flex flex-wrap justify-center gap-6 text-2xl text-white">
          ${socialJSX}
        </div>
      </motion.div>

    </motion.div>
  );
}
`;

        navigator.clipboard.writeText(code);
        setCopy("Copied!");
        setTimeout(() => setCopy("Copy Code"), 1500);
    }


    return (
        <>
        <div className="bg-gray-900 p-6 rounded-2xl border border-gray-700
                    flex flex-col gap-6 shadow-xl w-[380px]">

            {/* Basic Inputs */}
            {["name", "role", "image"].map(field => (
                <div key={field} className="flex flex-col gap-1">
                    <label className="text-gray-300 text-sm capitalize">
                        {field}
                    </label>
                    <input
                        type="text"
                        value={data[field] || ""}
                        onChange={(e) =>
                            setData(prev => ({
                                ...prev,
                                [field]: e.target.value
                            }))
                        }
                        className="bg-gray-800 text-white border border-gray-600
                       rounded-md p-2 focus:ring-2 focus:ring-indigo-500"
                    />
                </div>
            ))}

            {/* Languages */}
            <div>
                <h3 className="text-white font-semibold mb-2">Technologies</h3>

                <div className="flex flex-wrap gap-3 max-h-40 overflow-y-auto pr-2">
                    {techOptions.map(tech => (
                        <label key={tech.value} className="flex items-center gap-2 text-gray-300 text-sm">
                            <input
                                type="checkbox"
                                checked={data.tech?.includes(tech.value)}
                                onChange={() =>
                                    setData(prev => ({
                                        ...prev,
                                        tech: prev.tech.includes(tech.value)
                                            ? prev.tech.filter(t => t !== tech.value)
                                            : [...prev.tech, tech.value]
                                    }))
                                }
                                className="accent-indigo-500"
                            />
                            {tech.label}
                        </label>
                    ))}
                </div>
            </div>

            {/* Socials */}
            <div>
                <h3 className="text-white font-semibold mb-2">Socials</h3>

                <div className="grid grid-cols-2 gap-3">
                    {socialOptions.map((social) => (
                        <label key={social} className="flex items-center gap-2 text-gray-300">
                            <input
                                type="checkbox"
                                checked={data.socials.hasOwnProperty(social)}
                                onChange={() =>
                                    setData((prev) => {
                                        const updated = { ...prev.socials };

                                        if (updated.hasOwnProperty(social)) {
                                            delete updated[social];   // ✅ Proper removal
                                        } else {
                                            updated[social] = "";     // ✅ Add if not exists
                                        }

                                        return { ...prev, socials: updated };
                                    })
                                }
                                className="accent-indigo-500 w-4 h-4"
                            />
                            <span className="capitalize">{social}</span>
                        </label>
                    ))}
                </div>


                {/* Dynamic Inputs */}
                {Object.keys(data.socials).map((social) => (
                    <div key={social} className="flex flex-col mt-3">
                        <label className="text-sm text-gray-400 capitalize">
                            {social} URL
                        </label>
                        <input
                            type="text"
                            value={data.socials[social]}
                            onChange={(e) =>
                                setData((prev) => ({
                                    ...prev,
                                    socials: {
                                        ...prev.socials,
                                        [social]: e.target.value,
                                    },
                                }))
                            }
                            className="bg-gray-800 text-white border border-gray-600
                   rounded-md p-2 focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                ))}
            </div>
            <button
                onClick={copyToClipboard}
                className="bg-indigo-600 hover:bg-indigo-700
             text-white py-2 rounded-lg
             transition duration-300 mt-4"
            >
                {copy}
            </button>


        </div>
        </>
    );
}

