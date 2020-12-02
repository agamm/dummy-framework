import config from MyBackendRepo


const ViewPost = (id) => {
    viewData = await config.handlers.posts.view(id) 
    return (
        <Layout>
            <View data={viewData}></View>
        </Layout>
    )
}