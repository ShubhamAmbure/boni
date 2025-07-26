// "use client";
// import { getPage } from "@/lib/storage";
// import { useParams } from "next/navigation";
// import { useEffect, useState } from "react";
// import Link from "next/link";
// import ImageBlock from "@/components/ImageBlock";
// import TextSection from "@/components/TextSection";
// import CustomButton from "@/components/CustomButton";

// export default function Page() {
//   const { slug } = useParams();
//   const [pageData, setPageData] = useState(null);

//   useEffect(() => {
//     const data = getPage(slug);
//     setPageData(data);
//   }, [slug]);

//   const handleCreateRedirect = () => {
//     router.push("/");
//   };

//   if (!pageData) {
//     return (
//       <div className="p-10 max-w-3xl mx-auto">
//         <TextSection
//           heading="Page Not Found"
//           text="The page you're looking for does not exist."
//         />
//         <CustomButton onClick={handleCreateRedirect} button="Go Back home" />
//       </div>
//     );
//   }

//   return (
//     <div className="p-10 max-w-3xl mx-auto">
//       <h1 className="text-2xl font-bold mb-4">Page: {slug}</h1>
//       {pageData.map((component, index) => (
//         <div key={index} className="mb-4">
//           <ImageBlock src={component.images} alt={component.alt} />
//           <TextSection heading={component.heading} text={component.text} />
//         </div>
//       ))}
//     </div>
//   );
// }



// "use client";
// import { getPage } from "@/lib/storage";
// import { useParams } from "next/navigation";
// import { useEffect, useState } from "react";
// import Link from "next/link";
// import ImageBlock from "@/components/ImageBlock";
// import TextSection from "@/components/TextSection";
// import CustomButton from "@/components/CustomButton";

// export default function Page() {
//   const { slug } = useParams();
//   const [pageData, setPageData] = useState(null);

//   useEffect(() => {
//     const data = getPage(slug);
//     setPageData(data);
//   }, [slug]);

//   const handleCreateRedirect = () => {
//     router.push("/");
//   };

//   if (!pageData) {
//     return (
//       <div className="flex flex-col items-center justify-center min-h-screen p-10 max-w-3xl mx-auto bg-gray-50 rounded-lg shadow-md">
//         <TextSection
//           heading="Page Not Found"
//           text="The page you’re looking for does not exist. Please check the URL or return to the homepage."
//           className="text-gray-700"
//         />
//         <CustomButton 
//           onClick={handleCreateRedirect} 
//           button="Go Back Home" 
//           className="mt-6 px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
//         />
//       </div>
//     );
//   }

//   return (
//     <div className="p-10 max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
//       <h1 className="text-3xl font-extrabold mb-8 text-gray-900 border-b border-gray-200 pb-3">
//         Page: <span className="text-blue-600">{slug}</span>
//       </h1>

//       <div className="space-y-10">
//         {pageData.map((component, index) => (
//           <div key={index} className="flex flex-col gap-5">
//             <ImageBlock 
//               src={component.images} 
//               alt={component.alt} 
//               className="rounded-md shadow-sm"
//             />
//             <TextSection 
//               heading={component.heading} 
//               text={component.text} 
//               className="text-gray-800"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


// "use client";
// import { getPage } from "@/lib/storage";
// import { useParams } from "next/navigation";
// import { useEffect, useState } from "react";
// import ImageBlock from "@/components/ImageBlock";
// import TextSection from "@/components/TextSection";
// import CustomButton from "@/components/CustomButton";

// export default function Page() {
//   const { slug } = useParams();
//   const [pageData, setPageData] = useState(null);

//   useEffect(() => {
//     const data = getPage(slug);
//     setPageData(data);
//   }, [slug]);

//   const handleCreateRedirect = () => {
//     window.location.href = "/";
//   };

//   if (!pageData) {
//     return (
//       <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-white">
//         <div className="bg-gray-100 p-8 rounded-xl shadow-md text-center w-full max-w-2xl">
//           <TextSection
//             heading="Page Not Found"
//             text="The page you’re looking for does not exist. Please check the URL or return to the homepage."
//             className="text-gray-600"
//           />
//           <div className="mt-6">
//             <CustomButton
//               onClick={handleCreateRedirect}
//               button="Go Back Home"
//               className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition duration-200"
//             />
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="p-6 sm:p-10 max-w-5xl mx-auto bg-white rounded-2xl shadow-md space-y-10">
//       <h1 className="text-4xl font-bold text-gray-800 border-b pb-4">
//         Page: <span className="text-blue-600">{slug}</span>
//       </h1>

//       <div className="space-y-12">
//         {pageData.map((component, index) => (
//           <div
//             key={index}
//             className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition"
//           >
//             <ImageBlock
//               src={component.images}
//               alt={component.alt}
//               className="rounded-lg mb-4"
//             />
//             <TextSection
//               heading={component.heading}
//               text={component.text}
//               className="text-gray-700"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }




"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import CustomButton from "@/components/CustomButton";
import ImageBlock from "@/components/ImageBlock";

const Page = ({ params }) => {
  const slug = params.slug;
  const router = useRouter();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/pages/${slug}`);
      if (res.ok) {
        const result = await res.json();
        setData(result);
      } else {
        setData({ notFound: true });
      }
    };
    fetchData();
  }, [slug]);

  const handleCreateRedirect = () => {
    router.push("/");
  };

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-lg text-gray-600 animate-pulse">Loading...</p>
      </div>
    );
  }

  if (data.notFound) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen px-6 py-10 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-xl w-full bg-white shadow-lg rounded-xl p-8 text-center border border-gray-200">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Page Not Found</h1>
          <p className="text-gray-600 text-lg mb-6">
            Sorry, we couldn't find the page you're looking for.
          </p>
          <CustomButton
            onClick={handleCreateRedirect}
            button="Return Home"
            className="mt-4 w-full px-6 py-3 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition duration-200"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-gray-200">
        <h1 className="text-4xl font-bold text-gray-900 mb-10 border-b pb-4">
          Page: <span className="text-blue-600">{slug}</span>
        </h1>
        <div className="space-y-8">
          {data?.components?.map((component, index) => (
            <div
              key={index}
              className="rounded-lg bg-gray-100 p-6 shadow-sm hover:shadow-md transition"
            >
              <ImageBlock
                src={component.images}
                alt={component.alt}
                className="rounded-md w-full max-h-[400px] object-cover mb-4"
              />
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {component.title}
              </h2>
              <p className="text-gray-700">{component.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
