const collection = {
  name: "blog",
  label: "Blog",
  label_singular: "Blog Post",
  description: "Blog post collection",
  folder: "src/data/blog",
  slug: "{{slug}}",
  create: true,
  delete: true,
  fields: [
    {
      label: "Title",
      name: "title",
      widget: "string",
      required: false,
    },
    {
      label: "Description",
      name: "description",
      widget: "string",
    },
    {
      label: "Publication Date",
      name: "pubDate",
      widget: "datetime",
      format: "DD MMM YYYY",
      date_format: "DD MMM YYYY",
      time_format: false,
    },
    {
      label: "Updated Date",
      name: "updatedDate",
      widget: "datetime",
      format: "DD MMM YYYY",
      date_format: "DD MMM YYYY",
      time_format: false,
      required: false,
    },
    {
      label: "Hero Image",
      name: "heroImage",
      widget: "image",
      required: false,
    },
    {
      label: "Body",
      name: "body",
      widget: "markdown",
    },
  ],
};

export { collection as blog };

