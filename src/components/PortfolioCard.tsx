import Image from 'next/image'
import { PortfolioItem } from '@/types/portfolio'

interface PortfolioCardProps {
  item: PortfolioItem
}

/**
 * HP制作実績カードコンポーネント
 * 個別の制作実績を表示するカード
 */
export default function PortfolioCard({ item }: PortfolioCardProps) {
  return (
    <div
      data-testid="portfolio-card"
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
    >
      {/* プレビュー部分: サムネイルがあれば画像、なければiframe */}
      <div className="relative w-full h-48 bg-gray-100">
        {item.thumbnail ? (
          <Image
            src={item.thumbnail}
            alt={`${item.companyName}のサイトプレビュー`}
            fill
            className="object-cover object-top"
          />
        ) : (
          <iframe
            data-testid="portfolio-preview-iframe"
            src={item.url}
            title={`${item.companyName}のサイトプレビュー`}
            className="w-full h-full pointer-events-none"
            sandbox="allow-scripts allow-same-origin"
            loading="lazy"
          />
        )}
      </div>

      {/* 情報部分 */}
      <div className="p-4">
        {/* カテゴリバッジ */}
        <span className="inline-block px-2 py-1 text-xs font-medium text-blue-700 bg-blue-100 rounded mb-2">
          {item.category}
        </span>

        {/* 企業名 */}
        <h3 className="text-lg font-semibold text-gray-900 mb-3">
          {item.companyName}
        </h3>

        {/* サイトへのリンク */}
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
        >
          サイトを見る
          <svg
            className="ml-1 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </div>
    </div>
  )
}
