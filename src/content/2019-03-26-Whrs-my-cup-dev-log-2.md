---
title: "[Whr's my cup 개발기] 2.System Design"
date: "2019-03-26"
draft: false
path: "/blog/2019-03-26-Whrs-my-cup-dev-log-2"
category: "tech"
---

## Client flow

---

클라이언트 플로우는 다음와 같이 구성하였다.

![clientFlow](../images/clientFlow.png)



## Component Design

---

  각각의 컴포넌트를 작성할 때 ios와 android 두 플랫폼 환경을 지원할 수 있도록 작성해야 했다. React Native의 장점중 하나가 하나의 javascript 코드를 이용하여 두 플랫폼으로 동시에 빌드할 수 있는 것인데, 모든 패키지가 두 플랫폼을 모두 지원하는 것이 아니라서 코드를 분기하여 처리해주어야 했다.

- ios와 android의 View가 다르게 보이는 이슈가있다. 예를 들면 ios의 header title의 기본 위치는 가운데 정렬 인데, android의 header title의 기본위치는 왼쪽 정렬이다.

- 제스처의 기본값도 두 환경이 다르다. ios의 경우 swip back 제스처의 기본값이 True 이지만, android의 경우 기본적으로 back 버튼이 존재하기 때문에 swip back 제스처의 기본값은 Flase이다. 

사실 기능적인 구현보다, ios 사용자와 android사용자의 익숙한 UX가 다르기 때문에 이에대한 고민이 가장 컸다. 



## Collaborative Filtering ( recomender system)

---

  이번 서비스에서 가장 핵심이 되는 기능중에 하나가 바로 이 CF( Collaborative Filtering )을 이용한 추천 시스템이다. 짧은 프로젝트 기간이었지만, 단순히 데이터를 보여주는것 보다 좀더 의미있는 데이터로 가공해서 사용자에게 보여주고 싶은 마음이 컷다. 추천 시스템은 이젠 거의 모든 서비스의 기본이 된다고 해도 과언이 아닐만큼 중요한 부분으로 자리하고 있다.

기본적인 기계학습과 데이터간 유사도 측정에대한 부분을 빠르게 학습하여 가장 최적이라 생각하는 라이브러리를 선택하여 추천시스템을 적용시켰다. 라이브러리를 사용하여 구현하긴하지만 기본적인 User-base CF 모델을 디자인하는것은 나의 몫이었다.

