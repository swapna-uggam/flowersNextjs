
// // app/blog/[slug]/page.js
// import Image from "next/image";

// const blogData = {
//   roses: {
//     title: "The Beauty of Roses",
//     image: "/flowers/rose.jpg",
//     content: `🌹 Roses are one of the most beloved flowers, known for their soft petals and romantic symbolism. They come in a variety of colors, with red roses representing love, white for purity, and yellow for friendship.

// Roses are often used in perfumes, decorations, and celebrations due to their rich fragrance and visual appeal.`,
//   },
//   sunflowers: {
//     title: "Sunflowers and Their Charm",
//     image: "/flowers/sunflower.jpg",
//     content: `🌻 Sunflowers symbolize positivity, strength, and admiration. These flowers follow the sun throughout the day in a behavior called heliotropism.

// They are not only beautiful but also useful, producing edible seeds and oil. Sunflowers brighten up fields and bring smiles to faces.`,
//   },
//   tulips: {
//     title: "All About Tulips",
//     image: "/flowers/tulip.jpg",
//     content: `🌷 Tulips bloom in spring and are known for their cup-shaped blossoms and vibrant colors. Originating in Central Asia, tulips became popular in Europe, especially the Netherlands.

// They symbolize rebirth and love and are one of the most popular garden flowers in the world.`,
//   },
// };

// export default function BlogDetail({ params }) {
//   const blog = blogData[params.slug];

//   if (!blog) {
//     return (
//       <div className="p-6 text-center text-red-600 font-bold text-xl">
//         Blog not found 🌸
//       </div>
//     );
//   }

//   return (
//     <div className="p-4 md:p-8 max-w-3xl mx-auto bg-white rounded-xl shadow-lg mt-6">
//       <h1 className="text-3xl font-bold text-pink-700 mb-4">{blog.title}</h1>
//       <Image
//         src={blog.image}
//         alt={blog.title}
//         width={800}
//         height={400}
//         className="w-full rounded-lg mb-6 object-cover"
//       />
//       <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
//         {blog.content}
//       </p>
//     </div>
//   );
// }

// app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";
import Image from "next/image";

const blogData: Record<string,{ title: string; image: string; content: string }> = {
  roses: {
    title: "The Beauty of Roses",
    image: "/flowers/rose.jpg",
    content: `🌹 Roses are one of the most beloved flowers, known for their soft petals and romantic symbolism.

They come in a variety of colors:
- Red: Love
- White: Purity
- Yellow: Friendship

Roses are used in perfumes, decorations, and more.`,
  },
  sunflowers: {
    title: "Sunflowers and Their Charm",
    image: "/flowers/sunflower.jpg",
    content: `🌻 Sunflowers symbolize positivity and admiration.

They follow the sun in a behavior called heliotropism. They're beautiful **and** useful — providing seeds and oil.`,
  },
  tulips: {
    title: "All About Tulips",
    image: "/flowers/tulip.jpg",
    content: `🌷 Tulips bloom in spring and are loved for their cup-shaped blossoms.

They symbolize rebirth and are especially popular in Dutch gardens.`,
  },
};

interface Props {
  params: { slug: string };
}

export default function BlogDetail({ params }: Props) {
  const blog = blogData[params.slug];

  if (!blog) return notFound();

  return (
    <div className="p-4 md:p-8 max-w-3xl mx-auto bg-white rounded-xl shadow-lg mt-6">
      <h1 className="text-3xl font-bold text-pink-700 mb-4">{blog.title}</h1>
      <Image
        src={blog.image}
        alt={blog.title}
        width={800}
        height={400}
        className="w-full rounded-lg mb-6 object-cover"
      />
      <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
        {blog.content}
      </p>
    </div>
  );
}
