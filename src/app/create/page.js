// "use client";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { savePage } from "@/lib/storage";
// import CustomLabel from "@/components/CustomLabel";
// import CustomInputField from "@/components/CustomInputField";
// import CustomButton from "@/components/CustomButton";

// export default function CreatePage() {
//   const router = useRouter();
//   const [slugPages, setSlugPages] = useState([
//     { slug: "", bloc: { src: "", alt: "", title: "", description: "" } },
//   ]);
//   const [message, setMessage] = useState("");
//   const [slugErrors, setSlugErrors] = useState([]);

//   const validateSlug = (slug) => /^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug);

//   const handleSlugChange = (index, value) => {
//     const updated = [...slugPages];
//     updated[index].slug = value;
//     setSlugPages(updated);

//     const errors = [...slugErrors];
//     errors[index] = !validateSlug(value);
//     setSlugErrors(errors);
//   };

//   const handleBlocChange = (index, field, value) => {
//     const updated = [...slugPages];
//     updated[index].bloc[field] = value;
//     setSlugPages(updated);
//   };

//   const handleAddSlugPage = () => {
//     setSlugPages([
//       ...slugPages,
//       { slug: "", bloc: { src: "", alt: "", title: "", description: "" } },
//     ]);
//     setSlugErrors([...slugErrors, false]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage("");

//     const errors = slugPages.map((page) => !validateSlug(page.slug));
//     setSlugErrors(errors);

//     if (errors.includes(true)) {
//       setMessage("Invalid slug format in one or more entries.");
//       return;
//     }

//     try {
//       for (const { slug, bloc } of slugPages) {
//         savePage(slug, [{ type: "Bloc", props: bloc }]);
//       }

//       setMessage("Pages created successfully! Redirecting...");
//       setTimeout(() => {
//         router.push("/");
//       }, 1500);
//     } catch (error) {
//       console.error(error);
//       setMessage("Error saving pages.");
//     }
//   };

//   return (
//     <div className="p-10 max-w-3xl mx-auto">
//       <h1 className="text-3xl font-bold mb-6">Create Slug Pages with Bloc</h1>

//       <form onSubmit={handleSubmit} className="space-y-6">
//         {slugPages.map((entry, index) => (
//           <div
//             key={index}
//             className="border border-gray-300 p-4 rounded bg-gray-50 space-y-4"
//           >
//             <div>
//               <CustomLabel htmlFor={`slug-${index}`}>
//                 Slug {index + 1}:
//               </CustomLabel>
//               <CustomInputField
//                 id={`slug-${index}`}
//                 value={entry.slug}
//                 onChange={(e) => handleSlugChange(index, e.target.value)}
//                 placeholder="e.g., gallery-page"
//                 error={slugErrors[index]}
//               />
//               {slugErrors[index] && (
//                 <p className="text-red-500 text-sm mt-1">
//                   Invalid slug. Use lowercase letters, numbers, and hyphens
//                   only.
//                 </p>
//               )}
//             </div>

//             {["src", "alt", "title", "description"].map((field) => (
//               <div key={field}>
//                 <CustomLabel htmlFor={`${field}-${index}`}>
//                   {field}:
//                 </CustomLabel>
//                 <CustomInputField
//                   id={`${field}-${index}`}
//                   value={entry.bloc[field]}
//                   onChange={(e) =>
//                     handleBlocChange(index, field, e.target.value)
//                   }
//                   placeholder={`Enter ${field}`}
//                 />
//               </div>
//             ))}
//           </div>
//         ))}

//         <div className="space-x-2">
//           <CustomButton
//             button="+ Add More Slug Page"
//             onClick={handleAddSlugPage}
//           />
//           <CustomButton button="Create All Pages" onClick={handleSubmit} />
//         </div>
//       </form>

//       {message && (
//         <p
//           className={`mt-4 text-sm font-medium ${
//             message.startsWith("") ? "text-green-600" : "text-red-600"
//           }`}
//         >
//           {message}
//         </p>
//       )}
//     </div>
//   );
// }



"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { savePage } from "@/lib/storage";
import CustomLabel from "@/components/CustomLabel";
import CustomInputField from "@/components/CustomInputField";
import CustomButton from "@/components/CustomButton";

export default function CreatePage() {
  const router = useRouter();
  const [slugPages, setSlugPages] = useState([
    { slug: "", bloc: { src: "", alt: "", title: "", description: "" } },
  ]);
  const [message, setMessage] = useState("");
  const [slugErrors, setSlugErrors] = useState([]);

  const validateSlug = (slug) => /^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug);

  const handleSlugChange = (index, value) => {
    const updated = [...slugPages];
    updated[index].slug = value;
    setSlugPages(updated);

    const errors = [...slugErrors];
    errors[index] = !validateSlug(value);
    setSlugErrors(errors);
  };

  const handleBlocChange = (index, field, value) => {
    const updated = [...slugPages];
    updated[index].bloc[field] = value;
    setSlugPages(updated);
  };

  const handleAddSlugPage = () => {
    setSlugPages([
      ...slugPages,
      { slug: "", bloc: { src: "", alt: "", title: "", description: "" } },
    ]);
    setSlugErrors([...slugErrors, false]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    const errors = slugPages.map((page) => !validateSlug(page.slug));
    setSlugErrors(errors);

    if (errors.includes(true)) {
      setMessage("Invalid slug format in one or more entries.");
      return;
    }

    try {
      for (const { slug, bloc } of slugPages) {
        savePage(slug, [{ type: "Bloc", props: bloc }]);
      }

      setMessage("Pages created successfully! Redirecting...");
      setTimeout(() => {
        router.push("/");
      }, 1500);
    } catch (error) {
      console.error(error);
      setMessage("Error saving pages.");
    }
  };

  return (
    <div className="container py-5">
      <h1 className="h3 fw-bold mb-4">Create Slug Pages with Bloc</h1>

      <form onSubmit={handleSubmit}>
        {slugPages.map((entry, index) => (
          <div
            key={index}
            className="border rounded p-4 bg-light mb-4"
          >
            <div className="mb-3">
              <CustomLabel htmlFor={`slug-${index}`}>
                Slug {index + 1}:
              </CustomLabel>
              <CustomInputField
                id={`slug-${index}`}
                value={entry.slug}
                onChange={(e) => handleSlugChange(index, e.target.value)}
                placeholder="e.g., gallery-page"
                error={slugErrors[index]}
              />
              {slugErrors[index] && (
                <small className="text-danger">
                  Invalid slug. Use lowercase letters, numbers, and hyphens only.
                </small>
              )}
            </div>

            {["src", "alt", "title", "description"].map((field) => (
              <div className="mb-3" key={field}>
                <CustomLabel htmlFor={`${field}-${index}`}>
                  {field}:
                </CustomLabel>
                <CustomInputField
                  id={`${field}-${index}`}
                  value={entry.bloc[field]}
                  onChange={(e) =>
                    handleBlocChange(index, field, e.target.value)
                  }
                  placeholder={`Enter ${field}`}
                />
              </div>
            ))}
          </div>
        ))}

        <div className="d-flex gap-2">
          <CustomButton
            button="+ Add More Slug Page"
            onClick={handleAddSlugPage}
          />
          <CustomButton button="Create All Pages" onClick={handleSubmit} />
        </div>
      </form>

      {message && (
        <p
          className={`mt-4 small fw-medium ${
            message.startsWith("Pages") ? "text-success" : "text-danger"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
}
