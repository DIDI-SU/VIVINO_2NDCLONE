import { useEffect, useState } from 'react';
import axios from 'axios';
const { Kakao } = window;
const Login = () => {
  const Random = parseInt(Math.random() * 3);
  const [image, setImage] = useState(0);
  //1초 마다 사진을 랜덤으로 보여주기
  // useEffect(() => {
  //   setInterval(() => {
  //     setImage(Random);
  //   }, 5000);
  // }, []);
  // const KakaoLogin = () => {
  //   Kakao.Auth.login({success:(res)=> { axios.get} , fail:});
  // };

  return (
    <section className=" bg-white  rounded-lg  w-2/4  h">
      <div className="h-1/2 w-1/2  ">
        <img className="rounded-l-lg" src={`/images/login/${Random + 1}.jpg`} />
      </div>
      <div></div>
    </section>
  );
};

export default Login;
