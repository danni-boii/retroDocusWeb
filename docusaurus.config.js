const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    plugins: ["docusaurus-plugin-sass"],
    title: "My Site",
    tagline: "Docusaurus are cool",
    url: "https://your-docusaurus-test-site.com",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",
    organizationName: "facebook", // Usually your GitHub org/user name.
    projectName: "Retro Docusaurus Website", // Usually your repo name.
    themeConfig: {
        navbar: {
            title: "Danny Boi's Website",
            logo: {
                alt: "Danny Boi's Website Logo",
                src: "img/logo.svg",
            },
            items: [
                {
                    type: "doc",
                    docId: "intro",
                    position: "left",
                    label: "Tutorial",
                },
                { to: "/blog", label: "Blog", position: "left" },
                {
                    href: "https://github.com/danni-boii/retroDocusWeb",
                    label: "GitHub",
                    position: "right",
                },
            ],
        },
        footer: {
            style: "dark",
            links: [
                {
                    title: "Docs",
                    items: [
                        {
                            label: "Tutorial",
                            to: "/docs/intro",
                        },
                    ],
                },
                {
                    title: "Community",
                    items: [
                        {
                            label: "Stack Overflow",
                            href: "https://stackoverflow.com/questions/tagged/docusaurus",
                        },
                        {
                            label: "Discord",
                            href: "https://discordapp.com/invite/docusaurus",
                        },
                        {
                            label: "Twitter",
                            href: "https://twitter.com/docusaurus",
                        },
                    ],
                },
                {
                    title: "More",
                    items: [
                        {
                            label: "Blog",
                            to: "/blog",
                        },
                        {
                            label: "GitHub",
                            href: "https://github.com/danni-boii/retroDocusWeb",
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
        },
    },
    presets: [
        [
            "@docusaurus/preset-classic",
            {
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    // Please change this to your repo.
                    editUrl: "https://github.com/facebook/docusaurus/edit/master/website/",
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl: "https://github.com/facebook/docusaurus/edit/master/website/blog/",
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.scss"),
                },
            },
        ],
    ],
};
