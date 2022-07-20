import KakaoLogin from 'react-kakao-login';
// const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_KEY}&redirect_uri=${process.env.REACT_APP_KAKAO_LOGIN_URL}&response_type=code`;

const Login = () => {
  const Random = parseInt(Math.random() * 3);

  return (
    <section className=" flex items-center justify-between bg-white  rounded-lg  w-2/4  h">
      <div className="h-1/2 w-1/2  ">
        <img
          className="rounded-l-lg"
          src={`/images/login/${Random + 1}.jpg`}
          alt="로그인창 이미지"
        />
      </div>
      <div className=" flex items-center justify-between mx-auto">
        <KakaoLogin
          token={process.env.REACT_APP_KAKAO_KEY}
          onSuccess={message => console.log(message)}
          onFail={err => console.log(err)}
        >
          <button id="custom-login-btn">
            <img
              src="//k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg"
              width="222"
              alt="카카오 로그인 버튼"
            />
          </button>
        </KakaoLogin>
      </div>
    </section>
  );
};

export default Login;
