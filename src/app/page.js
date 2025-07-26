
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
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h4 fw-bold">Welcome to Slug Page Creation</h1>
        <CustomButton button="+ Create Page" onClick={handleCreateRedirect} />
      </div>

      {Object.keys(pages).length === 0 ? (
        <div className="text-muted text-center mt-5">
          No slug pages found.
        </div>
      ) : (
        <div className="row g-4">
          {Object.keys(pages).map((slug) => (
            <div className="col-12 col-sm-6 col-md-4" key={slug}>
              <Card
                title={pages[slug].title}
                alt={pages[slug].alt}
                description={pages[slug].discription}
                button={pages[slug].button}
                deleteButton={() => handleDelete(slug)}
                onClick={() => router.push(`/${slug}`)}
                src={pages[slug].src}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
