import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaBook, 
  FaExternalLinkAlt, 
  FaQuoteLeft, 
  FaTimes, 
  FaExpand, 
  FaChevronDown, 
  FaChevronUp, 
  FaChevronLeft,
  FaChevronRight,
  FaCheckCircle, 
  FaUsers, 
  FaLayerGroup,
  FaClock,
  FaMapMarkerAlt,
  FaImages,
  FaFileAlt,
  FaSearchPlus,
  FaSearchMinus,
  FaUndo
} from 'react-icons/fa';
import { SiGumroad } from 'react-icons/si';
import { useLanguage } from '../contexts/LanguageContext';

const DEFAULT_PREVIEW_PAGES = [
  {
    id: 'front',
    pageNumber: 1,
    bookPage: 'Front Cover',
    title: {
      en: 'Front Cover',
      ja: '表紙'
    },
    shortTitle: {
      en: 'Cover',
      ja: '表紙'
    },
    caption: {
      en: "Architecting for Scale & Chaos: The Solution Architect's Handbook on Distributed Systems, Fault Tolerance, and Real-World Resilience",
      ja: '表紙: 分散システム、耐障害性、実戦的レジリエンスの体系的ハンドブック'
    },
    src: '/images/publications/books/arch_scale_chaos/arch_scale_and_chaos_cover_page_front.jpg',
    tag: {
      en: 'Front Cover',
      ja: '表紙'
    }
  },
  {
    id: 'scope',
    pageNumber: 2,
    bookPage: 'p. xxi',
    title: {
      en: 'Curriculum & Architecture Roadmap',
      ja: 'カリキュラム＆全体ロードマップ'
    },
    shortTitle: {
      en: 'Roadmap',
      ja: 'ロードマップ'
    },
    caption: {
      en: 'Figure 1: How This Book Is Organized — 5 Parts and 16 Chapters mapped as an end-to-end architecture pipeline',
      ja: '図1: 本書の構成 — 思考法から大規模設計、カオス耐性、実事例、運用まで全5部・16章のパイプライン'
    },
    src: '/images/publications/books/arch_scale_chaos/2_the_scope_page.jpg',
    tag: {
      en: 'Roadmap (p. xxi)',
      ja: 'ロードマップ (p. xxi)'
    }
  },
  {
    id: 'latency',
    pageNumber: 3,
    bookPage: 'p. 36',
    title: {
      en: 'The Latency Ladder & Sizing',
      ja: 'レイテンシのはしご・概算計算'
    },
    shortTitle: {
      en: 'Latency',
      ja: 'レイテンシ'
    },
    caption: {
      en: 'Figure 3.1: Hardware & Network Latency across 8 orders of magnitude (from L1 CPU cache to trans-Pacific round trips)',
      ja: '図3.1: ハードウェア＆ネットワークレイテンシ — L1キャッシュ(0.5ns)から太平洋横断(110ms)まで8桁の比較'
    },
    src: '/images/publications/books/arch_scale_chaos/3_the_l1_cache_page.jpg',
    tag: {
      en: 'Mental Models (p. 36)',
      ja: '思考モデル (p. 36)'
    }
  },
  {
    id: 'scalability',
    pageNumber: 4,
    bookPage: 'p. 61',
    title: {
      en: 'Multi-Tier Caching Funnel',
      ja: '多層キャッシュファネル'
    },
    shortTitle: {
      en: 'Caching',
      ja: 'キャッシュ'
    },
    caption: {
      en: 'Figure 5.1: 4-tier caching topology reducing DB read load to 1% & Mercari 2017 CDN switch outage analysis',
      ja: '図5.1: DB負荷を1%に抑える多層キャッシュ構造 ＆ メルカリ2017年CDN切り替え障害の実例分析'
    },
    src: '/images/publications/books/arch_scale_chaos/4_the_scalability_page.jpg',
    tag: {
      en: 'Scalability (p. 61)',
      ja: 'スケーラビリティ (p. 61)'
    }
  },
  {
    id: 'resilience',
    pageNumber: 5,
    bookPage: 'p. 107',
    title: {
      en: 'Defense in Depth Architecture',
      ja: '深層防御アーキテクチャ'
    },
    shortTitle: {
      en: 'Resilience',
      ja: '深層防御'
    },
    caption: {
      en: 'Figure 8.6: Composing rate limiters, retries with jitter, circuit breakers, bulkheads, and unified fallbacks',
      ja: '図8.6: レート制限、ジッター付きリトライ、遮断、隔壁、フォールバックを単一呼び出し経路に統合する深層防御'
    },
    src: '/images/publications/books/arch_scale_chaos/5_resilience_and_chaos_page.jpg',
    tag: {
      en: 'Resilience (p. 107)',
      ja: '耐障害性 (p. 107)'
    }
  },
  {
    id: 'flash-sales',
    pageNumber: 6,
    bookPage: 'p. 149',
    title: {
      en: 'Flash Sales Pipeline Blueprint',
      ja: '超高並発フラッシュセール設計'
    },
    shortTitle: {
      en: 'Flash Sales',
      ja: 'フラッシュセール'
    },
    caption: {
      en: 'Figure 12.1: 3-tier architecture for 100x traffic spikes: edge waiting room, atomic in-memory decrement, async settlement',
      ja: '図12.1: 100倍のアクセス集中を捌く3層アーキテクチャ（エッジ待合室・アトミック在庫引落・非同期決済）'
    },
    src: '/images/publications/books/arch_scale_chaos/6_signature_case_page.jpg',
    tag: {
      en: 'Case Study (p. 149)',
      ja: '実戦事例 (p. 149)'
    }
  },
  {
    id: 'atomic-lua',
    pageNumber: 7,
    bookPage: 'p. 152',
    title: {
      en: 'Atomic Stock Reservation Script',
      ja: 'アトミック在庫予約スクリプト'
    },
    shortTitle: {
      en: 'Lua Script',
      ja: '本番Luaコード'
    },
    caption: {
      en: 'Listing 12.1: Battle-tested atomic Redis Lua stock reservation script preventing overselling and race conditions under peak concurrency',
      ja: 'コード12.1: 超高並発下で在庫オーバーセリングと競合状態を完全に防止するRedis Luaスクリプト'
    },
    src: '/images/publications/books/arch_scale_chaos/7_prevents_race_condition_page.jpg',
    tag: {
      en: 'Production Code (p. 152)',
      ja: '本番コード (p. 152)'
    }
  },
  {
    id: 'ai-llm',
    pageNumber: 8,
    bookPage: 'p. 175',
    title: {
      en: 'Enterprise AI & LLM Gateway',
      ja: '本番AI/LLMゲートウェイ'
    },
    shortTitle: {
      en: 'AI Gateway',
      ja: 'AI/LLM基盤'
    },
    caption: {
      en: 'Figure 14.1: Production AI Gateway with pgvector semantic cache, hybrid RAG, model fallbacks & OpenAI Dec 2024 outage analysis',
      ja: '図14.1: pgvectorセマンティックキャッシュ、ハイブリッドRAG、モデルフォールバックを備えたAIゲートウェイ'
    },
    src: '/images/publications/books/arch_scale_chaos/8_modern_frontiers_llm_page.jpg',
    tag: {
      en: 'Modern AI (p. 175)',
      ja: 'AI基盤 (p. 175)'
    }
  },
  {
    id: 'playbook',
    pageNumber: 9,
    bookPage: 'p. 201',
    title: {
      en: '20-Point Production Scorecard',
      ja: '本番準備度スコアカード'
    },
    shortTitle: {
      en: 'Scorecard',
      ja: '準備度スコアカード'
    },
    caption: {
      en: 'Table 16.1 & Figure 16.1: The 20-Point Distributed Systems Production Readiness Checklist and launch go/no-go scorecard',
      ja: '表16.1＆図16.1: 分散システム本番リリース可否を判定する20項目の必須チェックリストと準備度スコアカード'
    },
    src: '/images/publications/books/arch_scale_chaos/9_the_playbook_page.jpg',
    tag: {
      en: 'Playbook (p. 201)',
      ja: 'プレイブック (p. 201)'
    }
  },
  {
    id: 'back',
    pageNumber: 10,
    bookPage: 'Back Cover',
    title: {
      en: 'Back Cover Summary',
      ja: '裏表紙'
    },
    shortTitle: {
      en: 'Back Cover',
      ja: '裏表紙'
    },
    caption: {
      en: 'Back Cover: 16 Chapters • 93 Diagrams • 56 Real Incidents • 60 Scenarios — "Every system fails. Great architects decide how."',
      ja: '裏表紙: 全16章・93図解・56実障害事例・60実戦シナリオ — 「あらゆるシステムは破綻する。優れた設計者がその壊れ方を決める。」'
    },
    src: '/images/publications/books/arch_scale_chaos/arch_scale_and_chaos_cover_page_back.jpg',
    tag: {
      en: 'Back Cover',
      ja: '裏表紙'
    }
  }
];

const BookCard = ({ pub = {}, index = 0 }) => {
  const { t, language } = useLanguage();
  const langKey = language === 'ja' ? 'ja' : 'en';

  // Build the 10-page preview list, allowing props override if provided
  const previewPages = (pub.previewPages || DEFAULT_PREVIEW_PAGES).map((page, idx) => {
    if (idx === 0 && pub.frontCover) return { ...page, src: pub.frontCover };
    if (idx === (pub.previewPages || DEFAULT_PREVIEW_PAGES).length - 1 && pub.backCover) return { ...page, src: pub.backCover };
    return page;
  });

  const [activePageIndex, setActivePageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isJourneyOpen, setIsJourneyOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1); // 1 to 2.5

  const currentPage = previewPages[activePageIndex] || previewPages[0];

  const handlePrevPage = useCallback(() => {
    setActivePageIndex((prev) => (prev > 0 ? prev - 1 : previewPages.length - 1));
    setZoomLevel(1); // Reset zoom on page flip
  }, [previewPages.length]);

  const handleNextPage = useCallback(() => {
    setActivePageIndex((prev) => (prev < previewPages.length - 1 ? prev + 1 : 0));
    setZoomLevel(1); // Reset zoom on page flip
  }, [previewPages.length]);

  const handleSelectPage = useCallback((idx) => {
    if (idx >= 0 && idx < previewPages.length) {
      setActivePageIndex(idx);
      setZoomLevel(1); // Reset zoom on page flip
    }
  }, [previewPages.length]);

  const handleZoomIn = useCallback(() => {
    setZoomLevel((prev) => Math.min(2.5, +(prev + 0.35).toFixed(2)));
  }, []);

  const handleZoomOut = useCallback(() => {
    setZoomLevel((prev) => Math.max(1, +(prev - 0.35).toFixed(2)));
  }, []);

  const handleResetZoom = useCallback(() => {
    setZoomLevel(1);
  }, []);

  const handleToggleZoom = useCallback(() => {
    setZoomLevel((prev) => (prev > 1 ? 1 : 1.6));
  }, []);

  // Keyboard navigation & zoom shortcuts for Lightbox
  useEffect(() => {
    if (!isLightboxOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        handlePrevPage();
      } else if (e.key === 'ArrowRight') {
        handleNextPage();
      } else if (e.key === 'Escape') {
        setIsLightboxOpen(false);
        setZoomLevel(1);
      } else if (e.key === '+' || e.key === '=') {
        e.preventDefault();
        handleZoomIn();
      } else if (e.key === '-' || e.key === '_') {
        e.preventDefault();
        handleZoomOut();
      } else if (e.key === '0') {
        e.preventDefault();
        handleResetZoom();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, handlePrevPage, handleNextPage, handleZoomIn, handleZoomOut, handleResetZoom]);

  const journeyParts = [
    {
      part: 'Part I',
      theme: 'Think',
      titleKey: 'part1Title',
      bullets: [
        language === 'ja' 
          ? '構文からシステム思考へ: 爆風半径（Blast Radius）、障害ドメイン、非機能要件（NFR）。'
          : 'Shifting from syntax to systemic thinking: blast radius, failure domains, and non-functional requirements (NFRs).',
        language === 'ja'
          ? '実戦的トレードオフ: CAP vs PACELC定理、結合度 vs 自律性。'
          : 'Pragmatic trade-offs: CAP vs. PACELC theorems, coupling vs. autonomy.',
        language === 'ja'
          ? '概算キャパシティ計算（QPS、ストレージ、メモリ、帯域幅の即時試算）。'
          : 'Back-of-the-envelope capacity estimation math (QPS, storage, memory, and bandwidth).'
      ]
    },
    {
      part: 'Part II',
      theme: 'Scale',
      titleKey: 'part2Title',
      bullets: [
        language === 'ja'
          ? '入口とトラフィックルーティング: L4 vs L7負荷分散、エッジキャッシュ、サービスメッシュ。'
          : 'Ingress and traffic routing: L4 vs. L7 load balancing, edge caching, and service meshes.',
        language === 'ja'
          ? 'スタンピード、雪崩、古い読み取りの惨事を防ぐ多層キャッシュアーキテクチャ。'
          : 'Multi-tier caching architectures without stampedes, avalanches, or stale-read disasters.',
        language === 'ja'
          ? 'イベント駆動デカップリング: Transactional Outboxパターン、べき等コンシューマー、キュー vs ストリーム。'
          : 'Event-driven decoupling: transactional outbox patterns, idempotent consumers, queues vs. streams.',
        language === 'ja'
          ? 'データ分割: シャーディングトポロジ、クォーラム、CQRS、分散Sagaオーケストレーション。'
          : 'Data partitioning: sharding topologies, quorums, CQRS, and distributed saga orchestrations.'
      ]
    },
    {
      part: 'Part III',
      theme: 'Survive Failure',
      titleKey: 'part3Title',
      bullets: [
        language === 'ja'
          ? '防御プリミティブ: サーキットブレーカー、バルクヘッド（隔壁）、ジッター付きバックオフ、適応型レート制限。'
          : 'Defensive primitives: circuit breakers, bulkheads, jittered backoff, and adaptive rate limits.',
        language === 'ja'
          ? 'グレースフルデグラデーション: インテリジェントな負荷遮断（Load Shedding）、リクエスト期限、フォールバック層。'
          : 'Graceful degradation: intelligent load shedding, request deadlines, and fallback tiers.',
        language === 'ja'
          ? '高可用性: 真のRTO/RPO算出、アクティブ-アクティブマルチリージョン、ゼロダウンタイムDBマイグレーション。'
          : 'High availability: calculating true RTO/RPO, active-active multi-region topologies, and zero-downtime database migrations.'
      ]
    },
    {
      part: 'Part IV',
      theme: 'Apply End-to-End',
      titleKey: 'part4Title',
      bullets: [
        language === 'ja'
          ? '物流＆ロボティクス: ストア＆フォワード、物理フェンシングトークン、ネットワーク分断下の二重ピッキング防止。'
          : 'Warehouse Logistics & Robotics: Store-and-forward architectures, physical fencing tokens, and preventing double-picks under network partitions.',
        language === 'ja'
          ? '高並発フラッシュセール: 仮想待合室、Redisアトミック在庫ロック、非同期決済突合。'
          : 'High-Concurrency Flash Sales: Virtual waiting rooms, Redis atomic inventory locks, and asynchronous payment reconciliation.',
        language === 'ja'
          ? '大規模ライブ通知エンジン: ファンアウトトポロジ、百万ソケット接続スケール、モバイルプッシュカスケード。'
          : 'Massive Live Notification Engine: Fan-out topologies, million-socket connection scaling, and mobile push cascades.',
        language === 'ja'
          ? '本番AI/LLMシステム: スケーラブルRAG、セマンティックベクトルキャッシュ、トークン予算管理、推論レイテンシ制御。'
          : 'Production AI & LLM Systems: Scalable Retrieval-Augmented Generation (RAG), semantic vector caching, token budget management, and inference latency control.'
      ]
    },
    {
      part: 'Part V',
      theme: 'Operate',
      titleKey: 'part5Title',
      bullets: [
        language === 'ja'
          ? 'モダン可観測性: 分散トレーシングコンテキスト、SLI/SLO、プロアクティブなカオスゲームデー。'
          : 'Modern observability: distributed tracing context, SLIs/SLOs, and proactive chaos game days.',
        language === 'ja'
          ? 'アーキテクトツール: 本番準備度スコアカード（Readiness Scorecard）、非難なき障害レビュー、進化的ADR。'
          : 'The Architect’s Tooling: Production Readiness Scorecard, blameless incident reviews, and evolutionary ADRs.'
      ]
    }
  ];

  const targetAudiences = [
    {
      role: language === 'ja' ? 'シニアエンジニア & テックリード' : 'Senior Engineers & Tech Leads',
      desc: language === 'ja' 
        ? 'アーキテクチャおよび大規模分散システム設計にステップアップし、実戦的なトレードオフ感覚を身につけたいエンジニア。'
        : 'Stepping into architecture and distributed system design with battle-tested trade-off math.'
    },
    {
      role: language === 'ja' ? 'ソリューションアーキテクト' : 'Solution Architects',
      desc: language === 'ja'
        ? '障害パターン、トレードオフ比較マトリクス、視覚的ブループリントを手元に備えたい設計者。'
        : 'Looking for battle-tested patterns, trade-off matrices, and visual blueprints to defend design choices.'
    },
    {
      role: language === 'ja' ? 'エンジニアリングマネージャー & 責任者' : 'Engineering Managers & Directors',
      desc: language === 'ja'
        ? 'エラーバジェット、SLO、チームの爆風半径オーナーシップのための実効的なフレームワークを求めるリーダー。'
        : 'Wanting actionable frameworks for error budgets, SLOs, and team blast-radius ownership.'
    }
  ];

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: index * 0.15 }}
        className="relative"
      >
        {/* Glow ambient background effect */}
        <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-500 via-orange-500 to-rose-600 rounded-3xl blur-xl opacity-30 dark:opacity-40 -z-10 group-hover:opacity-60 transition duration-700"></div>

        <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl dark:shadow-gray-950/60 overflow-hidden border-2 border-amber-400/40 dark:border-amber-500/30 transition-all duration-300">
          {/* Top Decorative Gradient Ribbon */}
          <div className="h-3.5 bg-gradient-to-r from-amber-500 via-orange-500 to-rose-600 relative overflow-hidden">
            <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
          </div>

          <div className="p-6 sm:p-8 lg:p-12">
            {/* Header Badge Row */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-gray-100 dark:border-gray-800">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-amber-500 via-orange-500 to-rose-600 text-white shadow-md shadow-orange-500/20">
                  <FaBook className="text-xs" />
                  {t('items.research.items.scale-and-chaos.featuredBadge', 'FEATURED BOOK')}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-amber-100 text-amber-900 dark:bg-amber-950/70 dark:text-amber-300 border border-amber-300 dark:border-amber-700">
                  <FaClock className="text-xs" />
                  {t('items.research.items.scale-and-chaos.editionBadge', 'First Edition • October 2026')}
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 text-xs font-medium text-gray-500 dark:text-gray-400">
                  <FaMapMarkerAlt className="text-rose-500" />
                  Tokyo, Japan
                </span>
              </div>

              {/* Price Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-700 text-emerald-800 dark:text-emerald-300 text-xs font-bold shadow-xs">
                <span>{t('items.research.items.scale-and-chaos.pricing', 'Pay-What-You-Want (¥999+ / ~$6.50)')}</span>
              </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left Column: Interactive Book Cover & Page Preview Display */}
              <div className="lg:col-span-5 flex flex-col items-center">
                {/* 3D Book Frame with interactive page view */}
                <div className="relative group/cover w-full max-w-sm sm:max-w-md">
                  {/* Outer ambient glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 via-orange-500/20 to-purple-600/30 rounded-2xl blur-xl group-hover/cover:blur-2xl transition-all duration-300"></div>

                  <motion.div
                    key={activePageIndex}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.25 }}
                    className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-200 dark:border-gray-700 bg-gray-950 cursor-pointer select-none"
                    onClick={() => setIsLightboxOpen(true)}
                  >
                    <img
                      src={currentPage.src}
                      alt={currentPage.title[langKey] || 'Architecting for Scale & Chaos Preview'}
                      className="w-full h-auto object-contain transition-transform duration-500 group-hover/cover:scale-[1.02]"
                      loading="lazy"
                    />

                    {/* Image Hover Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/cover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center gap-2 text-white font-semibold text-sm backdrop-blur-[2px] p-4 text-center">
                      <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/70 border border-white/20 text-xs shadow-lg">
                        <FaExpand className="text-amber-400" />
                        <span>{language === 'ja' ? 'クリックで拡大・高精細表示' : 'Click to inspect & zoom'}</span>
                      </div>
                      <span className="text-xs text-gray-200 opacity-90 max-w-xs line-clamp-2">
                        {currentPage.title[langKey]}
                      </span>
                    </div>

                    {/* Floating Side Arrow Buttons on Image */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePrevPage();
                      }}
                      className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-amber-600 text-white/90 hover:text-white transition-all opacity-0 group-hover/cover:opacity-100 backdrop-blur-md shadow-lg"
                      title={language === 'ja' ? '前のページ' : 'Previous page'}
                      aria-label="Previous Page"
                    >
                      <FaChevronLeft className="text-xs" />
                    </button>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNextPage();
                      }}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-amber-600 text-white/90 hover:text-white transition-all opacity-0 group-hover/cover:opacity-100 backdrop-blur-md shadow-lg"
                      title={language === 'ja' ? '次のページ' : 'Next page'}
                      aria-label="Next Page"
                    >
                      <FaChevronRight className="text-xs" />
                    </button>

                    {/* Corner Tag: Page Progress & Tag */}
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-black/80 text-amber-300 backdrop-blur-md border border-amber-400/30 shadow-md">
                      {activePageIndex + 1} / {previewPages.length}
                    </div>

                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-black/80 text-gray-200 backdrop-blur-md border border-gray-600/40 shadow-md">
                      {currentPage.tag[langKey] || currentPage.bookPage}
                    </div>
                  </motion.div>
                </div>

                {/* Primary Page Navigation Controls Bar */}
                <div className="mt-4 w-full max-w-sm sm:max-w-md flex flex-col gap-2.5">
                  {/* Top Category Buttons: Front Cover | Sample Pages | Back Cover */}
                  <div className="flex items-center justify-between gap-1.5 p-1 rounded-xl bg-gray-100 dark:bg-gray-800/90 border border-gray-200 dark:border-gray-700/80">
                    <button
                      type="button"
                      onClick={() => handleSelectPage(0)}
                      className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg text-xs font-bold transition-all ${
                        activePageIndex === 0
                          ? 'bg-white dark:bg-gray-900 text-amber-600 dark:text-amber-400 shadow-sm border border-gray-200 dark:border-gray-700'
                          : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
                      }`}
                    >
                      <FaBook className="text-[11px]" />
                      <span>{language === 'ja' ? '表紙' : 'Front'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        if (activePageIndex === 0 || activePageIndex === previewPages.length - 1) {
                          handleSelectPage(1);
                        } else {
                          handleNextPage();
                        }
                      }}
                      className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg text-xs font-bold transition-all ${
                        activePageIndex >= 1 && activePageIndex <= 8
                          ? 'bg-white dark:bg-gray-900 text-amber-600 dark:text-amber-400 shadow-sm border border-gray-200 dark:border-gray-700'
                          : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
                      }`}
                    >
                      <FaImages className="text-[11px]" />
                      <span>{language === 'ja' ? '本文8頁' : 'Pages (8)'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleSelectPage(previewPages.length - 1)}
                      className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg text-xs font-bold transition-all ${
                        activePageIndex === previewPages.length - 1
                          ? 'bg-white dark:bg-gray-900 text-amber-600 dark:text-amber-400 shadow-sm border border-gray-200 dark:border-gray-700'
                          : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
                      }`}
                    >
                      <FaLayerGroup className="text-[11px]" />
                      <span>{language === 'ja' ? '裏表紙' : 'Back'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setIsLightboxOpen(true)}
                      className="p-2 rounded-lg text-gray-500 hover:text-amber-600 dark:text-gray-400 dark:hover:text-amber-400 hover:bg-white dark:hover:bg-gray-900 transition-colors"
                      title={language === 'ja' ? '10ページ全画面プレビュー' : 'Full 10-page preview'}
                      aria-label="Enlarge Page"
                    >
                      <FaExpand className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* 10-Page Mini Thumbnails / Numbered Selector Rail */}
                  <div className="flex items-center justify-between gap-1 p-1.5 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200/80 dark:border-gray-700/60 overflow-x-auto">
                    <button
                      type="button"
                      onClick={handlePrevPage}
                      className="p-1 rounded text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                      title={language === 'ja' ? '前へ' : 'Previous'}
                      aria-label="Previous Page"
                    >
                      <FaChevronLeft className="w-2.5 h-2.5" />
                    </button>

                    <div className="flex items-center gap-1 flex-1 justify-center">
                      {previewPages.map((page, pIdx) => {
                        const isActive = activePageIndex === pIdx;
                        return (
                          <button
                            key={pIdx}
                            type="button"
                            onClick={() => handleSelectPage(pIdx)}
                            className={`w-6 h-6 rounded-md text-[11px] font-bold flex items-center justify-center transition-all ${
                              isActive
                                ? 'bg-gradient-to-r from-amber-500 via-orange-500 to-rose-600 text-white shadow-sm ring-1 ring-amber-400 scale-105'
                                : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white border border-gray-200 dark:border-gray-700/80'
                            }`}
                            title={`${page.pageNumber}. ${page.title[langKey]}`}
                          >
                            {page.pageNumber}
                          </button>
                        );
                      })}
                    </div>

                    <button
                      type="button"
                      onClick={handleNextPage}
                      className="p-1 rounded text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                      title={language === 'ja' ? '次へ' : 'Next'}
                      aria-label="Next Page"
                    >
                      <FaChevronRight className="w-2.5 h-2.5" />
                    </button>
                  </div>

                  {/* Active Page Caption & Description Box */}
                  <div className="p-3 rounded-xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-900/50 text-left">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-xs font-bold text-gray-900 dark:text-white flex items-center gap-1.5">
                        <FaFileAlt className="text-amber-500 text-[10px]" />
                        <span>{currentPage.title[langKey]}</span>
                      </span>
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-300 font-semibold">
                        {currentPage.bookPage}
                      </span>
                    </div>
                    <p className="text-[11px] text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-2">
                      {currentPage.caption[langKey]}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Book Details & Value Proposition */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  {/* Title & Subtitle */}
                  <h3 
                    className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight mb-2"
                    style={{ fontFamily: 'Georgia, serif' }}
                  >
                    {t('items.research.items.scale-and-chaos.title', 'Architecting for Scale & Chaos')}
                  </h3>

                  <h4 className="text-base sm:text-lg font-medium text-amber-700 dark:text-amber-400 mb-3 leading-snug">
                    {t('items.research.items.scale-and-chaos.subtitle', "The Solution Architect's Handbook on Distributed Systems, Fault Tolerance, and Real-World Resilience")}
                  </h4>

                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium mb-6">
                    {t('items.research.items.scale-and-chaos.author', 'By Saidur Rahman Sujon • Published Independently (Tokyo, Japan)')}
                  </p>

                  {/* Overview Quote */}
                  <div className="relative pl-6 py-1 mb-6 border-l-4 border-amber-500 dark:border-amber-400 bg-amber-50/50 dark:bg-amber-950/20 rounded-r-2xl p-4">
                    <FaQuoteLeft className="absolute -left-2.5 -top-1.5 text-amber-500 text-lg" />
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic text-sm sm:text-base">
                      {t('items.research.items.scale-and-chaos.overview')}
                    </p>
                  </div>

                  {/* Numbers & Key Highlights Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                    <div className="p-3.5 rounded-2xl bg-gray-50 dark:bg-gray-800/80 border border-gray-200/80 dark:border-gray-700/80 text-center hover:border-amber-400 transition-colors">
                      <div className="text-2xl lg:text-3xl font-extrabold text-amber-600 dark:text-amber-400">16</div>
                      <div className="text-xs font-bold text-gray-800 dark:text-gray-200 mt-0.5">
                        {t('items.research.items.scale-and-chaos.stats.chapters.label', 'Chapters')}
                      </div>
                      <div className="text-[10px] text-gray-500 dark:text-gray-400 hidden sm:block">
                        {t('items.research.items.scale-and-chaos.stats.chapters.detail', 'Trade-off math to DR')}
                      </div>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-gray-50 dark:bg-gray-800/80 border border-gray-200/80 dark:border-gray-700/80 text-center hover:border-amber-400 transition-colors">
                      <div className="text-2xl lg:text-3xl font-extrabold text-cyan-600 dark:text-cyan-400">93</div>
                      <div className="text-xs font-bold text-gray-800 dark:text-gray-200 mt-0.5">
                        {t('items.research.items.scale-and-chaos.stats.diagrams.label', 'Diagrams')}
                      </div>
                      <div className="text-[10px] text-gray-500 dark:text-gray-400 hidden sm:block">
                        {t('items.research.items.scale-and-chaos.stats.diagrams.detail', 'Custom blueprints')}
                      </div>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-gray-50 dark:bg-gray-800/80 border border-gray-200/80 dark:border-gray-700/80 text-center hover:border-amber-400 transition-colors">
                      <div className="text-2xl lg:text-3xl font-extrabold text-rose-600 dark:text-rose-400">56</div>
                      <div className="text-xs font-bold text-gray-800 dark:text-gray-200 mt-0.5">
                        {t('items.research.items.scale-and-chaos.stats.outages.label', 'Outages')}
                      </div>
                      <div className="text-[10px] text-gray-500 dark:text-gray-400 hidden sm:block">
                        {t('items.research.items.scale-and-chaos.stats.outages.detail', 'AWS, Meta, TSE')}
                      </div>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-gray-50 dark:bg-gray-800/80 border border-gray-200/80 dark:border-gray-700/80 text-center hover:border-amber-400 transition-colors">
                      <div className="text-2xl lg:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">ADRs</div>
                      <div className="text-xs font-bold text-gray-800 dark:text-gray-200 mt-0.5">
                        {t('items.research.items.scale-and-chaos.stats.artifacts.label', 'Artifacts')}
                      </div>
                      <div className="text-[10px] text-gray-500 dark:text-gray-400 hidden sm:block">
                        {t('items.research.items.scale-and-chaos.stats.artifacts.detail', 'Scorecards & Playbook')}
                      </div>
                    </div>
                  </div>

                  {/* Core Topics / Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {pub.tags && pub.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-lg text-xs font-semibold bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Primary Action Buttons - Original 2-Button Symmetrical Layout */}
                <div className="pt-4 border-t-2 border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  {/* Gumroad Buy Button */}
                  <motion.a
                    href="https://sujoncyb.gumroad.com/l/the-solution-architects-handbook"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="group relative flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-2xl font-bold text-base text-gray-950 shadow-xl transition-all overflow-hidden"
                    style={{
                      background: 'linear-gradient(135deg, #FF90E8 0%, #FFB5EC 50%, #FF90E8 100%)',
                    }}
                  >
                    <SiGumroad className="text-2xl text-black" />
                    <div className="text-left">
                      <div className="text-sm font-extrabold tracking-wide uppercase text-black flex items-center gap-1.5">
                        <span>{t('items.research.items.scale-and-chaos.buyGumroad', 'Get on Gumroad')}</span>
                        <FaExternalLinkAlt className="text-xs opacity-75 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                      <div className="text-[11px] text-gray-900 font-medium opacity-90">
                        {t('items.research.items.scale-and-chaos.pricing', 'Pay-What-You-Want (¥999+ / ~$6.50)')}
                      </div>
                    </div>

                    {/* Button shimmer */}
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </motion.a>

                  {/* Toggle 5-Part Journey Button */}
                  <motion.button
                    type="button"
                    onClick={() => setIsJourneyOpen(!isJourneyOpen)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-semibold text-sm bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-100 border border-gray-200 dark:border-gray-700 transition-colors cursor-pointer"
                  >
                    <span>
                      {isJourneyOpen
                        ? t('items.research.items.scale-and-chaos.hideJourney', 'Hide 5-Part Journey')
                        : t('items.research.items.scale-and-chaos.toggleJourney', 'Explore 5-Part Journey')}
                    </span>
                    {isJourneyOpen ? (
                      <FaChevronUp className="text-xs" />
                    ) : (
                      <FaChevronDown className="text-xs" />
                    )}
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Expandable 5-Part Architectural Journey & Audience Breakdown */}
            <AnimatePresence>
              {isJourneyOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className="mt-10 pt-8 border-t-2 border-dashed border-gray-200 dark:border-gray-800 overflow-hidden"
                >
                  {/* Journey Title */}
                  <div className="text-center mb-8">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                      Curriculum & Table of Contents
                    </span>
                    <h4 className="text-2xl lg:text-3xl font-extrabold text-gray-900 dark:text-white mt-1">
                      {t('items.research.items.scale-and-chaos.journeyTitle', 'The 5-Part Architectural Journey')}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-2">
                      {language === 'ja'
                        ? '基礎の計算から、大規模スケーリング、カオス耐性、本番事例、運用プレイブックまでを網羅する16章の旅'
                        : 'Progressing from foundational trade-off math to multi-region disaster recovery across 16 comprehensive chapters.'}
                    </p>
                  </div>

                  {/* 5-Part Journey Cards */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                    {journeyParts.map((part, idx) => (
                      <div
                        key={idx}
                        className={`p-6 rounded-2xl bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700/80 hover:shadow-lg transition-all ${
                          idx === 3 ? 'md:col-span-2 lg:col-span-2' : ''
                        }`}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs font-bold uppercase px-2.5 py-1 rounded-md bg-amber-100 dark:bg-amber-950/70 text-amber-800 dark:text-amber-300">
                            {part.part}
                          </span>
                          <span className="text-xs font-mono font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                            {part.theme}
                          </span>
                        </div>

                        <h5 className="text-base font-bold text-gray-900 dark:text-white mb-3">
                          {part.part}: {part.theme}
                        </h5>

                        <ul className="space-y-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                          {part.bullets.map((bullet, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-2">
                              <span className="text-amber-500 font-bold mt-0.5">•</span>
                              <span className="leading-relaxed">{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Who It's For Section */}
                  <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-rose-500/10 dark:from-amber-950/30 dark:via-orange-950/30 dark:to-rose-950/30 border border-amber-300/60 dark:border-amber-700/60">
                    <div className="flex items-center gap-3 mb-4">
                      <FaUsers className="text-2xl text-amber-600 dark:text-amber-400" />
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                        {t('items.research.items.scale-and-chaos.whoItsForTitle', "Who It's For")}
                      </h4>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      {targetAudiences.map((aud, aIdx) => (
                        <div key={aIdx} className="p-4 rounded-xl bg-white dark:bg-gray-900/90 border border-gray-200 dark:border-gray-800 shadow-sm">
                          <div className="flex items-center gap-2 mb-2">
                            <FaCheckCircle className="text-amber-500 text-sm shrink-0" />
                            <h5 className="font-bold text-sm text-gray-900 dark:text-white">{aud.role}</h5>
                          </div>
                          <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                            {aud.desc}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 pt-4 border-t border-amber-200 dark:border-amber-900/60 flex flex-wrap items-center justify-between gap-4">
                      <p className="text-xs text-gray-600 dark:text-gray-300 font-medium">
                        {language === 'ja'
                          ? 'Gumroadにて即座にPDF/EPUBダウンロード可能。決済はクレジットカード・Apple Pay対応。'
                          : 'Instant digital delivery in PDF/ePub format on Gumroad. Pay-What-You-Want model.'}
                      </p>
                      <a
                        href="https://sujoncyb.gumroad.com/l/the-solution-architects-handbook"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-bold text-amber-600 dark:text-amber-400 hover:underline"
                      >
                        <span>{language === 'ja' ? 'Gumroadで詳細を見る' : 'View on Gumroad'}</span>
                        <FaExternalLinkAlt className="text-[10px]" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.article>

      {/* Lightbox Modal for Full 10-Page Reader Inspection with Zoom In/Out */}
      <AnimatePresence>
        {isLightboxOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-6xl w-full max-h-[96vh] flex flex-col items-center bg-gray-900 rounded-3xl p-3 sm:p-5 border border-gray-700 shadow-2xl overflow-hidden"
            >
              {/* Modal Top Bar */}
              <div className="w-full flex items-center justify-between pb-3 mb-2 border-b border-gray-800 text-white gap-2">
                <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                  <span className="font-bold text-xs sm:text-base truncate">
                    Architecting for Scale & Chaos
                  </span>
                  <span className="shrink-0 text-[10px] sm:text-xs px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30 font-semibold">
                    Page {activePageIndex + 1} / {previewPages.length}
                  </span>
                  <span className="hidden lg:inline-block text-xs text-gray-400 truncate max-w-xs">
                    • {currentPage.title[langKey]}
                  </span>
                </div>

                {/* Right Controls: Zoom In/Out + Prev/Next + Close */}
                <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                  {/* Zoom Controls */}
                  <div className="flex items-center gap-0.5 bg-gray-800/90 rounded-lg p-0.5 border border-gray-700 shadow-xs">
                    <button
                      type="button"
                      onClick={handleZoomOut}
                      disabled={zoomLevel <= 1}
                      className="p-1 sm:p-1.5 rounded text-gray-300 hover:text-white hover:bg-gray-700/80 disabled:opacity-30 disabled:hover:text-gray-300 disabled:hover:bg-transparent transition-colors"
                      title={language === 'ja' ? '縮小 (-)' : 'Zoom out (-)'}
                      aria-label="Zoom out"
                    >
                      <FaSearchMinus className="text-xs" />
                    </button>

                    <button
                      type="button"
                      onClick={handleResetZoom}
                      className="px-1.5 sm:px-2 py-0.5 text-[10px] sm:text-[11px] font-mono font-bold text-gray-200 hover:text-amber-400 transition-colors"
                      title={language === 'ja' ? '倍率リセット (0)' : 'Reset zoom (0)'}
                    >
                      {Math.round(zoomLevel * 100)}%
                    </button>

                    <button
                      type="button"
                      onClick={handleZoomIn}
                      disabled={zoomLevel >= 2.5}
                      className="p-1 sm:p-1.5 rounded text-gray-300 hover:text-white hover:bg-gray-700/80 disabled:opacity-30 disabled:hover:text-gray-300 disabled:hover:bg-transparent transition-colors"
                      title={language === 'ja' ? '拡大 (+)' : 'Zoom in (+)'}
                      aria-label="Zoom in"
                    >
                      <FaSearchPlus className="text-xs" />
                    </button>

                    {zoomLevel > 1 && (
                      <button
                        type="button"
                        onClick={handleResetZoom}
                        className="p-1 sm:p-1.5 rounded text-amber-400 hover:text-amber-300 hover:bg-gray-700/80 transition-colors ml-0.5"
                        title={language === 'ja' ? 'リセット' : 'Reset'}
                        aria-label="Reset zoom"
                      >
                        <FaUndo className="text-[10px]" />
                      </button>
                    )}
                  </div>

                  {/* Prev / Next Page Buttons */}
                  <button
                    type="button"
                    onClick={handlePrevPage}
                    className="p-1.5 sm:px-2.5 sm:py-1 rounded-lg text-xs font-semibold bg-gray-800 hover:bg-gray-700 text-gray-200 transition-colors flex items-center gap-1"
                    title={language === 'ja' ? '前のページ' : 'Previous page'}
                  >
                    <FaChevronLeft className="text-[10px]" />
                    <span className="hidden sm:inline">{language === 'ja' ? '前へ' : 'Prev'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleNextPage}
                    className="p-1.5 sm:px-2.5 sm:py-1 rounded-lg text-xs font-semibold bg-gray-800 hover:bg-gray-700 text-gray-200 transition-colors flex items-center gap-1"
                    title={language === 'ja' ? '次のページ' : 'Next page'}
                  >
                    <span className="hidden sm:inline">{language === 'ja' ? '次へ' : 'Next'}</span>
                    <FaChevronRight className="text-[10px]" />
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setIsLightboxOpen(false);
                      setZoomLevel(1);
                    }}
                    className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors ml-1"
                    aria-label="Close"
                    title={language === 'ja' ? '閉じる (Esc)' : 'Close (Esc)'}
                  >
                    <FaTimes className="text-base sm:text-lg" />
                  </button>
                </div>
              </div>

              {/* Center Image Container with Side Nav Buttons & Zoom Panning */}
              <div 
                className="relative max-h-[66vh] sm:max-h-[72vh] md:max-h-[75vh] w-full flex items-center justify-center overflow-auto p-2 scrollbar-thin select-none"
              >
                {/* Floating Previous button (fixed to container side) */}
                <button
                  type="button"
                  onClick={handlePrevPage}
                  className="sticky left-2 z-20 p-2.5 sm:p-3 rounded-full bg-black/60 hover:bg-amber-600 text-white/90 hover:text-white transition-all backdrop-blur-md shadow-xl shrink-0"
                  title={language === 'ja' ? '前のページ (←)' : 'Previous page (←)'}
                  aria-label="Previous Page"
                >
                  <FaChevronLeft className="text-sm sm:text-base" />
                </button>

                {/* Scalable Image Container */}
                <div 
                  className="flex-1 flex items-center justify-center min-w-0"
                  style={{
                    overflow: zoomLevel > 1 ? 'visible' : 'hidden'
                  }}
                >
                  <img
                    src={currentPage.src}
                    alt={currentPage.title[langKey] || 'Architecting for Scale & Chaos Full Preview Page'}
                    onDoubleClick={handleToggleZoom}
                    style={{
                      transform: `scale(${zoomLevel})`,
                      transformOrigin: 'top center',
                      transition: 'transform 0.2s cubic-bezier(0.2, 0, 0, 1)'
                    }}
                    className={`max-h-[64vh] sm:max-h-[70vh] md:max-h-[73vh] w-auto object-contain rounded-xl shadow-2xl border border-gray-800/80 transition-shadow ${
                      zoomLevel > 1 ? 'cursor-zoom-out my-6 shadow-black/80' : 'cursor-zoom-in'
                    }`}
                    title={
                      zoomLevel > 1 
                        ? (language === 'ja' ? 'ダブルクリックで元に戻す' : 'Double-click to reset zoom')
                        : (language === 'ja' ? 'ダブルクリックでズームイン (または +/- ボタン)' : 'Double-click to zoom in (or use +/-)')
                    }
                  />
                </div>

                {/* Floating Next button (fixed to container side) */}
                <button
                  type="button"
                  onClick={handleNextPage}
                  className="sticky right-2 z-20 p-2.5 sm:p-3 rounded-full bg-black/60 hover:bg-amber-600 text-white/90 hover:text-white transition-all backdrop-blur-md shadow-xl shrink-0"
                  title={language === 'ja' ? '次のページ (→)' : 'Next page (→)'}
                  aria-label="Next Page"
                >
                  <FaChevronRight className="text-sm sm:text-base" />
                </button>
              </div>

              {/* Caption Banner */}
              <div className="w-full mt-2 px-3 py-1.5 rounded-xl bg-gray-800/80 border border-gray-700/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 text-xs">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="font-bold text-amber-300 shrink-0">
                    {currentPage.title[langKey]}
                  </span>
                  <span className="text-gray-400 hidden sm:inline">•</span>
                  <span className="text-gray-300 truncate">
                    {currentPage.caption[langKey]}
                  </span>
                </div>
                <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
                  <span className="text-[10px] text-gray-400 hidden md:inline">
                    {language === 'ja' ? 'ダブルクリックでズーム' : 'Double-click to zoom'}
                  </span>
                  <span className="text-[11px] font-mono font-semibold text-gray-300 bg-gray-900/80 px-2 py-0.5 rounded border border-gray-700">
                    {currentPage.bookPage}
                  </span>
                </div>
              </div>

              {/* Bottom Thumbnail Strip for All 10 Pages */}
              <div className="w-full mt-2 pt-2 border-t border-gray-800/80 flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-thin">
                {previewPages.map((page, tIdx) => {
                  const isCurrent = activePageIndex === tIdx;
                  return (
                    <button
                      key={tIdx}
                      type="button"
                      onClick={() => handleSelectPage(tIdx)}
                      className={`relative shrink-0 flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs transition-all ${
                        isCurrent
                          ? 'bg-gradient-to-r from-amber-500 via-orange-500 to-rose-600 text-white font-bold ring-1 ring-amber-400 shadow-md'
                          : 'bg-gray-800 hover:bg-gray-700/90 text-gray-300 border border-gray-700/80'
                      }`}
                    >
                      <span className="font-mono text-[10px] opacity-80">{page.pageNumber}.</span>
                      <span className="truncate max-w-[85px] sm:max-w-none">{page.shortTitle[langKey]}</span>
                    </button>
                  );
                })}
              </div>

              {/* Bottom Quick Purchase Bar */}
              <div className="w-full pt-2.5 mt-1 border-t border-gray-800 flex items-center justify-between text-xs text-gray-400">
                <span className="truncate">{pub.price || 'Pay-What-You-Want on Gumroad'}</span>
                <a
                  href="https://sujoncyb.gumroad.com/l/the-solution-architects-handbook"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 hover:text-amber-200 border border-amber-400/40 font-bold transition-all shrink-0"
                >
                  <SiGumroad className="text-sm" />
                  <span>Buy on Gumroad</span>
                  <FaExternalLinkAlt className="text-[10px]" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default BookCard;
