//express 패키지 express라는 이름으로 import , node js , npm은 이 코드를 보고 express패키지를 찾아냄
import express from "express";
import logger from "morgan";
import userRouter from "./router/UserRouter";
import videoRouter from "./router/VideoRouter";
import globalRouter from "./router/GlobalRouter";

const PORT = 4000;
//express function을 사용하면 application(server) 생성됨
const app = express();

//HTML을 PUG로 쓰겠다 명시
app.set("view engine", "pug");
//logger(morgan) 함수는 middleware를 리턴해줌
app.use(logger("dev"));
//라우팅 하기

// route handler는 두개의 obj를 가짐 , request - response ( express로부터 받는 것)
//app.get(path, callback [, callback ...]) 지정된 콜백 함수를 사용하여 HTTP GET 요청을 지정된 경로로 라우팅

//요청이 들어올때에 해당 주소에 들어가면 해당 라우터로 이동이 됨.
app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);
//서버 열기 , listen(port,callback fn)
app.listen(PORT, () => {
  console.log(`Server Listenin port ${PORT}`);
});
