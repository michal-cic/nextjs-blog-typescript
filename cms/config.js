import { posts } from "./collections/posts";

const config = {
    backend: {
        branch: 'main',
        name: 'git-gateway',
        squash_merges: true,
    },
    collections: [
        posts
    ],
    load_config_file: false,
    local_backend: true,
    media_folder: 'public/assets',
    public_folder: '/assets',
    publish_mode: 'editorial_workflow',
    site_url: '/',
};

export { config };