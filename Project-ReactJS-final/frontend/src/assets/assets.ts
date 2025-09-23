// Import product images
import p_img1 from './cloth1.webp'
import p_img1_1 from './cloth1_1.webp'
import p_img1_2 from './cloth1_2.webp'
import p_img1_3 from './cloth1_3.webp'
import p_img2 from './cloth2.webp'
import p_img2_1 from './cloth2_1.webp'
import p_img2_2 from './cloth2_2.webp'

import p_img3 from './cloth3.webp'
import p_img4 from './cloth4.webp'
import p_img5 from './cloth5.webp'
import p_img6 from './cloth6.webp'
import p_img7 from './cloth7.webp'
import p_img8 from './cloth8.webp'
import p_img9 from './cloth9.webp'
import p_img10 from './cloth10.webp'

import p_img11 from './shoes1.webp'
import p_img12 from './shoes2.webp'

import p_imgTime from './img_time.jpeg'

import p_sale1 from './pic_sale1.webp'
import p_sale2 from './pic_sale2.webp'

import hamburger from './hamburger.png'
export const images = [
    p_sale1 , p_sale2 , p_imgTime,hamburger
]

export { p_imgTime, hamburger }

export const products = [
    {
        _id: "1",
        name: "Áo Hoodie Unisex Basic Premium",
        description: "Áo hoodie unisex chất liệu cotton blend cao cấp, thiết kế basic dễ phối đồ. Form áo vừa vặn, thoải mái với túi kangaroo và mũ trùm đầu. Phù hợp cho cả nam và nữ, thích hợp mặc hàng ngày hoặc đi chơi.",
        price: 450000,
        image: [p_img1,p_img1_1,p_img1_2,p_img1_3],
        category: "Unisex",
        subCategory: "Hoodie",
        sizes: ["S", "M", "L", "XL"],
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "2", 
        name: "Áo Thun Oversized Streetwear",
        description: "Áo thun form oversized theo phong cách streetwear hiện đại, chất liệu cotton 100% mềm mại, thấm hút tốt. Thiết kế in logo độc đáo, màu sắc trẻ trung. Lý tưởng cho những ai yêu thích phong cách khỏe khoắn, năng động.",
        price: 280000,
        image: [p_img2,p_img2_1,p_img2_2],
        category: "Unisex", 
        subCategory: "T-Shirt",
        sizes: ["S", "M", "L", "XL", "XXL"],
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: "3",
        name: "Quần Jean Skinny Fit Nam",
        description: "Quần jean skinny fit nam chất liệu denim cao cấp, co giãn nhẹ giúp thoải mái vận động. Màu xanh đậm cổ điển, đường may chắc chắn. Phù hợp với nhiều phong cách từ casual đến smart casual.",
        price: 650000,
        image: [p_img3],
        category: "Men",
        subCategory: "Jeans", 
        sizes: ["29", "30", "31", "32", "33", "34"],
        date: 1716608345448,
        bestseller: false
    },
    {
        _id: "4",
        name: "Váy Midi Hoa Nhí Vintage",
        description: "Váy midi họa tiết hoa nhí phong cách vintage, chất liệu voan mềm mại, thoáng mát. Thiết kế eo thắt tôn dáng, tay phồng nhẹ thanh lịch. Hoàn hảo cho các buổi dạo phố, hẹn hò hoặc đi làm.",
        price: 520000,
        image: [p_img4],
        category: "Women",
        subCategory: "Dress",
        sizes: ["S", "M", "L"],
        date: 1716595345448,
        bestseller: true
    },
    {
        _id: "5",
        name: "Áo Sơ Mi Nam Formal",
        description: "Áo sơ mi nam formal chất liệu cotton pha, ít nhăn, dễ ủi. Thiết kế cổ điển với cổ áo và cuffs tinh tế. Màu trắng thanh lịch, phù hợp cho môi trường công sở hoặc các sự kiện trang trọng.",
        price: 380000,
        image: [p_img5],
        category: "Men",
        subCategory: "Shirt",
        sizes: ["S", "M", "L", "XL"],
        date: 1716582345448,
        bestseller: true
    },
    {
        _id: "6",
        name: "Áo Blouse Nữ Tay Dài Thanh Lịch",
        description: "Áo blouse nữ tay dài chất liệu silk pha, bóng mịn, sang trọng. Thiết kế cổ V nhẹ nhàng, tay áo may ly tinh tế. Màu pastel dễ thương, thích hợp cho cả môi trường công sở lẫn dạo phố.",
        price: 420000,
        image: [p_img6],
        category: "Women",
        subCategory: "Blouse", 
        sizes: ["S", "M", "L"],
        date: 1716569345448,
        bestseller: true
    },
    {
        _id: "7",
        name: "Áo Khoác Bomber Unisex",
        description: "Áo khoác bomber unisex phong cách sporty hiện đại, chất liệu polyester chống gió nhẹ. Thiết kế zip phía trước, túi hai bên tiện lợi. Màu sắc basic dễ phối, phù hợp cho thời tiết se lạnh.",
        price: 580000,
        image: [p_img7],
        category: "Unisex",
        subCategory: "Jacket",
        sizes: ["S", "M", "L", "XL"],
        date: 1716556345448,
        bestseller: true
    },
    {
        _id: "8",
        name: "Quần Short Kaki Nam",
        description: "Quần short kaki nam chất liệu cotton twill bền đẹp, thoáng mát. Thiết kế 5 túi tiện dụng, cạp vừa phải thoải mái. Màu be trung tính dễ phối đồ, lý tưởng cho các hoạt động ngoài trời hoặc đi chơi.",
        price: 320000,
        image: [p_img8],
        category: "Men",
        subCategory: "Shorts",
        sizes: ["29", "30", "31", "32", "33"],
        date: 1716543345448,
        bestseller: true
    },
    {
        _id: "9",
        name: "Quần Short Kaki Nam",
        description: "Quần short kaki nam chất liệu cotton twill bền đẹp, thoáng mát. Thiết kế 5 túi tiện dụng, cạp vừa phải thoải mái. Màu be trung tính dễ phối đồ, lý tưởng cho các hoạt động ngoài trời hoặc đi chơi.",
        price: 320000,
        image: [p_img9],
        category: "Men",
        subCategory: "Shorts",
        sizes: ["29", "30", "31", "32", "33"],
        date: 1716543345448,
        bestseller: false
    },
    {
        _id: "10",
        name: "Quần Short Kaki Nam",
        description: "Quần short kaki nam chất liệu cotton twill bền đẹp, thoáng mát. Thiết kế 5 túi tiện dụng, cạp vừa phải thoải mái. Màu be trung tính dễ phối đồ, lý tưởng cho các hoạt động ngoài trời hoặc đi chơi.",
        price: 320000,
        image: [p_img10],
        category: "Men",
        subCategory: "Shorts",
        sizes: ["29", "30", "31", "32", "33"],
        date: 1716543345448,
        bestseller: true
    },
    {
        _id: "11",
        name: "Giày Sneaker Classic Black",
        description: "Giày sneaker cổ điển màu đen trắng phong cách retro, chất liệu canvas bền bỉ kết hợp da lộn cao cấp. Thiết kế low-top với đế cao su chống trượt, phù hợp cho mọi hoạt động hàng ngày. Dễ phối đồ với nhiều outfit khác nhau.",
        price: 890000,
        image: [p_img11],
        category: "Unisex",
        subCategory: "Sneakers",
        sizes: ["36", "37", "38", "39", "40", "41", "42", "43"],
        date: 1716530345448,
        bestseller: true
    },
    {
        _id: "12",
        name: "Giày Sneaker Old School Grey",
        description: "Giày sneaker phong cách old school màu xám trắng, chất liệu canvas premium với chi tiết da lộn sang trọng. Thiết kế vintage với đế vulcanized truyền thống, mang lại cảm giác thoải mái và phong cách đường phố authentic.",
        price: 920000,
        image: [p_img12],
        category: "Unisex",
        subCategory: "Sneakers",
        sizes: ["36", "37", "38", "39", "40", "41", "42", "43"],
        date: 1716517345448,
        bestseller: true
    }
    
]