import React, { useState, useEffect } from "react";
import marked from "marked";

const Rules = () => {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(
      "https://cors-anywhere.herokuapp.com/https://raw.githubusercontent.com/The-Four-Lords/CongressCrush/master/README.md"
    )
      .then(response => {
        return response.text();
      })
      .then(text => {
        const fixedUrls = text.replace(
          /(.\/art\/)/g,
          "https://raw.githubusercontent.com/The-Four-Lords/CongressCrush/master/art/"
        );
        setMarkdown(marked(fixedUrls));
      });
  }, []);

  return (
    <section className="section-article">
      <article dangerouslySetInnerHTML={{ __html: markdown }}></article>
    </section>
  );
};

export default Rules;
