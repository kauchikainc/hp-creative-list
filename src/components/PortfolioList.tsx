import { PortfolioItem } from '@/types/portfolio'
import PortfolioCard from './PortfolioCard'

interface PortfolioListProps {
  items: PortfolioItem[]
}

/**
 * HP制作実績一覧コンポーネント
 * 制作実績のリストをグリッドレイアウトで表示
 */
export default function PortfolioList({ items }: PortfolioListProps) {
  // データがない場合のメッセージ表示
  if (items.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        実績がありません
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <PortfolioCard key={item.id} item={item} />
      ))}
    </div>
  )
}
