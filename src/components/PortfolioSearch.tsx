'use client'

import { useState, useMemo } from 'react'
import { PortfolioItem } from '@/types/portfolio'
import PortfolioList from './PortfolioList'

interface PortfolioSearchProps {
  items: PortfolioItem[]
}

/**
 * 検索機能付きHP制作実績一覧コンポーネント
 * 企業名での絞り込み検索が可能
 */
export default function PortfolioSearch({ items }: PortfolioSearchProps) {
  // 検索キーワードの状態管理
  const [searchQuery, setSearchQuery] = useState('')

  // 検索結果の絞り込み
  const filteredItems = useMemo(() => {
    if (!searchQuery.trim()) {
      return items
    }

    const query = searchQuery.toLowerCase()
    return items.filter((item) =>
      item.companyName.toLowerCase().includes(query)
    )
  }, [items, searchQuery])

  return (
    <div>
      {/* 検索入力欄 */}
      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="企業名で検索..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 pl-10 border-2 border-gray-500 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          {/* 検索アイコン（Material Icons相当のSVG） */}
          <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        {/* 検索結果の件数表示 */}
        <p className="mt-2 text-sm text-gray-600">
          {filteredItems.length}件の実績
        </p>
      </div>

      {/* 検索結果一覧 */}
      {filteredItems.length > 0 ? (
        <PortfolioList items={filteredItems} />
      ) : (
        <div className="text-center py-12 text-gray-500">
          検索結果がありません
        </div>
      )}
    </div>
  )
}
