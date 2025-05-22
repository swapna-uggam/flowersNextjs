// // app/blog/[slug]/page.tsx
// import { notFound } from "next/navigation";
// import Image from "next/image";

// const blogData: Record<string,{ title: string; image: string; content: string }> = {
//   roses: {
//     title: "The Beauty of Roses",
//     image: "/flowers/rose.jpg",
//     content: `🌹 Roses are one of the most beloved flowers, known for their soft petals and romantic symbolism.

// They come in a variety of colors:
// - Red: Love
// - White: Purity
// - Yellow: Friendship

// Roses are used in perfumes, decorations, and more.`,
//   },
//   sunflowers: {
//     title: "Sunflowers and Their Charm",
//     image: "/flowers/sunflower.jpg",
//     content: `🌻 Sunflowers symbolize positivity and admiration.

// They follow the sun in a behavior called heliotropism. They're beautiful **and** useful — providing seeds and oil.`,
//   },
//   tulips: {
//     title: "All About Tulips",
//     image: "/flowers/tulip.jpg",
//     content: `🌷 Tulips bloom in spring and are loved for their cup-shaped blossoms.

// They symbolize rebirth and are especially popular in Dutch gardens.`,
//   },
// };

// interface Props {
//   params: { slug: string };
// }

// export default function BlogDetail({ params }: Props) {
//   const blog = blogData[params.slug];

//   if (!blog) return notFound();

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
import Image from "next/image";
import { notFound } from "next/navigation";

interface Props {
  params: {
    slug: string;
  };
}

// Mock blog content using slug
const blogData: Record<
  string,
  {
    title: string;
    image: string;
    content: string;
  }
> = {
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

They follow the sun in a behavior called heliotropism. They're beautiful and useful — providing seeds and oil.`,
  },
  tulips: {
    title: "All About Tulips",
    image: "/flowers/tulip.jpg",
    content: `🌷 Tulips bloom in spring and are loved for their cup-shaped blossoms.

They symbolize rebirth and are especially popular in Dutch gardens.`,
  },
};

export default function BlogDetailPage({ params }: Props) {
  const blog = blogData[params.slug];

  if (!blog) {
    return notFound();
  }

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
