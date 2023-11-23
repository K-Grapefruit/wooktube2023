export const join = (req, res) => res.send("join");
export const remove = (req, res) => res.send("remove");
export const edit = (req, res) => res.send("edit");
export const login = (req, res) => res.send("login");
export const loggout = (req, res) => res.send("logout");
export const see = (req, res) => {
  console.log(req.params);
  return res.send("logout");
};
//export default join;
