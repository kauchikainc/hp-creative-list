import PortfolioSearch from '@/components/PortfolioSearch'
import portfolioData from '@/data/portfolio.json'
import { PortfolioItem } from '@/types/portfolio'

/**
 * HP制作実績一覧ページ
 * JSONデータを読み込み、検索可能な制作実績をグリッド表示する
 */
export default function Home() {
  // JSONデータを型付きで取得
  const items: PortfolioItem[] = portfolioData

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダー部分 */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-gray-900">
            HP制作実績
          </h1>
          <p className="mt-1 text-sm text-gray-600">
            弊社で制作したホームページの一覧です
          </p>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <PortfolioSearch items={items} />
      </main>

      {/* フッター */}
      <footer className="bg-white border-t mt-auto">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500">
            HP制作のご相談はお気軽にお問い合わせください
          </p>
        </div>
      </footer>
    </div>
  )
}
