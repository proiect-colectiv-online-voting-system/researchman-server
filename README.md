# ResearchMan Server

The server-side part of the ResearchMan application.

# How to run

1. Clone the repository
2. Install **node.js 12.14** if you haven't already
3. Install the **yarn** package manager
`npm i -g yarn`
4. From the folder where you cloned the repo run `yarn install` to install the dependencies. This can take a while.
5. Run `yarn strapi build` to build the admin dashboard UI for the backend.
6. Start the server by running `yarn strapi develop`. It should be started on port 1337, which is the default port.
7. Follow the instructions in the terminal to create an admin account.
8. After logging in, head to the **Roles & Permissions** tab from the nav menu on the left, select **Public** and then tick the **Enable all** checkbox for the **Reportfile** content type. This is needed so that the client has permission to upload, query, etc. the reports. Press **Save** on the top right of the page to save your changes.

At this point the back-end should be ready to use. To set up the front end see the https://github.com/proiect-colectiv-online-voting-system/researchman-client

