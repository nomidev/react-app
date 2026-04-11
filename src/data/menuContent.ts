export interface MenuItemContent {
  description: string
  details: string[]
}

export const menuContent: Record<string, MenuItemContent> = {
  home: {
    description: '회사에 대한 소개를 확인하세요.',
    details: [
      '저희는 2020년 설립된 기술 회사입니다.',
      '고객 중심의 솔루션을 제공합니다.',
      '전문가 팀이 24/7 지원합니다.',
    ],
  },
  'home-overview': {
    description: '기업의 기본 정보입니다.',
    details: ['설립년도: 2020년', '직원수: 50명', '이용 고객: 1000+'],
  },
  'home-overview-intro': {
    description: '저희 회사의 소개입니다.',
    details: [
      '혁신적인 기술로 세상을 바꾸는 회사',
      '고객 만족도: 98%',
      '업계 선두주자로서의 입지 확보',
    ],
  },
  'home-overview-features': {
    description: '주요 기능을 소개합니다.',
    details: [
      '실시간 데이터 분석',
      '클라우드 기반 인프라',
      'AI 기반 자동화 시스템',
    ],
  },
  'home-news': {
    description: '최신 뉴스와 소식입니다.',
    details: [
      '2024년 제1분기 실적 발표',
      '새로운 파트너십 체결',
      '기술 혁신상 수상',
    ],
  },
  'home-news-latest': {
    description: '가장 최신의 뉴스입니다.',
    details: [
      '[2024.04.10] 신제품 출시 발표',
      '[2024.04.08] 투자 라운드 성공',
      '[2024.04.05] 국제 회의 참석',
    ],
  },
  'home-news-archive': {
    description: '지난 뉴스 보관소입니다.',
    details: [
      '[2024.03] 지난달 주요 뉴스',
      '[2024.02] 2월 주요 소식',
      '[2024.01] 연초 비전 발표',
    ],
  },
  products: {
    description: '저희의 주요 제품 라인업입니다.',
    details: [
      'Product A: 엔터프라이즈 솔루션',
      'Product B: 중소기업용 솔루션',
      'Product C: 개인용 솔루션',
    ],
  },
  'products-category1': {
    description: '카테고리 1 제품군입니다.',
    details: [
      '제품 1: 고급 기능 탑재',
      '제품 2: 표준 기능 제공',
      '제품 3: 기본 기능 제공',
    ],
  },
  'products-cat1-item1': {
    description: '제품 1에 대한 상세 정보입니다.',
    details: ['가격: $99/월', '사용자 수: 무제한', '지원: 프리미엄 24/7'],
  },
  'products-cat1-item2': {
    description: '제품 2에 대한 상세 정보입니다.',
    details: ['가격: $49/월', '사용자 수: 100명까지', '지원: 업무시간 지원'],
  },
  'products-cat1-item3': {
    description: '제품 3에 대한 상세 정보입니다.',
    details: ['가격: $9/월', '사용자 수: 10명까지', '지원: 커뮤니티 지원'],
  },
  'products-category2': {
    description: '카테고리 2 제품군입니다.',
    details: ['제품 4: 프로페셔널 에디션', '제품 5: 스타터 에디션'],
  },
  'products-cat2-item1': {
    description: '제품 4에 대한 상세 정보입니다.',
    details: [
      '고급 분석 도구 포함',
      'API 접근 가능',
      '커스터마이징 지원',
    ],
  },
  'products-cat2-item2': {
    description: '제품 5에 대한 상세 정보입니다.',
    details: [
      '기본 분석 도구',
      '웹 인터페이스',
      '자동 업데이트',
    ],
  },
  services: {
    description: '저희 서비스를 소개합니다.',
    details: [
      '컨설팅 서비스',
      '기술 지원 서비스',
      '구현 및 운영 서비스',
    ],
  },
  'services-support': {
    description: '고객 지원 서비스입니다.',
    details: [
      'FAQ 및 문서',
      '기술 지원팀',
      '커뮤니티 포럼',
    ],
  },
  'services-support-faq': {
    description: 'FAQ 목록입니다.',
    details: [
      'Q: 어떻게 시작하나요?',
      'Q: 가격은 얼마인가요?',
      'Q: 환불 정책은?',
    ],
  },
  'services-support-contact': {
    description: '문의 방법입니다.',
    details: [
      '이메일: support@bizweb.com',
      '전화: 1234-5678',
      '채팅: 웹사이트 우측 하단',
    ],
  },
  'services-consulting': {
    description: '컨설팅 서비스입니다.',
    details: [
      '비즈니스 전략 컨설팅',
      '기술 아키텍처 설계',
      '운영 최적화 컨설팅',
    ],
  },
  'services-consulting-business': {
    description: '비즈니스 컨설팅입니다.',
    details: [
      '디지털 전환 전략',
      '업무 프로세스 개선',
      '조직 구조 최적화',
    ],
  },
  'services-consulting-technical': {
    description: '기술 컨설팅입니다.',
    details: [
      '클라우드 마이그레이션',
      '보안 전략 수립',
      '성능 최적화',
    ],
  },
}
