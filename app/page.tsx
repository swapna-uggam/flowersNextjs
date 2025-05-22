// import Link from "next/link";
// import Image from "next/image";

// const blogData = [
//   {
//     title: "The Beauty of Roses",
//     slug: "roses",
//     description: "Explore the timeless elegance and fragrance of roses.",
//     image: "/flowers/rose.jpg",
//   },
//   {
//     title: "Sunflowers and Their Charm",
//     slug: "sunflowers",
//     description: "Discover the joy and brightness sunflowers bring.",
//     image: "/flowers/sunflower.jpg",
//   },
//   {
//     title: "All About Tulips",
//     slug: "tulips",
//     description: "Learn how tulips bloom and what they symbolize.",
//     image: "/flowers/tulip.jpg",
//   },
// ];

// export default function BlogPage() {
//   return (
//     <div className="p-4 md:p-10 bg-gradient-to-b from-pink-50 to-white min-h-screen">
//       <h1 className="text-4xl font-extrabold text-center text-pink-700 mb-10">
//         🌼 Flower Blog
//       </h1>
//       <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//         {blogData.map((blog) => (
//           <Link href={`/blog/${blog.slug}`} key={blog.slug}>
//             <div className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition duration-300 cursor-pointer">
//               <Image
//                 src={blog.image}
//                 alt={blog.title}
//                 width={500}
//                 height={300}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-5">
//                 <h2 className="text-2xl font-bold text-pink-800 mb-2">
//                   {blog.title}
//                 </h2>
//                 <p className="text-gray-600">{blog.description}</p>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }


// app/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-4xl font-bold text-pink-700 mb-6">Welcome to the Flower Blog 🌺</h1>
      <Link href="/blogs">
        <span className="text-blue-600 underline text-lg">View Blogs</span>
      </Link>
    </div>
  );
}
