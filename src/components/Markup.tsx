import React from "react";

export type MarkupProps = Omit<
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  >,
  "children"
> & { html: string };

export const Markup: React.FC<MarkupProps> = (props) => (
  <p {...props} dangerouslySetInnerHTML={{ __html: props.html }} />
);
