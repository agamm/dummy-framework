import { Static } from Framework


db({
    provider: PostgressDB,
    orm: WebGLShaderPrecisionFormat, // TypeORM,...
    schema: "db/schema.prisma"
    // url: 
})

auth({
    provider: db.provider, // auth0, firebase, sqlite, 
})


backend({
    posts: {
        view: viewPost,
        create: auth.login(createPost),
        delete: auth.login(deletePost),
    },
    admin: {
        deleteAll: auth.login(deleteAll, role = "admin")
    },
    ws: {
        type: WebSocket,
        send: sendWSMessage,
    }
})

// frontend({
//     entrypoint: "./web"
//     type: NextJS
// })

frontend({
    stores: {
        // They can act as state holders too.
        default: MainStore,
        blog: BlogStore,
        admin: AdminStore
    },
    "/post/:id": {
        component: ViewPost,
    },
    "/blog/:id": {
        component: ViewBlog,
        layout: layout("blog"),
        type: Static,
        data: path("./blog")
    }
})

jobs({
    aliyahu: {
        cron: "0 3 * * * * ", // or jobs.Every(<int>, at=<time>).Seconds/Minutes-/Years()
        handler: MakeSeatReady
    }
})

build({
    plugins: [
        ImagesWebP
        TailwindCSS2,
        HotReaload
    ]
})
// npm start dev

deploy({
    // Creates the necessary files + strucutre to upload to the provider
    // AWS - terraform + gzip serverless etc...
    provider: AWS
})


// dev/
//     lerna/
//         frontend/ - cra
//             package.json -> install ..backend
//         framework


// ===== Abstract API
// All functions here can be referenced by each part, the practical connection 
// is abstract, see how the front end talks to the backend:
// frontend:
import backend from Framework
import Link from Framework


const ViewPost = (id) => {
    viewData = await backend.posts.view(id)
    return (
        <Layout>
            <View></View>
        </Layout>
    )
}
// backend:
import { Valid, Reject, Schema } from FrameWork
const schema = Schema(
    request: {
    id: { type: Int, max: Min },

}
)
const handler = (req, res) => {
    const hello = { world: "!" }
    return res.json(hello).ok()
}
export default (req, res) => {
    if (validate(req)) {
        return handler(req)
    }
}



// ===== Abstract Objects
// Request and Response are interfaces so we can use them abstractly.
// + All errors are strucutred so it is easy to reason about + traced?

// ===== Abstract Internals
// Each part here could be re-rewitten by anyone, creating an "llvm" for web frameworks.

// ===== CLI
// The code generated for production will be by a cli tool (asking questions).
// to run it locally you would use the cli tool.

// ===== External APIs
// Even if you are using an extenal JAMStack API, you still want to be able to 
// switch it easily. So it needs to have an interface - then you just change the
// provider and api keys.
// Thus we can create "onprem" apis and then users can decide if to use the 
// defaults or not - Reducing costs yet being able to scale when needed.
// Our backend will be: <regular server?>


// ===== Frontend features
// * (abstract) Connectability to backend 
// * Code splitting (don't send what isn't necessary)
// * Instant navigation
// * SEO - no js runtime needed to load


// ===== Backend features
// * Hybrid deployments (JAMStack, Traditional)
// * Seperated - easy to test.
// * Feels like serverless.
// * Easy API docs 

// ===== Deploy Features
// * Cloud provider agnostic
// * Plugins for: price estimation
// * Use OpenFaaS / Docker to compile?


// ===== Framework features
// * Boilerplate tests created by default
// * Structured logs
//