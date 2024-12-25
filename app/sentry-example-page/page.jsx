"use client";

import Head from "next/head";

export default function Page() {
  return (
    <div>
      <Head>
        <title>Page Title</title>
        <meta name="description" content="Description of the page." />
      </Head>

      <main
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 style={{ fontSize: "4rem", margin: "14px 0" }}>
          {/* Logo or SVG content */}
        </h1>

        <p>Click the button to trigger an action:</p>
        <button
          type="button"
          style={{
            padding: "12px",
            cursor: "pointer",
            backgroundColor: "#AD6CAA",
            borderRadius: "4px",
            border: "none",
            color: "white",
            fontSize: "14px",
            margin: "18px",
          }}
          onClick={() => {
            console.log("Button clicked!");
          }}
        >
          Click me!
        </button>

        <p style={{ marginTop: "24px" }}>
          For more information, visit the official documentation.
        </p>
      </main>
    </div>
  );
}
