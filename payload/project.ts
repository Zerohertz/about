import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '무역 서류 정보 추출 모델 개발',
      startedAt: '2024-02',
      where: 'AgileSoDA',
      descriptions: [
        {
          content: '비정형 서류 데이터의 분류를 위한 AI OCR 기반 문서 분류 파이프라인 개발',
        },
        {
          content: 'Pre-labeling을 통한 학습 데이터 annotation 가속화',
        },
        {
          content: '도전적 요구사항이 포함된 annotation의 검수를 위한 Streamlit 기반 GUI 개발',
        },
        {
          content: '고객사 요건 및 무역 서류의 종류에 따른 정보 추출 모델 개발',
        },
      ],
    },
    {
      title: 'Python package 개발 및 CI/CD pipeline 구축',
      startedAt: '2023-11',
      where: 'Personal Project',
      descriptions: [
        {
          content: 'Zerohertz/zerohertzLib (GitHub)',
          href: 'https://github.com/Zerohertz/zerohertzLib',
          weight: 'MEDIUM',
        },
        {
          content: 'Jenkins 기반 CI/CD pipeline 구축',
          href: 'https://jenkins.zerohertz.xyz/blue/organizations/jenkins/zerohertzLib/activity',
          postImage:
            'https://github-production-user-asset-6210df.s3.amazonaws.com/42334717/284292801-35b6affc-eb9d-43c9-abf9-4c82b2963d39.png',
        },
        {
          content: 'Sphinx를 통한 문서화',
          href: 'https://zerohertz.github.io/zerohertzLib/',
          postImage:
            'https://github-production-user-asset-6210df.s3.amazonaws.com/42334717/284295191-de5f331b-5825-4dfb-a49c-2565835c93f0.png',
        },
        {
          content: 'PyPI 배포',
          href: 'https://pypi.org/project/zerohertzLib/',
          postImage:
            'https://github-production-user-asset-6210df.s3.amazonaws.com/42334717/284295266-1f4a2b20-1046-4188-b2a8-3152756a3f08.png',
        },
      ],
    },
    {
      title: '전/후처리, 시각화, 모델 backend 구성 및 호출을 위한 사내 Python package 개발',
      startedAt: '2023-10',
      where: 'AgileSoDA',
      descriptions: [
        {
          content: 'Docstring 기반 package 내 함수 및 클래스에 대한 문서화 수행',
        },
        {
          content: 'Type hint 및 PyTest를 통한 package의 건전성 유지',
        },
        {
          content: '다양한 서류 이미지의 전처리 및 모델 추론 결과의 시각화 파이프라인 획일화',
        },
        {
          content:
            'Cython 기반의 알고리즘 개선을 통한 STD (Scene Text Detection) 모델의 후처리 속도 개선 (74.12% 단축)',
          href: 'https://github.com/Zerohertz/pan_pp.pytorch/tree/SpeedImprovement',
          postImage:
            'https://github-production-user-asset-6210df.s3.amazonaws.com/42334717/282500746-76966f28-efac-49cf-9a4d-3bc9560bad4c.png',
        },
        {
          content: 'Triton Inference Server를 위한 클래스 획일화 및 상속 구조 개발',
        },
      ],
    },
    {
      title: 'AI 기반 OCR Solution TwinReader 연구개발',
      startedAt: '2023-02',
      where: 'AgileSoDA',
      descriptions: [
        {
          content: 'TwinReader 제품 소개 페이지',
          href: 'http://www.agilesoda.ai/sub/twin_reader.php',
          weight: 'MEDIUM',
        },
        {
          content:
            '문서 영역 탐지 모델, 회전 문서 분류 모델, STD 모델, 서명 및 체크 박스 인식 모델 연구개발',
        },
        {
          content: '모델 구조 개선을 통한 회전된 문서의 오분류 문제 해결 (정확도 2.01%p 향상)',
          postImage:
            'https://github-production-user-asset-6210df.s3.amazonaws.com/42334717/282508245-61cda1fc-671f-48b4-92e6-30754f70d1eb.png',
        },
        {
          content: '모델 배포를 위한 Kubernetes 기반 Triton Inference Server 개발',
        },
        {
          content: 'TensorRT를 통한 STD 모델의 추론 시간 개선 (87.31% 단축)',
          href: 'https://github.com/Zerohertz/PANPP/tree/TensorRT',
          postImage:
            'https://github-production-user-asset-6210df.s3.amazonaws.com/42334717/282501186-e0440b91-cb4d-449e-a4ba-85d284fff658.png',
        },
        {
          content: 'Triton Inference Server 내 치명적 결함 수정 (GPU Memory 47.9% 감소)',
          postImage:
            'https://github.com/Zerohertz/Zerohertz/assets/42334717/3f36b1fb-7213-4d79-b3dd-0a3938a5285a',
        },
      ],
    },
    {
      title: 'AI 기반 자동차 파손 및 심도 인식 제품 TwinCar 연구개발',
      startedAt: '2023-11',
      endedAt: '2024-02',
      where: 'AgileSoDA',
      descriptions: [
        {
          content: 'TwinCar 제품 소개 페이지',
          href: 'http://www.agilesoda.com/sub/twin_car.php',
          weight: 'MEDIUM',
        },
        { content: 'PoC 수행을 위한 차종 분류 모델 개발' },
        {
          content:
            '필터모델, 부품인식모델, 수리유형모델, 손상유형모델 연구개발 및 모델 추론 파이프라인 개발',
        },
        { content: 'Streamlit을 통한 demo 페이지 개발 및 Kubernetes 기반 배포' },
      ],
    },
    {
      title: '화상 환자 진료보조 AI 서비스 개발, 정보통신산업진흥원',
      startedAt: '2023-04',
      endedAt: '2023-11',
      where: 'AgileSoDA',
      descriptions: [
        { content: '화상 환자의 환부 segmentation 및 심각도 진단 모델 개발' },
        {
          content: '모델 배포를 위한 Triton Inference Server와 API 설계 및 개발',
          postImage:
            'https://github-production-user-asset-6210df.s3.amazonaws.com/42334717/278788717-4639cd97-0363-4d66-8f84-a1ade9a80177.png',
        },
      ],
    },
    {
      title: 'Kubernetes 기반 Home Server 구축',
      startedAt: '2023-08',
      endedAt: '2023-09',
      where: 'Personal Project',
      descriptions: [
        {
          content: 'Zerohertz/k8s-on-premise (GitHub)',
          weight: 'MEDIUM',
          href: 'https://github.com/Zerohertz/k8s-on-premise',
          postImage:
            'https://github-production-user-asset-6210df.s3.amazonaws.com/42334717/279639181-6d0a07c4-a99f-43f3-8632-236ecac7ced9.png',
        },
        {
          content: 'Blog posts',
          href: 'https://zerohertz.github.io/tags/home-server/index.html',
          postImage:
            'https://github-production-user-asset-6210df.s3.amazonaws.com/42334717/260747675-647d4089-f58f-4a46-b580-ed2760f52623.png',
        },
      ],
    },
    {
      title: '분류 모자이크',
      startedAt: '2023-01',
      endedAt: '2023-07',
      where: 'BOAZ',
      descriptions: [
        {
          content: 'Team-BoonMoSa (GitHub)',
          weight: 'MEDIUM',
          href: 'https://github.com/Team-BoonMoSa',
          postImage:
            'https://user-images.githubusercontent.com/42334717/227575043-5c65230c-f283-46b0-a46c-0569ee20cd56.gif',
        },
        { content: 'YOLOv5 기반 logo segmentation 모델 개발' },
        {
          content: 'Amazon EC2 Inf1 기반 모델 배포 서버 구축',
          postImage:
            'https://github-production-user-asset-6210df.s3.amazonaws.com/42334717/253738363-d1cbc5e5-e0a1-4763-adeb-6657568a6a85.png',
        },
      ],
    },
    {
      title: '',
      startedAt: '2018-06',
      endedAt: '2023-01',
      where: 'Konkuk University',
      descriptions: [
        {
          content:
            '권취 롤(copper film) 내부 응력 분포를 고려한 Web handling 불량 개선 방안 연구, SK 넥실리스',
          weight: 'BOLD',
          descriptions: [
            { content: 'SiM Lab. (2022. 10 ~ 2023. 01)' },
            { content: '제품 운송 진동, 충격에 따른 가속도 데이터 특징 분석' },
          ],
        },
        {
          content: '미래형 센서를 위한 초정밀 대면적 생산시스템 전문 인력 양성, 한국연구재단',
          weight: 'BOLD',
          descriptions: [{ content: 'SiM Lab. (2021. 09 ~ 2023. 01)' }],
        },
        {
          content: '소형위성 분리용 어댑터 최적설계, 스페이스베이',
          weight: 'BOLD',
          descriptions: [
            { content: 'SiM Lab. (2022. 09 ~ 2023. 01)' },
            { content: '모터 동특성 분석 모델 개발 및 최적화' },
          ],
        },
        {
          content:
            '이차전지전극을 위한 멀티코터가 구비된 지능형 롤투롤 코팅시스템 개발, 산업통상자원부',
          weight: 'BOLD',
          descriptions: [
            { content: 'SiM Lab. (2022. 05 ~ 2023. 01)' },
            { content: 'Roll-to-Roll 연속 공정 내 편심 롤 진단을 위한 신호 처리 및 모델 개발' },
          ],
        },
        {
          content:
            '대면적 고효율 기능성 필름 대량 생산을 위한 스마트 인쇄 전자 제조 기술 개발, 한국연구재단',
          weight: 'BOLD',
          descriptions: [
            { content: 'SiM Lab. (2021. 01 ~ 2022. 12)' },
            {
              content:
                'Roll-to-Roll slot-die coating 공정의 코팅층 진단 모델 및 Graphic User Interface 개발',
            },
          ],
        },
        {
          content: '열주름 해석을 통한 보정 기술 및 정밀 장력제어 기술, LG 전자',
          weight: 'BOLD',
          descriptions: [
            { content: 'SiM Lab. (2022. 03 ~ 2022. 12)' },
            { content: '롤 정렬도 불량에 따른 사행량 예측 모델 개발' },
          ],
        },
        {
          content:
            '웹 핸들링 기반 롤 배치 최적화 및 Tilting에 따른 사행/주름 분석, LG 에너지솔루션',
          weight: 'BOLD',
          descriptions: [
            { content: 'SiM Lab. (2022. 05 ~ 2022. 12)' },
            { content: '롤 정렬도 불량에 따른 사행량 예측 모델 개발' },
          ],
        },
        {
          content:
            '자동차용 배터리 전극 소재 떨림 최소화를 위한 건조 시스템 해석 및 공기 부양 유닛 노즐 최적화, LG 에너지솔루션',
          weight: 'BOLD',
          descriptions: [
            { content: 'SiM Lab. (2022. 04 ~ 2022. 11)' },
            { content: '소재 온도 분포 파악을 위한 열전도도 프로파일 개발' },
          ],
        },
        {
          content: 'R2R 인쇄 유연컴퓨터개발 연구센터, 한국연구재단',
          weight: 'BOLD',
          descriptions: [
            { content: 'SiM Lab. (2021. 06 ~ 2022. 05)' },
            {
              content:
                'Roll-to-Roll slot-die coating 공정의 meniscus vision data 기반 진행 방향 코팅층 두께 예측 모델 개발',
            },
            {
              content: 'Roll-to-Roll 공정의 장력 전달 모델 시뮬레이터 개발',
              href: 'https://github.com/Zerohertz/Roll-to-Roll-Simulation-GUI',
            },
            {
              content: 'Roll-to-Roll 공정의 수학적 사행 모델 시뮬레이터 개발',
              href: 'https://github.com/Zerohertz/Lateral-Dynamics-due-to-Roll-Misalignment',
            },
          ],
        },
        {
          content: '머신러닝 기반의 지능형 친환경 머서라이징 시스템 실증, 한국산업기술평가관리원',
          weight: 'BOLD',
          descriptions: [
            { content: 'SiM Lab. (2021. 04 ~ 2022. 05)' },
            { content: 'Vision data 기반 머서라이징 공정 모니터링 시스템 개발' },
          ],
        },
        {
          content: '복합형상 부품가공용 스마트 컴팩트 라인센터 개발, 한국산업기술평가관리원',
          weight: 'BOLD',
          descriptions: [
            { content: 'SiM Lab. (2021. 01 ~ 2021. 12)' },
            {
              content: 'Bearing 상태 진단 모델 및 Graphic User Interface 개발',
              href: 'https://github.com/Zerohertz/Bearing-condition-monitoring-GUI',
            },
          ],
        },
        {
          content:
            '실감형 실내 사이클링을 위한 2자유도 실내 사이클링 플랫폼 및 가상현실기반 고품질 사이클링 시뮬레이션기술 개발, 중소벤처기업진흥공단',
          weight: 'BOLD',
          descriptions: [
            { content: 'MRV Lab. (2019. 05 ~ 2020. 05)' },
            {
              content: 'Unreal Engine 기반 가상 현실 환경 구축',
            },
          ],
        },
        {
          content: '스마트 커뮤니티 폴리싱 시스템(Googi) 개발, 한국연구재단',
          weight: 'BOLD',
          descriptions: [
            { content: 'MRV Lab. (2018. 06 ~ 2019. 11)' },
            {
              content: 'Unreal Engine 기반 가상 현실 환경 구축',
            },
          ],
        },
      ],
    },
  ],
};

export default project;
