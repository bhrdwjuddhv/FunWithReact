
import {useState} from "react";
export default function InputBox({data, setData, colors}) {
    const [copy, setCopy] = useState("Copy Code");
    async function copyToClipboard() {
        try {
            const formattedCode = `
<motion.div
  style={{ backgroundColor: "${data.background || colors?.background || "#1f2937"}" }}
  className="group p-2 flex flex-col items-center justify-center rounded-4xl gap-2"
>
  <div className="flex flex-col items-center w-75 justify-center gap-2">

    <div
      className="relative overflow-hidden rounded-4xl p-4 h-48 w-75 mt-1 mr-1 ml-1 flex items-center justify-center"
      style={{ background: "linear-gradient(to right, ${colors?.primary}, ${colors?.accent})" }}
    >
      <img
        src="${data.image}"
        className="absolute inset-0 w-full h-full object-cover scale-75 rounded-4xl"
        alt="Card Image"
      />
    </div>

    <div className="flex flex-col gap-3 px-2 pb-3">
      <span
        className="text-5xl font-bold text-left"
        style={{ color: "${colors?.text}" }}
      >
        ${data.title}
      </span>

      <p
        className="text-sm text-center"
        style={{ color: "${colors?.text}" }}
      >
        ${data.description}
      </p>
    </div>

    <div className="pb-2">
      <a
        href="${data.link}"
        className="p-3 text-white rounded-xl bg-gray-900 hover:bg-amber-50 hover:text-gray-900 duration-300"
      >
        Go there!
      </a>
    </div>

  </div>
</motion.div>
`;

            await navigator.clipboard.writeText(formattedCode);

            setCopy('✅ Copied to clipboard');
            setTimeout(() => {
                setCopy('Copy Code');
            }, 1000);

        } catch (err) {
            console.error("Clipboard error:", err);
            setCopy("❌ Failed");
            setTimeout(() => {
                setCopy('Copy Code');
            }, 1000);
        }
    }

    return (
        <>
            <div className="bg-gray-900  p-3 rounded-md flex flex-col border-2">
                {
                    [
                        {label: "Title", name: "title", key: "title"},
                        {label: "Description", name: "description", key: "description"},
                        {label: "Image URL", name: "image", key: "image"},
                        {label: "Link URL", name: "link", key: "link"},

                    ].map(({label, name}) => {
                        return (
                            <div className="flex flex-col gap-1 p-4">
                                <label htmlFor={name} className="text-sm font-medium text-white">{label}</label>
                                <input type="text" id={name} name={name}
                                       value={data[name]}
                                       onChange={e =>
                                           setData(prev => ({
                                               ...prev,
                                               [name]: e.target.value
                                           }))
                                       }

                                       className="border text-white border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>

                            </div>

                        )
                    })
                }
                <button
                    onClick={copyToClipboard}
                    className="bg-blue-500 text-white p-2 rounded-md pb-2 hover:bg-blue-600 self-center cursor-pointer transition-colors duration-300 mt-2">
                    {copy}
                </button>

            </div>
        </>
    )
}