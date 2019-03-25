---
title: "[Blog] Start a blog with Gatsby and Netlify"
date: "2019-03-23"
draft: false
path: "/blog/2019-03-23-gatsby-start"
---

## Intro

기존에 Jekyll 과 github page를 이용해서 블로그를 하고 있었다. Jekyll은 정적 웹사이트를 만들어주는 generator인데, 마크다운 형태로 작성된 소스를 빌드하여 HTML로 만들어주는 툴이다. 커스텀이 매우 자유로웠지만, 내가 잘 모르는 Ruby로 되어있어서 누군가가 만들어논 틀을 살짝 살짝 수정하는 정도였다.

그러던 중 Gatsby라는것을 알게 되었다. Facebook에서 만든 정적 사이트 생성기이다. 이제 살짝 둘러본 정도라 어떻게 돌아가는지 세세히 알지는 못하지만, 리액트로 되어었다는 부분이 매우 매력적이었다. 요즘 한창 리액트를 다루고 있던터라 더욱 반가웠다.

간단하게 사용해본 소감은… 좋다. 엄청 빠르다. 친숙하게 모든것을 커스텀 할 수 있어서 좋다. 추가적인 모듈을 설치할 때도 npm을 이용해서 간편하게 설치할 수 있다.

### Start Gatsby

---

#### Install the Gatsby CLI

```bash
$ npm install -g gatsby-cli
```

#### Create a new site

```bash
$ gatsby new <YOUR_BLOG_NAME>
```

#### Start development server

```bash
$ cd <YOUR_BLOG_NAME>
$ gatsby develop
```

이 작업까지 끝났다면 `localhost:8000` 으로 접속하면 만들어진 블로그의 모습을 볼 수 있다. `src` 부분을 수정해서 자기만의 블로그를 만들면 된다.

어느정도 기본적인 틀이 만들어졌다면 배포를 해보자

### Start Netlify

---

Netlify는 웹/응용 프로그램을 제작하는데 필요한 쉽고 빠른 서비스를 제공하는 PaaS중 하나이다. ( Platform as a Service) GitHub 계정을 연동해서 쉬운 호스팅을 제공한다. Netlify는 무료 SSL을 지원해서 정말 간단한 절차로 HTTPS를 사용할 수 있다.

Netlify에 가입하여 github계정을 연동하였다면, 프로젝트를 수정해서 연결한 repo에 push하기만 하면 Netlify에서 자동으로 빌드하여 배포해준다.
