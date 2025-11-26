/**
 * HP制作実績の型定義
 */
export interface PortfolioItem {
  /** 一意識別子 */
  id: string
  /** 企業名/屋号名 */
  companyName: string
  /** カテゴリ（業種） */
  category: string
  /** HPのURL */
  url: string
  /** サムネイル画像パス（オプション、iframeが使えない場合に使用） */
  thumbnail?: string
}

/**
 * HP一覧データの型
 */
export type PortfolioData = PortfolioItem[]
