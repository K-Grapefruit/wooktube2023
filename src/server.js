//express 패키지 express라는 이름으로 import , node js , npm은 이 코드를 보고 express패키지를 찾아냄
import express from "express";

const PORT = 4000;
//express function을 사용하면 application(server) 생성됨
const app = express();

// route handler는 두개의 obj를 가직 , request - response ( express로부터 받는 것)
app.get("/", (req, res) => {
  //브라우저가 request를 보내면 우리는 응답을 해야함
  //요청종료 return res.end();
  //메세지 보내기 res.send("TXT");
  return res.send("HI MY NAME IS KIM");
});

app.get("/login", (req, res) => {
  return res.send("Login Page");
});

//서버 만들기 , listen(port,callback fn)
app.listen(PORT, () => {
  console.log("Server Listenin port 4000");
});
