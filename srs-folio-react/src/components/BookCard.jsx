import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaBook, 
  FaExternalLinkAlt, 
  FaQuoteLeft, 
  FaTimes, 
  FaExpand, 
  FaChevronDown, 
  FaChevronUp, 
  FaCheckCircle, 
  FaUsers, 
  FaLayerGroup,
  FaClock,
  FaMapMarkerAlt
} from 'react-icons/fa';
import { SiGumroad } from 'react-icons/si';
import { useLanguage } from '../contexts/LanguageContext';

const BookCard = ({ pub, index = 0 }) => {
  const { t, language } = useLanguage();
  const [activeCover, setActiveCover] = useState('front'); // 'front' | 'back'
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isJourneyOpen, setIsJourneyOpen] = useState(false);

  const frontCoverUrl = pub.frontCover || '/images/publications/arch_scale_and_chaos_cover_page_front.jpg';
  const backCoverUrl = pub.backCover || '/images/publications/arch_scale_and_chaos_cover_page_back.jpg';
  const currentCoverUrl = activeCover === 'front' ? frontCoverUrl : backCoverUrl;

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
              {/* Left Column: Interactive Book Cover Display */}
              <div className="lg:col-span-5 flex flex-col items-center">
                {/* 3D Book Frame with hover float */}
                <div className="relative group/cover w-full max-w-sm">
                  {/* Outer ambient glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 via-orange-500/20 to-purple-600/30 rounded-2xl blur-xl group-hover/cover:blur-2xl transition-all duration-300"></div>

                  <motion.div
                    key={activeCover}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-200 dark:border-gray-700 bg-gray-900 cursor-pointer"
                    onClick={() => setIsLightboxOpen(true)}
                  >
                    <img
                      src={currentCoverUrl}
                      alt={activeCover === 'front' ? 'Front Cover: Architecting for Scale & Chaos' : 'Back Cover: Architecting for Scale & Chaos'}
                      className="w-full h-auto object-contain transition-transform duration-500 group-hover/cover:scale-[1.02]"
                      loading="lazy"
                    />

                    {/* Overlay hint on hover */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/cover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2 text-white font-semibold text-sm backdrop-blur-[2px]">
                      <FaExpand className="text-base" />
                      <span>{t('items.research.items.scale-and-chaos.clickToEnlarge', 'Click to enlarge')}</span>
                    </div>

                    {/* Corner Tag */}
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-black/75 text-amber-300 backdrop-blur-md border border-amber-400/30 shadow-md">
                      {activeCover === 'front' 
                        ? (language === 'ja' ? '表紙' : 'Front Cover')
                        : (language === 'ja' ? '裏表紙' : 'Back Cover')
                      }
                    </div>
                  </motion.div>
                </div>

                {/* Cover Switcher Controls */}
                <div className="mt-4 flex items-center gap-2 p-1.5 rounded-xl bg-gray-100 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700">
                  <button
                    type="button"
                    onClick={() => setActiveCover('front')}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                      activeCover === 'front'
                        ? 'bg-white dark:bg-gray-900 text-amber-600 dark:text-amber-400 shadow-sm border border-gray-200 dark:border-gray-700'
                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
                    }`}
                  >
                    <FaBook className="text-xs" />
                    <span>{t('items.research.items.scale-and-chaos.viewFrontCover', 'Front Cover')}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveCover('back')}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                      activeCover === 'back'
                        ? 'bg-white dark:bg-gray-900 text-amber-600 dark:text-amber-400 shadow-sm border border-gray-200 dark:border-gray-700'
                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
                    }`}
                  >
                    <FaLayerGroup className="text-xs" />
                    <span>{t('items.research.items.scale-and-chaos.viewBackCover', 'Back Cover')}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setIsLightboxOpen(true)}
                    className="p-2 rounded-lg text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
                    title={t('items.research.items.scale-and-chaos.enlargeCover', 'Enlarge')}
                    aria-label="Enlarge Cover"
                  >
                    <FaExpand className="w-3.5 h-3.5" />
                  </button>
                </div>
                <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-1.5">
                  {t('items.research.items.scale-and-chaos.flipNotice', 'Toggle to view back cover summary and scenarios')}
                </p>
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
                    {pub.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-lg text-xs font-semibold bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Primary Action Buttons */}
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

      {/* Lightbox Modal for Full Cover Inspection */}
      <AnimatePresence>
        {isLightboxOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-3xl w-full max-h-[92vh] flex flex-col items-center bg-gray-900 rounded-3xl p-4 sm:p-6 border border-gray-700 shadow-2xl overflow-hidden"
            >
              {/* Modal Top Bar */}
              <div className="w-full flex items-center justify-between pb-3 mb-2 border-b border-gray-800 text-white">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-sm sm:text-base">
                    Architecting for Scale & Chaos
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-400/30">
                    {activeCover === 'front' ? 'Front Cover' : 'Back Cover'}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveCover(activeCover === 'front' ? 'back' : 'front')}
                    className="px-3 py-1 rounded-lg text-xs font-semibold bg-gray-800 hover:bg-gray-700 text-gray-200 transition-colors"
                  >
                    Switch to {activeCover === 'front' ? 'Back' : 'Front'}
                  </button>
                  <button
                    onClick={() => setIsLightboxOpen(false)}
                    className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
                    aria-label="Close"
                  >
                    <FaTimes className="text-lg" />
                  </button>
                </div>
              </div>

              {/* Cover Image */}
              <div className="relative max-h-[75vh] w-full flex items-center justify-center overflow-auto p-2">
                <img
                  src={currentCoverUrl}
                  alt={activeCover === 'front' ? 'Architecting for Scale & Chaos Front Cover' : 'Architecting for Scale & Chaos Back Cover'}
                  className="max-h-[72vh] w-auto object-contain rounded-xl shadow-2xl"
                />
              </div>

              {/* Bottom Quick Bar */}
              <div className="w-full pt-3 mt-2 border-t border-gray-800 flex items-center justify-between text-xs text-gray-400">
                <span>{pub.price || 'Pay-What-You-Want on Gumroad'}</span>
                <a
                  href="https://sujoncyb.gumroad.com/l/the-solution-architects-handbook"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-bold"
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
