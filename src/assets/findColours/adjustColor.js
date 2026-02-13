

export function adjustColor(primaryHex, percent) {
    const hex = primaryHex.replace("#", "");

    let r = parseInt(hex.slice(0, 2), 16);
    let g = parseInt(hex.slice(2, 4), 16);
    let b = parseInt(hex.slice(4, 6), 16);

    const factor = percent / 100;

    r = Math.min(255, Math.max(0, Math.round(r + (255 - r) * factor)));
    g = Math.min(255, Math.max(0, Math.round(g + (255 - g) * factor)));
    b = Math.min(255, Math.max(0, Math.round(b + (255 - b) * factor)));

    return (
        "#" +
        r.toString(16).padStart(2, "0") +
        g.toString(16).padStart(2, "0") +
        b.toString(16).padStart(2, "0")
    );
}