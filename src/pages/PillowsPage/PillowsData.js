import pillow1 from "./../../assets/pillow/pillow1.webp";
import pillow2 from "./../../assets/pillow/pillow2.webp";
import pillow3 from "./../../assets/pillow/pillow3.webp";
import pillow4 from "./../../assets/pillow/pillow4.webp";
import pillow5 from "./../../assets/pillow/pillow5.webp";
import pillow6 from "./../../assets/pillow/pillow6.webp";
import pillow7 from "./../../assets/pillow/pillow7.webp";
import pillow8 from "./../../assets/pillow/pillow8.webp";
import pillow9 from "./../../assets/pillow/pillow9.webp";
import pillow10 from "./../../assets/pillow/pillow10.webp";
import pillow11 from "./../../assets/pillow/pillow11.webp";
import pillow12 from "./../../assets/pillow/pillow12.webp";
import pillow13 from "./../../assets/pillow/pillow13.webp";
import pillow14 from "./../../assets/pillow/pillow14.webp";
import pillow15 from "./../../assets/pillow/pillow15.webp";
import pillow16 from "./../../assets/pillow/pillow16.webp";
import pillow17 from "./../../assets/pillow/pillow17.webp";
import pillow18 from "./../../assets/pillow/pillow18.webp";
import pillow19 from "./../../assets/pillow/pillow19.webp";
import pillow20 from "./../../assets/pillow/pillow20.webp";
import pillow21 from "./../../assets/pillow/pillow21.webp";
import pillow22 from "./../../assets/pillow/pillow22.webp";
import pillow23 from "./../../assets/pillow/pillow23.webp";
import pillow24 from "./../../assets/pillow/pillow24.webp";
const pillowsData = [
  {
    id: 1,
    name: "SoFoam Gold Pillow",
    price: "Rs.1,800",
    img: pillow1,
    description: "A mattress for your head, SoFoam Gold pillow provides firm support for a good night's sleep and lets you sleep like a baby. The Anti-Microbial Protection is perfect for people with allergies and breathing disorders."
  },
  {
    id: 2,
    name: "SoFoam Ortho Knee Pillow",
    price: "Rs.1,935",
    img: pillow2,
    description: "SoFoam Ortho Knee Pillow for sleeping provides maximum support and pressure relief on the lower back, spine and hip pain. The pillow is designed to alleviate joint pains and the rubbing of the knees. It also helps reduce back pain and provides adequate alignment to reduce Sciatica."
  },
  {
    id: 3,
    name: "SoFoam Mom Pregnancy Wedge",
    price: "Rs.2,000",
    img: pillow3,
    description: "SoFoam Mom pregnancy wedge is specifically designed to offer proper support and reduce the swelling in hands, legs, and feet by relieving back tension and associated stress."
  },
  {
    id: 4,
    name: "SoFoam Baby Wedge Pillow",
    price: "Rs.2,150",
    img: pillow4,
    description: "SoFoam Baby wedge pillow offers the supportive incline needed to raise your baby's head and torso by the perfect degree. This can keep some of the stomach acids from causing discomfort or spitting up overnight, which helps both the baby and the parents sleep better."
  },
  {
    id: 5,
    name: "SoFoam Pillow",
    price: "Rs.2,550",
    img: pillow5,
    description: "Sleep Tight, rise Bright! Indulge in a restful slumber with SoFoam Pillow. Crafted with a unique blend of quality micro and ball fiber, this best bed pillow provides medium support for your neck. Each pillow is lovingly filled with only the finest fibers which provide a squishy and cozy pillow to help you sink into the most blissful night's sleep."
  },
  {
    id: 6,
    name: "SoFoam Mom Pregnancy Support",
    price: "Rs.3,000",
    img: pillow6,
    description: "Experience unmatched softness with our Luxe Comfort Pillow, designed for ultimate neck support and restful sleep."
  },
  {
    id: 7,
    name: "SoFoam Memory Baby Head Shaper Pillow",
    price: "Rs.3,400",
    img: pillow7,
    description: "Baby Head-Shaping Pillow is comprised of a unique design and quality high-density foam that provides great support to the baby’s head. The special cut-out design provides room for an infant’s head, supports the head movement, offers air regulation, and prevents the baby from “Flat Head Syndrome”."
  },
  {
    id: 8,
    name: "SoFoam Celeste Microfiber Pillow",
    price: "Rs.3,600",
    img: pillow8,
    description: "Celeste pillow is unbelievably lightweight and plush. Its ultra-soft texture provides the ideal balance of cushiness and support; improving your sleep experience altogether."
  },
  {
    id: 9,
    name: "SoFoam Celeste Dream Pillow",
    price: "Rs.4,000",
    img: pillow9,
    description: "Designed to cradle your head in a blissful and restorative sleep, this pillow is crafted with a premium blend of microfiber filling that offers a naturally bouncy feel."
  },
  {
    id: 10,
    name: "SoFoam Celeste Hotel Pillow",
    price: "Rs.4,100",
    img: pillow10,
    description: "SoFoam Celeste Luxury Hotel Pillow is meticulously manufactured, keeping in view your desire to enjoy a hotel-like feeling. The specialty of this hotel pillow is its luxurious feel, which balances plushness and support."
  },
  {
    id: 11,
    name: "SoFoam Contour Pillow",
    price: "Rs.4,230",
    img: pillow11,
    description: "Contour Pillow is designed with massaging grooves for relaxation. Designed to support the contours of your neck and body for an appropriate posture for a restful sleep."
  },
  {
    id: 12,
    name: "SoFoam Duo Comfort Pillow",
    price: "Rs.4,500",
    img: pillow12,
    description: "Introducing our revolutionary new pillow, crafted to deliver the ultimate sleep experience - the perfect fusion of foam and fiber. Designed with meticulous attention to detail, our pillow strikes an impeccable balance between unmatched comfort and exceptional support."
  },
  {
    id: 13,
    name: "SoFoam Baby Nursing Pillow",
    price: "Rs.4,500",
    img: pillow13,
    description: "Every mother’s best friend, SoFoam Baby Nursing pillow perfectly offers versatile support for the baby’s feeding time. The versatile nursing pillow by SoFoam lifts the baby to a more ergonomic position for comfortable feeding, then transitions to the perfect spot for propping, tummy time, and learning to sit."
  },
  {
    id: 14,
    name: "SoFoam Ortho Turnover Pillow",
    price: "Rs.4,815",
    img: pillow14,
    description: "This thoughtfully designed U-shaped pillow with arc design helps the bedridden and elderly patients turn over without any discomfort. Helping patients to easily change their body posture and prevent bedsores, this pillow provides comfortable support since it is easy to use."
  },
  {
    id: 15,
    name: "SoFoam Cure Wedge",
    price: "Rs.5,350",
    img: pillow15,
    description: "The SoFoam Cure Wedge Pillow provides the perfect support to elevate your upper body, legs, or to use as a trunk stabilizer for lying on your side. This high-quality product is designed for pregnant women and those suffering from acid reflux, difficulty breathing, poor circulation, hiatal hernias, back, or neck problems. Can be used to elevate your feet or legs as well."
  },
  {
    id: 16,
    name: "SoFoam Mom Pregnancy Pillow Total Body",
    price: "Rs.7,000",
    img: pillow16,
    description: "Looking for a perfect pillow for side sleeping during pregnancy? SoFoam Mom Pregnancy Pillow Total Body is carefully crafted to substitute the need for regular pillows while providing more proficient support."
  },
  {
    id: 17,
    name: "SoFoam Triangular Wedge Pillow",
    price: "Rs.7,500",
    img: pillow17,
    description: "Triangular Wedge Pillow is ergonomically designed to support the natural curvature of the back and provide optimal elevation for the upper body. This pillow can be used as a back support, to fill the gap between the headboard/wall and your mattress, or simply as a fashionable home decoration - ensuring maximum comfort while sitting, reading, and watching TV!"
  },
  {
    id: 18,
    name: "SoFoam Ortho Memory Cervical",
    price: "Rs.10,350",
    img: pillow18,
    description: "The SoFoam Ortho Memory Cervical Pillow is designed specifically for patients with neck and cervical issues. It helps you sleep better by providing a firm authentic support and enables better sleep, for a healthier you."
  },
  {
    id: 19,
    name: "SoFoam Ortho Memory Pillow",
    price: "Rs.10,350",
    img: pillow19,
    description: "Experience unmatched softness with our Luxe Comfort Pillow, designed for ultimate neck support and restful sleep."
  },
  {
    id: 20,
    name: "SoFoam Hexa Cool Pillow",
    price: "Rs.15,000",
    img: pillow20,
    description: "Experience the ultimate in cooling comfort with the SoFoam Hexa Cool Pillow. Designed with an innovative Hex-Mesh Technology and Cool AirFlow System, this pillow ensures continuous ventilation, keeping you cool and refreshed all night long. Its ergonomic structure offers superior neck and head support, promoting a restful, pressure-free sleep."
  },
  {
    id: 21,
    name: "SoFoam Cool Gel Pillow",
    price: "Rs.16,000",
    img: pillow21,
    description: "SoFoam Cool Gel Pillow will assure you comfort and relief like no other. By cutting down body heat to almost 5 degrees this pillow guarantees the “cold-side-of-the-pillow” feeling all night long."
  },
  {
    id: 22,
    name: "SoFoam Latex Pillow",
    price: "Rs.20,000",
    img: pillow22,
    description: "The SoFoam Latex Pillow is particularly designed to offer uplifting support to your neck and bottomless pressure relief for your head. You will feel your head and neck being cradled as the pillow conforms to you, giving you a more buoyant feel. Owing to its durability, breathability, and advanced comfort, you will have the sleep of your dreams!"
  },
  {
    id: 23,
    name: "SoFoam Duck Down Feather Pillow",
    price: "Rs.25,000",
    img: pillow23,
    description: "Synonymous with ultimate plushness and cloudy comfort, our premium SoFoam Duck Down Feather Pillow provides the perfect balance of relaxation and support for a blissful night’s sleep. Luxuriously woven and encased in 100% Cotton Fabric with 50% Duck Down and 50% Feather, and an extra inner layering for insulation."
  },
  {
    id: 24,
    name: "SoFoam Aloe Vera Memory Pillow",
    price: "Rs.25,000",
    img: pillow24,
    description: "The SoFoam Aloe Vera memory foam technology comes with a thermoregulator that senses temperature changes and creates a cooling effect when it’s warm and absorbs excess heat on hotter days. It also contains healing properties of Aloe Vera which are both, healthy and soothing."
  }
];


export default pillowsData;
