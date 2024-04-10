![11Blog](https://i.postimg.cc/0NTJ1WyJ/Screenshot-2024-04-09-at-9-21-56-PM.png)

# 11Blog

11Blog is an open-source, self-hosted blogging platform built with the static site generator [11ty](https://www.11ty.dev/).

## Core Principles 

* **Simplicity and Speed**: Designed to be easy to set up and incredibly fast for end-users.
* **Customization**: Offers a range of customization options to make your blog truly yours.
* **Markdown-based**: Write your posts in Markdown for easy formatting and publishing.
* **Static Site Generation**: Enjoy the security and speed of a purely static site that can be hosted anywhere.
* **SEO Friendly**: Comes with SEO best practices out of the box.

## Quick Start

1. **Clone the repository**

    ```sh
    git clone https://github.com/CloudCannon/11blog.git
    cd 11blog
    ```

2. **Install dependencies**

    ```sh
    npm install
    ```

3. **Write your posts**

    Posts are written in Markdown and stored in `./src/_posts/`. Simply add your Markdown files here, and they'll be processed into blog posts.

    ```markdown
    ---
    title: "My First Post"
    date: "2024-01-01"
    ---
    Welcome to my first post on 11Blog!
    ```

4. **Build**

    To build your blog:
    ```sh
    npx @11ty/eleventy
    ```

    To build and serve locally:
    ```sh
    npx @11ty/eleventy --serve
    ```

5. **Deploy**

    Deploy your blog to your preferred static site hosting provider. Many offer automated deployment processes:

    * [CloudCannon](https://cloudcannon.com/)
    * [Netlify](https://netlify.com/)
    * [Vercel](https://vercel.com)
    * [Cloudflare Pages](https://pages.cloudflare.com/)
    * [GitHub Pages](https://pages.github.com/)

## Useful Resources

* [11ty Documentation](https://www.11ty.dev/docs/) - Learn more about how to use 11ty to its full potential.
* [Markdown Guide](https://www.markdownguide.org/) - Get familiar with Markdown formatting for your posts.

## Contributing

We're always looking for contributors to help improve 11Blog. Whether you're interested in adding new features, fixing bugs, or improving documentation, your contributions are welcome. Please feel free to submit an issue or pull request.

## License

11Blog is open source and made available under the [MIT License](/LICENSE).
