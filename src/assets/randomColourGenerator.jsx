export default function RandomColor() {
    const hex = "ABCDEF0123456789";
    let code = "";

    for (let i = 0; i < 6; i++) {
        const random = Math.floor(Math.random() * 16);
        code += hex[random];
    }

    code = `#${code}`;
    return code;
}