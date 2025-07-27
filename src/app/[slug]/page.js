import React from "react";
import Card from "../../components/Card";
import TextSection from "../../components/TextSection";
import ImageBlock from "../../components/ImageBlock";
import StatsBox from "../../components/StatsBox";
import CustomButton from "../../components/CustomButton";
async function getPageData(slug) {
  // Fetch from API route (in-memory)
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ""}/api/pages`, { cache: "no-store" });
  if (!res.ok) return null;
  const pages = await res.json();
  return pages.find((p) => p.slug === slug) || null;
}

export default async function Page({ params }) {
  const { slug } = params;
  const pageData = await getPageData(slug);
  if (!pageData) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ef 100%)' }}>
        <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 4px 24px 0 rgba(30, 64, 175, 0.08)', padding: 48, textAlign: 'center', border: '1px solid #e5e7eb' }}>
          <h1 style={{ fontSize: 32, fontWeight: 700, color: '#1e293b', marginBottom: 16 }}>Page Not Found</h1>
          <p style={{ color: '#64748b', fontSize: 18, marginBottom: 24 }}>Sorry, we couldn't find the page you're looking for.</p>
          <a href="/" className="formal-btn" style={{ display: 'inline-block', minWidth: 120 }}>Return Home</a>
        </div>
      </div>
    );
  }
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ef 100%)', padding: '40px 0' }}>
      <div style={{ maxWidth: 800, margin: '0 auto', background: '#fff', borderRadius: 20, boxShadow: '0 4px 24px 0 rgba(30, 64, 175, 0.10)', padding: 40, border: '1px solid #e5e7eb' }}>
        <h1 style={{ fontSize: 36, fontWeight: 700, color: '#2563eb', marginBottom: 32, letterSpacing: 0.5 }}>Page: <span style={{ color: '#1e293b' }}>{slug}</span></h1>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          {pageData.components.map((block, idx) => (
            <section
              key={idx}
              style={{
                background: '#f1f5f9',
                borderRadius: 14,
                boxShadow: '0 2px 8px 0 rgba(37, 99, 235, 0.06)',
                padding: 28,
                transition: 'box-shadow 0.2s',
                border: '1px solid #e0e7ef',
              }}
            >
              {(() => {
                switch (block.type) {
                  case "Card":
                    return <Card {...block.props} />;
                  case "TextSection":
                    return <TextSection {...block.props} />;
                  case "ImageBlock":
                    return <ImageBlock {...block.props} />;
                  case "StatsBox":
                    return <StatsBox {...block.props} />;
                  case "CustomButton":
                    return <div style={{ marginTop: 16 }}><CustomButton {...block.props} /></div>;
                  default:
                    return null;
                }
              })()}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

