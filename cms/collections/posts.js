const posts = {
    create: true,
    fields: [
        {
            label: 'Slug',
            name: 'slug',
            widget: 'string',
        },
        {
            label: 'Title',
            name: 'title',
            widget: 'string',
        },
        {
            label: 'Excerpt',
            name: 'excerpt',
            widget: 'text',
        },
        {
            label: 'Cover Image',
            name: 'coverImage',
            widget: 'image',
        },
        {
            label: 'Date',
            name: 'date',
            widget: 'datetime',
        },
        {
            label: 'Author',
            name: 'author',
            widget: 'object',
            fields: [
                {
                    label: 'Name',
                    name: 'name',
                    widget: 'string',
                },
                {
                    label: 'Picture',
                    name: 'picture',
                    widget: 'image',
                },
            ]
        },
        {
            label: 'Cover Image',
            name: 'ogImage',
            widget: 'object',
            fields: [
                {
                    label: 'URL',
                    name: 'url',
                    widget: 'image',
                },
            ]
        },
    ],
    folder: '_posts',
    format: 'yaml-frontmatter',
    identifier_field: 'slug',
    label: 'Posts',
    label_singular: 'Post',
    name: 'posts',
    preview_path: 'posts/{{slug}}',
    slug: '{{slug}}',
};

export { posts };
