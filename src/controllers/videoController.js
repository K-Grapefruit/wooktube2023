export const trendingVideos = (req, res) => res.render("home");
export const see = (req, res) => res.send("Watch");
export const edit = (req, res) => res.send("Edit");
export const search = (req, res) => res.send("search");
export const upload = (req, res) => res.send("upload");
export const deleteVideo = (req, res) => res.send("deleteVideo");
//export default 사용시 하나밖에 못씀
//export default trendingVideos;
