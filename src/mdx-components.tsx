import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  // External links open in a new tab; internal links behave normally.
  a: ({ href = "", children, ...props }) => {
    const isExternal = /^https?:\/\//.test(href);
    return (
      <a
        href={href}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...props}
      >
        {children}
      </a>
    );
  },
  // eslint-disable-next-line @next/next/no-img-element
  img: ({ alt = "", ...props }) => <img alt={alt} loading="lazy" className="rounded-xl" {...props} />,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
