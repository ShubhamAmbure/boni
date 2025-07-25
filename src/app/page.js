"use client";
import { getAllPages, deletePage } from "@/lib/storage";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import CustomButton from "@/components/CustomButton";
import Card from "@/components/Card";

export default function Home() {
  const [pages, setPages] = useState({});
  const router = useRouter();

  useEffect(() => {
    setPages(getAllPages());
  }, []);

  const handleDelete = (slug) => {
    deletePage(slug);
    const updated = getAllPages();
    setPages(updated);
  };

  const handleCreateRedirect = () => {
    router.push("/create");
  };

  return (
    <div className="p-10 max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Welcome to Slug Page Creation</h1>
        <CustomButton button="+ Create Page" onClick={handleCreateRedirect} />
      </div>

      {Object.keys(pages).length === 0 ? (
        <div className="text-gray-600 text-center mt-10">
          No slug pages found.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Object.keys(pages).map((slug) => (
            <Card
              key={slug}
              title={pages[slug].title}
              alt={pages[slug].alt}
              description={pages[slug].discription}
              button={pages[slug].button}
              deleteButton={() => handleDelete(slug)}
              onClick={() => router.push(`/${slug}`)}
              src={pages[slug].src}
            />
          ))}
        </div>
      )}
    </div>
  );
}
