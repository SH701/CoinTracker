# 💸 CoinTracker

> 실시간으로 암호화폐 시세를 확인하고, 24시간 가격 변동까지 한눈에 파악할 수 있는 웹 기반 시세 트래커입니다.  
> 정돈된 레이아웃과 반응형 디자인으로 데스크탑/모바일 모두 쾌적한 사용이 가능합니다.

---

## 🌟 주요 기능

- 📈 **실시간 시세 확인** (Bitcoin, Ethereum 등 상위 50개 코인)
- 🔁 **10분 간격 자동 업데이트** (React Query 사용)
- ✅ **24시간 가격 변화율 시각화** (상승/하락 색상 표시)
- 📱 **모바일 반응형 UI** – 모든 화면 크기에서 정렬 유지
- 🧹 **정렬 개선** – 가격, 이름, 변화율 깔끔하게 정렬
- 🔗 **코인 클릭 시 상세 페이지 이동 지원** (React Router 사용)

---

## 🛠 기술 스택

- **React**
- **TypeScript**
- **styled-components**
- **@tanstack/react-query**
- **React Router**
- **Cryptocurrency API** (https://api.coinpaprika.com)
- **GitHub Pages** 배포

---

## 📁 프로젝트 구조

```
CoinTracker/
- ├── public/                         # 정적 파일 (favicon, index.html 등)
- │   ├── index.html                  # 기본 HTML 템플릿
- │   ├── favicon.ico                 # 브라우저 탭 아이콘
- │   ├── logo192.png / logo512.png  # PWA 아이콘
- │   └── manifest.json              # 앱 메타 정보 (PWA용)
- │
- ├── src/                            # 주요 소스코드 폴더
- │   ├── routes/                     # 페이지 및 API 관련 구성
- │   │   ├── Coins.tsx              # 전체 코인 리스트 페이지
- │   │   ├── Coin.tsx               # 개별 코인 상세 페이지
- │   │   ├── Price.tsx              # 가격 정렬용 서브 컴포넌트
- │   │   ├── Chart.tsx              # (선택) 차트 화면 컴포넌트
- │   │   └── api.ts                 # 코인 목록, 가격 API 호출 함수
- │
- │   ├── App.tsx                    # 라우팅 및 전체 앱 구조
- │   ├── AppRouter.tsx              # React Router로 페이지 이동 설정
- │   ├── index.tsx                  # 앱 진입점 (ReactDOM 렌더링)
- │   ├── atom.ts                    # 상태 관리 (Recoil atom)
- │   ├── theme.ts                   # 다크/라이트 테마 설정
- │   └── styled.d.ts                # styled-components 타입 확장
- │
- ├── .gitignore                     # Git 제외 파일 설정
- ├── package.json                   # 프로젝트 의존성 및 스크립트
- ├── package-lock.json              # 의존성 버전 잠금 파일
- ├── tsconfig.json                  # TypeScript 컴파일 설정
- └── README.md                      # 프로젝트 설명 문서
```

```markdown
- `public/`: 정적 파일과 HTML 템플릿을 포함하는 폴더
- `src/routes/`: 주요 페이지 및 API 모듈 관리
- `AppRouter.tsx`: 라우팅을 한 곳에서 관리
- `theme.ts`: styled-components 기반의 테마 지원
- `atom.ts`: Recoil 기반 전역 상태 저장소
