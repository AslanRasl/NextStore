
import pc from "../../assets/pc.png";

export const CardData = Array.from({ length: 135 }, (_, id) => ({
    id,
    img: pc,
    price: `${(Math.random() * 10).toFixed(0)} 000 000 so'm `,
    name: `Product ${id + 1}`,
    pieces: `${(Math.random() * 1000).toFixed(0)}`
}));
