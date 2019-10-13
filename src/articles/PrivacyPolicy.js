import React, { useState, useEffect } from "react";
import marked from "marked";

const PrivacyPolicy = () => {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/The-Four-Lords/CongressCrush/master/privacy_policy.md"
    )
      .then(response => {
        return response.text();
      })
      .then(text => {
        setMarkdown(marked(text));
      });
  }, []);

  return (
    <section className="section-article">
      <article dangerouslySetInnerHTML={{ __html: markdown }}></article>
    </section>
  );
};

export default PrivacyPolicy;
